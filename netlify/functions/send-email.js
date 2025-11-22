import { MailtrapClient } from "mailtrap";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);

    const client = new MailtrapClient({
      token: process.env.MAILTRAP_TOKEN,
    });

    await client.send({
      from: { email: `${body.from_email} || "no-reply@vedavid.com"` },
      to: [{ email: body.email, name: body.name }],
      subject: body.subject || "New Request",
      text: `
        Name: ${body.name}
        Phone: ${body.phone}
        Email: ${body.email}
        Message:
            ${body.message}
        `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
