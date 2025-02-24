// src/hooks/useContactForm.jsx
import { useState, useRef } from 'react';
import { sendEmail } from '../features/emailjs/EmailService.jsx';

export function useContactForm(initialState) {
  const [formData, setFormData] = useState({
    ...initialState,
    conditionsAccepted: initialState.conditionsAccepted ?? false,
  });

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification que la politique de confidentialité a bien été acceptée
    if (!formData.conditionsAccepted) {
      setMessage({
        text: 'Vous devez accepter la politique de confidentialité pour continuer.',
        isSuccess: false,
      });
      return;
    }

    // Vérification du ReCAPTCHA si présent
    if (recaptchaRef.current && !recaptchaRef.current.getValue()) {
      setMessage({ text: 'Veuillez vérifier le Captcha.', isSuccess: false });
      return;
    }

    setIsLoading(true);

    const success = await sendEmail(formData, setMessage);

    if (success) {
      setFormData({
        ...initialState,
        conditionsAccepted: initialState.conditionsAccepted ?? false,
      });
    }

    setIsLoading(false);
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
