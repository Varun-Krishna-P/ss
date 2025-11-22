import { MailtrapClient } from "mailtrap";
import { useContactConfig } from "./useContactConfig";
import { useAppConfig } from "./useAppConfig";
import { EMAIL_CONFIRMATION_TEMPLATE, EMAIL_NOTIFICATION_TEMPLATE } from "../constants/email_body";

interface User {
    name: string;
    email: string;
    phone: string;
}


export const sendMail = async (user: User, subject: string, message: string) => {
    const { email: from_email } = useContactConfig();
    const { site_name} = useAppConfig()

    const client = new MailtrapClient({
        token: process.env.MAILTRAP_API_KEY || '',
    });

    client.send({
        from: {email: user.email, name: user.name},
        to: [{ email: from_email, name: site_name }],
        subject: subject,
        text: EMAIL_NOTIFICATION_TEMPLATE(user.name, user.email, message, user.phone),
    }).then(() => {
        console.log('Email sent successfully');
        // send confirmation email
        return client.send({
            from: from_email,
            to: [{ email: user.email, name: user.name }],
            subject: 'Confirmation: We received your message',
            text: EMAIL_CONFIRMATION_TEMPLATE(user.name, site_name),
        });
    }).catch((error) => {
        console.error('Error sending email:', error);
    });
}