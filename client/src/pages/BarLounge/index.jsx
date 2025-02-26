// src/pages/BarLounge/index.jsx
import LinkList from './components/LinksList.jsx';
import StatsList from './components/StatsList.jsx';
import InfoList from './components/InfosList.jsx';
import DrinkMenu from './components/DrinkMenu.jsx';

import { IoCall } from 'react-icons/io5';

import PictureBar from '../../assets/img/PictureBar.webp';
import BgBarlounge from '../../assets/img/Bar-Lounge.webp';

export default function BarLounge() {
  return (
    <div className="bg-sky-50">
      <section className="relative h-full px-8 lg:px-16 py-12 bg-zinc-900 lg:pt-32">
        <img
          alt="Picture Background Bar-lounge"
          src={BgBarlounge}
          loading="lazy"
          className="absolute z-0 inset-0 object-cover w-full h-full"
        />
        <div className="relative pt-35 md:pt-20 z-10 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-sky-50 sm:text-6xl">
            Découvrez notre Bar
          </h1>
          <p className="my-6 text-lg text-zinc-300">
            Que ce soit pour un apéritif décontracté ou une soirée festive,
            laissez-vous séduire par notre sélection de boissons.
          </p>
          <LinkList />
          <StatsList />
        </div>
      </section>

      <section className="relative px-8 lg:px-16 py-12 overflow-hidden isolate lg:overflow-visible">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 2xl:ml-80 2xl:mr-32">
          <div className="lg:pr-4" id="a-propos-bar-lounge">
            <p className="text-base font-semibold leading-7 text-sky-600">
              A propos du
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
              BAR-LOUNGE
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              Prenez un verre, détendez-vous et laissez-vous emporter par
              l&apos;ambiance de notre lieu avec un grand “L”.
            </p>
          </div>
          <div className="lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              loading="lazy"
              alt="Picture Bar"
              src={PictureBar}
              className="w-full lg:mt-16 2xl:mt-32 bg-zinc-900 shadow-xl rounded-xl"
            />
          </div>
          <div className="lg:pr-4 max-w-xl text-base leading-7 text-zinc-700 lg:max-w-lg">
            <p>
              Luminescence est un lieu incontournable du Bassin d&apos;Arcachon,
              vous pourrez découvrir un lieu chaleureux avev un Open-space et un
              Rooftop situé au cœur de Gujan-Mestras.
            </p>
            <InfoList />
            <p className="mt-8">
              Notre bar dispose d&apos;une{' '}
              <a
                href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006155036"
                target="_blank"
                aria-label={'Lois de texte sur la License'}
                className="font-semibold font-kreon text-sky-600 underline lg:underline-none hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
              >
                license III
              </a>{' '}
              pour que vous puissiez vous détendre tout en modération.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-900 font-kreon">
              Vous êtes en groupe ? Pas de problème.
            </h2>
            <p className="mt-6">
              Appelez-nous ! Nous vous accueillerons avec plaisir pour passer un
              moment convivial autour de nos tables.
            </p>
          </div>
          <div className=" -mt-8 lg:mt-0 mb-4 flex justify-center lg:justify-start">
            <a
              href="tel:+33 6 46 84 93 52"
              target="_blank"
              aria-label="Appeler l'entreprise."
              className="justify-center inline-flex w-full lg:w-fit text-center px-6 py-3 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-600"
            >
              Nous appeler
              <IoCall className="size-4 mt-0.5 ml-4 text-sky-50" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-12">
        <div className="lg:max-w-xl 2xl:mx-80" id="la-carte-des-boissons">
          <p className="text-base font-semibold text-sky-600">La Carte des</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            BOISSONS
          </h2>
          <p className="mt-6 text-gray-700">
            Consultez et téléchargez notre carte pour choisir vos boissons
            préférées !
          </p>
        </div>

        <DrinkMenu />
      </section>
    </div>
  );
}
