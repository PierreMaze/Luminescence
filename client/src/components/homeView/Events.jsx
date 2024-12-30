import { useMemo } from "react";
import { parse } from "date-fns";
import { fr } from "date-fns/locale";
import PropTypes from "prop-types";
import LogoLumi from "../../assets/images/Logo-lumi.webp";
import BgEventsPicture from "../../assets/images/BgEventsPicture.webp";
import SalonTheBg from "../../assets/images/SalonDeThe.webp";

import AtelierGauchetBg from "../../assets/images/ATELIER-GAUCHET.webp";
import AtelierAntoninBg from "../../assets/images/ATELIER-ANTONIN.webp";
import CabinetManitobaBg from "../../assets/images/CABINET-MANITOBA.webp";
import AtelierCaignardMeuricBg from "../../assets/images/ATELIER-CAIGNARD-MEURIC.webp";
import AtelierMediumBg from "../../assets/images/ATELIER-MEDIUM.webp";
import CabinetWelterBg from "../../assets/images/CABINET-WELTER.webp";
import CercleBertonBg from "../../assets/images/CERCLE-BERTON.webp";
import VernissageGauchetBouguerraBg from "../../assets/images/VERNISSAGE-GAUCHET-BOUGUERRA.webp";
import ExpositionGauchetBouguerraBg from "../../assets/images/EXPOSITION-GAUCHET-BOUGUERRA.webp";
import ConferenceCaignardMeuricBg from "../../assets/images/CONFERENCE-MEURIC-CAIGNARD-2.webp";
import FestivalOceanBg from "../../assets/images/FESTIVAL-OCEAN.webp";
import KfeeMediumBg from "../../assets/images/KFÉE-MEDIUM.webp";
import {
  ArrowRightCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const MAX_DISPLAYED_EVENTS = 2;

const events = [
  {
    id: 1,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 05, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 2,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 06, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 3,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 12, 2025",
    title: "Apéro sur Toiles",
    subtitle: "Pascal MANITOBA",
    description:
      "Pascal Manitoba, l’Anartiste, peintre, dessinateur et sculpteur vous transporte dans un voyage initiatique où l’Imaginaire et l’Art se mélangent harmonieusement...",
    author: {
      name: "Luminescence",
      schedules: "19h30 - 22h00",
      price: "39€",
      imageUrl: LogoLumi,
    },
    imageUrl: CabinetManitobaBg,
  },
  {
    id: 4,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 07, 2025",
    title: "KFÉE MEDIUMNIQUE",
    subtitle: "Marion MEDIUM",
    description:
      "En nous reliant à l’énergie créatrice fondamentale de l’univers, qui nous constitue, nous retrouvons l’Essence de ce que nous sommes : TOUT est alors Possible.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "18€",
      imageUrl: LogoLumi,
    },
    imageUrl: KfeeMediumBg,
  },
  {
    id: 5,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 08, 2025",
    title: "Soirée Magie",
    subtitle: "SHORTY",
    description:
      "Ce soir, Spectacle de Magie!!! Shorty nous fait le plaisir de venir nous rendre une petite visite!",
    author: {
      name: "Luminescence",
      schedules: "19h30 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 6,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 09, 2025",
    title: "Cercle l'amour de soi",
    subtitle: "Emmanuel BERTON",
    description:
      "Emmanuel vous propose de vous accueillir dans un magnifique lieu où se déroulera un cercle sur le thème de l'amour de soi.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 17h30",
      price: "45€",
      imageUrl: LogoLumi,
    },
    imageUrl: CercleBertonBg,
  },
  {
    id: 7,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 10, 2025",
    title: "ATELIER - Retour à la source",
    subtitle: "Roseline GAUCHET",
    description:
      "Des clefs pour comprendre, se libérer et avancer avec légèreté.",
    author: {
      name: "Luminescence",
      schedules: "09h30 - 18h00",
      price: "150€",
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierGauchetBg,
  },
  {
    id: 8,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 11, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 9,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 12, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 10,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 13, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 11,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 13, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 12,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 14, 2025",
    title: "Cabinet Public",
    subtitle: "Yohane WELTER",
    description:
      "Pour mieux comprendre l’hypnose, mieux maitriser ses émotions, mieux connaitre son conscient & son inconscient...",
    author: {
      name: "Luminescence",
      schedules: "20h00 - 22h30",
      price: "15€",
      imageUrl: LogoLumi,
    },
    imageUrl: CabinetWelterBg,
  },
  {
    id: 13,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 15, 2025",
    title: "CONFÉRENCE - Métamorphose",
    subtitle: "Florence MEURIC & Frédérique CAIGNARD",
    description:
      "Révélatrice de Potentiels, de Blocages et de Missions de Vie. Florence vous donnera un éclairage concret vers une nouvelle perspective.",
    author: {
      name: "Luminescence",
      schedules: "19h30 - 22h00",
      price: "15€",
      imageUrl: LogoLumi,
    },
    imageUrl: ConferenceCaignardMeuricBg,
  },
  {
    id: 14,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 16, 2025",
    title: "ATELIER - Métamorphose",
    subtitle: "Florence MEURIC & Fréderique CAIGNARD",
    description:
      "Révélatrice de Potentiels, de Blocages et de Missions de Vie. Florence vous donnera un éclairage concret vers une nouvelle perspective.",
    author: {
      name: "Luminescence",
      schedules: "10h00 - 18h00",
      price: "160€",
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierCaignardMeuricBg,
  },
  {
    id: 15,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 18, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 16,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 19, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 17,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 20, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 18,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 20, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 19,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 21, 2025",
    title: "ATELIER - Chemin de vie",
    subtitle: "Marion MEDIUM",
    description:
      "Peut-être régler des dettes de vies antérieures, retrouver quelqu'un, relever des défis...",
    author: {
      name: "Luminescence",
      schedules: "18h30 - 22h30",
      price: "90€",
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierMediumBg,
  },
  {
    id: 20,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 23, 2025",
    title: "FESTIVAL OCEAN BLUE DAY & Marché de Noël",
    subtitle: "Soirée Tout Public",
    description:
      "Conférences, projections, papotages, et un marché de noël sur le thème de l'océan bien sur !",
    author: {
      name: "Luminescence",
      schedules: "18h30 - 22h30",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: FestivalOceanBg,
  },
  {
    id: 21,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 25, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 22,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 26, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 23,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 27, 2025",
    title: "Salon de Thé",
    subtitle: "Journée Tout Public",
    description:
      "Venez vous déposer chez LUMINESCENCE pour un moment de détente.",
    author: {
      name: "Luminescence",
      schedules: "14h00 - 19h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 24,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 27, 2025",
    title: "L'intelligence des cellules & leurs pouvoirs de guérison",
    subtitle: "Jacques ANTONIN",
    description:
      "La découverte du monde cellulaire, qui remonte à plusieurs siècles, avec l'invention du microscope optique...",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "18€",
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierAntoninBg,
  },
  {
    id: 25,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 28, 2025",
    title: "Bar & grignotages",
    subtitle: "Soirée Tout Public",
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: "Luminescence",
      schedules: "19h00 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: BgEventsPicture,
  },
  {
    id: 25,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 29, 2025",
    title: "EXPOSITION / VENTE / VERNISSAGE",
    subtitle: "Nour BOUGUERRA & Roseline GAUCHET",
    description:
      "Deux univers artistiques se rencontrent, fusionnant émotion picturale et maroquinerie écoresponsable.",
    author: {
      name: "Luminescence",
      schedules: "10h30 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: VernissageGauchetBouguerraBg,
  },
  {
    id: 26,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 30, 2025",
    title: "EXPOSITION / VENTE / VERNISSAGE",
    subtitle: "Nour BOUGUERRA & Roseline GAUCHET",
    description:
      "Deux univers artistiques se rencontrent, fusionnant émotion picturale et maroquinerie écoresponsable.",
    author: {
      name: "Luminescence",
      schedules: "10h30 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: ExpositionGauchetBouguerraBg,
  },
  {
    id: 27,
    link: "https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis",
    date: "Janv. 01, 2025",
    title: "EXPOSITION / VENTE / VERNISSAGE",
    subtitle: "Nour BOUGUERRA & Roseline GAUCHET",
    description:
      "Deux univers artistiques se rencontrent, fusionnant émotion picturale et maroquinerie écoresponsable.",
    author: {
      name: "Luminescence",
      schedules: "10h30 - 22h00",
      price: "Gratuit",
      imageUrl: LogoLumi,
    },
    imageUrl: ExpositionGauchetBouguerraBg,
  },
];

const EventCard = ({ event }) => {
  return (
    <a
      href={event.link}
      target="_blank"
      rel="nofollow"
      key={event.id}
      alt={event.title}
      className="relative grid flex-col gap-2 shadow-lg min-[1900px]:max-h-80 2xl:max-h-64 bg-sky-50 bg-clip-border rounded-xl sm:grid-cols-2 hover:opacity-75 hover:scale-105 transition-all ease-in-out delay-100 duration-150">
      <div className="relative overflow-hidden bg-clip-border rounded-xl">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="object-cover w-full h-full min-[1900px]:max-h-80 2xl:max-h-64 l:h-80"
        />
      </div>
      <div className="p-4 sm:pr-6 sm:pl-4">
        <p className="block mb-4 font-sans text-sm antialiased font-semibold leading-normal 2xl:text-lg text-sky-800">
          {event.subtitle}
        </p>

        <p className="block mb-2 font-sans text-xl antialiased min[1900px]:text-4xl 2xl:text-md font-semibold leading-snug tracking-normal normal-case transition-colors text-blue-gray-900">
          {event.title}
        </p>
        <p className="block antialiased font-sans text-base min[1900px]:text-xl 2xl:text-md leading-relaxed 2xl:mb-4 font-normal !text-gray-500">
          {event.description}
        </p>
        <div className="flex mt-4 items-center gap-2 2xl:justify-start 2xl:mr-4 2xl:mt-4 min[1900px]:mt-14">
          <div className="flex flex-col gap-2 size-10">
            <CalendarDaysIcon />
            <ClockIcon />
          </div>
          <div className="flex flex-col">
            <p className="antialiased text-base 2xl:text-xl text-blue-gray-900 mb-0.5 font-semibold">
              <time dateTime={event.date}>{event.date}</time>
            </p>
            <p className="mx-0 text-sm antialiased font-normal text-gray-700 2xl:text-md">
              {event.author.schedules}
            </p>
          </div>
          <div className="flex flex-row ml-16 sm:ml-4 w-14">
            <p className="px-2 py-1 mx-0 text-xs antialiased font-semibold border-none text-zinc-100 2xl:text-md rounded-xl ring-offset-sky-600 ring-2 bg-sky-600">
              {event.author.price}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      schedules: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const Evenement = () => {
  const now = new Date();
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const sortedEvents = useMemo(() => {
    const formattedEvents = events.map((event) => ({
      ...event,
      parsedDate: parse(event.date, "MMM dd, yyyy", new Date(), { locale: fr }),
    }));

    const today = formattedEvents.filter((event) => {
      const eventDate = event.parsedDate;
      return (
        eventDate.getFullYear() === todayDate.getFullYear() &&
        eventDate.getMonth() === todayDate.getMonth() &&
        eventDate.getDate() === todayDate.getDate()
      );
    });

    const upcoming = formattedEvents
      .filter((event) => event.parsedDate >= now)
      .sort((a, b) => a.parsedDate - b.parsedDate);

    const past = formattedEvents
      .filter((event) => event.parsedDate < now)
      .sort((a, b) => b.parsedDate - a.parsedDate);

    return { today, upcoming, past };
  }, [now, todayDate]);

  return (
    <>
      {/* Divider section */}
      <div className="relative flex flex-row 2xl:-mb-20">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-800"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-800"></div>
        </div>
      </div>
      {/* Events section */}
      <div className="py-12 lg:py-24 bg-zinc-900">
        <div className="px-6 mx-auto max-w-7xl lg:px-8 2xl:max-w-full 2xl:m-20">
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
          <div className="grid max-w-xl gap-8 mx-auto mt-12 lg:grid-cols-2 2xl:grid-cols-2 2xl:gap-12 lg:max-w-6xl 2xl:max-w-full 2xl:mx-60 group">
            {sortedEvents.today !== 0 && (
              <>
                {sortedEvents.today.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </>
            )}

            {sortedEvents.upcoming !== 0 && (
              <>
                {sortedEvents.upcoming
                  .slice(0, MAX_DISPLAYED_EVENTS)
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </>
            )}
            {/* Card Button */}
            <Link
              to="/evenements"
              rel="noreferrer"
              className="flex flex-row items-center justify-center gap-2 px-0 py-6 shadow-lg group bg-sky-700 hover:bg-sky-800 text-sky-200 bg-clip-border rounded-xl sm:grid-cols-2 xl:text-xl">
              Voir tous nos événements
              <ArrowRightCircleIcon className="ml-2 duration-300 ease-in-out delay-100 border-none rounded-full size-5 ring animate-pulse group-hover:ring-sky-300" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evenement;
