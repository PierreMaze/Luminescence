import {
  HiMiniQuestionMarkCircle,
  HiCheckBadge,
  HiLightBulb,
} from 'react-icons/hi2';
import { FaPuzzlePiece, FaSquareParking } from 'react-icons/fa6';
import { BiHandicap } from 'react-icons/bi';

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

export default servicesOffered;
