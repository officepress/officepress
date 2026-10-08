declare module 'nodemailer' {
 const nodemailer: { createTransport(options: unknown): { sendMail(message: unknown): Promise<{ accepted?: unknown[]; rejected?: unknown[]; messageId?: string }>; close(): void } };
 export default nodemailer;
}
