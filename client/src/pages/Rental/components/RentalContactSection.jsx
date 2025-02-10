import { useState, useEffect, createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { HiPhone } from 'react-icons/hi2';
import { BsFillEnvelopeFill } from 'react-icons/bs';

export default function ContactRental() {
  const recaptchaRef = createRef();
  const environment = import.meta.env.VITE_ENV;
  const keyCaptcha = import.meta.env.VITE_SITE_KEY;
  const fakeKeyCaptcha = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  const apiUrl =
    import.meta.env.VITE_ENV === 'production'
      ? import.meta.env.VITE_API_URL
      : 'http://localhost:8888/';

  // const { showToast } = useToast();

  useEffect(() => {
    // Défiler vers le haut de la page
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'création atelier',
    message: '',
    conditionsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const getCategoryText = (value) => {
    switch (value) {
      case 'création atelier':
        return 'Création d’atelier.';
      case 'location local':
        return 'Devis de location local.';
      case 'location local + bar':
        return 'Devis de location local + bar.';
      case 'location local + bar + traiteur':
        return 'Devis de location local + bar + traiteur.';
      case 'location cabinet':
        return 'Devis de location cabinet.';
      case 'location local + cabinet':
        return 'Devis de location local + cabinet.';
      case 'autres':
        return 'Autres';
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData); // Log pour débogage
    setFormData({
      ...formData,
      errorMessage: '',
      successMessage: '',
    });

    if (formData.conditionsAccepted === false) {
      alert(
        'Vous devez accepter les politiques de confidentialité.',
        'warning'
      );
      return;
    }

    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      alert('Veuillez vérifier le Captcha.', 'warning');
    } else {
      try {
        const response = await fetch(`${apiUrl}send-contact-business`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            category: getCategoryText(formData.category), // Utilisation de la fonction pour obtenir le texte
            message: formData.message,
          }),
        });

        if (!response.ok) {
          setFormData({
            ...formData,
            errorMessage: "Erreur lors de l'envoi du mail",
          });
          return;
        }

        const data = await response.json();
        if (data.errors) {
          setFormData({
            ...formData,
            errorMessage: data?.message,
          });
          return;
        }

        alert(
          'Nous avons bien reçu votre message et vous remercions de votre intérêt. Notre équipe vous répondra dans les meilleurs délais.',
          'success'
        );
        console.info(formData.name, formData.email);
      } catch (error) {
        console.error(error);
        alert("Échec de l'envoi. Veuillez réessayer plus tard.", 'error');
      }
    }
  };

  return (
    <div className="flex flex-col p-8 text-white bg-zinc-900 md:flex-row md:p-16">
      <div className="mb-8 lg:mx-24 md:w-1/2 md:mb-0">
        {/* <!-- Header section --> */}
        <div id="votre-devis-personnalisé" className=" 2xl:ml-48 lg:max-w-lg">
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
        {/* <!--  Phone, Mail section --> */}
        <div className="pt-4 space-y-4 2xl:ml-48">
          <div className="flex items-center">
            <HiPhone
              aria-hidden="true"
              className="flex-none w-5 h-5 mt-1 mr-2 text-sky-500"
            />
            <span>+33 6 46 84 93 52</span>
          </div>
          <div className="flex items-center">
            <BsFillEnvelopeFill
              aria-hidden="true"
              className="flex-none w-5 h-5 mt-1 mr-2 text-sky-500"
            />
            <span>contact@luminescence33.com</span>
          </div>
        </div>
      </div>
      {/* <!-- Formulary section --> */}
      <div className="p-8 rounded-lg lg:mx-24 2xl:mr-80 bg-zinc-800 md:w-1/2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm" htmlFor="name">
                Nom / Entreprise
              </label>
              <input
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-sky-500"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John DOE / DOECORP."
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-sky-500"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@exemple.com"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm" htmlFor="phone">
              N° Téléphone
            </label>
            <input
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-sky-500"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 06 06 06 06"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm" htmlFor="category">
              Quel est votre envie ?
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-sky-500"
              required
            >
              <option value="création atelier">Création d’atelier.</option>
              <option value="location local">Devis de location local.</option>
              <option value="location local + bar">
                Devis de location local + bar.
              </option>
              <option value="location local + bar + traiteur">
                Devis de location local + bar + traiteur.
              </option>
              <option value="location cabinet">
                Devis de location cabinet.
              </option>
              <option value="location local + cabinet">
                Devis de location local + cabinet.
              </option>
              <option value="autres">Autres</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-sky-500"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dîtes-nous en plus..."
            ></textarea>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="conditionsAccepted"
              name="conditionsAccepted"
              checked={formData.conditionsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="conditionsAccepted" className="text-sm">
              J&apos;accepte et je comprends la{' '}
              <a
                href="/politique-confidentialite"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
              >
                politique de confidentialité{' '}
              </a>
              .
            </label>
          </div>

          <div className="flex justify-start mt-4">
            <ReCAPTCHA
              className="-ml-8 scale-75 lg:ml-0 lg:scale-100"
              ref={recaptchaRef}
              sitekey={
                environment === 'production' ? keyCaptcha : fakeKeyCaptcha
              }
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 rounded bg-sky-600 hover:bg-sky-700 focus:outline-none focus:bg-sky-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
