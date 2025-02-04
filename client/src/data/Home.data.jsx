import LogoLumi from '../assets/img/lumi.svg';

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
import { HiCheckBadge, HiMiniQuestionMarkCircle } from 'react-icons/hi2';
import { BiHandicap } from 'react-icons/bi';
import { HiLightBulb } from 'react-icons/hi';
import { FaPuzzlePiece, FaSquareParking } from 'react-icons/fa6';
import { IoSparklesSharp } from 'react-icons/io5';
import { TbClockHour8Filled } from 'react-icons/tb';
import { LiaGlassMartiniAltSolid } from 'react-icons/lia';

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
          className="font-medium text-sky-600 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
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
        <a
          href="#notre-faq"
          className="text-sky-400 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
        >
          FAQ
        </a>
        , si vous ne trouvez pas de réponse,{' '}
        <a
          href="/contact/contacter-nous"
          className="text-sky-400 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
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
    date: 'Fév. 05, 2025',
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
    date: 'Fév. 06, 2025',
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
    date: 'Fév. 12, 2025',
    title: 'Apéro sur Toiles',
    subtitle: 'Pascal MANITOBA',
    description:
      'Pascal Manitoba, l’Anartiste, peintre, dessinateur et sculpteur vous transporte dans un voyage initiatique où l’Imaginaire et l’Art se mélangent harmonieusement...',
    author: {
      name: 'Luminescence',
      schedules: '19h30 - 22h00',
      price: '39 €',
      imageUrl: LogoLumi,
    },
    imageUrl: CabinetManitobaBg,
  },
  {
    id: 4,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 07, 2025',
    title: 'KFÉE MEDIUMNIQUE',
    subtitle: 'Marion MEDIUM',
    description:
      'En nous reliant à l’énergie créatrice fondamentale de l’univers, qui nous constitue, nous retrouvons l’Essence de ce que nous sommes : TOUT est alors Possible.',
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: '18 €',
      imageUrl: LogoLumi,
    },
    imageUrl: KfeeMediumBg,
  },
  {
    id: 5,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 08, 2025',
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
    date: 'Fév. 09, 2025',
    title: "Cercle l'amour de soi",
    subtitle: 'Emmanuel BERTON',
    description:
      "Emmanuel vous propose de vous accueillir dans un magnifique lieu où se déroulera un cercle sur le thème de l'amour de soi.",
    author: {
      name: 'Luminescence',
      schedules: '14h00 - 17h30',
      price: '45 €',
      imageUrl: LogoLumi,
    },
    imageUrl: CercleBertonBg,
  },
  {
    id: 7,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 10, 2025',
    title: 'ATELIER - Retour à la source',
    subtitle: 'Roseline GAUCHET',
    description:
      'Des clefs pour comprendre, se libérer et avancer avec légèreté.',
    author: {
      name: 'Luminescence',
      schedules: '09h30 - 18h00',
      price: '150 €',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierGauchetBg,
  },
  {
    id: 8,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 11, 2025',
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
    date: 'Fév. 12, 2025',
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
    date: 'Fév. 13, 2025',
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
    date: 'Fév. 13, 2025',
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
    date: 'Fév. 14, 2025',
    title: 'Cabinet Public',
    subtitle: 'Yohane WELTER',
    description:
      'Pour mieux comprendre l’hypnose, mieux maitriser ses émotions, mieux connaitre son conscient & son inconscient...',
    author: {
      name: 'Luminescence',
      schedules: '20h00 - 22h30',
      price: '15 €',
      imageUrl: LogoLumi,
    },
    imageUrl: CabinetWelterBg,
  },
  {
    id: 13,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 15, 2025',
    title: 'CONFÉRENCE - Métamorphose',
    subtitle: 'Florence MEURIC & Frédérique CAIGNARD',
    description:
      'Révélatrice de Potentiels, de Blocages et de Missions de Vie. Florence vous donnera un éclairage concret vers une nouvelle perspective.',
    author: {
      name: 'Luminescence',
      schedules: '19h30 - 22h00',
      price: '15 €',
      imageUrl: LogoLumi,
    },
    imageUrl: ConferenceCaignardMeuricBg,
  },
  {
    id: 14,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 16, 2025',
    title: 'ATELIER - Métamorphose',
    subtitle: 'Florence MEURIC & Fréderique CAIGNARD',
    description:
      'Révélatrice de Potentiels, de Blocages et de Missions de Vie. Florence vous donnera un éclairage concret vers une nouvelle perspective.',
    author: {
      name: 'Luminescence',
      schedules: '10h00 - 18h00',
      price: '160 €',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierCaignardMeuricBg,
  },
  {
    id: 15,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 18, 2025',
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
    date: 'Fév. 19, 2025',
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
    date: 'Fév. 20, 2025',
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
    date: 'Fév. 20, 2025',
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
    date: 'Fév. 21, 2025',
    title: 'ATELIER - Chemin de vie',
    subtitle: 'Marion MEDIUM',
    description:
      "Peut-être régler des dettes de vies antérieures, retrouver quelqu'un, relever des défis...",
    author: {
      name: 'Luminescence',
      schedules: '18h30 - 22h30',
      price: '90 €',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierMediumBg,
  },
  {
    id: 20,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 23, 2025',
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
    date: 'Fév. 25, 2025',
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
    date: 'Fév. 26, 2025',
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
    date: 'Fév. 27, 2025',
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
    date: 'Fév. 27, 2025',
    title: "L'intelligence des cellules & leurs pouvoirs de guérison",
    subtitle: 'Jacques ANTONIN',
    description:
      "La découverte du monde cellulaire, qui remonte à plusieurs siècles, avec l'invention du microscope optique...",
    author: {
      name: 'Luminescence',
      schedules: '19h00 - 22h00',
      price: '18 €',
      imageUrl: LogoLumi,
    },
    imageUrl: AtelierAntoninBg,
  },
  {
    id: 25,
    link: 'https://calendar.google.com/calendar/embed?src=luminescence33%40outlook.fr&ctz=Europe%2FParis',
    date: 'Fév. 28, 2025',
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
    date: 'Fév. 29, 2025',
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
    date: 'Fév. 30, 2025',
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

export { detailsBar, servicesOffered, events, faqs };
