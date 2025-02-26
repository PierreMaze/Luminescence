import { HiPuzzlePiece } from 'react-icons/hi2';

import ImageCarousel from '../../../components/ImageCarousel.jsx';

import {
  LocalPictureRentalCaroussel_1,
  LocalPictureRentalCaroussel_2,
  LocalPictureRentalCaroussel_3,
  LocalPictureRentalCaroussel_4,
  LocalPictureRentalCaroussel_5,
  LocalPictureRentalCaroussel_6,
} from '../data/LocalImages.jsx';

const localImages = [
  LocalPictureRentalCaroussel_1,
  LocalPictureRentalCaroussel_2,
  LocalPictureRentalCaroussel_3,
  LocalPictureRentalCaroussel_4,
  LocalPictureRentalCaroussel_5,
  LocalPictureRentalCaroussel_6,
];

export default function RentalLocalSection() {
  return (
    <div className="relative px-8 lg:px-16  py-12 overflow-hidden lg:py-24 bg-zinc-50 isolate lg:overflow-visible">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* <!-- Header section --> */}
        <div
          id="privatiser-le-local"
          className="lg:col-span-2 2xl:mx-80 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
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

        <ImageCarousel images={localImages} />

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
                {[
                  {
                    title: 'Un Bar.',
                    description:
                      'Adapté pour vos réceptions et soirées, équipé pour vous offrir le meilleur service.',
                    iconSize: 'w-6 h-6', // Taille de l'icône définie ici
                  },
                  {
                    title: 'Un Open-Space.',
                    description:
                      'Un environnement modulable pour faire des ateliers créatifs, des conférences inspirantes ou des sessions de brainstorming productives, avec tout le confort nécessaire.',
                    iconSize: 'w-6 h-6', // Taille de l'icône définie ici
                  },
                  {
                    title: 'Un Rooftop.',
                    description:
                      'Un espace en plein air équipé de tentures pour vous protéger du soleil, parfait pour des réceptions élégantes et des moments mémorables.',
                    iconSize: 'w-6 h-6', // Taille de l'icône définie ici
                  },
                ].map(({ title, description, iconSize }, index) => (
                  <li key={index} className="flex gap-x-3 items-center">
                    <div className={iconSize}>
                      <HiPuzzlePiece className="text-sky-600" />
                    </div>
                    <span>
                      <strong className="font-semibold text-zinc-900">
                        {title}
                      </strong>{' '}
                      {description}
                    </span>
                  </li>
                ))}
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
                besoins, vos idées, vos envies. Tout est possible chez{' '}
                <span className="font-bold">Luminescence</span> !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
