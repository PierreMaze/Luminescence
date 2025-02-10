import { useState } from 'react';
import { HiCalendarDays, HiArrowPath } from 'react-icons/hi2';
import { sendEmail } from '../features/emailjs/EmailService.jsx';

import NewsletterForm from './form/NewsletterForm.jsx';

export default function Newsletter() {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
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

    const success = await sendEmail(formData, setMessage);

    if (success) {
      setFormData({
        from_name: '',
        email: '',
        conditionsAccepted: false,
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
            />
            {message && (
              <p
                className={`mt-2 text-sm ${message.isSuccess ? 'text-sky-200' : 'text-orange-500'}`}
              >
                {message.text}
              </p>
            )}

            <p className="pt-2 text-xs">
              En soumettant ce formulaire, j&apos;accepte que Luminescence
              collecte, traite et conserve mes données conformément à sa{' '}
              <a
                href="/politique-confidentialite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
              >
                Politique de Confidentialité
              </a>
              .
            </p>
            <p className="text-xs mt-2 italic text-sky-50">
              (Uniquement pour l&apos;envoi de la newsletter)
            </p>
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
