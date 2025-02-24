import { useState, useRef } from 'react';

export function useContactForm(initialState, apiUrl) {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.conditionsAccepted) {
      setMessage({
        text: 'Vous devez accepter les politiques de confidentialité.',
        isSuccess: false,
      });
      return;
    }

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setMessage({ text: 'Veuillez vérifier le Captcha.', isSuccess: false });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}send-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.errors) {
        setMessage({ text: data.message, isSuccess: false });
      } else {
        setMessage({
          text: 'Nous avons bien reçu votre message. Merci !',
          isSuccess: true,
        });
        setFormData(initialState);
      }
    } catch (error) {
      console.error(error);
      setMessage({
        text: "Échec de l'envoi. Veuillez réessayer plus tard.",
        isSuccess: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    message,
    recaptchaRef,
    isLoading,
  };
}
