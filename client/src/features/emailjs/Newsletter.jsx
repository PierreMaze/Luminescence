import { useState } from 'react';
import { HiCalendarDays, HiArrowPath } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
  // const environment = import.meta.env.VITE_ENVIRONMENT || 'local';

  const serviceId = import.meta.env.VITE_SERVICE_ID_EMAILJS;
  const templateId = import.meta.env.VITE_TEMPLATE_ID_EMAILJS;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;
  // const testEmail = import.meta.env.VITE_TEST_EMAILJS;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('🔍 Vérification avant validation :', formData);

    const { name, email } = formData;
    if (!name || !email) {
      console.log('❌ Les champs Nom / Email sont requis.');
      setMessage('Veuillez remplir tous les champs requis.');
      return setIsSuccess(false);
    }

    console.log(`🛠️ Envoi en cours...`);

    const variables = {
      from_name: name,
      email,
    };

    console.log('📤 Données envoyées à EmailJS :', variables);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        variables,
        publicKey
      );
      console.log('✅ Email envoyé avec succès :', response);
      setIsSuccess(true);
      setMessage('Merci pour votre inscription !');
    } catch (error) {
      console.error('❌ Erreur lors de l’envoi :', error);
      setMessage("Une erreur s'est produite, veuillez réessayer plus tard...");
      setIsSuccess(false);
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
              className="flex flex-col max-w-xs gap-4 mx-auto mt-6 sm:max-w-xs lg:mx-0 lg:max-w-xl lg:flex-row lg:gap-x-4"
            >
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nom / Entreprise"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              />
              <input
                id="email-address"
                name="email"
                type="email"
                placeholder="johndoe@exemple.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md duration-300 ease-in-out delay-100 bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                S&apos;abonner
              </button>
            </form>
            {message && (
              <p
                className={`mt-2 text-sm ${isSuccess ? 'text-sky-200' : 'text-orange-500'}`}
              >
                {message}
              </p>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <HiCalendarDays
                  aria-hidden="true"
                  className="text-white size-6"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Articles hebdomadaires
              </dt>
              <dd className="mt-2 leading-7 text-left text-gray-400">
                L&apos;essentiel de chaque semaine vous attend dans votre boîte
                : restez informé avec notre résumé hebdomadaire !
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <HiArrowPath aria-hidden="true" className="text-white size-6" />
              </div>
              <dt className="mt-4 font-semibold text-white">Mise à jour</dt>
              <dd className="mt-2 leading-7 text-left text-gray-400">
                Restez au courant des dernières évolutions de notre site !
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
