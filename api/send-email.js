import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, email, name, phone, product } = req.body;

    let emailData = {};

    // Different email templates based on type
    switch (type) {
      case 'waitlist':
        emailData = {
          from: 'Nestiva <noreply@nestiva.vn>',
          to: [email],
          subject: '🌿 Chào mừng bạn đến với Nestiva - Ưu đãi 20% đặc biệt!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #C9A84C;">Chào ${name}!</h2>
              <p>Cảm ơn bạn đã quan tâm đến sản phẩm yến sào cao cấp Nestiva.</p>
              <p>Chúng tôi rất vui mừng được chào đón bạn vào danh sách ưu tiên!</p>
              
              <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #C9A84C;">🎁 Ưu đãi đặc biệt dành cho bạn:</h3>
                <ul>
                  <li>Giảm 20% cho đơn hàng đầu tiên</li>
                  <li>Miễn phí giao hàng toàn quốc</li>
                  <li>Tư vấn 1-1 với chuyên gia dinh dưỡng</li>
                </ul>
              </div>
              
              <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để tư vấn sản phẩm phù hợp.</p>
              
              <p style="color: #666;">Trân trọng,<br>Đội ngũ Nestiva</p>
            </div>
          `
        };
        break;

      case 'order_confirmation':
        emailData = {
          from: 'Nestiva <noreply@nestiva.vn>',
          to: [email],
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
          `
        };
        break;

      default:
        return res.status(400).json({ error: 'Invalid email type' });
    }

    const data = await resend.emails.send(emailData);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}