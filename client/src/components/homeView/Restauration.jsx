import Rooftop from "../../assets/images/Rooftop.webp";
import { ClockIcon, SparklesIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { GlassDrinkBarAbsolute } from "../../utils/FontAwesome.config";

const detailsAboutTheBar = [
  {
    name: "Horaires flexibles.",
    description: (
      <>
        Pour connaître nos jours et heures d&apos;ouverture actuels, veuillez
        consulter{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61560269117702"
          target="_blank"
          rel="noreferrer"
          alt="Page Facebook"
          className="font-medium text-sky-600">
          notre page Facebook
        </a>
        . Nos horaires peuvent varier selon les événements et la saison.{" "}
      </>
    ),

    icon: ClockIcon,
  },
  {
    name: "Open-space et Rooftop.",
    description:
      "Dégustez vos boissons dans notre espace moderne ou sur notre rooftop chaleureux, parfait pour vos soirées entre amis.",
    icon: SparklesIcon,
  },
  {
    name: "Boissons et Tapas.",
    description:
      "Découvrez notre sélection de boissons rafraîchissantes et de tapas savoureuses, idéales pour accompagner vos moments de détente.",
    icon: GlassDrinkBarAbsolute,
  },
];

const Restauration = () => {
  return (
    <div>
      <div className="py-12 overflow-hidden sm:py-24">
        <div className="px-6 mx-auto max-w-7xl md:px-8 lg:px-10 xl:px-14 2xl:px-18">
          <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* <!--detailss container--> */}
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
                  <p className="mt-6 mr-6 leading-8 text-gray-600 text-md">
                    Profitez de notre service de bar-lounge avec notre
                    Open-space et Rooftop.
                  </p>
                </div>
                {/* <!--Services offered sections--> */}
                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {detailsAboutTheBar.map((details) => (
                    <div key={details.name} className="relative mr-6 pl-9">
                      <dt className="inline font-semibold text-gray-900 ">
                        <details.icon
                          aria-hidden="true"
                          className="absolute size-5 text-sky-600 left-1 top-1 "
                        />
                        {details.name}
                      </dt>{" "}
                      <dd className="inline">{details.description}</dd>
                    </div>
                  ))}
                </dl>
                {/* <!--Action button--> */}
                <Link to="/bar-lounge/#la-carte" rel="noopener noreferrer">
                  <button className="mt-10 duration-300 ease-in-out delay-100  space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full mx-auto md:w-44  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                    Consulter notre Carte
                  </button>
                </Link>
              </div>
            </div>
            {/* <!--Picture Rooftop container--> */}
            <img
              alt="Rooftop(= Terasse sur le toit) de luminescence."
              src={Rooftop}
              width={2432}
              height={1442}
              className="w-[24rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:max-w-none sm:w-[50rem] md:-ml-4 lg:-ml-20 min-[2000px]:w-[60rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restauration;
