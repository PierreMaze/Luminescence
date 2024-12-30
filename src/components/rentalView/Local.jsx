import { PuzzlePieceIcon } from "@heroicons/react/20/solid";

import LocalPictureRentalCaroussel_1 from "../../assets/images/LocalPictureRentalCaroussel_1.webp";
import LocalPictureRentalCaroussel_2 from "../../assets/images/LocalPictureRentalCaroussel_2.webp";
import LocalPictureRentalCaroussel_3 from "../../assets/images/LocalPictureRentalCaroussel_3.webp";
import LocalPictureRentalCaroussel_4 from "../../assets/images/LocalPictureRentalCaroussel_4.webp";
import LocalPictureRentalCaroussel_5 from "../../assets/images/LocalPictureRentalCaroussel_5.webp";
import LocalPictureRentalCaroussel_6 from "../../assets/images/LocalPictureRentalCaroussel_6.webp";

import { Carousel, IconButton } from "@material-tailwind/react";

const Local = () => {
  return (
    <div className="relative px-6 py-12 overflow-hidden lg:py-24 bg-zinc-50 isolate lg:overflow-visible lg:px-0">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* <!-- Header section --> */}
        <div
          id="privatiser-le-local"
          className="lg:col-span-2 2xl:mx-80 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
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
                className="!absolute top-2/4 left-0 lg:left-4 -translate-y-2/4 flex justify-center items-center size-1  bg-sky-950/25 hover:bg-sky-950/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6">
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
                className="!absolute flex justify-center items-center  top-2/4 right-4 lg:!right-4 -translate-y-2/4 size-1  bg-sky-950/25 hover:bg-sky-950/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}>
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
                grandiose, ils offrent le cadre idéal pour toutes vos occasions.
                Plongez dans une ambiance unique et modulable selon vos besoins.
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
                    </strong>{" "}
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
                    </strong>{" "}
                    Un environnement modulable pour faire des ateliers créatifs,
                    des conférences inspirantes ou des sessions de brainstorming
                    productives, avec tout le confort nécessaire.
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
                    </strong>{" "}
                    Un espace en plein air équipé de tentures pour vous protéger
                    du soleil, parfait pour des réceptions élégantes et des
                    moments mémorables.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Nos espaces se transforment selon vos besoins : louez-le(s)
                prêt(s) à l&apos;emploi ou vide(s), pour une flexibilité totale.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight font-kreon text-zinc-900">
                Besoin que d&apos;un seul espace ?
              </h2>
              <p className="mt-6">
                Nous effectuons des devis sur mesure, en fonction de vos
                besoins, vos idées, vos envies. Tout est possible chez{" "}
                <span className="font-bold">Luminescence</span> !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Local;
