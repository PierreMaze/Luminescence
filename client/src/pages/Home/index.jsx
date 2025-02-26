// Logo
import LogoLumiWhite from '../../assets/img/LumiWhite.svg';

// Pictures
import BgHero from '../../assets/img/LocalWelcome.webp';
import Rooftop from '../../assets/img/Rooftop.webp';

// Libs React Icons and date-fns
import { HiArrowRightCircle } from 'react-icons/hi2';

import { parse, format } from 'date-fns';
import { fr } from 'date-fns/locale';

import { Link } from 'react-router-dom';

import LinkButton from '../../components/button/LinkButton';

// Hook
import { useState, useEffect, useMemo, lazy, Suspense } from 'react';

// Data
import detailsBar from './data/services-section/BarDetails.jsx';
import servicesOffered from './data/services-section/ServicesOffered.jsx';
import events from './data/events-section/EventsDetails.jsx';
import faqs from './data/FaqSection.jsx';

// Components Lazy Loading.
const CardEvent = lazy(() => import('./components/CardEvent.jsx'));
const Faq = lazy(() => import('../../features/accordeon/Faq.jsx'));

// Fonction pour normaliser les dates (conversion des mois français)
const monthMap = {
  Janv: 'Jan',
  Fév: 'Feb',
  Mars: 'Mar',
  Avril: 'Apr',
  Mai: 'May',
  Juin: 'Jun',
  Juil: 'Jul',
  Août: 'Aug',
  Sept: 'Sep',
  Oct: 'Oct',
  Nov: 'Nov',
  Déc: 'Dec',
};

const normalizeDate = (dateStr) => {
  const regex = /([\wÀ-ÿ]+)\. (\d+), (\d+)/;
  const match = dateStr.match(regex);
  if (!match) return null;
  const [, month, day, year] = match;
  const normalizedMonth = monthMap[month] || month;
  return parse(
    `${normalizedMonth} ${day}, ${year}`,
    'MMM dd, yyyy',
    new Date()
  );
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Vérifie si on clique en dehors de l'accordéon
      if (!event.target.closest('.faq-accordion')) {
        setOpenIndex(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const MAX_DISPLAYED_EVENTS = 3;

  // Date du jour sans l'heure
  const todayDate = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const sortedEvents = useMemo(() => {
    return events
      .map((event) => ({ ...event, parsedDate: normalizeDate(event.date) }))
      .filter(
        (event) => event.parsedDate !== null && event.parsedDate >= todayDate
      )
      .sort((a, b) => a.parsedDate - b.parsedDate);
  }, [todayDate]);

  const eventsToDisplay = sortedEvents.slice(0, MAX_DISPLAYED_EVENTS);

  return (
    <div className="bg-sky-50">
      {/* <!--Hero Section--> */}
      <section className="relative">
        {/* <!--Picture local BG--> */}
        <img
          src={BgHero}
          loading="lazy"
          alt="Photo du local Luminescence"
          className="object-cover w-full h-screen"
        />

        {/* <!--Blur screen--> */}
        <div className="absolute top-0 w-full h-screen z-1 bg-zinc-950/70"></div>

        {/* <!-- Welcome container --> */}
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center gap-0 text-center">
          <img
            src={LogoLumiWhite}
            loading="lazy"
            alt="Logo Luminescence en blanc"
            className="mb-4 w-60 lg:w-72 2xl::w-96"
          />
          <h1 className="text-4xl tracking-wider text-transparent font-kreon bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text xl:text-6xl 2xl:text-8xl font-semibold">
            LUMINESCENCE
          </h1>
          <p className="text-base pt-4 font-medium tracking-wide text-sky-50 lg:text-lg xl:text-xl lg:font-medium">
            Évènementiel & Location d&apos;Espaces
          </p>
          <div className="w-60 my-1 h-[0.09rem] bg-sky-100"></div>
          <p className="text-sm font-semibold -pb-4 tracking-wide text-sky-200 lg:text-md 2xl:text-lg">
            BAR LOUNGE & ROOFTOP
          </p>
          <p className="absolute text-xs font-bold tracking-wider text-center bottom-2 2xl:bottom-4 2xl:text-md text-sky-100">
            GUJAN - MESTRAS
          </p>
        </div>
      </section>
      {/* <!--Bar Section--> */}
      <section className="relative p-8 lg:p-16 overflow-hidden isolate lg:overflow-visible">
        <div className="max-w-7xl 2xl:mx-80">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 2xl:gap-x-32 lg:max-w-none lg:grid-cols-2">
            {/* <!--details container--> */}

            <div className=" lg:max-w-lg 2xl:max-w-full">
              {/* <!--Header section--> */}
              <div>
                <h2 className="text-lg font-semibold leading-7 text-sky-800">
                  Nos services de
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
                  BAR-LOUNGE
                </p>
                <p className="mt-6 mr-6 leading-8 text-zinc-600 text-md">
                  Profitez de notre service de bar-lounge avec notre Open-space
                  et Rooftop.
                </p>
              </div>
              {/* <!--Services offered sections--> */}
              <div className="max-w-xl mt-10 space-y-8 text-base leading-7 text-zinc-600 lg:max-w-none">
                {detailsBar.map((details) => (
                  <div key={details.name} className="relative mr-6 pl-9">
                    <dt className="inline font-semibold text-zinc-900 ">
                      <details.icon
                        aria-hidden="true"
                        className="absolute size-5 text-sky-600 left-1 top-1 "
                      />
                      {details.name}
                    </dt>{' '}
                    <dd className="inline">{details.description}</dd>
                  </div>
                ))}
              </div>
              {/* <!--Action button--> */}
              <LinkButton
                to="/bar-lounge/#la-carte"
                label="Consulter notre carte du bar-lounge"
                className="mt-10"
              >
                Consulter notre Carte
              </LinkButton>
            </div>

            {/* <!--Picture Rooftop container--> */}
            <div className="lg:max-w-lg 2xl:max-w-full lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                src={Rooftop}
                loading="lazy"
                alt="Rooftop(= Terasse sur le toit) de luminescence."
                className="w-full bg-zinc-900 shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--Rental Section--> */}
      <section className="p-8 lg:p-16 text-white lg:py-24 bg-zinc-900">
        <div className="2xl:mx-80 max-w-8xl">
          {/* <!--Header section--> */}
          <div className="text-start">
            <h2 className="text-lg font-semibold text-sky-400">
              Nos services de
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-sky-50 font-kreon sm:text-4xl">
              LOCATION
            </p>
            <p className="mt-4 text-md leading-6 text-zinc-400">
              Découvrez nos services de location.
              <br />
              Que vous planifiez un événement privé, professionnel ou culturel,
              nous offrons des solutions flexibles et adaptées à vos besoins.
            </p>
          </div>
          {/* <!--Services offered section--> */}
          <div className="grid grid-cols-1 gap-16 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((service) => (
              <div key={service.name} className="relative">
                <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-sky-500">
                  <service.icon className="size-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-white">
                  {service.name}
                </p>
                <p className="mt-2 ml-16 text-base text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <LinkButton to="/location" label="Contactez-nous" className="mt-14">
              Votre devis personnalisé
            </LinkButton>
          </div>
        </div>
      </section>
      {/* <!--Divider Section--> */}
      <section className="relative bg-zinc-900 flex flex-row">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-800"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-800"></div>
        </div>
      </section>
      {/* Section des événements */}
      <section className="p-8 lg:p-16 bg-zinc-900">
        <div className="mx-auto max-w-7xl 2xl:max-w-full 2xl:mx-80">
          {/* Header section */}
          <div className="text-center">
            <h2 className="text-lg font-semibold leading-7 text-sky-500">
              Nos prochains
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-wider uppercase text-zinc-50 font-kreon sm:text-4xl">
              Evenements
            </p>
          </div>

          {/* Body section */}
          <div className="grid mx-2 lg:mx-10 gap-8 mt-12 lg:grid-cols-2">
            <Suspense fallback={<p>Chargement des événements...</p>}>
              {eventsToDisplay.length > 0 ? (
                eventsToDisplay.map((event) => (
                  <CardEvent
                    key={event.id}
                    event={{
                      ...event,
                      date: format(event.parsedDate, 'dd MMMM yyyy', {
                        locale: fr,
                      }),
                    }}
                  />
                ))
              ) : (
                <p>Aucun événement à venir pour le moment.</p>
              )}
            </Suspense>
            {/* Card Button - Ne pas toucher */}
            <Link
              to="/evenements"
              rel="noreferrer"
              className="flex flex-row items-center justify-center gap-2 px-0 py-6 shadow-lg group bg-sky-700 hover:bg-sky-800 text-sky-200 bg-clip-border rounded-xl sm:grid-cols-2 xl:text-xl"
            >
              Voir tous nos événements
              <HiArrowRightCircle className="ml-2 duration-300 ease-in-out delay-100 border-none rounded-full size-5 ring animate-pulse group-hover:ring-sky-300" />
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="py-12 lg:py-24 max-w-[960px] px-4 mx-auto">
        {/* <!--Header section--> */}
        <div id="notre-faq" className="text-center">
          <h2 className="text-lg font-semibold leading-7 text-sky-800">
            Vos questions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
            LES PLUS RECCURENTES
          </p>
          <p className="my-8 text-lg leading-6 text-zinc-500">
            Explorez notre FAQ pour trouver des réponses détaillées à toutes vos
            questions
          </p>
        </div>
        {/* <!--FAQ Accordion component--> */}
        <Suspense fallback={<p>Chargement des questions...</p>}>
          {faqs.map((faq, index) => (
            <Faq
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </Suspense>
        {/* <!--Action section--> */}
        <div className="flex flex-col items-center gap-6 pt-8">
          <p className="italic">
            Vous ne trouvez pas votre réponse dans la FAQ ?
          </p>
          <LinkButton
            to="/contact/collaborer"
            label="Contactez-nous"
            className="mb-10"
          >
            Contactez-nous
          </LinkButton>
        </div>
      </section>
      {/* <!--Divider section--> */}
      <div className="relative flex flex-row">
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-200"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-200"></div>
        </div>
      </div>
    </div>
  );
}
