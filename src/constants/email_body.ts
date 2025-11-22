
export const EMAIL_CONFIRMATION_TEMPLATE = (name: string, message?: string, signature?: string) => `Dear ${name},

Thank you for reaching out to us. We have received your message:

"${message ?? 'We appreciate your interest and we will get back to you at the earliest.'}"


Best regard,
"${signature || 'The Team'}
`;

export const EMAIL_NOTIFICATION_TEMPLATE = (name: string, email: string, message: string, phone?: string) => `New request received:

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Would like to get in touch with you regarding the following
Message:
${message}
`;