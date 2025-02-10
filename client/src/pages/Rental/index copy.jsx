// Header section for page Rental
import BgRental from '../../assets/images/BgLocation.webp';

const links = [
  { name: 'Privatisez le local', href: '#privatiser-le-local' },
  { name: 'Privatisez le cabinet de soins', href: '#privatiser-le-cabinet' },
  { name: 'Organisez votre événement', href: '#organiser-un-evenement' },
  { name: 'Devis personnalisé', href: '#votre-devis-personnalisé' },
];
const stats = [
  { name: 'Superficie totale', value: '150m²' },
  { name: 'Aménagez votre espace', value: 'Modulaire' },
  { name: "Capacité d'accueil", value: '+200' },
  { name: "À l'écoute de vos besoins", value: 'Sur mesure' },
];

// Local section for page Rental

import { PuzzlePieceIcon } from '@heroicons/react/20/solid';

import LocalPictureRentalCaroussel_1 from '../../assets/images/LocalPictureRentalCaroussel_1.webp';
import LocalPictureRentalCaroussel_2 from '../../assets/images/LocalPictureRentalCaroussel_2.webp';
import LocalPictureRentalCaroussel_3 from '../../assets/images/LocalPictureRentalCaroussel_3.webp';
import LocalPictureRentalCaroussel_4 from '../../assets/images/LocalPictureRentalCaroussel_4.webp';
import LocalPictureRentalCaroussel_5 from '../../assets/images/LocalPictureRentalCaroussel_5.webp';
import LocalPictureRentalCaroussel_6 from '../../assets/images/LocalPictureRentalCaroussel_6.webp';

import { Carousel, IconButton } from '@material-tailwind/react';

// Cabinet section for page Rental
import { MusicalNoteIcon, SparklesIcon } from '@heroicons/react/20/solid';

import { Sink } from '../../utils/FontAwesome.config';

import CabinetPictureRentalCaroussel_1 from '../../assets/images/CabinetPictureRentalCaroussel_1.webp';
import CabinetPictureRentalCaroussel_2 from '../../assets/images/CabinetPictureRentalCaroussel_2.webp';
import CabinetPictureRentalCaroussel_3 from '../../assets/images/CabinetPictureRentalCaroussel_3.webp';
import CabinetPictureRentalCaroussel_4 from '../../assets/images/CabinetPictureRentalCaroussel_4.webp';
import CabinetPictureRentalCaroussel_5 from '../../assets/images/CabinetPictureRentalCaroussel_5.webp';
import CabinetPictureRentalCaroussel_6 from '../../assets/images/CabinetPictureRentalCaroussel_6.webp';
import CabinetPictureRentalCaroussel_7 from '../../assets/images/CabinetPictureRentalCaroussel_7.webp';
import CabinetPictureRentalCaroussel_8 from '../../assets/images/CabinetPictureRentalCaroussel_8.webp';
import CabinetPictureRentalCaroussel_9 from '../../assets/images/CabinetPictureRentalCaroussel_9.webp';

// OrganizedEvent section for page Rental
import {
  StarIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
} from '@heroicons/react/20/solid';

{
  /* ContactRental section for page Rental */
}
import { useState, useEffect, createRef } from 'react';
// import useToast from "../../utils/Toast";
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

const Rental = () => {
  {
    /* ContactRental section for page Rental */
  }
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
    <>
      {/* Header section for page Rental */}
      <div className="relative pb-12 overflow-hidden lg:py-34 2xl:h-[40rem] lg:h-screen bg-zinc-900 isolate sm:pt-32">
        {/* <!-- Picture BG Header --> */}
        <img
          alt=""
          src={BgRental}
          className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center md:h-screen"
        />
        {/* <!-- 1st BG  Gradiant linear --> */}
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-20"
          />
        </div>
        {/* <!-- 2nd BG  Gradiant linear --> */}
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-20"
          />
        </div>
        {/* <!-- Rental Header content --> */}
        <div className="px-6 pt-40 mx-auto max-w-7xl lg:pt-8">
          {/* <!-- Header content (Title, Subtile, txt) --> */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight font-kreon text-sky-50 sm:text-6xl">
              Travaillez avec nous !
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Notre espace s&apos;adapte parfaitement à vos besoins, quelque
              soit votre événement.
            </p>
          </div>
          {/* <!-- Body content (Link & Stat) --> */}
          <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
            {/* <!-- Link anchor sections  --> */}
            <div className="grid grid-cols-1 text-base font-bold leading-7 tracking-wide text-sky-50 gap-x-8 gap-y-6 sm:grid-cols- 2 md:flex lg:gap-x-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-200 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-200"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            {/* <!-- Stats sections--> */}
            <dl className="grid grid-cols-1 gap-8 mt-16 font-normal sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-lg leading-7 text-zinc-50">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-sky-400">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Local section for page Rental */}
      <div className="relative px-6 py-12 overflow-hidden lg:py-24 bg-zinc-50 isolate lg:overflow-visible lg:px-0">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* <!-- Header section --> */}
          <div
            id="privatiser-le-local"
            className="lg:col-span-2 2xl:mx-80 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-sky-600 2xl:text-lg">
                  Privatisez
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight font-kreon text-zinc-900 sm:text-4xl">
                  Le Local
                </h2>
                <p className="mt-6 text-xl leading-8 text-zinc-700">
                  Trois espaces, trois ambiances.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Carrousel section --> */}
          <div className="px-8  -ml-12 lg:scale-[0.8]  lg:px-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Carousel
              className="w-screen -ml-2 lg:w-full rounded-xl"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-0 lg:left-4 -translate-y-2/4 flex justify-center items-center size-1  bg-sky-950/25 hover:bg-sky-950/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute flex justify-center items-center  top-2/4 right-4 lg:!right-4 -translate-y-2/4 size-1  bg-sky-950/25 hover:bg-sky-950/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              <img
                src={LocalPictureRentalCaroussel_1}
                alt="image 1"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={LocalPictureRentalCaroussel_2}
                alt="image 2"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={LocalPictureRentalCaroussel_3}
                alt="image 3"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={LocalPictureRentalCaroussel_4}
                alt="image 4"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={LocalPictureRentalCaroussel_5}
                alt="image 5"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={LocalPictureRentalCaroussel_6}
                alt="image 6"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
            </Carousel>
          </div>
          {/* <!-- Body section --> */}
          <div className="lg:col-span-2 2xl:mx-80 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-zinc-700 lg:max-w-lg">
                <p>
                  Découvrez nos espaces pour vos événements. Que vous organisiez
                  une soirée intime, une réunion d&apos;affaires ou une fête
                  grandiose, ils offrent le cadre idéal pour toutes vos
                  occasions. Plongez dans une ambiance unique et modulable selon
                  vos besoins.
                </p>

                <ul role="list" className="mt-8 space-y-8 text-zinc-600">
                  <li className="flex gap-x-3">
                    <PuzzlePieceIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-zinc-900">
                        Un Bar.
                      </strong>{' '}
                      Adapté pour vos réceptions et soirées, équipé pour vous
                      offrir le meilleur service.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <PuzzlePieceIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-zinc-900">
                        Un Open-Space.
                      </strong>{' '}
                      Un environnement modulable pour faire des ateliers
                      créatifs, des conférences inspirantes ou des sessions de
                      brainstorming productives, avec tout le confort
                      nécessaire.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <PuzzlePieceIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-zinc-900">
                        Un Rooftop.
                      </strong>{' '}
                      Un espace en plein air équipé de tentures pour vous
                      protéger du soleil, parfait pour des réceptions élégantes
                      et des moments mémorables.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Nos espaces se transforment selon vos besoins : louez-le(s)
                  prêt(s) à l&apos;emploi ou vide(s), pour une flexibilité
                  totale.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight font-kreon text-zinc-900">
                  Besoin que d&apos;un seul espace ?
                </h2>
                <p className="mt-6">
                  Nous effectuons des devis sur mesure, en fonction de vos
                  besoins, vos idées, vos envies. Tout est possible chez{' '}
                  <span className="font-bold">Luminescence</span> !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cabinet section for page Rental */}
      <div className="relative px-6 py-12 overflow-hidden bg-sky-50 isolate lg:py-24 lg:overflow-visible lg:px-0">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* <!-- Header section --> */}
          <div
            id="privatiser-le-cabinet"
            className=" 2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 2xl:text-lg text-sky-600">
                  Privatisez
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-kreon sm:text-4xl">
                  Le Cabinet de Soins
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Offrez-vous une parenthèse de sérénité.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Carrousel section --> */}
          <div className="px-8 -ml-12 lg:scale-[0.8] lg:px-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Carousel
              className="w-screen -ml-2 lg:w-full rounded-xl"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 flex justify-center items-center size-1  bg-sky-950/25 hover:bg-sky-950/50 left-0 lg:left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 flex justify-center items-center size-1  bg-sky-950/25 hover:bg-sky-950/50 right-4 lg:!right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              <img
                src={CabinetPictureRentalCaroussel_1}
                alt="image 1"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_2}
                alt="image 2"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_3}
                alt="image 3"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_4}
                alt="image 4"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_5}
                alt="image 5"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_6}
                alt="image 6"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_7}
                alt="image 7"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_8}
                alt="image 8"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
              <img
                src={CabinetPictureRentalCaroussel_9}
                alt="image 9"
                className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
              />
            </Carousel>
          </div>
          {/* <!-- Body section --> */}
          <div className="lg:col-span-2 2xl:mx-80 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Découvrez notre Cabinet de Soins, un espace entièrement
                  privatisable pour vous garantir une expérience de bien-être.
                  Que ce soit pour une session de détente ou un soin spécifique,
                  nous créons un environnement adapté et sur mesure pour vous.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <SparklesIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Table de massage.
                      </strong>{' '}
                      Profitez de notre table de massage, pour allier confort et
                      efficacité. Elle est le choix idéal pour transformer
                      chaque soin en un véritable moment de relaxation, que vous
                      soyez un professionnel ou un particulier.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Sink
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Confort et hygiène.
                      </strong>{' '}
                      Nous vous mettons à disposition une source d&apos;eau pour
                      votre hygiène. Chaque espace est soigneusement nettoyé et
                      désinfecté, garantissant un environnement sain et relaxant
                      pour chaque visite.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <MusicalNoteIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Enceinte Bluetooth.
                      </strong>{' '}
                      Notre enceinte Bluetooth offre une connectivité facile.
                      Elle vous permet de personnaliser l&apos;ambiance de vos
                      séances avec la musique de votre choix, ajoutant une
                      touche de détente supplémentaire à chaque moment.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Notre gamme d&apos;équipements est conçue pour maximiser votre
                  confort, améliorer votre expérience et garantir une détente
                  optimale à chaque visite.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-kreon">
                  Besoin de tranquillité ?
                </h2>
                <p className="mt-6">
                  Chez Luminescence, nous nous engageons à vous offrir un moment
                  de calme absolu. Nous ajusterons notre emploi du temps pour
                  répondre à vos besoins spécifiques, vos idées et vos envies.
                  Tout est possible chez{' '}
                  <span className="font-bold">Luminescence</span> !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OrganizedEvent section for page Rental */}
      <div className="relative px-6 py-12 overflow-hidden lg:py-24 bg-zinc-50 isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* <!-- Header section --> */}
          <div
            id="organiser-un-evenement"
            className=" 2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          >
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 2xl:text-lg text-sky-600">
                  Organisez
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-kreon sm:text-4xl">
                  Votre événement
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Réalisez l&apos;événement de vos rêves avec nous.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Picture section --> */}
          <div className="py-0 lg:px-8 lg:p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className=" size-80 lg:w-[28rem] lg:h-[28rem] flex-shrink-0 object-cover xl:w-[30rem] xl:h-[30rem] rounded-full 2xl:w-[40rem] 2xl:h-[40rem]"
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          {/* <!-- Body section --> */}
          <div className=" 2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Que vous planifiez une conférence animée, un atelier
                  inspirant, ou une soirée inoubliable, nous avons tout ce dont
                  vous avez besoin pour votre événement.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <StarIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Un espace sur-mesure pour chaque occasion.
                      </strong>{' '}
                      Que vous ayez besoin d&apos;une ambiance intime ou
                      d&apos;un lieu grandiose, nous avons l&apos;espace idéal
                      pour vous.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <RocketLaunchIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Équipements de pointe pour un impact maximal.
                      </strong>{' '}
                      Nos installations sont dotées d&apos;une connexion Wi-Fi,
                      et de tout le matériel nécessaire pour des présentations /
                      projections.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <BriefcaseIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 mt-1 text-sky-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Un service personnalisé, modulable selon vos désirs.
                      </strong>{' '}
                      De la planification initiale à la coordination le jour J,
                      nous nous occupons de tout : décoration, bar &
                      grignotages, support technique, et plus encore.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  <span className="font-semibold">
                    Pourquoi choisir Luminescence ?
                  </span>{' '}
                  Parce que nous croyons que chaque événement doit être une
                  expérience unique et mémorable.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-kreon">
                  Besoin de visibilité ?
                </h2>
                <p className="mt-6">
                  Nous vous aidons à promouvoir votre événement sur nos réseaux
                  sociaux pour maximiser sa portée et son impact. Possibilité
                  d&apos;élaboration, d&apos;impression de flyers et
                  d&apos;affiches. <br />
                  Tout est possible chez{' '}
                  <span className="font-bold font-kreon">Luminescence</span> !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ContactRental section for page Rental */}
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
              <strong>
                vous proposer une solution adaptée et personnalisée
              </strong>
              .
            </p>
          </div>
          {/* <!--  Phone, Mail section --> */}
          <div className="pt-4 space-y-4 2xl:ml-48">
            <div className="flex items-center">
              <PhoneIcon
                aria-hidden="true"
                className="flex-none w-5 h-5 mt-1 mr-2 text-sky-500"
              />
              <span>+33 6 46 84 93 52</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon
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
                <Link
                  to="/politique-confidentialite"
                  rel="noopener noreferrer"
                  className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
                >
                  politique de confidentialité{' '}
                </Link>
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
    </>
  );
};

export default Rental;
