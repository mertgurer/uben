import { NextResponse } from "next/server";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const mailOptions: SendMailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.TO_EMAIL!,
      subject: "New Contact Message",
      text: `${message}\n\nEmail: ${email}\nPhone: ${phone}`,
      html: `
        <p>${message}</p>
        <div style="margin-top: 40px; padding: 0 10px; border: 1px solid gray; border-radius: 8px;">
          <p>Email: ${email}<br/>Phone: ${phone}</p>
        </div>
        <p style="color: gray; font-style: italic; font-size: 12px;">~ This mail is sent by the website contact form</p>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
