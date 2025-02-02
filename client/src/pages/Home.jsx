// Components
import CardEvent from '../components/CardEvent.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';

// Logo
import LogoLumiWhite from '../assets/img/LumiWhite.svg';
import LogoLumi from '../assets/img/lumi.svg';

// Pictures
import BgHero from '../assets/img/LocalWelcome.webp';
import Rooftop from '../assets/img/Rooftop.webp';

// Pictures Events
import DefaultEvents from '../assets/img/BgEventsPicture.webp';
import SalonTheBg from '../assets/img/SalonDeThe.webp';
import AtelierGauchetBg from '../assets/img/ATELIER-GAUCHET.webp';
import AtelierAntoninBg from '../assets/img/ATELIER-ANTONIN.webp';
import CabinetManitobaBg from '../assets/img/CABINET-MANITOBA.webp';
import AtelierCaignardMeuricBg from '../assets/img/ATELIER-CAIGNARD-MEURIC.webp';
import AtelierMediumBg from '../assets/img/ATELIER-MEDIUM.webp';
import CabinetWelterBg from '../assets/img/CABINET-WELTER.webp';
import CercleBertonBg from '../assets/img/CERCLE-BERTON.webp';
import VernissageGauchetBouguerraBg from '../assets/img/VERNISSAGE-GAUCHET-BOUGUERRA.webp';
import ExpositionGauchetBouguerraBg from '../assets/img/EXPOSITION-GAUCHET-BOUGUERRA.webp';
import ConferenceCaignardMeuricBg from '../assets/img/CONFERENCE-MEURIC-CAIGNARD-2.webp';
import FestivalOceanBg from '../assets/img/FESTIVAL-OCEAN.webp';
import KfeeMediumBg from '../assets/img/KFÉE-MEDIUM.webp';

// Libs React Icons and date-fns
import {
  HiCheckBadge,
  HiMiniQuestionMarkCircle,
  HiArrowRightCircle,
} from 'react-icons/hi2';
import { BiHandicap } from 'react-icons/bi';
import { HiLightBulb } from 'react-icons/hi';
import { FaPuzzlePiece, FaSquareParking } from 'react-icons/fa6';
import { IoSparklesSharp } from 'react-icons/io5';
import { TbClockHour8Filled } from 'react-icons/tb';
import { LiaGlassMartiniAltSolid } from 'react-icons/lia';

import { parse } from 'date-fns';
import { fr } from 'date-fns/locale';

// Hook
import { useMemo } from 'react';

const detailsBar = [
  {
    name: 'Horaires flexibles.',
    description: (
      <>
        Pour connaître nos jours et heures d&apos;ouverture actuels, veuillez
        consulter{' '}
        <a
          href="https://www.facebook.com/profile.php?id=61560269117702"
          target="_blank"
          rel="noreferrer"
          alt="Page Facebook"
          className="font-medium text-sky-600"
        >
          notre page Facebook
        </a>
        . Nos horaires peuvent varier selon les événements et la saison.{' '}
      </>
    ),

    icon: TbClockHour8Filled,
  },
  {
    name: 'Open-space et Rooftop.',
    description:
      'Dégustez vos boissons dans notre espace moderne ou sur notre rooftop chaleureux, parfait pour vos soirées entre amis.',
    icon: IoSparklesSharp,
  },
  {
    name: 'Boissons et Tapas.',
    description:
      'Découvrez notre sélection de boissons rafraîchissantes et de tapas savoureuses, idéales pour accompagner vos moments de détente.',
    icon: LiaGlassMartiniAltSolid,
  },
];

const servicesOffered = [
  {
    name: 'Espaces entièrement modulables',
    description:
      'Nos espaces flexibles, conçus pour s’adapter à vos besoins et offrir un cadre optimal pour tout type d’événement.',
    icon: FaPuzzlePiece,
  },
  {
    name: 'Garantir le succès de votre événement',
    description:
      'Nous mettons tout en œuvre pour garantir le succès de votre événement en offrant un soutien complet tout au long du processus.',
    icon: HiCheckBadge,
  },
  {
    name: 'Services personnalisés',
    description:
      'Des services sur mesure pour répondre précisément à vos attentes, assurant une organisation et un résultat à la hauteur de vos attentes.',
    icon: HiLightBulb,
  },
  {
    name: "Parking à l'arrière",
    description:
      "Vous disposez d'un parking public et gratuit situé à l'arrière de notre établissement, offrant un accès facile pour notre clientèle.",
    icon: FaSquareParking,
  },
  {
    name: 'Accessibilité handicapé(e)s',
    description:
      'Notre établissement est entièrement accessible aux personnes en situation de handicap. Des aménagements spécifiques ont été mis en place, des toilettes adaptées et un ascenseur.',
    icon: BiHandicap,
  },
  {
    name: 'Vous avez des questions ?',
    description: (
      <>
        N&apos;hésitez pas à consulter notre{' '}
        <a href="#notre-faq" className="text-sky-400 hover:underline">
          FAQ
        </a>
        , si vous ne trouvez pas de réponse,{' '}
        <a
          href="/contact/contacter-nous"
          className="text-sky-400 hover:underline"
        >
          contactez-nous
        </a>{' '}
        directement !
      </>
    ),
    icon: HiMiniQuestionMarkCircle,
  },
];

const events = [
  {
    id: 1,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 05, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 2,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 06, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 3,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 12, 2025',
    title: 'Apéro sur Toiles',
    subtitle: 'Pascal MANITOBA',
    description:
      'Pascal Manitoba, l’Anartiste, peintre, dessinateur et sculpteur vous transporte dans un voyage initiatique où l’Imaginaire et l’Art se mélangent harmonieusement...',
    author: {
      name: 'Luminescence',
      schedules: '19h30 - 22h00',
      price: '39€',
      imageUrl: LogoLumi,
    },
    imageUrl: CabinetManitobaBg,
  },
  {
    id: 4,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 07, 2025',
    title: 'KFÉE MEDIUMNIQUE',
    subtitle: 'Marion MEDIUM',
    description:
      'En nous reliant à l’énergie créatrice fondamentale de l’univers, qui nous constitue, nous retrouvons l’Essence de ce que nous sommes : TOUT est alors Possible.',
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: '18€',
      imageUrl: LogoLumi,
    },
    imageUrl: KfeeMediumBg,
  },
  {
    id: 5,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 08, 2025',
    title: 'Soirée Magie',
    subtitle: 'SHORTY',
    description:
      'Ce soir, Spectacle de Magie!!! Shorty nous fait le plaisir de venir nous rendre une petite visite!',
    author: {
      name: 'Luminescence',
      schedules: '19h30 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 6,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 09, 2025',
    title: "Cercle l'amour de soi",
    subtitle: 'Emmanuel BERTON',
    description:
      "Emmanuel vous propose de vous accueillir dans un magnifique lieu où se déroulera un cercle sur le thème de l'amour de soi.",
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 17h30',
      price: '45€',
      imageUrl: LogoLumi,
    },
    imageUrl: CercleBertonBg,
  },
  {
    id: 7,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 10, 2025',
    title: 'ATELIER - Retour à la source',
    subtitle: 'Roseline GAUCHET',
    description:
      'Des clefs pour comprendre, se libérer et avancer avec légèreté.',
    author: {
      name: 'Luminescence',
      schedules: '09h30 - 18h00',
      price: '150€',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierGauchetBg,
  },
  {
    id: 8,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 11, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 9,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 12, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 10,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 13, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 11,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 13, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 12,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 14, 2025',
    title: 'Cabinet Public',
    subtitle: 'Yohane WELTER',
    description:
      'Pour mieux comprendre l’hypnose, mieux maitriser ses émotions, mieux connaitre son conscient & son inconscient...',
    author: {
      name: 'Luminescence',
      schedules: '20h00 - 22h30',
      price: '15€',
      imageUrl: LogoLumi,
    },
    imageUrl: CabinetWelterBg,
  },
  {
    id: 13,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 15, 2025',
    title: 'CONFÉRENCE - Métamorphose',
    subtitle: 'Florence MEURIC & Frédérique CAIGNARD',
    description:
      'Révélatrice de Potentiels, de Blocages et de Missions de Vie. Florence vous donnera un éclairage concret vers une nouvelle perspective.',
    author: {
      name: 'Luminescence',
      schedules: '19h30 - 22h00',
      price: '15€',
      imageUrl: LogoLumi,
    },
    imageUrl: ConferenceCaignardMeuricBg,
  },
  {
    id: 14,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 16, 2025',
    title: 'ATELIER - Métamorphose',
    subtitle: 'Florence MEURIC & Fréderique CAIGNARD',
    description:
      'Révélatrice de Potentiels, de Blocages et de Missions de Vie. Florence vous donnera un éclairage concret vers une nouvelle perspective.',
    author: {
      name: 'Luminescence',
      schedules: '10h00 - 18h00',
      price: '160€',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierCaignardMeuricBg,
  },
  {
    id: 15,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 18, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 16,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 19, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 17,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 20, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 18,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 20, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 19,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 21, 2025',
    title: 'ATELIER - Chemin de vie',
    subtitle: 'Marion MEDIUM',
    description:
      "Peut-être régler des dettes de vies antérieures, retrouver quelqu'un, relever des défis...",
    author: {
      name: 'Luminescence',
      schedules: '18h30 - 22h30',
      price: '90€',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierMediumBg,
  },
  {
    id: 20,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 23, 2025',
    title: 'FESTIVAL OCEAN BLUE DAY & Marché de Noël',
    subtitle: 'Soirée Tout Public',
    description:
      "Conférences, projections, papotages, et un marché de noël sur le thème de l'océan bien sur !",
    author: {
      name: 'Luminescence',
      schedules: '18h30 - 22h30',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: FestivalOceanBg,
  },
  {
    id: 21,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 25, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 22,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 26, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 23,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 27, 2025',
    title: 'Salon de Thé',
    subtitle: 'Journée Tout Public',
    description:
      'Venez vous déposer chez LUMINESCENCE pour un moment de détente.',
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 19h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: SalonTheBg,
  },
  {
    id: 24,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 27, 2025',
    title: "L'intelligence des cellules & leurs pouvoirs de guérison",
    subtitle: 'Jacques ANTONIN',
    description:
      "La découverte du monde cellulaire, qui remonte à plusieurs siècles, avec l'invention du microscope optique...",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: '18€',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierAntoninBg,
  },
  {
    id: 25,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 28, 2025',
    title: 'Bar & grignotages',
    subtitle: 'Soirée Tout Public',
    description:
      "Soirée décontracté autour d'un verre, discussions enrichissantes et ambiance musicale avec du karaoké.",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: DefaultEvents,
  },
  {
    id: 25,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 29, 2025',
    title: 'EXPOSITION / VENTE / VERNISSAGE',
    subtitle: 'Nour BOUGUERRA & Roseline GAUCHET',
    description:
      'Deux univers artistiques se rencontrent, fusionnant émotion picturale et maroquinerie écoresponsable.',
    author: {
      name: 'Luminescence',
      schedules: '10h30 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: VernissageGauchetBouguerraBg,
  },
  {
    id: 26,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fev. 30, 2025',
    title: 'EXPOSITION / VENTE / VERNISSAGE',
    subtitle: 'Nour BOUGUERRA & Roseline GAUCHET',
    description:
      'Deux univers artistiques se rencontrent, fusionnant émotion picturale et maroquinerie écoresponsable.',
    author: {
      name: 'Luminescence',
      schedules: '10h30 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: ExpositionGauchetBouguerraBg,
  },
  {
    id: 27,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Mar. 01, 2025',
    title: 'EXPOSITION / VENTE / VERNISSAGE',
    subtitle: 'Nour BOUGUERRA & Roseline GAUCHET',
    description:
      'Deux univers artistiques se rencontrent, fusionnant émotion picturale et maroquinerie écoresponsable.',
    author: {
      name: 'Luminescence',
      schedules: '10h30 - 22h00',
      price: 'Gratuit',
      imageUrl: LogoLumi,
    },
    imageUrl: ExpositionGauchetBouguerraBg,
  },
];

const faqs = [
  {
    question: "Qu'est ce que le Cabinet de soins ?",
    answer:
      "Le Cabinet de soins est un lieu où vous pouvez bénéficier de massages, de séances de Reiki et d'autres pratiques de médecine traditionnelle, conçues pour améliorer votre bien-être et votre santé.",
  },
  {
    question:
      'Je veux organiser un anniversaire, est-il possible d’avoir du bar et de la restauration ?',
    answer:
      "Oui bien sûr ! Luminescence est le lieu idéal pour célébrer un anniversaire. Vous pouvez louer la salle vide ou avec le mobilier, et bénéficier du bar ouvert et d'un traiteur.",
  },
  {
    question: 'Je souhaite louer le cabinet de soin, est-ce possible ?',
    answer:
      'Oui, tout à fait ! Vous pouvez le louer à la demi-journée ou à la journée complète, avec la décoration actuelle ou personnalisée.',
  },
  {
    question:
      'Puis-je louer la salle pour organiser une Masterclass de Yoga/Pilates sur un week-end ?',
    answer:
      'Absolument ! Que vous ayez une idée précise ou non, nous pouvons en discuter. Je vous aiderai à créer un environnement idéal pour votre Masterclass.',
  },
  {
    question:
      'Est-ce possible d’organiser le départ à la retraite d’une collègue avec une Auberge Espagnole ?',
    answer:
      'Oui, bien sûr ! Vous pouvez louer Luminescence sans obligation de traiteur. L’Auberge Espagnole est acceptée et je peux vous aider à organiser votre événement pour qu’il soit adapté à vos besoins.',
  },
  {
    question: 'Puis-je privatiser la salle et le bar pour une soirée à thème ?',
    answer:
      'Chez Luminescence, tout est possible ! Nous vous aidons avec la décoration, les costumes, la communication, et proposons plusieurs devis selon vos besoins. Pour toutes sortes de soirées à thème, Luminescence s’adapte à toutes vos envies.',
  },
];

export default function Home() {
  const MAX_DISPLAYED_EVENTS = 2;
  const now = new Date();
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const sortedEvents = useMemo(() => {
    if (!events || events.length === 0) {
      return { today: [], upcoming: [], past: [] };
    }

    const formattedEvents = events.map((event) => ({
      ...event,
      parsedDate: parse(event.date, 'dd/MM/yyyy', new Date(), { locale: fr }),
    }));

    const today = formattedEvents.filter(
      ({ parsedDate }) =>
        parsedDate.getFullYear() === todayDate.getFullYear() &&
        parsedDate.getMonth() === todayDate.getMonth() &&
        parsedDate.getDate() === todayDate.getDate()
    );

    const upcoming = formattedEvents
      .filter(({ parsedDate }) => parsedDate >= now)
      .sort((a, b) => a.parsedDate - b.parsedDate);

    const past = formattedEvents
      .filter(({ parsedDate }) => parsedDate < now)
      .sort((a, b) => b.parsedDate - a.parsedDate);

    return { today, upcoming, past };
  }, [now, todayDate]);

  return (
    <>
      {/* <!--Hero Section--> */}
      <div className="relative">
        <div
          className="aspect-auto"
          style={{
            backgroundImage: `url('../assets/images/LocalWelcome.webp')`,
          }}
        >
          {/* <!--Picture local BG--> */}
          <img
            src={BgHero}
            alt="Photo du local Luminescence"
            className="object-cover w-full h-screen"
          />

          {/* <!--Blur screen--> */}
          <div className="absolute top-0 w-full h-screen z-1 bg-zinc-950/70"></div>

          {/* <!-- Welcome container --> */}
          <div className="absolute z-10 inset-0 flex flex-col items-center justify-center gap-0 text-center">
            <img
              src={LogoLumiWhite}
              alt="Logo Luminescence en blanc"
              className="mb-4 w-60 lg:w-72 2xl::w-96"
            />
            <h1 className="text-4xl font-bold tracking-wider text-transparent font-kreon bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text xl:text-6xl 2xl:text-8xl lg:font-semibold">
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
        </div>
      </div>
      {/* <!--Bar Section--> */}
      <div className="py-12 overflow-hidden sm:py-24">
        <div className="px-6 mx-auto max-w-7xl md:px-8 lg:px-10 xl:px-14 2xl:px-18">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* <!--details container--> */}
            <div className="lg:pr-8 lg:pt-4 2xl:-ml-32 2xl:mr-19 min-[1900px]:-ml-64 min-[1900px]:mr-40 min-[2000px]:-ml-80 min-[2000px]:mr-30">
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
                    Profitez de notre service de bar-lounge avec notre
                    Open-space et Rooftop.
                  </p>
                </div>
                {/* <!--Services offered sections--> */}
                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-zinc-600 lg:max-w-none">
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
                </dl>
                {/* <!--Action button--> */}
                <a href="/bar-lounge/#la-carte" rel="noopener noreferrer">
                  <button className="mt-10 duration-300 ease-in-out delay-100  space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full mx-auto md:w-44  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                    Consulter notre Carte
                  </button>
                </a>
              </div>
            </div>
            {/* <!--Picture Rooftop container--> */}
            <img
              alt="Rooftop(= Terasse sur le toit) de luminescence."
              src={Rooftop}
              width={2432}
              height={1442}
              className="w-[24rem] max-w-full rounded-xl shadow-xl ring-1 ring-zinc-400/10 lg:max-w-none sm:w-[50rem] md:-ml-4 lg:-ml-20 min-[2000px]:w-[60rem] "
            />
          </div>
        </div>
      </div>
      {/* <!--Rental Section--> */}
      <div className="py-12 text-white lg:py-24 bg-zinc-900">
        <div className="px-6 mx-3 max-w-8xl md:px-8 lg:px-10 xl:px-14 2xl:mx-80">
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
          <a href="location/#contact-business" rel="noopener noreferrer">
            <button className="flex mt-14 bg-sky-500 items-center justify-center mt-10 duration-300 ease-in-out delay-100 space-y-8 leading-7 text-sky-50 rounded-md bg-sky-500 w-full md:w-fit mx-auto px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
              Votre devis personnalisé
            </button>
          </a>
        </div>
      </div>
      {/* <!--Divider Section--> */}
      <div className="relative -mt-1 flex flex-row 2xl:-mb-20">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-800"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-800"></div>
        </div>
      </div>
      {/* Events section */}
      <section className="py-12 lg:py-24 bg-zinc-900">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {/* Header section */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-sky-500">
              Nos prochains
            </h2>
            <p className="mt-2 text-3xl font-bold uppercase text-zinc-50">
              Événements
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid max-w-4xl gap-8 mx-auto mt-12 lg:grid-cols-2">
            {sortedEvents.today.length > 0 ? (
              sortedEvents.today.map((event) => (
                <CardEvent key={event.id} event={event} />
              ))
            ) : sortedEvents.upcoming.length > 0 ? (
              sortedEvents.upcoming
                .slice(0, MAX_DISPLAYED_EVENTS)
                .map((event) => <CardEvent key={event.id} event={event} />)
            ) : (
              <p className="text-center text-zinc-400 col-span-2">
                Aucun événement prévu pour le moment. Revenez bientôt !
              </p>
            )}
          </div>

          {/* Voir tous les événements */}
          {sortedEvents.upcoming.length > 0 && (
            <div className="flex justify-center mt-8">
              <a
                href="/evenements"
                className="flex items-center gap-2 px-6 py-3 text-white bg-sky-700 rounded-xl hover:bg-sky-800"
              >
                Voir tous nos événements
                <HiArrowRightCircle className="text-lg" />
              </a>
            </div>
          )}
        </div>
      </section>
      {/* FAQ section */}
      <div className="py-12 lg:py-24 max-w-[960px] px-4 mx-auto">
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
        {faqs.map((faq, index) => (
          <FaqAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        {/* <!--Action section--> */}
        <div className="flex flex-col items-center gap-6 pt-8">
          <p className="italic">
            Vous ne trouvez pas votre réponse dans la FAQ ?
          </p>
          <a
            href="contact/contacter-nous"
            rel="noopener noreferrer"
            className="flex justify-center duration-300 ease-in-out delay-100  space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full md:w-44  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Contactez-nous
          </a>
        </div>
      </div>
      {/* <!--Divider section--> */}
      <div className="relative flex flex-row">
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-200"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-200"></div>
        </div>
      </div>
    </>
  );
}
