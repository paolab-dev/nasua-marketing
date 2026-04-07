import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const RECIPIENTS = ["hello@nasua.marketing"];
const PRIMARY_FROM = "Nasua Propuestas <leads@nasua.marketing>";
const FALLBACK_FROM = "Nasua Propuestas <onboarding@resend.dev>";

const FIELD_LABELS: Record<string, string> = {
  nombre: "Nombre completo",
  email: "Email",
  portfolio: "Portfolio",
  github: "GitHub / Dribbble",
  valor: "Valor propuesta (USD)",
  tiempo: "Tiempo estimado (semanas)",
  coverLetter: "Vibe Check / Cover Letter",
};

function shouldUseFallback(error: unknown): boolean {
  const serialized = JSON.stringify(error).toLowerCase();
  return (
    serialized.includes("verify a domain") ||
    serialized.includes("domain is not verified") ||
    serialized.includes("testing emails") ||
    serialized.includes("from address")
  );
}

interface ProposalPayload {
  jobTitle: string;
  data: Record<string, string>;
  attachment?: {
    filename: string;
    content: string;
    type: string;
  };
}

function buildHtml(jobTitle: string, data: Record<string, string>): string {
  const now = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });
  const rows = Object.entries(data)
    .map(([key, value]) => {
      const label = FIELD_LABELS[key] || key;
      const displayValue = key === "coverLetter" ? value.replace(/\n/g, "<br>") : value;
      return `<tr>
        <td style="padding:10px 14px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:40%;font-size:14px;">${label}</td>
        <td style="padding:10px 14px;color:#1f2937;border-bottom:1px solid #e5e7eb;font-size:14px;">${displayValue || "—"}</td>
      </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        <tr><td style="background:#1a1a2e;padding:28px 32px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">🦝 Nasua — Nueva Propuesta</h1>
          <p style="margin:6px 0 0;color:#a0a0b8;font-size:13px;">Proyecto: ${jobTitle}</p>
        </td></tr>
        <tr><td style="padding:28px 32px 12px;">
          <h2 style="margin:0;color:#1a1a2e;font-size:18px;font-weight:700;">📋 Datos del Candidato</h2>
          <p style="margin:6px 0 0;color:#6b7280;font-size:13px;">${now} (hora Colombia)</p>
        </td></tr>
        <tr><td style="padding:8px 32px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
            ${rows}
          </table>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:20px 32px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">Propuesta recibida desde <a href="https://nasua.marketing" style="color:#6366f1;text-decoration:none;">nasua.marketing</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: NextRequest) {
  const resend = getResendClient();
  if (!resend) {
    return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
  }

  try {
    const body = await req.json() as ProposalPayload;
    const { jobTitle, data, attachment } = body;

    if (!jobTitle || !data) {
      return NextResponse.json({ error: "Missing jobTitle or data" }, { status: 400 });
    }

    const replyTo = data.email?.trim() || undefined;
    const attachments = attachment
      ? [{ filename: attachment.filename, content: attachment.content, type: attachment.type }]
      : [];

    const basePayload = {
      to: RECIPIENTS,
      subject: `🦝 Nueva propuesta: ${jobTitle} — ${data.nombre || "Sin nombre"}`,
      html: buildHtml(jobTitle, data),
      ...(replyTo ? { replyTo } : {}),
      attachments,
    };

    const primaryAttempt = await resend.emails.send({ from: PRIMARY_FROM, ...basePayload });
    let sendError = primaryAttempt.error;

    if (sendError && shouldUseFallback(sendError)) {
      const fallback = await resend.emails.send({ from: FALLBACK_FROM, ...basePayload });
      sendError = fallback.error;
    }

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        {
          error: "Failed to send email",
          details:
            typeof sendError === "object" && sendError !== null && "message" in sendError
              ? String((sendError as { message?: unknown }).message ?? "Unknown error")
              : String(sendError),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
