import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  company: string;
  email: string;
  challenge: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS configuration is missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env.local file');
    return false;
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_company: data.company,
      from_email: data.email,
      message: data.challenge,
      to_email: 'founders@contentviking.ca',
    };

    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

