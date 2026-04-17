import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Email content ────────────────────────────────────────────────────────────

function email1Html(name) {
  return `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; color: #3a3a3a; background: #fffdf8;">
  <div style="background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); padding: 32px 40px; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">NESTIVA</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">Dưỡng lành từ tâm · Trao trọn ân tình</p>
  </div>

  <div style="padding: 40px 40px 32px;">
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">Chào ${name},</p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Nestiva vừa nhận được thông tin của bạn — và thật sự rất vui.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Không phải vì thêm một người trong danh sách, mà vì đây là lúc chúng mình bắt đầu một hành trình nhỏ cùng nhau — hành trình của sự chăm sóc, bồi bổ và những điều tử tế dành cho bản thân và người thân yêu.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Nestiva là thương hiệu yến sào được làm ra với một niềm tin đơn giản: <strong>sức khỏe xứng đáng được chăm chút bằng những điều thật sự tốt lành.</strong>
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Trong những ngày tới, mình sẽ gửi đến bạn một vài điều nhỏ — không phải quảng cáo, mà là những chia sẻ mình nghĩ bạn sẽ thấy có ích.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">
      Hẹn gặp lại bạn sớm nhé.
    </p>

    <p style="font-size: 15px; color: #888; margin: 0;">Ấm áp,<br><strong style="color: #C9A84C;">Nestiva</strong> 🌿<br><em>Dưỡng lành từ tâm · Trao trọn ân tình</em></p>
  </div>

  <div style="background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
    © Nestiva · Tổ yến cho cuộc sống trọn vẹn
  </div>
</div>`;
}

function email2Html(name) {
  return `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; color: #3a3a3a; background: #fffdf8;">
  <div style="background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); padding: 32px 40px; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">NESTIVA</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">Dưỡng lành từ tâm · Trao trọn ân tình</p>
  </div>

  <div style="padding: 40px 40px 32px;">
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">Chào ${name},</p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Có một điều mình hay thấy: nhiều người mua yến về dùng đúng cách, đủ liều — nhưng vẫn chưa cảm nhận được hết giá trị của nó.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Lý do thường không phải ở chất lượng sản phẩm, mà ở <strong>thời điểm và cách dùng.</strong>
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 12px;">
      Tổ yến chứa glycoprotein — một dưỡng chất quý giúp tái tạo tế bào và tăng cường miễn dịch. Nhưng dưỡng chất này hấp thụ tốt nhất khi cơ thể đang ở trạng thái nghỉ ngơi và tiêu hóa nhẹ nhàng.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 12px;"><strong>Vì vậy, 3 thời điểm dùng yến hiệu quả nhất là:</strong></p>

    <div style="background: #fdf6e8; border-left: 4px solid #C9A84C; padding: 20px 24px; margin: 0 0 24px; border-radius: 0 8px 8px 0;">
      <p style="margin: 0 0 12px; font-size: 15px; line-height: 1.7;">🌅 <strong>Buổi sáng sớm, lúc bụng còn trống</strong> — cơ thể hấp thụ nhanh và trọn vẹn nhất</p>
      <p style="margin: 0 0 12px; font-size: 15px; line-height: 1.7;">🌙 <strong>Trước khi ngủ khoảng 1 tiếng</strong> — hỗ trợ phục hồi và tái tạo trong giấc ngủ</p>
      <p style="margin: 0; font-size: 15px; line-height: 1.7;">💪 <strong>Sau khi ốm hoặc mệt mỏi kéo dài</strong> — bổ sung nhanh năng lượng và sức đề kháng</p>
    </div>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Dùng đúng lúc, cơ thể sẽ biết ơn bạn hơn rất nhiều.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">
      Mình chia sẻ điều này vì nghĩ nó thật sự hữu ích — không có gì thêm cả.
    </p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 32px;">Chúc bạn một ngày nhẹ nhàng và khỏe khoắn.</p>

    <p style="font-size: 15px; color: #888; margin: 0;">Trân quý,<br><strong style="color: #C9A84C;">Nestiva</strong> 🌿<br><em>Dưỡng lành từ tâm · Trao trọn ân tình</em></p>
  </div>

  <div style="background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
    © Nestiva · Tổ yến cho cuộc sống trọn vẹn
  </div>
</div>`;
}

function email3Html(name) {
  return `
<div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; color: #3a3a3a; background: #fffdf8;">
  <div style="background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); padding: 32px 40px; text-align: center;">
    <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">NESTIVA</h1>
    <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">Dưỡng lành từ tâm · Trao trọn ân tình</p>
  </div>

  <div style="padding: 40px 40px 32px;">
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">Chào ${name},</p>

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Sau hai ngày chia sẻ, hôm nay mình muốn giới thiệu với bạn những sản phẩm mà Nestiva đã dày công chọn lọc và chế biến — để việc chăm sóc sức khỏe trở nên dễ dàng, ngon miệng và thật sự có giá trị.
    </p>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <h3 style="color: #C9A84C; font-size: 17px; margin: 0 0 12px;">🍚 Dòng Cháo Tổ Yến — Dưỡng lành mỗi sáng</h3>
    <p style="font-size: 14px; color: #888; margin: 0 0 12px;">Từ <strong>79.000đ/hộp 259gr</strong></p>
    <p style="font-size: 15px; line-height: 1.7; margin: 0 0 12px;">Không cần nấu, không cần chuẩn bị — mở ra là dùng được ngay. Nestiva có 4 vị để bạn chọn tùy khẩu vị và nhu cầu:</p>
    <ul style="font-size: 15px; line-height: 1.9; margin: 0 0 24px; padding-left: 20px;">
      <li><strong>Cháo Tổ Yến Hạt Sen Kỷ Tử</strong> — an thần, dưỡng tâm, ngủ ngon hơn</li>
      <li><strong>Cháo Yến Bào Ngư Bào Ngư</strong> — giàu protein, phục hồi nhanh sau mệt mỏi</li>
      <li><strong>Cháo Tổ Yến Sò Điệp</strong> — vị ngọt thanh, tốt cho xương khớp</li>
      <li><strong>Cháo Tổ Yến Cá Hồi</strong> — Omega-3 từ cá hồi Norway, tốt cho não và tim mạch</li>
    </ul>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <h3 style="color: #C9A84C; font-size: 17px; margin: 0 0 12px;">🫙 Dòng Yến Chưng — Bổ dưỡng tinh gọn</h3>
    <p style="font-size: 14px; color: #888; margin: 0 0 12px;">Từ <strong>59.000đ/hũ 70ml</strong></p>
    <ul style="font-size: 15px; line-height: 1.9; margin: 0 0 24px; padding-left: 20px;">
      <li><strong>Yến Chưng Đông Trùng</strong> — tăng miễn dịch, bổ phổi</li>
      <li><strong>Yến Chưng Nhân Sâm</strong> — bổ nguyên khí, chống mệt mỏi</li>
      <li><strong>Hồng Yến Chưng Đông Trùng</strong> — bổ huyết, làm đẹp da từ bên trong</li>
    </ul>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <h3 style="color: #C9A84C; font-size: 17px; margin: 0 0 12px;">🎁 Combo — Quà tặng ý nghĩa, trao gửi trọn vẹn</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin: 0 0 24px;">
      <tr style="background: #f5f0e8;">
        <th style="padding: 10px 12px; text-align: left; border-bottom: 1px solid #e8dfc8;">Combo</th>
        <th style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #e8dfc8;">Giá</th>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f0e8d8;"><strong>Combo Chuyên Vị Yến Chưng</strong><br><span style="color:#888; font-size:13px;">12 hũ Yến chưng Đông trùng &amp; Nhân sâm</span></td>
        <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #f0e8d8; white-space: nowrap;">688.000đ</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f0e8d8;"><strong>Combo Hài Hòa Mọi Vị</strong><br><span style="color:#888; font-size:13px;">Cháo + Súp + Yến chưng đa dạng</span></td>
        <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #f0e8d8; white-space: nowrap;">1.399.000đ</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #f0e8d8;"><strong>Combo Thượng Vị Tinh Hoa</strong><br><span style="color:#888; font-size:13px;">Súp Bào ngư Vi cá + Hồng yến Đông trùng</span></td>
        <td style="padding: 10px 12px; text-align: right; border-bottom: 1px solid #f0e8d8; white-space: nowrap;">1.599.000đ</td>
      </tr>
      <tr>
        <td style="padding: 10px 12px;"><strong>Combo Bách Vị Sum Vầy</strong><br><span style="color:#888; font-size:13px;">Trọn bộ 10 món — đủ vị, đủ dưỡng</span></td>
        <td style="padding: 10px 12px; text-align: right; white-space: nowrap;">1.888.000đ</td>
      </tr>
    </table>

    <hr style="border: none; border-top: 1px solid #e8dfc8; margin: 28px 0;">

    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px;">
      Nestiva không muốn bạn mua vì áp lực hay vì khuyến mãi.
    </p>
    <p style="font-size: 16px; line-height: 1.8; margin: 0 0 28px;">
      Mình muốn bạn chọn vì bạn thấy đây là điều <strong>thật sự tốt</strong> — cho bản thân hoặc cho người bạn quan tâm.
    </p>

    <div style="text-align: center; margin: 0 0 28px;">
      <a href="https://nestiva.vn" style="display: inline-block; background: linear-gradient(135deg, #C9A84C 0%, #a07830 100%); color: #fff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: bold; letter-spacing: 0.5px;">
        🛒 Xem toàn bộ sản phẩm & đặt hàng tại đây
      </a>
    </div>

    <p style="font-size: 15px; line-height: 1.7; text-align: center; color: #888; margin: 0 0 32px;">
      Hoặc nhắn tin trực tiếp — Nestiva luôn sẵn lòng tư vấn để bạn chọn được đúng thứ mình cần.
    </p>

    <p style="font-size: 15px; color: #888; margin: 0;">Trân quý bạn,<br><strong style="color: #C9A84C;">Nestiva</strong> 🌿<br><em>Dưỡng lành từ tâm · Trao trọn ân tình</em></p>
  </div>

  <div style="background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 12px; color: #999;">
    © Nestiva · Tổ yến cho cuộc sống trọn vẹn
  </div>
</div>`;
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
        subject: '✅ Xác nhận đơn hàng - Nestiva',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #C9A84C;">Xác nhận đơn hàng</h2>
            <p>Chào ${name},</p>
            <p>Cảm ơn bạn đã đặt hàng tại Nestiva!</p>
            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Thông tin đơn hàng:</h3>
              <p><strong>Sản phẩm:</strong> ${product}</p>
              <p><strong>Số điện thoại:</strong> ${phone}</p>
            </div>
            <p>Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút để xác nhận và giao hàng.</p>
            <p style="color: #666;">Trân trọng,<br>Đội ngũ Nestiva</p>
          </div>
        `,
      });
      return res.status(200).json({ success: true, id: data.id });
    }

    // ── Waitlist email sequence ─────────────────────────────────────────────
    if (type === 'waitlist') {
      const isTestMode = email.includes('+test');

      // Email 1 — send immediately
      const result1 = await sendEmail({
        to: email,
        subject: 'Cảm ơn bạn đã ghé 🌿 Nestiva rất vui được quen',
        html: email1Html(name || 'bạn'),
      });

      if (isTestMode) {
        // TEST MODE: send all 3 right away (small delay so they arrive in order)
        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Điều ít người biết về tổ yến — và tại sao thời điểm dùng lại quan trọng hơn liều lượng',
          html: email2Html(name || 'bạn'),
        });

        await sleep(2000);
        await sendEmail({
          to: email,
          subject: 'Nestiva có một điều muốn gửi đến bạn 🌿',
          html: email3Html(name || 'bạn'),
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
        subject: 'Điều ít người biết về tổ yến — và tại sao thời điểm dùng lại quan trọng hơn liều lượng',
        html: email2Html(name || 'bạn'),
        scheduledAt: sendAt2.toISOString(),
      });

      const result3 = await resend.emails.send({
        from: 'Nestiva <noreply@nestiva.vn>',
        to: [email],
        subject: 'Nestiva có một điều muốn gửi đến bạn 🌿',
        html: email3Html(name || 'bạn'),
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
