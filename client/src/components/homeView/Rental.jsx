import {
  PuzzlePieceIcon,
  LightBulbIcon,
  CheckBadgeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

import {
  AccessibleHandicape,
  SquareParking,
} from "../../utils/FontAwesome.config";

import { Link } from "react-router-dom";

const servicesOffered = [
  {
    name: "Espaces entièrement modulables",
    description:
      "Découvrez nos espaces flexibles, conçus pour s’adapter à vos besoins et offrir un cadre optimal pour tout type d’événement.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Garantir le succès de votre événement",
    description:
      "Nous mettons tout en œuvre pour garantir le succès de votre événement en offrant un soutien complet tout au long du processus.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Services personnalisés",
    description:
      "Nous offrons des services sur mesure pour répondre précisément à vos attentes, assurant une organisation et un résultat à la hauteur de vos attentes.",
    icon: LightBulbIcon,
  },
  {
    name: "Parking à l'arrière",
    description:
      "Vous disposez d'un parking public et gratuit situé à l'arrière de notre établissement, offrant une commodité d'accès facile pour notre clientèle.",
    icon: SquareParking,
  },
  {
    name: "Accessibilité handicapé(e)s",
    description:
      "Notre établissement est entièrement accessible aux personnes en situation de handicap. Des aménagements spécifiques ont été mis en place, des toilettes adaptées et un ascenseur.",
    icon: AccessibleHandicape,
  },
  {
    name: "Vous avez des questions ?",
    description: (
      <>
        N&apos;hésitez pas à consulter notre{" "}
        <a href="#notre-faq" className="text-sky-400 hover:underline">
          FAQ
        </a>
        , si vous ne trouvez pas de réponse,{" "}
        <Link
          to="/contact/contacter-nous"
          className="text-sky-400 hover:underline">
          contactez-nous
        </Link>{" "}
        directement !
      </>
    ),
    icon: QuestionMarkCircleIcon,
  },
];

const Location = () => {
  return (
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
          <p className="mt-4 text-lg leading-6 text-zinc-400">
            Découvrez nos services de location, conçus pour répondre à toutes
            vos attentes.
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
        <Link to="location/#contact-business" rel="noopener noreferrer">
          <button className="mt-14 duration-300 ease-in-out delay-100 space-y-8 leading-7 text-sky-50 rounded-md bg-sky-500 w-full mx-auto md:w-48 md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
            Votre devis personnalisé
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
