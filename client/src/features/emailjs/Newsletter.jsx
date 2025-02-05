import { useState, useCallback } from 'react';
import { HiCalendarDays, HiArrowPath } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

import NewsletterForm from '../../components/form/NewsletterForm.jsx';

export default function Newsletter() {
  const {
    VITE_SERVICE_ID_EMAILJS,
    VITE_TEMPLATE_ID_EMAILJS,
    VITE_PUBLIC_KEY_EMAILJS,
  } = import.meta.env;

  const [formData, setFormData] = useState({ from_name: '', email: '' });
  const [message, setMessage] = useState(null);

  const handleChange = useCallback(
    (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      if (message) setMessage(null);
    },
    [message]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.from_name || !formData.email) {
      return setMessage({
        text: 'Veuillez remplir tous les champs requis.',
        isSuccess: false,
      });
    }

    try {
      await emailjs.send(
        VITE_SERVICE_ID_EMAILJS,
        VITE_TEMPLATE_ID_EMAILJS,
        formData,
        VITE_PUBLIC_KEY_EMAILJS
      );
      setMessage({ text: 'Merci pour votre inscription !', isSuccess: true });
      setFormData({ from_name: '', email: '' });
    } catch {
      setMessage({
        text: "Une erreur s'est produite, veuillez réessayer plus tard...",
        isSuccess: false,
      });
    }
  };

  // 📌 Objet de mapping des champs du formulaire (RESTE DANS `Newsletter.jsx`)
  const newsletterFields = [
    {
      name: 'from_name',
      type: 'text',
      placeholder: 'Nom / Entreprise',
      autoComplete: 'name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'johndoe@exemple.com',
      autoComplete: 'email',
    },
  ];

  return (
    <div className="pt-8 pb-16 md:mx-10 2xl:mx-2 isolate sm:pb-24 border-sky-200">
      <div className="w-full px-8 mx-auto lg:max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-2xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-kreon">
              Abonnez-vous à notre newsletter.
            </h2>
            <p className="mt-4 leading-8 text-gray-300">
              En vous abonnant à notre newsletter, vous profitez de contenus
              exclusifs et des dernières mises à jour.
            </p>
            <p className="text-xs text-sky-300">
              Soyez les premiers à en être informés !
            </p>

            <NewsletterForm
              fields={newsletterFields}
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              message={message}
            />
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {[
              {
                icon: HiCalendarDays,
                title: 'Articles hebdomadaires',
                text: "L'essentiel de chaque semaine vous attend dans votre boîte !",
              },
              {
                icon: HiArrowPath,
                title: 'Mise à jour',
                text: 'Restez au courant des dernières évolutions de notre site !',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-start">
                <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                  <Icon className="text-white size-6" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">{title}</dt>
                <dd className="mt-2 leading-7 text-left text-gray-400">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
