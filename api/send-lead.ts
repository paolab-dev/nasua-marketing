import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const RECIPIENTS = ["hello@nasua.marketing"];
const PRIMARY_FROM = "Nasua Leads <leads@nasua.marketing>";
const FALLBACK_FROM = "Nasua Leads <onboarding@resend.dev>";

interface LeadPayload {
  formType: string;
  data: Record<string, unknown>;
}

const FORM_LABELS: Record<string, string> = {
  landing: "Landing Page",
  corporativo: "Sitio Corporativo",
  ecommerce: "Tienda Virtual",
  estrategia: "Diagnóstico Estratégico",
  contacto: "Contacto General",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Nombre",
  nombre: "Nombre",
  email: "Email",
  phone: "Teléfono",
  whatsapp: "WhatsApp",
  company: "Empresa",
  empresa: "Empresa",
  marca: "Marca",
  negocio: "Negocio",
  ciudad: "Ciudad",
  sitioWeb: "Sitio web",
  website: "Sitio web",
  objetivo: "Objetivo",
  objective: "Objetivo",
  producto: "Producto/Servicio",
  precio: "Precio",
  materiales: "Materiales",
  lanzamiento: "Lanzamiento",
  dedicacion: "Dedicación empresa",
  servicios: "Servicios",
  clienteIdeal: "Cliente ideal",
  presenciaDigital: "Presencia digital",
  secciones: "Secciones web",
  seo: "SEO",
  tipoTienda: "Tipo de tienda",
  productos: "Productos",
  cantidadProductos: "Cantidad productos",
  ventaActual: "Venta actual",
  metodosPago: "Métodos de pago",
  publicidad: "Publicidad",
  industry: "Industria",
  budget: "Presupuesto",
  channels: "Canales",
  challenge: "Desafío",
  service: "Servicio",
  message: "Mensaje",
  financing: "Financiación Wompi",
};

function setCorsHeaders(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) return value.length > 0 ? value.join(", ") : "—";
  if (typeof value === "boolean") return value ? "Sí" : "No";
  if (value === "" || value === null || value === undefined) return "—";
  return String(value);
}

function getLeadEmail(data: Record<string, unknown>): string | undefined {
  const maybeEmail = data.email ?? data.correo;
  if (typeof maybeEmail !== "string") return undefined;

  const email = maybeEmail.trim();
  if (!email) return undefined;

  return /^\S+@\S+\.\S+$/.test(email) ? email : undefined;
}

function shouldUseFallback(error: unknown): boolean {
  const serialized = JSON.stringify(error).toLowerCase();

  return (
    serialized.includes("verify a domain") ||
    serialized.includes("domain is not verified") ||
    serialized.includes("testing emails") ||
    serialized.includes("from address")
  );
}

function buildEmailHtml(formType: string, data: Record<string, unknown>): string {
  const title = FORM_LABELS[formType] || formType;
  const now = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });

  const rows = Object.entries(data)
    .filter(([, v]) => v !== "" && v !== null && v !== undefined && !(Array.isArray(v) && v.length === 0))
    .map(([key, value]) => {
      const label = FIELD_LABELS[key] || key;
      return `
        <tr>
          <td style="padding:10px 14px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb;width:40%;font-size:14px;">${label}</td>
          <td style="padding:10px 14px;color:#1f2937;border-bottom:1px solid #e5e7eb;font-size:14px;">${formatValue(value)}</td>
        </tr>`;
    })
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#1a1a2e;padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">🦝 Nasua</h1>
            <p style="margin:6px 0 0;color:#a0a0b8;font-size:13px;">Nuevo lead recibido</p>
          </td>
        </tr>
        <!-- Title -->
        <tr>
          <td style="padding:28px 32px 12px;">
            <h2 style="margin:0;color:#1a1a2e;font-size:18px;font-weight:700;">📋 ${title}</h2>
            <p style="margin:6px 0 0;color:#6b7280;font-size:13px;">${now} (hora Colombia)</p>
          </td>
        </tr>
        <!-- Data -->
        <tr>
          <td style="padding:8px 32px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${rows}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px 32px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">
              Este lead fue capturado desde <a href="https://nasua.marketing" style="color:#6366f1;text-decoration:none;">nasua.marketing</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const resend = getResendClient();
  if (!resend) {
    return res.status(500).json({ error: "RESEND_API_KEY not configured" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { formType, data } = body as LeadPayload;

    if (!formType || !data || typeof data !== "object") {
      return res.status(400).json({ error: "Missing formType or data" });
    }

    const title = FORM_LABELS[formType] || formType;
    const contactName = data.nombre || data.name || "Sin nombre";
    const replyTo = getLeadEmail(data);

    const basePayload = {
      to: RECIPIENTS,
      subject: `🦝 Nuevo lead: ${title} — ${contactName}`,
      html: buildEmailHtml(formType, data),
      ...(replyTo ? { replyTo } : {}),
    };

    const primaryAttempt = await resend.emails.send({
      from: PRIMARY_FROM,
      ...basePayload,
    });

    let sendError = primaryAttempt.error;

    if (sendError && shouldUseFallback(sendError)) {
      const fallbackAttempt = await resend.emails.send({
        from: FALLBACK_FROM,
        ...basePayload,
      });
      sendError = fallbackAttempt.error;
    }

    if (sendError) {
      console.error("Resend error:", sendError);
      return res.status(500).json({
        error: "Failed to send email",
        details:
          typeof sendError === "object" && sendError !== null && "message" in sendError
            ? String((sendError as { message?: unknown }).message ?? "Unknown Resend error")
            : String(sendError),
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err instanceof Error ? err.message : String(err),
    });
  }
}
