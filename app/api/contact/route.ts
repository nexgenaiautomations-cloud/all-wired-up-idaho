import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: result.error.issues },
      { status: 422 }
    );
  }

  const { name, email, phone, projectType, message } = result.data;
  const contactEmail = process.env.CONTACT_EMAIL ?? "gabrieldilworth32@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[contact] No RESEND_API_KEY — logging inquiry:", result.data);
    return NextResponse.json({ ok: true });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "All Wired Up Idaho <noreply@allwiredupidaho.com>",
    to: [contactEmail],
    replyTo: email,
    subject: `New Inquiry: ${projectType} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#1b3a6b">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:bold;width:140px">Name</td><td>${name}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Phone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Project Type</td><td>${projectType}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top">Message</td><td style="white-space:pre-wrap">${message}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
