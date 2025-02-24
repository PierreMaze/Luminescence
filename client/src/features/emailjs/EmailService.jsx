import emailjs from '@emailjs/browser';

export const sendEmail = async (formData, setMessage) => {
  const {
    VITE_SERVICE_ID_EMAILJS,
    VITE_TEMPLATE_ID_EMAILJS,
    VITE_PUBLIC_KEY_EMAILJS,
  } = import.meta.env;

  try {
    await emailjs.send(
      VITE_SERVICE_ID_EMAILJS,
      VITE_TEMPLATE_ID_EMAILJS,
      formData,
      VITE_PUBLIC_KEY_EMAILJS
    );

    setMessage({
      text: 'Merci ! Votre demande a été envoyée avec succès.',
      isSuccess: true,
    });

    return true;
  } catch {
    setMessage({
      text: "Une erreur s'est produite, veuillez réessayer plus tard...",
      isSuccess: false,
    });

    return false;
  }
};
