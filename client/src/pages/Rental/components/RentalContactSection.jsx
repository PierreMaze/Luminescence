import { HiPhone } from 'react-icons/hi2';
import { BsFillEnvelopeFill } from 'react-icons/bs';

import ContactForm from '../../../components/form/ContactRentalForm.jsx';
import { useContactForm } from '../../../hooks/useContactForm.jsx';

export default function ContactRental() {
  const environment = import.meta.env.VITE_ENV;
  const keyCaptcha = import.meta.env.VITE_CAPTCHA_KEY;
  const fakeKeyCaptcha = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  const {
    formData,
    handleChange,
    handleSubmit,
    recaptchaRef,
    message,
    isLoading,
  } = useContactForm({
    from_name: '',
    email: '',
    phone: '',
    category: 'création atelier',
    message: '',
  });

  return (
    <div className="flex flex-col px-8 py-12 text-white bg-zinc-900 md:flex-row lg:px-16">
      <div className="lg:mx-24 md:w-1/2 2xl:mx-40">
        <div id="votre-devis-personnalisé" className="lg:max-w-lg">
          <p className="text-base font-semibold leading-7 2xl:text-lg text-sky-500">
            Comment peut-on
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight font-kreon text-sky-50 sm:text-4xl">
            Vous accompagner ?
          </h2>
          <p className="mt-8 leading-8 text-l text-zinc-400">
            Veuillez remplir le formulaire ci-dessous avec{' '}
            <strong>vos informations</strong> et <strong>vos besoins</strong>.
          </p>
          <p className="my-8 leading-8 text-l text-zinc-400">
            Nous vous contacterons dans les plus brefs délais pour{' '}
            <strong>vous proposer une solution adaptée et personnalisée</strong>
            .
          </p>
        </div>
        <div className="pt-4 space-y-4">
          <div className="flex items-center">
            <HiPhone className="flex-none w-5 h-5 mt-1 mr-2 text-sky-500" />
            <span>+33 6 46 84 93 52</span>
          </div>
          <div className="flex items-center">
            <BsFillEnvelopeFill className="flex-none w-5 h-5 mt-1 mr-2 text-sky-500" />
            <span>contact@luminescence33.com</span>
          </div>
        </div>
        <iframe
          src="https://lottie.host/embed/e7152349-9d83-4f7c-9d17-328de40712a0/BlOq0HrMqd.lottie"
          className="h-full mx-auto scale-125 pt-4"
        ></iframe>
      </div>
      <div className="lg:mx-24 md:w-1/2 2xl:mx-40">
        <ContactForm
          fields={[
            {
              name: 'from_name',
              type: 'text',
              placeholder: 'Nom / Entreprise',
            },
            { name: 'email', type: 'email', placeholder: 'Email' },
            { name: 'phone', type: 'tel', placeholder: 'N° Téléphone' },
            { name: 'message', type: 'textarea', placeholder: 'Message' },
          ]}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          recaptchaRef={recaptchaRef}
          siteKey={environment === 'production' ? keyCaptcha : fakeKeyCaptcha}
          message={message}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
