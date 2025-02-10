import { HiMusicalNote, HiMiniSparkles } from 'react-icons/hi2';
import { MdCleanHands } from 'react-icons/md';
import { Carousel, IconButton } from '@material-tailwind/react';

import {
  CabinetPictureRentalCaroussel_1,
  CabinetPictureRentalCaroussel_2,
  CabinetPictureRentalCaroussel_3,
  CabinetPictureRentalCaroussel_4,
  CabinetPictureRentalCaroussel_5,
  CabinetPictureRentalCaroussel_6,
  CabinetPictureRentalCaroussel_7,
  CabinetPictureRentalCaroussel_8,
  CabinetPictureRentalCaroussel_9,
} from '../data/CabinetImages.jsx';

export default function Cabinet() {
  return (
    <div className="relative px-6 py-12 overflow-hidden bg-sky-50 isolate lg:py-24 lg:overflow-visible lg:px-0">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* <!-- Header section --> */}
        <div
          id="privatiser-le-cabinet"
          className=" 2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 2xl:text-lg text-sky-600">
                Privatisez
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-kreon sm:text-4xl">
                Le Cabinet de Soins
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Offrez-vous une parenthèse de sérénité.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Carrousel section --> */}
        <div className="px-8 -ml-12 lg:scale-[0.8] lg:px-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Carousel
            className="w-screen -ml-2 lg:w-full rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 flex justify-center items-center size-1  bg-sky-950/25 hover:bg-sky-950/50 left-0 lg:left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
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
                className="!absolute top-2/4 flex justify-center items-center size-1  bg-sky-950/25 hover:bg-sky-950/50 right-4 lg:!right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img
              src={CabinetPictureRentalCaroussel_1}
              alt="image 1"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_2}
              alt="image 2"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_3}
              alt="image 3"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_4}
              alt="image 4"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_5}
              alt="image 5"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_6}
              alt="image 6"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_7}
              alt="image 7"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_8}
              alt="image 8"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
            <img
              src={CabinetPictureRentalCaroussel_9}
              alt="image 9"
              className="object-contain lg:object-cover w-full lg:h-[600px] 2xl:h-[1000px]"
            />
          </Carousel>
        </div>
        {/* <!-- Body section --> */}
        <div className="lg:col-span-2 2xl:mx-80 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Découvrez notre Cabinet de Soins, un espace entièrement
                privatisable pour vous garantir une expérience de bien-être. Que
                ce soit pour une session de détente ou un soin spécifique, nous
                créons un environnement adapté et sur mesure pour vous.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HiMiniSparkles
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Table de massage.
                    </strong>{' '}
                    Profitez de notre table de massage, pour allier confort et
                    efficacité. Elle est le choix idéal pour transformer chaque
                    soin en un véritable moment de relaxation, que vous soyez un
                    professionnel ou un particulier.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCleanHands
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Confort et hygiène.
                    </strong>{' '}
                    Nous vous mettons à disposition une source d&apos;eau pour
                    votre hygiène. Chaque espace est soigneusement nettoyé et
                    désinfecté, garantissant un environnement sain et relaxant
                    pour chaque visite.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiMusicalNote
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Enceinte Bluetooth.
                    </strong>{' '}
                    Notre enceinte Bluetooth offre une connectivité facile. Elle
                    vous permet de personnaliser l&apos;ambiance de vos séances
                    avec la musique de votre choix, ajoutant une touche de
                    détente supplémentaire à chaque moment.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Notre gamme d&apos;équipements est conçue pour maximiser votre
                confort, améliorer votre expérience et garantir une détente
                optimale à chaque visite.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-kreon">
                Besoin de tranquillité ?
              </h2>
              <p className="mt-6">
                Chez Luminescence, nous nous engageons à vous offrir un moment
                de calme absolu. Nous ajusterons notre emploi du temps pour
                répondre à vos besoins spécifiques, vos idées et vos envies.
                Tout est possible chez{' '}
                <span className="font-bold">Luminescence</span> !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
