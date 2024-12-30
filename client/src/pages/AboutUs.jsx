import AboutPageAccueil from "../assets/images/AboutPageAccueil.webp";
import AboutPageLocal from "../assets/images/AboutPageLocal.webp";
import AboutPageRooftop from "../assets/images/AboutPageRooftop.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-zinc-50">
      <section className="mt-20 mb-12">
        <h1 className="mb-4 text-2xl font-bold text-center uppercase 2xl:text-4xl font-kreon">
          A propos de nous
        </h1>
      </section>
      <h2 className="mb-4 text-3xl font-bold 2xl:mx-80">
        C&apos;est quoi le concept ?
      </h2>
      <p className="mb-4 2xl:mx-80 text-zinc-700">
        Luminescence est un lieu polyvalent où tout est possible ! Vous pouvez
        le privatiser ou profiter des événements organisés. La pièce principale
        peut être louée avec son mobilier, sachant qu&apos;il y a 50 chaises
        supplémentaires disponibles. Vous avez aussi l&apos;option de le louer
        vide, pour des activités variées, sur 150 m². De plus, un Cabinet de
        Soins est disponible à la location.
      </p>
      <section className="mb-12 ">
        <img
          src={AboutPageRooftop}
          alt="People discussing in a meeting"
          className="rounded-lg shadow-md 2xl:w-[100rem] 2xl:mx-[28rem] 2xl:my-12"
        />
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
        <h2 className="mb-4 text-3xl font-bold 2xl:mx-80">Nos valeurs</h2>
        <p className="text-zinc-700 2xl:mx-80">
          Luminescence est un lieu convivial où règnent la joie, la créativité
          et la bienveillance. Nous favorisons les rencontres, les échanges et
          le partage d&apos;expériences de vie. Notre objectif est de créer un
          espace inclusif et accessible à tous, en particulier à ceux qui
          peinent à trouver des lieux d&apos;expression, avec des tarifs
          abordables.
        </p>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row 2xl:mx-80 lg:space-x-4">
          <div className="flex-1 mb-4 lg:mb-0">
            <img
              src={AboutPageLocal}
              alt="Group discussion"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <div className="relative pb-9/16">
              <img
                src={AboutPageAccueil}
                alt=""
                className="w-full h-auto rounded-lg shadow-md"
              />

              {/* Section Video Youtube for add later */}
              {/* <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/your-video-id"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video"></iframe> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--Action button--> */}
      <p className="mt-10 italic font-semibold 2xl:mx-80">
        Vous avez des questions ?
      </p>
      <Link to="/contact/contacter-nous" rel="noreferrer">
        <button className="my-4 2xl:mx-80  duration-300 ease-in-out delay-100 border-none ring-none hover:ring  hover:ring-sky-600 space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full mx-auto md:w-40  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
          Contactez-nous !
        </button>
      </Link>
    </div>
  );
};

export default AboutUs;
