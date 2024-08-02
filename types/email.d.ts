export interface SendEmailProps {
    senderName?: string;
    to: string;
    subject: string;
    text: string;
    html?: string;
}
