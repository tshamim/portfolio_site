import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (resendKey && to) {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: "Portfolio <noreply@resend.dev>",
      to,
      subject: `New inquiry from ${parsed.data.name}`,
      reply_to: parsed.data.email,
      text: `Name: ${parsed.data.name}
Email: ${parsed.data.email}
Company: ${parsed.data.company ?? "-"}
Message:
${parsed.data.message}`,
    });
  } else {
    console.log("CONTACT FORM (dev fallback):", parsed.data);
  }

  return NextResponse.json({ ok: true });
}
