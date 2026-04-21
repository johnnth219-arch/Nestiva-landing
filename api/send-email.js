import { Resend } from 'resend';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const resend = new Resend(process.env.RESEND_API_KEY);

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Load HTML templates ───────────────────────────────────────────────────────

function loadTemplate(filename, name) {
  const filePath = join(__dirname, 'templates', filename);
  const html = readFileSync(filePath, 'utf8');
  return html.replace(/\{\{name\}\}/g, name);
}

// ─── Delay helper ─────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Send a single email ───────────────────────────────────────────────────────

async function sendEmail({ to, subject, html }) {
  return resend.emails.send({
    from: 'Nestiva <noreply@nestiva.vn>',
    to: [to],
    subject,
    html,
  });
}

// ─── Main handler ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, email, name, phone, product } = req.body;

    // ── Legacy: order_confirmation ──────────────────────────────────────────
    if (type === 'order_confirmation') {
      const data = await sendEmail({
        to: email,
        subject: '&#10003; Xac nhan don hang - Nestiva',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C9A84C;">Xac nhan don hang</h2>
            <p>Chao ${name},</p>
            <p>Cam on ban da dat hang tai Nestiva!</p>
            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Thong tin don hang:</h3>
              <p><strong>San pham:</strong> ${product}</p>
              <p><strong>So dien thoai:</strong> ${phone}</p>
            </div>
            <p>Chung toi se lien he voi ban trong vong 15 phut de xac nhan va giao hang.</p>
            <p style="color: #666;">Tran trong,<br>Doi ngu Nestiva</p>
          </div>
        `,
      });
      return res.status(200).json({ success: true, id: data.id });
    }

    // ── Waitlist email sequence ─────────────────────────────────────────────
    if (type === 'waitlist') {
      const isTestMode = email.includes('+test');
      const displayName = name || 'ban';

      // Email 1 — send immediately
      const result1 = await sendEmail({
        to: email,
        subject: 'Cam on ban da ghe &#127807; Nestiva rat vui duoc quen',
        html: loadTemplate('email1.html', displayName),
      });

      if (isTestMode) {
        // TEST MODE: send all 3 right away (small delay so they arrive in order)
        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Dieu it nguoi biet ve to yen &#8212; va tai sao thoi diem dung lai quan trong hon lieu luong',
          html: loadTemplate('email2.html', displayName),
        });

        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Nestiva co mot dieu muon gui den ban &#127807;',
          html: loadTemplate('email3.html', displayName),
        });

        return res.status(200).json({
          success: true,
          testMode: true,
          message: 'Test mode: all 3 emails sent immediately',
          email1Id: result1.id,
        });
      }

      // NORMAL MODE: schedule Email 2 (+2 days) and Email 3 (+3 days)
      const now = new Date();
      const sendAt2 = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // +2 days
      const sendAt3 = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // +3 days

      const result2 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Dieu it nguoi biet ve to yen &#8212; va tai sao thoi diem dung lai quan trong hon lieu luong',
        html: loadTemplate('email2.html', displayName),
        scheduledAt: sendAt2.toISOString(),
      });

      const result3 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Nestiva co mot dieu muon gui den ban &#127807;',
        html: loadTemplate('email3.html', displayName),
        scheduledAt: sendAt3.toISOString(),
      });

      return res.status(200).json({
        success: true,
        testMode: false,
        message: 'Email 1 sent immediately. Email 2 scheduled in 2 days. Email 3 scheduled in 3 days.',
        email1Id: result1.id,
        email2Id: result2.id,
        email3Id: result3.id,
      });
    }

    return res.status(400).json({ error: 'Invalid email type' });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    });
  }
}
