import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '../../features/emailjs/EmailService.jsx';

export default function ContactForm() {
  const recaptchaRef = useRef();
  const { VITE_ENV, VITE_CAPTCHA_KEY } = import.meta.env;
  const fakeKeyCaptcha = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    category: 'création atelier',
    message: '',
    conditionsAccepted: false,
  });

  const [message, setMessage] = useState(null);

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

    const success = await sendEmail(formData, setMessage);

    if (success) {
      setFormData({
        from_name: '',
        email: '',
        phone: '',
        category: 'création atelier',
        message: '',
        conditionsAccepted: false,
      });
    }
  };

  return (
    <div className="p-8 rounded-lg lg:mx-24 2xl:mr-80 bg-zinc-800 md:w-1/2">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          { name: 'from_name', type: 'text', placeholder: 'Nom / Entreprise' },
          { name: 'email', type: 'email', placeholder: 'Email' },
          { name: 'phone', type: 'tel', placeholder: 'N° Téléphone' },
          { name: 'message', type: 'textarea', placeholder: 'Message' },
        ].map(({ name, type, placeholder }) =>
          type === 'textarea' ? (
            <textarea
              key={name}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          ) : (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          )
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            name="conditionsAccepted"
            checked={formData.conditionsAccepted}
            onChange={handleChange}
            className="mr-2"
          />
          <label>J&apos;accepte la politique de confidentialité.</label>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={
            VITE_ENV === 'production' ? VITE_CAPTCHA_KEY : fakeKeyCaptcha
          }
          className="-ml-8 scale-75 lg:ml-0 lg:scale-100"
        />

        <button
          type="submit"
          className="w-full p-2 mt-4 rounded bg-sky-600 hover:bg-sky-700"
        >
          Envoyer
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${message.isSuccess ? 'text-sky-200' : 'text-orange-500'}`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
