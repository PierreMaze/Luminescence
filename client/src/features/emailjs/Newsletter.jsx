import { useState, useCallback } from 'react';
import { HiCalendarDays, HiArrowPath } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

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

            <form
              onSubmit={handleSubmit}
              className="flex flex-col max-w-xs gap-4 mx-auto mt-6 lg:mx-0 lg:max-w-xl lg:flex-row lg:gap-x-4"
            >
              {[
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
              ].map(({ name, type, placeholder, autoComplete }) => (
                <input
                  key={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  value={formData[name]}
                  onChange={handleChange}
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
              ))}
              <button
                type="submit"
                className="flex-none rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600"
              >
                S&apos;abonner
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
