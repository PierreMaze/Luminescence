// src/data/services/details-bar.js

// Import des icônes
import { TbClockHour8Filled } from 'react-icons/tb';
import { IoSparklesSharp } from 'react-icons/io5';
import { LiaGlassMartiniAltSolid } from 'react-icons/lia';

// Constantes pour les URLs
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61560269117702';

// Données de la barre de détails
const detailsBar = [
  {
    name: 'Horaires flexibles.',
    description: (
      <>
        Pour connaître nos jours et heures d&apos;ouverture actuels, veuillez
        consulter{' '}
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-sky-600 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
        >
          notre page Facebook
        </a>
        . Nos horaires peuvent varier selon les événements et la saison.
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

export default detailsBar;
