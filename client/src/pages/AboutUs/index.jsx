import AboutPageAccueil from '../../assets/img/AboutPageAccueil.webp';
import AboutPageLocal from '../../assets/img/AboutPageLocal.webp';
import AboutPageRooftop from '../../assets/img/AboutPageRooftop.webp';
import OptimizedImage from '../../components/OptimizedImage';

const AboutUs = () => {
  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-16 bg-sky-50">
      <section className="mt-20 mb-12 text-center">
        <h1 className="mb-4 text-2xl font-bold uppercase 2xl:text-4xl font-kreon">
          À propos de nous
        </h1>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold 2xl:mx-80">
          C&apos;est quoi le concept ?
        </h2>
        <p className="mb-4 2xl:mx-80 text-zinc-700">
          Luminescence est un lieu polyvalent où tout est possible ! Vous pouvez
          le privatiser ou profiter des événements organisés. La pièce
          principale peut être louée avec son mobilier, sachant qu&apos;il y a
          50 chaises supplémentaires disponibles.
        </p>
        <p className="mb-12 2xl:mx-80 text-zinc-700">
          Vous avez aussi l&apos;option de le louer vide, pour des activités
          variées, sur 150 m². De plus, un Cabinet de Soins est disponible à la
          location.
        </p>
        <div className="text-center lg:mx-16 2xl:mx-[28rem] 2xl:my-12">
          <OptimizedImage
            src={AboutPageRooftop}
            alt="People discussing in a meeting"
            className="rounded-lg shadow-md w-full lg:w-3/4 h-auto mx-auto "
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-3xl font-bold 2xl:mx-80">Qui sommes-nous ?</h2>
        <p className="mb-4 text-zinc-700 2xl:mx-80">
          Implanté au cœur de Gujan-Mestras, Luminescence a ouvert ses portes le
          8 mai 2024. Depuis, ce lieu culturel est devenu le point de rencontre
          privilégié où les clients partagent leur passion pour l&apos;art, la
          musique, la littérature et bien plus encore. Luminescence incarne la
          convivialité, en favorisant le rapprochement, les échanges
          enrichissants et la création de liens authentiques.
        </p>
        <p className="mb-4 text-zinc-700 2xl:mx-80">
          Luminescence est un lieu convivial où règnent la joie, la créativité
          et la bienveillance. Nous favorisons les rencontres, les échanges et
          le partage d&apos;expériences de vie. Notre objectif est de créer un
          espace inclusif et accessible à tous, en particulier à ceux qui
          peinent à trouver des lieux d&apos;expression, avec des tarifs
          abordables.
        </p>
      </section>

      <section className="lg:mx-16 flex flex-col lg:flex-row 2xl:mx-80 lg:space-x-16">
        <div className="flex-1 mb-4 lg:mb-0">
          <OptimizedImage
            src={AboutPageLocal}
            alt="Group discussion"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="flex-1 mb-4 lg:mb-0">
          <OptimizedImage
            src={AboutPageAccueil}
            alt="Welcoming entrance"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </section>

      <div className="mt-10 text-center">
        <p className="italic font-semibold 2xl:mx-80">
          Vous avez des questions ?
        </p>
        <a href="/contact/contacter-nous" rel="noreferrer">
          <button className="my-4 px-4 py-2.5 text-sm font-semibold text-white bg-sky-500 rounded-md shadow-sm transition duration-300 ease-in-out hover:bg-sky-600 hover:ring hover:ring-sky-600 focus:outline-none">
            Contactez-nous !
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
