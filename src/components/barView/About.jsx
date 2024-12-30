import { ClockIcon, CurrencyEuroIcon } from "@heroicons/react/20/solid";
import { GlassDrinkBar } from "../../utils/FontAwesome.config";
import PictureBar from "../../assets/images//PictureBar.webp";

const About = () => {
  return (
    <div className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 2xl:mx-80 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg" id="a-propos-bar-lounge">
              <p className="text-base font-semibold leading-7 text-sky-600">
                A propos du
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
                BAR-LOUNGE
              </h1>
              <p className="mt-6 text-xl leading-8 text-zinc-700">
                Prenez un verre, détendez-vous et laissez-vous emporter par
                l&apos;ambiance de notre lieu avec un grand “L”.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:p-12 lg:-mt-12 lg:-ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={PictureBar}
            className="lg:w-[48rem] lg:max-w-none 2xl:w-[80rem] rounded-xl bg-zinc-900 shadow-xl ring-1 ring-zinc-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-zinc-700 lg:max-w-lg">
              <p>
                Luminescence est un lieu incontournable du Bassin
                d&apos;Arcachon ! <br /> Un Open-space avec Rooftop situé au
                coeur de Gujan-Mestras, vous pouvez y découvrir un lieu
                chaleureux, accompagnées de boissons chaudes ou froides,
                alcoolisées ou non.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-zinc-600">
                <li className="flex gap-x-3">
                  <ClockIcon
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-zinc-900">
                      Horaires flexibles.
                    </strong>{" "}
                    Nos horaires peuvent varier selon les événements et la
                    saison. Pour connaître nos jours et heures d&apos;ouverture
                    actuels, veuillez consulter{" "}
                    <a
                      href="https://www.facebook.com/profile.php?id=61560269117702"
                      target="_blank"
                      rel="noreferrer"
                      alt="Page Facebook"
                      className="font-medium duration-300 ease-linear delay-75 text-sky-600 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                      notre page Facebook
                    </a>
                    .
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlassDrinkBar />
                  <span>
                    <strong className="font-semibold text-zinc-900">
                      Boissons & Tapas.
                    </strong>{" "}
                    Profitez de notre carte avec une variété de softs, de bières
                    pression, de vins et de champagne. Vous pourrez aussi
                    grignoter des tapas telles que des samoussas, du camembert
                    rôti, de la charcuterie, etc..
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CurrencyEuroIcon
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-zinc-900">
                      Paiement.
                    </strong>{" "}
                    Tous les services et paiements se font au bar directement,
                    vous n&apos;avez qu&apos;a demander...
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Notre bar dispose d&apos;une{" "}
                <span className="font-semibold font-kreon">license III</span>{" "}
                pour que vous puissiez vous détendre tout en modération.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900 font-kreon">
                Vous êtes en groupe ? Pas de problème.
              </h2>
              <p className="mt-6">
                Appelez-nous ! Nous vous accueillerons avec plaisir pour passer
                un moment convivial autour de nos tables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
