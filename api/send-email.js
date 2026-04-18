import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// â”€â”€â”€ Email content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function utf8Meta() {
  return `<meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">`;
}

function email1Html(name) {
  return `<!DOCTYPE html><html><head>${utf8Meta()}</head><body>
<div style="font-family: Arial, 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; color: #3a3a3a; background: #fffdf8;">
  <div style="background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); padding: 32px 40px; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">NESTIVA</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">DÆ°á»¡ng lÃ nh tá»« tÃ¢m Â· Trao trá»n Ã¢n tÃ¬nh</p>
  </div>

  <div style="padding: 40px 40px 32px;">
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">ChÃ o ${name},</p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Nestiva vá»«a nháº­n Ä‘Æ°á»£c thÃ´ng tin cá»§a báº¡n â€” vÃ  tháº­t sá»± ráº¥t vui.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      KhÃ´ng pháº£i vÃ¬ thÃªm má»™t ngÆ°á»i trong danh sÃ¡ch, mÃ  vÃ¬ Ä‘Ã¢y lÃ  lÃºc chÃºng mÃ¬nh báº¯t Ä‘áº§u má»™t hÃ nh trÃ¬nh nhá» cÃ¹ng nhau â€” hÃ nh trÃ¬nh cá»§a sá»± chÄƒm sÃ³c, bá»“i bá»• vÃ  nhá»¯ng Ä‘iá»u tá»­ táº¿ dÃ nh cho báº£n thÃ¢n vÃ  ngÆ°á»i thÃ¢n yÃªu.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Nestiva lÃ  thÆ°Æ¡ng hiá»‡u yáº¿n sÃ o Ä‘Æ°á»£c lÃ m ra vá»›i má»™t niá»m tin Ä‘Æ¡n giáº£n: <strong>sá»©c khá»e xá»©ng Ä‘Ã¡ng Ä‘Æ°á»£c chÄƒm chÃºt báº±ng nhá»¯ng Ä‘iá»u tháº­t sá»± tá»‘t lÃ nh.</strong>
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Trong nhá»¯ng ngÃ y tá»›i, mÃ¬nh sáº½ gá»­i Ä‘áº¿n báº¡n má»™t vÃ i Ä‘iá»u nhá» â€” khÃ´ng pháº£i quáº£ng cÃ¡o, mÃ  lÃ  nhá»¯ng chia sáº» mÃ¬nh nghÄ© báº¡n sáº½ tháº¥y cÃ³ Ã­ch.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">
      Háº¹n gáº·p láº¡i báº¡n sá»›m nhÃ©.
    </p>

    <p style="font-size: 15px; color: #888; margin: 0;">áº¤m Ã¡p,<br><strong style="color: #C9A84C;">Nestiva</strong> ðŸŒ¿<br><em>DÆ°á»¡ng lÃ nh tá»« tÃ¢m Â· Trao trá»n Ã¢n tÃ¬nh</em></p>
  </div>

  <div style="background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
    Â© Nestiva Â· Tá»• yáº¿n cho cuá»™c sá»‘ng trá»n váº¹n
  </div>
</div>`;
}

function email2Html(name) {
  return `<!DOCTYPE html><html><head>${utf8Meta()}</head><body>
<div style="font-family: Arial, 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; color: #3a3a3a; background: #fffdf8;">
  <div style="background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); padding: 32px 40px; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">NESTIVA</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">DÆ°á»¡ng lÃ nh tá»« tÃ¢m Â· Trao trá»n Ã¢n tÃ¬nh</p>
  </div>

  <div style="padding: 40px 40px 32px;">
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">ChÃ o ${name},</p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      CÃ³ má»™t Ä‘iá»u mÃ¬nh hay tháº¥y: nhiá»u ngÆ°á»i mua yáº¿n vá» dÃ¹ng Ä‘Ãºng cÃ¡ch, Ä‘á»§ liá»u â€” nhÆ°ng váº«n chÆ°a cáº£m nháº­n Ä‘Æ°á»£c háº¿t giÃ¡ trá»‹ cá»§a nÃ³.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      LÃ½ do thÆ°á»ng khÃ´ng pháº£i á»Ÿ cháº¥t lÆ°á»£ng sáº£n pháº©m, mÃ  á»Ÿ <strong>thá»i Ä‘iá»ƒm vÃ  cÃ¡ch dÃ¹ng.</strong>
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 12px;">
      Tá»• yáº¿n chá»©a glycoprotein â€” má»™t dÆ°á»¡ng cháº¥t quÃ½ giÃºp tÃ¡i táº¡o táº¿ bÃ o vÃ  tÄƒng cÆ°á»ng miá»…n dá»‹ch. NhÆ°ng dÆ°á»¡ng cháº¥t nÃ y háº¥p thá»¥ tá»‘t nháº¥t khi cÆ¡ thá»ƒ Ä‘ang á»Ÿ tráº¡ng thÃ¡i nghá»‰ ngÆ¡i vÃ  tiÃªu hÃ³a nháº¹ nhÃ ng.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 12px;"><strong>VÃ¬ váº­y, 3 thá»i Ä‘iá»ƒm dÃ¹ng yáº¿n hiá»‡u quáº£ nháº¥t lÃ :</strong></p>

    <div style="background: #fdf6e8; border-left: 4px solid #C9A84C; padding: 20px 24px; margin: 0 0 24px; border-radius: 0 8px 8px 0;">
      <p style="margin: 0 0 12px; font-size: 15px; line-height: 1.7;">ðŸŒ… <strong>Buá»•i sÃ¡ng sá»›m, lÃºc bá»¥ng cÃ²n trá»‘ng</strong> â€” cÆ¡ thá»ƒ háº¥p thá»¥ nhanh vÃ  trá»n váº¹n nháº¥t</p>
      <p style="margin: 0 0 12px; font-size: 15px; line-height: 1.7;">ðŸŒ™ <strong>TrÆ°á»›c khi ngá»§ khoáº£ng 1 tiáº¿ng</strong> â€” há»— trá»£ phá»¥c há»“i vÃ  tÃ¡i táº¡o trong giáº¥c ngá»§</p>
      <p style="margin: 0; font-size: 15px; line-height: 1.7;">ðŸ’ª <strong>Sau khi á»‘m hoáº·c má»‡t má»i kÃ©o dÃ i</strong> â€” bá»• sung nhanh nÄƒng lÆ°á»£ng vÃ  sá»©c Ä‘á» khÃ¡ng</p>
    </div>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      DÃ¹ng Ä‘Ãºng lÃºc, cÆ¡ thá»ƒ sáº½ biáº¿t Æ¡n báº¡n hÆ¡n ráº¥t nhiá»u.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">
      MÃ¬nh chia sáº» Ä‘iá»u nÃ y vÃ¬ nghÄ© nÃ³ tháº­t sá»± há»¯u Ã­ch â€” khÃ´ng cÃ³ gÃ¬ thÃªm cáº£.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">ChÃºc báº¡n má»™t ngÃ y nháº¹ nhÃ ng vÃ  khá»e khoáº¯n.</p>

    <p style="font-size: 15px; color: #888; margin: 0;">TrÃ¢n quÃ½,<br><strong style="color: #C9A84C;">Nestiva</strong> ðŸŒ¿<br><em>DÆ°á»¡ng lÃ nh tá»« tÃ¢m Â· Trao trá»n Ã¢n tÃ¬nh</em></p>
  </div>

  <div style="background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
    Â© Nestiva Â· Tá»• yáº¿n cho cuá»™c sá»‘ng trá»n váº¹n
  </div>
</div>`;
}

function email3Html(name) {
  return `<!DOCTYPE html><html><head>${utf8Meta()}</head><body>
<div style="font-family: Arial, 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; color: #3a3a3a; background: #fffdf8;">
  <div style="background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); padding: 32px 40px; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">NESTIVA</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">DÆ°á»¡ng lÃ nh tá»« tÃ¢m Â· Trao trá»n Ã¢n tÃ¬nh</p>
  </div>

  <div style="padding: 40px 40px 32px;">
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">ChÃ o ${name},</p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Sau hai ngÃ y chia sáº», hÃ´m nay mÃ¬nh muá»‘n giá»›i thiá»‡u vá»›i báº¡n nhá»¯ng sáº£n pháº©m mÃ  Nestiva Ä‘Ã£ dÃ y cÃ´ng chá»n lá»c vÃ  cháº¿ biáº¿n â€” Ä‘á»ƒ viá»‡c chÄƒm sÃ³c sá»©c khá»e trá»Ÿ nÃªn dá»… dÃ ng, ngon miá»‡ng vÃ  tháº­t sá»± cÃ³ giÃ¡ trá»‹.
    </p>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <h3 style="color: #C9A84C; font-size: 17px; margin: 0 0 12px;">ðŸš DÃ²ng ChÃ¡o Tá»• Yáº¿n â€” DÆ°á»¡ng lÃ nh má»—i sÃ¡ng</h3>
    <p style="font-size: 14px; color: #888; margin: 0 0 12px;">Tá»« <strong>79.000Ä‘/há»™p 259gr</strong></p>
    <p style="font-size: 15px; line-height: 1.7; margin: 0 0 12px;">KhÃ´ng cáº§n náº¥u, khÃ´ng cáº§n chuáº©n bá»‹ â€” má»Ÿ ra lÃ  dÃ¹ng Ä‘Æ°á»£c ngay. Nestiva cÃ³ 4 vá»‹ Ä‘á»ƒ báº¡n chá»n tÃ¹y kháº©u vá»‹ vÃ  nhu cáº§u:</p>
    <ul style="font-size: 15px; line-height: 1.9; margin: 0 0 24px; padding-left: 20px;">
      <li><strong>ChÃ¡o Tá»• Yáº¿n Háº¡t Sen Ká»· Tá»­</strong> â€” an tháº§n, dÆ°á»¡ng tÃ¢m, ngá»§ ngon hÆ¡n</li>
      <li><strong>ChÃ¡o Yáº¿n BÃ o NgÆ° BÃ o NgÆ°</strong> â€” giÃ u protein, phá»¥c há»“i nhanh sau má»‡t má»i</li>
      <li><strong>ChÃ¡o Tá»• Yáº¿n SÃ² Äiá»‡p</strong> â€” vá»‹ ngá»t thanh, tá»‘t cho xÆ°Æ¡ng khá»›p</li>
      <li><strong>ChÃ¡o Tá»• Yáº¿n CÃ¡ Há»“i</strong> â€” Omega-3 tá»« cÃ¡ há»“i Norway, tá»‘t cho nÃ£o vÃ  tim máº¡ch</li>
    </ul>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <h3 style="color: #C9A84C; font-size: 17px; margin: 0 0 12px;">ðŸ«™ DÃ²ng Yáº¿n ChÆ°ng â€” Bá»• dÆ°á»¡ng tinh gá»n</h3>
    <p style="font-size: 14px; color: #888; margin: 0 0 12px;">Tá»« <strong>59.000Ä‘/hÅ© 70ml</strong></p>
    <ul style="font-size: 15px; line-height: 1.9; margin: 0 0 24px; padding-left: 20px;">
      <li><strong>Yáº¿n ChÆ°ng ÄÃ´ng TrÃ¹ng</strong> â€” tÄƒng miá»…n dá»‹ch, bá»• phá»•i</li>
      <li><strong>Yáº¿n ChÆ°ng NhÃ¢n SÃ¢m</strong> â€” bá»• nguyÃªn khÃ­, chá»‘ng má»‡t má»i</li>
      <li><strong>Há»“ng Yáº¿n ChÆ°ng ÄÃ´ng TrÃ¹ng</strong> â€” bá»• huyáº¿t, lÃ m Ä‘áº¹p da tá»« bÃªn trong</li>
    </ul>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <h3 style="color: #C9A84C; font-size: 17px; margin: 0 0 12px;">ðŸŽ Combo â€” QuÃ  táº·ng Ã½ nghÄ©a, trao gá»­i trá»n váº¹n</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin: 0 0 24px;">
      <tr style="background: #f5f0e8;">
        <th style="padding: 10px 12px; text-align: left; border-bottom: 1px solid #e8dfc8;">Combo</th>
        <th style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #e8dfc8;">GiÃ¡</th>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f0e8d8;"><strong>Combo ChuyÃªn Vá»‹ Yáº¿n ChÆ°ng</strong><br><span style="color:#888; font-size:13px;">12 hÅ© Yáº¿n chÆ°ng ÄÃ´ng trÃ¹ng &amp; NhÃ¢n sÃ¢m</span></td>
        <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #f0e8d8; white-space: nowrap;">688.000Ä‘</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f0e8d8;"><strong>Combo HÃ i HÃ²a Má»i Vá»‹</strong><br><span style="color:#888; font-size:13px;">ChÃ¡o + SÃºp + Yáº¿n chÆ°ng Ä‘a dáº¡ng</span></td>
        <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #f0e8d8; white-space: nowrap;">1.399.000Ä‘</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f0e8d8;"><strong>Combo ThÆ°á»£ng Vá»‹ Tinh Hoa</strong><br><span style="color:#888; font-size:13px;">SÃºp BÃ o ngÆ° Vi cÃ¡ + Há»“ng yáº¿n ÄÃ´ng trÃ¹ng</span></td>
        <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #f0e8d8; white-space: nowrap;">1.599.000Ä‘</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px;"><strong>Combo BÃ¡ch Vá»‹ Sum Váº§y</strong><br><span style="color:#888; font-size:13px;">Trá»n bá»™ 10 mÃ³n â€” Ä‘á»§ vá»‹, Ä‘á»§ dÆ°á»¡ng</span></td>
        <td style="padding: 10px 12px; text-align: right; white-space: nowrap;">1.888.000Ä‘</td>
      </tr>
    </table>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Nestiva khÃ´ng muá»‘n báº¡n mua vÃ¬ Ã¡p lá»±c hay vÃ¬ khuyáº¿n mÃ£i.
    </p>
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 28px;">
      MÃ¬nh muá»‘n báº¡n chá»n vÃ¬ báº¡n tháº¥y Ä‘Ã¢y lÃ  Ä‘iá»u <strong>tháº­t sá»± tá»‘t</strong> â€” cho báº£n thÃ¢n hoáº·c cho ngÆ°á»i báº¡n quan tÃ¢m.
    </p>

    <div style="text-align: center; margin: 0 0 28px;">
      <a href="https://nestiva.vn" style="display: inline-block; background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); color: #fff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: bold; letter-spacing: 0.5px;">
        ðŸ›’ Xem toÃ n bá»™ sáº£n pháº©m & Ä‘áº·t hÃ ng táº¡i Ä‘Ã¢y
      </a>
    </div>

    <p style="font-size: 15px; line-height: 1.7; text-align: center; color: #888; margin: 0 0 32px;">
      Hoáº·c nháº¯n tin trá»±c tiáº¿p â€” Nestiva luÃ´n sáºµn lÃ²ng tÆ° váº¥n Ä‘á»ƒ báº¡n chá»n Ä‘Æ°á»£c Ä‘Ãºng thá»© mÃ¬nh cáº§n.
    </p>

    <p style="font-size: 15px; color: #888; margin: 0;">TrÃ¢n quÃ½ báº¡n,<br><strong style="color: #C9A84C;">Nestiva</strong> ðŸŒ¿<br><em>DÆ°á»¡ng lÃ nh tá»« tÃ¢m Â· Trao trá»n Ã¢n tÃ¬nh</em></p>
  </div>

  <div style="background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
    Â© Nestiva Â· Tá»• yáº¿n cho cuá»™c sá»‘ng trá»n váº¹n
  </div>
</div>`;
}

// â”€â”€â”€ Delay helper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// â”€â”€â”€ Send a single email â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

async function sendEmail({ to, subject, html }) {
  return resend.emails.send({
    from: 'Nestiva <noreply@nestiva.vn>',
    to: [to],
    subject,
    html,
  });
}

// â”€â”€â”€ Main handler â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, email, name, phone, product } = req.body;

    // â”€â”€ Legacy: order_confirmation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    if (type === 'order_confirmation') {
      const data = await sendEmail({
        to: email,
        subject: 'âœ… XÃ¡c nháº­n Ä‘Æ¡n hÃ ng - Nestiva',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C9A84C;">XÃ¡c nháº­n Ä‘Æ¡n hÃ ng</h2>
            <p>ChÃ o ${name},</p>
            <p>Cáº£m Æ¡n báº¡n Ä‘Ã£ Ä‘áº·t hÃ ng táº¡i Nestiva!</p>
            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>ThÃ´ng tin Ä‘Æ¡n hÃ ng:</h3>
              <p><strong>Sáº£n pháº©m:</strong> ${product}</p>
              <p><strong>Sá»‘ Ä‘iá»‡n thoáº¡i:</strong> ${phone}</p>
            </div>
            <p>ChÃºng tÃ´i sáº½ liÃªn há»‡ vá»›i báº¡n trong vÃ²ng 15 phÃºt Ä‘á»ƒ xÃ¡c nháº­n vÃ  giao hÃ ng.</p>
            <p style="color: #666;">TrÃ¢n trá»ng,<br>Äá»™i ngÅ© Nestiva</p>
          </div>
        `,
      });
      return res.status(200).json({ success: true, id: data.id });
    }

    // â”€â”€ Waitlist email sequence â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    if (type === 'waitlist') {
      const isTestMode = email.includes('+test');

      // Email 1 â€” send immediately
      const result1 = await sendEmail({
        to: email,
        subject: 'Cáº£m Æ¡n báº¡n Ä‘Ã£ ghÃ© ðŸŒ¿ Nestiva ráº¥t vui Ä‘Æ°á»£c quen',
        html: email1Html(name || 'báº¡n'),
      });

      if (isTestMode) {
        // TEST MODE: send all 3 right away (small delay so they arrive in order)
        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Äiá»u Ã­t ngÆ°á»i biáº¿t vá» tá»• yáº¿n â€” vÃ  táº¡i sao thá»i Ä‘iá»ƒm dÃ¹ng láº¡i quan trá»ng hÆ¡n liá»u lÆ°á»£ng',
          html: email2Html(name || 'báº¡n'),
        });

        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Nestiva cÃ³ má»™t Ä‘iá»u muá»‘n gá»­i Ä‘áº¿n báº¡n ðŸŒ¿',
          html: email3Html(name || 'báº¡n'),
        });

        return res.status(200).json({
          success: true,
          testMode: true,
          message: 'Test mode: all 3 emails sent immediately',
          email1Id: result1.id,
        });
      }

      // NORMAL MODE: schedule Email 2 (+2 days) and Email 3 (+3 days)
      // We use Resend's scheduledAt parameter (ISO 8601)
      const now = new Date();

      const sendAt2 = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // +2 days
      const sendAt3 = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // +3 days

      const result2 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Äiá»u Ã­t ngÆ°á»i biáº¿t vá» tá»• yáº¿n â€” vÃ  táº¡i sao thá»i Ä‘iá»ƒm dÃ¹ng láº¡i quan trá»ng hÆ¡n liá»u lÆ°á»£ng',
        html: email2Html(name || 'báº¡n'),
        scheduledAt: sendAt2.toISOString(),
      });

      const result3 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Nestiva cÃ³ má»™t Ä‘iá»u muá»‘n gá»­i Ä‘áº¿n báº¡n ðŸŒ¿',
        html: email3Html(name || 'báº¡n'),
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
