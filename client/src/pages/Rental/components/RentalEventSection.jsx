import { PiRocketLaunchFill } from 'react-icons/pi';
import { HiBriefcase } from 'react-icons/hi';
import { RiStarSmileFill } from 'react-icons/ri';

export default function OrganizeEvent() {
  return (
    <div className="relative px-6 py-12 overflow-hidden lg:py-24 bg-zinc-50 isolate sm:py-32 lg:overflow-visible lg:px-0">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* <!-- Header section --> */}
        <div
          id="organiser-un-evenement"
          className=" 2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 2xl:text-lg text-sky-600">
                Organisez
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-kreon sm:text-4xl">
                Votre événement
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Réalisez l&apos;événement de vos rêves avec nous.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Picture section --> */}
        <div className="py-0 lg:px-8 lg:p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className=" size-80 lg:w-[28rem] lg:h-[28rem] flex-shrink-0 object-cover xl:w-[30rem] xl:h-[30rem] rounded-full 2xl:w-[40rem] 2xl:h-[40rem]"
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        {/* <!-- Body section --> */}
        <div className=" 2xl:mx-80 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Que vous planifiez une conférence animée, un atelier inspirant,
                ou une soirée inoubliable, nous avons tout ce dont vous avez
                besoin pour votre événement.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <RiStarSmileFill
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Un espace sur-mesure pour chaque occasion.
                    </strong>{' '}
                    Que vous ayez besoin d&apos;une ambiance intime ou d&apos;un
                    lieu grandiose, nous avons l&apos;espace idéal pour vous.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PiRocketLaunchFill
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Équipements de pointe pour un impact maximal.
                    </strong>{' '}
                    Nos installations sont dotées d&apos;une connexion Wi-Fi, et
                    de tout le matériel nécessaire pour des présentations /
                    projections.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiBriefcase
                    aria-hidden="true"
                    className="flex-none w-5 h-5 mt-1 text-sky-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Un service personnalisé, modulable selon vos désirs.
                    </strong>{' '}
                    De la planification initiale à la coordination le jour J,
                    nous nous occupons de tout : décoration, bar & grignotages,
                    support technique, et plus encore.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                <span className="font-semibold">
                  Pourquoi choisir Luminescence ?
                </span>{' '}
                Parce que nous croyons que chaque événement doit être une
                expérience unique et mémorable.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-kreon">
                Besoin de visibilité ?
              </h2>
              <p className="mt-6">
                Nous vous aidons à promouvoir votre événement sur nos réseaux
                sociaux pour maximiser sa portée et son impact. Possibilité
                d&apos;élaboration, d&apos;impression de flyers et
                d&apos;affiches. <br />
                Tout est possible chez{' '}
                <span className="font-bold font-kreon">Luminescence</span> !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
