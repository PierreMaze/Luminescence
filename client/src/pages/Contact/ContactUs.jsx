import { useState, useEffect, createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import ContactPicture from '../../assets/img/ContactPicture.svg';

const getCategoryText = (value) => {
  switch (value) {
    case 'atelier':
      return 'Questions sur la création d’atelier.';
    case 'evenement':
      return 'Questions à propos des évènements à Luminescence.';
    case 'bar':
      return 'Questions à propos du bar.';
    case 'location':
      return 'Questions à propos de la location.';
    case 'traiteur':
      return 'Questions à propos du traiteur.';
    case 'cabinet':
      return 'Questions à propos du cabinet.';
    case 'autres':
      return 'Autres';
    default:
      return '';
  }
};

export default function ContactUS() {
  const recaptchaRef = createRef();
  // const { showToast } = useToast();
  const environment = import.meta.env.VITE_ENV;
  const keyCaptcha = import.meta.env.VITE_SITE_KEY;
  const fakeKeyCaptcha = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  const apiUrl =
    environment === 'production'
      ? import.meta.env.VITE_API_URL
      : 'http://localhost:8888/';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'atelier',
    message: '',
    conditionsAccepted: false,
    errorMessage: '',
    successMessage: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
            category: getCategoryText(formData.category),
            message: formData.message,
          }),
        });

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
      } catch (error) {
        console.error(error);
        alert("Échec de l'envoi. Veuillez réessayer plus tard.", 'error');
      }
    }
  };

  return (
    <section className="min-h-screen bg-zinc-100">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-32 lg:flex lg:items-start lg:justify-between">
          {/* Section Left Formulary */}
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-2xl font-semibold capitalize font-kreon text-zinc-800 lg:text-3xl">
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
                cliquer ici
              </a>
              .
            </p>

            <form className="mt-12" onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-zinc-600">
                    Nom / Entreprise
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John DOE / DOECORP."
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 bg-white border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-zinc-600">
                    N° Téléphone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="06 06 06 06 06"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-5 py-3 mt-2 bg-white border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-zinc-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-5 py-3 mt-2 bg-white border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-zinc-600">
                  Quel est votre sujet ?
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="block w-full px-5 py-3 mt-2 bg-white border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="atelier">
                    Questions sur la création d’atelier.
                  </option>
                  <option value="evenement">
                    Questions à propos des évènements à Luminescence.
                  </option>
                  <option value="bar">Questions à propos du bar.</option>
                  <option value="location">
                    Questions à propos de la location.
                  </option>
                  <option value="traiteur">
                    Questions à propos du traiteur.
                  </option>
                  <option value="cabinet">
                    Questions à propos du cabinet.
                  </option>
                  <option value="autres">Autres..</option>
                </select>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-zinc-600">
                  Message
                </label>
                <textarea
                  name="message"
                  className="block w-full h-32 px-5 py-3 mt-2 bg-white border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 md:h-56 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Dîtes-nous en plus..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  name="conditionsAccepted"
                  checked={formData.conditionsAccepted}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-sm text-zinc-600">
                  J&apos;accepte et je comprends la{' '}
                  <a
                    href="/politique-confidentialite"
                    rel="noopener noreferrer"
                    className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
                  >
                    politique de confidentialité{' '}
                  </a>
                  .
                </label>
              </div>

              <div className="mt-4">
                <ReCAPTCHA
                  className="recaptcha"
                  ref={recaptchaRef}
                  sitekey={
                    environment === 'production' ? keyCaptcha : fakeKeyCaptcha
                  }
                />
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-md text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40">
                Envoyer
              </button>
            </form>
          </div>

          {/* Section Right Contact details & Social network */}
          <div className="lg:w-1/2 lg:pl-10">
            <div className="mt-6">
              <img
                className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src={ContactPicture}
                alt="Contact Image"
              />
            </div>
            {/* <!-- Contact details container --> */}
            <div className="mt-6 space-y-8 md:mt-8">
              {/* <!-- Adresse container --> */}
              <p className="flex items-start -mx-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-sky-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a
                  href="https://www.google.fr/maps/place/LUMINESCENCE/@44.638864,-1.0605077,19z/data=!3m1!4b1!4m6!3m5!1s0xd5499415bca91f7:0x1f53aae507216527!8m2!3d44.638863!4d-1.059864!16s%2Fg%2F11y43t5xvv?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center mx-2 mb-4 cursor-pointer text-zinc-700 w-72 text-wrap md:justify-start group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2 group-hover:decoration-sky-600"
                >
                  108 Place de la Claire, 2 ème étage (Ascenseur), 33470
                  Gujan-Mestras
                </a>
              </p>
              {/* <!-- Phone container --> */}
              <p className="flex items-start -mx-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-sky-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a
                  href="tel:+33 6 46 84 93 52"
                  rel="noreferrer"
                  className="flex mx-2 mb-4 truncate cursor-pointer text-zinc-700 w-72 tabular-nums md:justify-start group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2 group-hover:decoration-sky-600"
                >
                  (+33) 06 46 84 93 52
                </a>
              </p>
              {/* <!-- Email container --> */}
              <p className="flex items-start -mx-2 cursor-pointer group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-sky-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:contact@luminescence33.com"
                  rel="noreferrer"
                  className="flex mx-2 mb-4 truncate text-zinc-700 w-72 md:justify-start group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2 group-hover:decoration-sky-600"
                >
                  contact@luminescence33.com
                </a>
              </p>
            </div>
            {/* <!-- Social network icons container --> */}
            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-zinc-600 ">Suivez-nous :</h3>

              <div className="flex mt-4 -mx-1.5 ">
                {/* <!-- Facebook icons container --> */}
                <a
                  href="https://www.facebook.com/profile.php?id=61560269117702"
                  target="_blank"
                  rel="noreferrer"
                  title="Page Facebook"
                  alt="Page Facebook"
                  className="mx-1.5 text-zinc-600 transition-colors duration-300 transform hover:text-sky-500"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                {/* <!-- Instagram icons container --> */}
                <a
                  href="https://www.instagram.com/luminescence333"
                  target="_blank"
                  rel="noreferrer"
                  title="Page Instagram"
                  alt="Page Instagram"
                  className="mx-1.5 text-zinc-600 transition-colors duration-300 transform hover:text-sky-500"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                {/* <!-- Tik Tok icons container --> */}
                <a
                  href="https://www.tiktok.com/@luminescence.gujan?_t=8nIvyDlMPVR&_r=1"
                  target="_blank"
                  rel="noreferrer"
                  title="Page Tik Tok"
                  alt="Page Tik Tok"
                  className="mt-1 mx-1.5 text-zinc-600 transition-colors duration-300 transform hover:text-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" size-6"
                    fill="currentColor"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 449.45 515.38"
                  >
                    <path
                      fillRule="nonzero"
                      d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"
                    />
                  </svg>
                </a>
                {/* <!-- Linkedin icons container --> */}
                <a
                  href="https://www.linkedin.com/in/frederique-caignard-609a22159/"
                  target="_blank"
                  rel="noreferrer"
                  title="Page Linkedin"
                  alt="Page Linkedin"
                  className="mx-1.5 text-zinc-600 transition-colors duration-300 transform hover:text-sky-500"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                {/* <!-- Youtuube icons container --> */}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="Page Youtube"
                  alt="Page Youtube"
                  className="mt-1 mx-1.5 text-zinc-600 transition-colors duration-300 transform hover:text-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="currentColor"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z" />
                  </svg>
                </a>
                {/* <!-- Whatsapp icons container --> */}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  title="Notre groupe whatsapp"
                  alt="Notre groupe whatsapp"
                  className="mt-1 mx-1.5 text-zinc-600 transition-colors duration-300 transform hover:text-sky-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="size-6"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
