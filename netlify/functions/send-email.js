import { MailtrapClient } from "mailtrap";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);

    const client = new MailtrapClient({
      token: process.env.MAILTRAP_TOKEN,
    });

    await client.send({
      from: {
        email: body.app_email || "no-reply@vedavid.in",
        name: body.site_name || "VedaVid",
      },
      to: [{ email: body.from_email }],
      subject: body.subject || "New Request",
      html: `
       <html>
        <body>
          <h2 align="center">I would like to request the details for the following:</h2>
          <table width="600" style="border:1px solid #333">          
            <tr>
              <td align="center">Name</td>
              <td align="center">${body.name}</td>
            </tr>
            <tr>
              <td align="center">Email</td>
              <td align="center">${body.email}</td>
            </tr>
            <tr>
              <td align="center">Phone</td>
              <td align="center">${body.phone}</td>
            </tr>
            <tr>  
              <td align="center">Message</td>
              <td align="center">${body.message}</td>
            </tr>
            </tr>
          </table>
          </body>
        </html>
        `,
      category: `${body.site_name} - Contact Form`,
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
