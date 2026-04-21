import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Email HTML builders (all Vietnamese chars as HTML entities) ───────────────

const HEADER = `<div style="background:linear-gradient(135deg,#C9A84C 0%,#a07830 100%);padding:32px 40px;text-align:center;"><h1 style="color:#fff;margin:0;font-size:28px;letter-spacing:2px;">NESTIVA</h1><p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:13px;letter-spacing:1px;">D&#432;&#7905;ng l&#224;nh t&#7915; t&#226;m &middot; Trao tr&#7885;n &#226;n t&#236;nh</p></div>`;
const FOOTER = `<div style="background:#f5f0e8;padding:20px 40px;text-align:center;font-size:12px;color:#999;">&copy; Nestiva &middot; T&#7893; y&#7871;n cho cu&#7897;c s&#7889;ng tr&#7885;n v&#7865;n</div>`;
const WRAP_OPEN = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body><div style="font-family:Arial,'Helvetica Neue',sans-serif;max-width:600px;margin:0 auto;color:#3a3a3a;background:#fffdf8;">`;
const WRAP_CLOSE = `</div></body></html>`;
const SIG1 = `<p style="font-size:15px;color:#888;margin:0;">&#7844;m &#225;p,<br><strong style="color:#C9A84C;">Nestiva</strong> &#127807;<br><em>D&#432;&#7905;ng l&#224;nh t&#7915; t&#226;m &middot; Trao tr&#7885;n &#226;n t&#236;nh</em></p>`;
const SIG2 = `<p style="font-size:15px;color:#888;margin:0;">Tr&#226;n qu&#253;,<br><strong style="color:#C9A84C;">Nestiva</strong> &#127807;<br><em>D&#432;&#7905;ng l&#224;nh t&#7915; t&#226;m &middot; Trao tr&#7885;n &#226;n t&#236;nh</em></p>`;
const SIG3 = `<p style="font-size:15px;color:#888;margin:0;">Tr&#226;n qu&#253; b&#7841;n,<br><strong style="color:#C9A84C;">Nestiva</strong> &#127807;<br><em>D&#432;&#7905;ng l&#224;nh t&#7915; t&#226;m &middot; Trao tr&#7885;n &#226;n t&#236;nh</em></p>`;

function p(text) {
  return `<p style="font-size:16px;line-height:1.8;margin:0 0 20px;">${text}</p>`;
}

function email1Html(name) {
  const body = `<div style="padding:40px 40px 32px;">
${p(`Ch&#224;o ${name},`)}
${p(`Nestiva v&#7915;a nh&#7853;n &#273;&#432;&#7907;c th&#244;ng tin c&#7911;a b&#7841;n &mdash; v&#224; th&#7853;t s&#7921; r&#7845;t vui.`)}
${p(`Kh&#244;ng ph&#7843;i v&#236; th&#234;m m&#7897;t ng&#432;&#7901;i trong danh s&#225;ch, m&#224; v&#236; &#273;&#226;y l&#224; l&#250;c ch&#250;ng m&#236;nh b&#7855;t &#273;&#7847;u m&#7897;t h&#224;nh tr&#236;nh nh&#7887; c&#249;ng nhau &mdash; h&#224;nh tr&#236;nh c&#7911;a s&#7921; ch&#259;m s&#243;c, b&#7891;i b&#7893; v&#224; nh&#7919;ng &#273;i&#7873;u t&#7917; t&#7871; d&#224;nh cho b&#7843;n th&#226;n v&#224; ng&#432;&#7901;i th&#226;n y&#234;u.`)}
${p(`Nestiva l&#224; th&#432;&#417;ng hi&#7879;u y&#7871;n s&#224;o &#273;&#432;&#7907;c l&#224;m ra v&#7899;i m&#7897;t ni&#7873;m tin &#273;&#417;n gi&#7843;n: <strong>s&#7913;c kh&#7887;e x&#7913;ng &#273;&#225;ng &#273;&#432;&#7907;c ch&#259;m ch&#250;t b&#7857;ng nh&#7919;ng &#273;i&#7873;u th&#7853;t s&#7921; t&#7889;t l&#224;nh.</strong>`)}
${p(`Trong nh&#7919;ng ng&#224;y t&#7899;i, m&#236;nh s&#7869; g&#7917;i &#273;&#7871;n b&#7841;n m&#7897;t v&#224;i &#273;i&#7873;u nh&#7887; &mdash; kh&#244;ng ph&#7843;i qu&#7843;ng c&#225;o, m&#224; l&#224; nh&#7919;ng chia s&#7867; m&#236;nh ngh&#297; b&#7841;n s&#7869; th&#7845;y c&#243; &#237;ch.`)}
<p style="font-size:16px;line-height:1.8;margin:0 0 32px;">H&#7865;n g&#7863;p l&#7841;i b&#7841;n s&#7899;m nh&#233;.</p>
${SIG1}
</div>`;
  return WRAP_OPEN + HEADER + body + FOOTER + WRAP_CLOSE;
}

function email2Html(name) {
  const body = `<div style="padding:40px 40px 32px;">
${p(`Ch&#224;o ${name},`)}
${p(`C&#243; m&#7897;t &#273;i&#7873;u m&#236;nh hay th&#7845;y: nhi&#7873;u ng&#432;&#7901;i mua y&#7871;n v&#7873; d&#249;ng &#273;&#250;ng c&#225;ch, &#273;&#7911; li&#7873;u &mdash; nh&#432;ng v&#7851;n ch&#432;a c&#7843;m nh&#7853;n &#273;&#432;&#7907;c h&#7871;t gi&#225; tr&#7883; c&#7911;a n&#243;.`)}
${p(`L&#253; do th&#432;&#7901;ng kh&#244;ng ph&#7843;i &#7903; ch&#7845;t l&#432;&#7907;ng s&#7843;n ph&#7849;m, m&#224; &#7903; <strong>th&#7901;i &#273;i&#7875;m v&#224; c&#225;ch d&#249;ng.</strong>`)}
<p style="font-size:16px;line-height:1.8;margin:0 0 12px;">T&#7893; y&#7871;n ch&#7913;a glycoprotein &mdash; m&#7897;t d&#432;&#7905;ng ch&#7845;t qu&#253; gi&#250;p t&#225;i t&#7841;o t&#7871; b&#224;o v&#224; t&#259;ng c&#432;&#7901;ng mi&#7877;n d&#7883;ch. Nh&#432;ng d&#432;&#7905;ng ch&#7845;t n&#224;y h&#7845;p th&#7909; t&#7889;t nh&#7845;t khi c&#417; th&#7875; &#273;ang &#7903; tr&#7841;ng th&#225;i ngh&#7881; ng&#417;i v&#224; ti&#234;u h&#243;a nh&#7865; nh&#224;ng.</p>
<p style="font-size:16px;line-height:1.8;margin:0 0 12px;"><strong>V&#236; v&#7853;y, 3 th&#7901;i &#273;i&#7875;m d&#249;ng y&#7871;n hi&#7879;u qu&#7843; nh&#7845;t l&#224;:</strong></p>
<div style="background:#fdf6e8;border-left:4px solid #C9A84C;padding:20px 24px;margin:0 0 24px;border-radius:0 8px 8px 0;">
<p style="margin:0 0 12px;font-size:15px;line-height:1.7;">&#127749; <strong>Bu&#7893;i s&#225;ng s&#7899;m, l&#250;c b&#7909;ng c&#242;n tr&#7889;ng</strong> &mdash; c&#417; th&#7875; h&#7845;p th&#7909; nhanh v&#224; tr&#7885;n v&#7865;n nh&#7845;t</p>
<p style="margin:0 0 12px;font-size:15px;line-height:1.7;">&#127769; <strong>Tr&#432;&#7899;c khi ng&#7911; kho&#7843;ng 1 ti&#7871;ng</strong> &mdash; h&#7895; tr&#7907; ph&#7909;c h&#7891;i v&#224; t&#225;i t&#7841;o trong gi&#7845;c ng&#7911;</p>
<p style="margin:0;font-size:15px;line-height:1.7;">&#128170; <strong>Sau khi &#7889;m ho&#7863;c m&#7879;t m&#7887;i k&#233;o d&#224;i</strong> &mdash; b&#7893; sung nhanh n&#259;ng l&#432;&#7907;ng v&#224; s&#7913;c &#273;&#7873; kh&#225;ng</p>
</div>
${p(`D&#249;ng &#273;&#250;ng l&#250;c, c&#417; th&#7875; s&#7869; bi&#7871;t &#417;n b&#7841;n h&#417;n r&#7845;t nhi&#7873;u.`)}
<p style="font-size:16px;line-height:1.8;margin:0 0 32px;">M&#236;nh chia s&#7867; &#273;i&#7873;u n&#224;y v&#236; ngh&#297; n&#243; th&#7853;t s&#7921; h&#7919;u &#237;ch &mdash; kh&#244;ng c&#243; g&#236; th&#234;m c&#7843;.</p>
<p style="font-size:16px;line-height:1.8;margin:0 0 32px;">Ch&#250;c b&#7841;n m&#7897;t ng&#224;y nh&#7865; nh&#224;ng v&#224; kh&#7887;e kho&#7855;n.</p>
${SIG2}
</div>`;
  return WRAP_OPEN + HEADER + body + FOOTER + WRAP_CLOSE;
}

function email3Html(name) {
  const body = `<div style="padding:40px 40px 32px;">
${p(`Ch&#224;o ${name},`)}
${p(`Sau hai ng&#224;y chia s&#7867;, h&#244;m nay m&#236;nh mu&#7889;n gi&#7899;i thi&#7879;u v&#7899;i b&#7841;n nh&#7919;ng s&#7843;n ph&#7849;m m&#224; Nestiva &#273;&#227; d&#224;y c&#244;ng ch&#7885;n l&#7885;c v&#224; ch&#7871; bi&#7871;n &mdash; &#273;&#7875; vi&#7879;c ch&#259;m s&#243;c s&#7913;c kh&#7887;e tr&#7903; n&#234;n d&#7877; d&#224;ng, ngon mi&#7879;ng v&#224; th&#7853;t s&#7921; c&#243; gi&#225; tr&#7883;.`)}
<hr style="border:none;border-top:1px solid #e8dfc8;margin:28px 0;">
<h3 style="color:#C9A84C;font-size:17px;margin:0 0 12px;">&#127834; D&#242;ng Ch&#225;o T&#7893; Y&#7871;n &mdash; D&#432;&#7905;ng l&#224;nh m&#7895;i s&#225;ng</h3>
<p style="font-size:14px;color:#888;margin:0 0 12px;">T&#7915; <strong>79.000&#273;/h&#7897;p 259gr</strong></p>
<p style="font-size:15px;line-height:1.7;margin:0 0 12px;">Kh&#244;ng c&#7847;n n&#7845;u, kh&#244;ng c&#7847;n chu&#7849;n b&#7883; &mdash; m&#7903; ra l&#224; d&#249;ng &#273;&#432;&#7907;c ngay. Nestiva c&#243; 4 v&#7883; &#273;&#7875; b&#7841;n ch&#7885;n t&#249;y kh&#7849;u v&#7883; v&#224; nhu c&#7847;u:</p>
<ul style="font-size:15px;line-height:1.9;margin:0 0 24px;padding-left:20px;">
<li><strong>Ch&#225;o T&#7893; Y&#7871;n H&#7841;t Sen K&#7927; T&#7917;</strong> &mdash; an th&#7847;n, d&#432;&#7905;ng t&#226;m, ng&#7911; ngon h&#417;n</li>
<li><strong>Ch&#225;o Y&#7871;n B&#224;o Ng&#432; B&#224;o Ng&#432;</strong> &mdash; gi&#224;u protein, ph&#7909;c h&#7891;i nhanh sau m&#7879;t m&#7887;i</li>
<li><strong>Ch&#225;o T&#7893; Y&#7871;n S&#242; &#272;i&#7879;p</strong> &mdash; v&#7883; ng&#7885;t thanh, t&#7889;t cho x&#432;&#417;ng kh&#7899;p</li>
<li><strong>Ch&#225;o T&#7893; Y&#7871;n C&#225; H&#7891;i</strong> &mdash; Omega-3 t&#7915; c&#225; h&#7891;i Norway, t&#7889;t cho n&#227;o v&#224; tim m&#7841;ch</li>
</ul>
<hr style="border:none;border-top:1px solid #e8dfc8;margin:28px 0;">
<h3 style="color:#C9A84C;font-size:17px;margin:0 0 12px;">&#129369; D&#242;ng Y&#7871;n Ch&#432;ng &mdash; B&#7893; d&#432;&#7905;ng tinh g&#7885;n</h3>
<p style="font-size:14px;color:#888;margin:0 0 12px;">T&#7915; <strong>59.000&#273;/h&#361; 70ml</strong></p>
<ul style="font-size:15px;line-height:1.9;margin:0 0 24px;padding-left:20px;">
<li><strong>Y&#7871;n Ch&#432;ng &#272;&#244;ng Tr&#249;ng</strong> &mdash; t&#259;ng mi&#7877;n d&#7883;ch, b&#7893; ph&#7893;i</li>
<li><strong>Y&#7871;n Ch&#432;ng Nh&#226;n S&#226;m</strong> &mdash; b&#7893; nguy&#234;n kh&#237;, ch&#7889;ng m&#7879;t m&#7887;i</li>
<li><strong>H&#7891;ng Y&#7871;n Ch&#432;ng &#272;&#244;ng Tr&#249;ng</strong> &mdash; b&#7893; huy&#7871;t, l&#224;m &#273;&#7865;p da t&#7915; b&#234;n trong</li>
</ul>
<hr style="border:none;border-top:1px solid #e8dfc8;margin:28px 0;">
<h3 style="color:#C9A84C;font-size:17px;margin:0 0 12px;">&#127873; Combo &mdash; Qu&#224; t&#7863;ng &#253; ngh&#297;a, trao g&#7917;i tr&#7885;n v&#7865;n</h3>
<table style="width:100%;border-collapse:collapse;font-size:14px;margin:0 0 24px;">
<tr style="background:#f5f0e8;"><th style="padding:10px 12px;text-align:left;border-bottom:1px solid #e8dfc8;">Combo</th><th style="padding:10px 12px;text-align:right;border-bottom:1px solid #e8dfc8;">Gi&#225;</th></tr>
<tr><td style="padding:10px 12px;border-bottom:1px solid #f0e8d8;"><strong>Combo Chuy&#234;n V&#7883; Y&#7871;n Ch&#432;ng</strong><br><span style="color:#888;font-size:13px;">12 h&#361; Y&#7871;n ch&#432;ng &#272;&#244;ng tr&#249;ng &amp; Nh&#226;n s&#226;m</span></td><td style="padding:10px 12px;text-align:right;border-bottom:1px solid #f0e8d8;white-space:nowrap;">688.000&#273;</td></tr>
<tr><td style="padding:10px 12px;border-bottom:1px solid #f0e8d8;"><strong>Combo H&#224;i H&#242;a M&#7885;i V&#7883;</strong><br><span style="color:#888;font-size:13px;">Ch&#225;o + S&#250;p + Y&#7871;n ch&#432;ng &#273;a d&#7841;ng</span></td><td style="padding:10px 12px;text-align:right;border-bottom:1px solid #f0e8d8;white-space:nowrap;">1.399.000&#273;</td></tr>
<tr><td style="padding:10px 12px;border-bottom:1px solid #f0e8d8;"><strong>Combo Th&#432;&#7907;ng V&#7883; Tinh Hoa</strong><br><span style="color:#888;font-size:13px;">S&#250;p B&#224;o ng&#432; Vi c&#225; + H&#7891;ng y&#7871;n &#272;&#244;ng tr&#249;ng</span></td><td style="padding:10px 12px;text-align:right;border-bottom:1px solid #f0e8d8;white-space:nowrap;">1.599.000&#273;</td></tr>
<tr><td style="padding:10px 12px;"><strong>Combo B&#225;ch V&#7883; Sum V&#7847;y</strong><br><span style="color:#888;font-size:13px;">Tr&#7885;n b&#7897; 10 m&#243;n &mdash; &#273;&#7911; v&#7883;, &#273;&#7911; d&#432;&#7905;ng</span></td><td style="padding:10px 12px;text-align:right;white-space:nowrap;">1.888.000&#273;</td></tr>
</table>
<hr style="border:none;border-top:1px solid #e8dfc8;margin:28px 0;">
${p(`Nestiva kh&#244;ng mu&#7889;n b&#7841;n mua v&#236; &#225;p l&#7921;c hay v&#236; khuy&#7871;n m&#227;i.`)}
<p style="font-size:16px;line-height:1.8;margin:0 0 28px;">M&#236;nh mu&#7889;n b&#7841;n ch&#7885;n v&#236; b&#7841;n th&#7845;y &#273;&#226;y l&#224; &#273;i&#7873;u <strong>th&#7853;t s&#7921; t&#7889;t</strong> &mdash; cho b&#7843;n th&#226;n ho&#7863;c cho ng&#432;&#7901;i b&#7841;n quan t&#226;m.</p>
<div style="text-align:center;margin:0 0 28px;">
<a href="https://nestiva.vn" style="display:inline-block;background:linear-gradient(135deg,#C9A84C 0%,#a07830 100%);color:#fff;text-decoration:none;padding:16px 40px;border-radius:50px;font-size:16px;font-weight:bold;letter-spacing:0.5px;">&#128722; Xem to&#224;n b&#7897; s&#7843;n ph&#7849;m &amp; &#273;&#7863;t h&#224;ng t&#7841;i &#273;&#226;y</a>
</div>
<p style="font-size:15px;line-height:1.7;text-align:center;color:#888;margin:0 0 32px;">Ho&#7863;c nh&#7855;n tin tr&#7921;c ti&#7871;p &mdash; Nestiva lu&#244;n s&#7861;n l&#242;ng t&#432; v&#7845;n &#273;&#7875; b&#7841;n ch&#7885;n &#273;&#432;&#7907;c &#273;&#250;ng th&#7913; m&#236;nh c&#7847;n.</p>
${SIG3}
</div>`;
  return WRAP_OPEN + HEADER + body + FOOTER + WRAP_CLOSE;
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
        subject: 'Xac nhan don hang - Nestiva',
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;"><h2 style="color:#C9A84C;">Xac nhan don hang</h2><p>Chao ${name},</p><p>Cam on ban da dat hang tai Nestiva!</p><div style="background:#f8f8f8;padding:20px;border-radius:8px;margin:20px 0;"><p><strong>San pham:</strong> ${product}</p><p><strong>So dien thoai:</strong> ${phone}</p></div><p>Chung toi se lien he voi ban trong vong 15 phut de xac nhan va giao hang.</p><p style="color:#666;">Tran trong,<br>Doi ngu Nestiva</p></div>`,
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
        subject: 'Cam on ban da ghe - Nestiva rat vui duoc quen',
        html: email1Html(displayName),
      });

      if (isTestMode) {
        // TEST MODE: send all 3 right away
        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Dieu it nguoi biet ve to yen - va tai sao thoi diem dung lai quan trong hon lieu luong',
          html: email2Html(displayName),
        });

        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Nestiva co mot dieu muon gui den ban',
          html: email3Html(displayName),
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
      const sendAt2 = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
      const sendAt3 = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

      const result2 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Dieu it nguoi biet ve to yen - va tai sao thoi diem dung lai quan trong hon lieu luong',
        html: email2Html(displayName),
        scheduledAt: sendAt2.toISOString(),
      });

      const result3 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Nestiva co mot dieu muon gui den ban',
        html: email3Html(displayName),
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
