import { HiMusicalNote, HiMiniSparkles } from 'react-icons/hi2';
import { MdCleanHands } from 'react-icons/md';

import ImageCarousel from '../../../components/ImageCarousel.jsx';

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

const cabinetImages = [
  CabinetPictureRentalCaroussel_1,
  CabinetPictureRentalCaroussel_2,
  CabinetPictureRentalCaroussel_3,
  CabinetPictureRentalCaroussel_4,
  CabinetPictureRentalCaroussel_5,
  CabinetPictureRentalCaroussel_6,
  CabinetPictureRentalCaroussel_7,
  CabinetPictureRentalCaroussel_8,
  CabinetPictureRentalCaroussel_9,
];

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

        <ImageCarousel images={cabinetImages} />

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
              <ul className="mt-8 space-y-8 text-gray-600">
                {[
                  {
                    icon: (
                      <div className="size-6">
                        <HiMiniSparkles className="text-sky-600" />
                      </div>
                    ),
                    title: 'Table de massage.',
                    text: 'Profitez de notre table de massage pour allier confort et efficacité.',
                  },
                  {
                    icon: (
                      <div className="size-6">
                        <MdCleanHands className="text-sky-600" />
                      </div>
                    ),
                    title: 'Confort et hygiène.',
                    text: 'Chaque espace est soigneusement nettoyé et désinfecté, garantissant un environnement sain.',
                  },
                  {
                    icon: (
                      <div className="size-6">
                        <HiMusicalNote className="text-sky-600" />
                      </div>
                    ),
                    title: 'Enceinte Bluetooth.',
                    text: 'Personnalisez l’ambiance de vos séances avec la musique de votre choix.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    {item.icon}
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {item.title}
                      </strong>{' '}
                      {item.text}
                    </span>
                  </li>
                ))}
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
