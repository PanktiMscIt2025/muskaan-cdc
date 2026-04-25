import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { parentName, childName, childAge, email, phone, concern, preferredTime, message } = body;

    // Basic server-side validation
    if (!parentName || !childName || !childAge || !email || !phone || !concern || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const concernLabel = concern
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c: string) => c.toUpperCase());

    // ─── Email to Muskaan CDC Team ────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Muskaan CDC Website" <${process.env.GMAIL_USER}>`,
      to: "muskaan.cdc22@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${parentName} — ${concernLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #E91E8C, #7B2D8B); padding: 32px 40px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 800; }
            .header p { color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px; }
            .body { padding: 32px 40px; }
            .row { display: flex; margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
            .row:last-child { border-bottom: none; }
            .label { color: #888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; min-width: 150px; }
            .value { color: #1a1a1a; font-size: 14px; font-weight: 600; }
            .message-box { background: #fdf2f8; border-left: 4px solid #E91E8C; padding: 16px; border-radius: 8px; margin-top: 20px; }
            .message-box p { color: #333; font-size: 14px; line-height: 1.7; margin: 0; }
            .footer { background: #f9f9f9; padding: 20px 40px; text-align: center; color: #aaa; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌟 New Enquiry Received</h1>
              <p>Muskaan Child Development Center</p>
            </div>
            <div class="body">
              <div class="row">
                <span class="label">Parent / Guardian</span>
                <span class="value">${parentName}</span>
              </div>
              <div class="row">
                <span class="label">Child's Name</span>
                <span class="value">${childName}</span>
              </div>
              <div class="row">
                <span class="label">Child's Age</span>
                <span class="value">${childAge}</span>
              </div>
              <div class="row">
                <span class="label">Email</span>
                <span class="value"><a href="mailto:${email}" style="color:#E91E8C;">${email}</a></span>
              </div>
              <div class="row">
                <span class="label">Phone</span>
                <span class="value">${phone}</span>
              </div>
              <div class="row">
                <span class="label">Program Interest</span>
                <span class="value">${concernLabel}</span>
              </div>
              <div class="row">
                <span class="label">Preferred Contact Time</span>
                <span class="value">${preferredTime || "Not specified"}</span>
              </div>
              <div class="message-box">
                <p><strong>Message from ${parentName}:</strong></p>
                <p>${message.replace(/\n/g, "<br/>")}</p>
              </div>
            </div>
            <div class="footer">
              This enquiry was submitted via the Muskaan CDC website contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // ─── Auto-reply to Parent ─────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Muskaan Child Development Center" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We've received your enquiry — Muskaan CDC 🌟`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #E91E8C, #7B2D8B); padding: 40px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 26px; font-weight: 800; }
            .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 15px; }
            .body { padding: 40px; }
            .body p { color: #555; font-size: 15px; line-height: 1.8; margin: 0 0 16px; }
            .highlight { background: linear-gradient(135deg, #fdf2f8, #f5f3ff); border-radius: 12px; padding: 20px; margin: 24px 0; }
            .highlight p { margin: 0; color: #333; font-weight: 600; }
            .cta { text-align: center; margin: 32px 0 8px; }
            .cta a { background: linear-gradient(135deg, #E91E8C, #7B2D8B); color: white; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-weight: 800; font-size: 15px; }
            .footer { background: #f9f9f9; padding: 24px 40px; text-align: center; }
            .footer p { color: #aaa; font-size: 12px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${parentName}! 🌟</h1>
              <p>We've received your enquiry and will be in touch soon.</p>
            </div>
            <div class="body">
              <p>Dear <strong>${parentName}</strong>,</p>
              <p>
                Thank you for reaching out to <strong>Muskaan Child Development Center</strong>.
                We're delighted that you're taking this important step for <strong>${childName}</strong>.
              </p>
              <p>
                Our team will review your enquiry and get back to you within <strong>24 hours</strong>
                to schedule a free, no-obligation consultation.
              </p>
              <div class="highlight">
                <p>📋 Your enquiry summary:</p>
                <p style="font-weight:400; margin-top:8px; color:#555;">
                  Child: <strong>${childName}</strong> (Age: ${childAge})<br/>
                  Program Interest: <strong>${concernLabel}</strong>
                </p>
              </div>
              <p>
                In the meantime, if you have any urgent questions, feel free to reply to this email
                and we'll respond as soon as possible.
              </p>
              <p>
                <em>Growing Skills. Growing Confidence.</em><br/>
                <strong style="color:#E91E8C;">— The Muskaan CDC Team</strong>
              </p>
              <div class="cta">
                <a href="mailto:muskaan.cdc22@gmail.com">Contact Us Directly</a>
              </div>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Muskaan Child Development Center · muskaan.cdc22@gmail.com</p>
              <p style="margin-top:6px;">You received this email because you submitted an enquiry on our website.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly at muskaan.cdc22@gmail.com" },
      { status: 500 }
    );
  }
}
