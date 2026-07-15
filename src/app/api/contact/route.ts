import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, checkIn, checkOut, guests, room, message } = data;

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Replace with smtp.gmail.com if using Google Workspace
      port: 465,
      secure: true,
      auth: {
        user: 'info@preettech.com',
        pass: 'PreetTech08@123',
      },
    });

    const mailOptions = {
      from: 'info@preettech.com',
      to: 'Uttarayanthehomestay6@gmail.com',
      subject: `New Booking Inquiry: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w-2xl; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #8A2E1E; padding-bottom: 10px;">New Booking Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Check-In:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${checkIn}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Check-Out:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${checkOut}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Guests:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${guests}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Room Preference:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${room}</td>
            </tr>
            <tr>
              <td style="padding: 10px;"><strong>Special Requests:</strong></td>
              <td style="padding: 10px;">${message || 'None'}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
