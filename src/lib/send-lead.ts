export async function sendLead(formType: string, data: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, data }),
    });
    return res.ok;
  } catch {
    console.error("Error sending lead");
    return false;
  }
}
