export async function sendLead(formType: string, data: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, data }),
    });

    if (!res.ok) {
      let details = "";
      const clonedRes = res.clone();

      try {
        const payload = await res.json();
        details = payload?.details || payload?.error || "";
      } catch {
        try {
          details = await clonedRes.text();
        } catch {
          details = `HTTP ${res.status}`;
        }
      }

      console.error(`Error sending lead (${res.status}):`, details || "Unknown error");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending lead:", error);
    return false;
  }
}
