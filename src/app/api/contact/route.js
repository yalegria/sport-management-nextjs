import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Extract form data from the request body
    const { name, email, message } = await request.json();

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Ensure this is the app password if using 2FA
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // or specify a different recipient email
      subject: 'New Contact Form Submission',
      text: `
        You have a new message from ${name} (${email}):

        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message in JSON format
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    // Respond with an error message in JSON format
    return new Response(
      JSON.stringify({ message: 'Failed to send email. Please try again.' }),
      { status: 500 }
    );
  }
}