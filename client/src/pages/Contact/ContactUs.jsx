import { useEffect } from 'react';
import ContactForm from '../../components/form/ContactForm';
import { useContactForm } from '../../hooks/useContactForm';
import ContactPicture from '../../assets/img/ContactPicture.svg';

export default function ContactUS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const environment = import.meta.env.VITE_ENV;
  const keyCaptcha = import.meta.env.VITE_SITE_KEY;
  const fakeKeyCaptcha = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
  const apiUrl =
    environment === 'production'
      ? import.meta.env.VITE_API_URL
      : 'http://localhost:8888/';

  const initialState = {
    name: '',
    email: '',
    phone: '',
    category: 'atelier',
    message: '',
    conditionsAccepted: false,
  };

  const {
    formData,
    handleChange,
    handleSubmit,
    message,
    recaptchaRef,
    isLoading,
  } = useContactForm(initialState, apiUrl);

  return (
    <section className="min-h-screen bg-sky-50">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-32 lg:flex lg:items-start lg:justify-between">
          {/* Formulaire */}
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-2xl font-semibold font-kreon text-zinc-800 lg:text-3xl">
              Comment nous contacter ?
            </h1>
            <p className="mt-4 text-zinc-500">
              Pour toutes questions, n&apos;hésitez pas à nous écrire. Nous vous
              contacterons dans les plus brefs délais.
            </p>
            <p className="mt-4 text-zinc-500">
              Pour un devis personnalisé,{' '}
              <a
                className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
                href="/location"
              >
                cliquez ici
              </a>
              .
            </p>

            <ContactForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              recaptchaRef={recaptchaRef}
              siteKey={
                environment === 'production' ? keyCaptcha : fakeKeyCaptcha
              }
              message={message}
              isLoading={isLoading}
            />
          </div>

          {/* Détails de contact et image */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="mt-6">
              <img
                className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src={ContactPicture}
                alt="Image de contact"
              />
            </div>
            {/* Vous pouvez ici placer d'autres détails (adresse, réseaux sociaux, etc.) */}
          </div>
        </div>
      </div>
    </section>
  );
}
