import TarifP1 from "../../assets/images/TarifsBoissonsP1.webp";
import TarifP2 from "../../assets/images/TarifsBoissonsP2.webp";

const PriceCard = () => {
  return (
    <div>
      <div className="px-6">
        <div className="lg:max-w-lg 2xl:mx-80" id="la-carte-des-boissons">
          <p className="text-base font-semibold leading-7 text-sky-600 2xl:text-lg ">
            La Carte des
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-kreon sm:text-4xl">
            BOISSONS
          </h1>
          <p className="mt-6 leading-8 text-gray-700 text-md">
            Consulter et télécharger notre carte pour choisir vos boissons
            préférées !
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full p-6 lg:flex-row 2xl:mx-80 lg:mx-8">
        <div className="w-full lg:mr-20 lg:ml-10 ">
          <img src={TarifP1} alt="Tarifs Boissons partie 1" />
        </div>
        <div className="w-full xl:ml-20 xl:mr-10 h-fit">
          <img src={TarifP2} alt="Tarifs Boissons partie 2" />
        </div>
      </div>
      <div className="flex justify-center px-6 ">
        <a
          href="/docs/Luminescence_Tarifs_Boissons.pdf"
          download="Luminescence_Tarifs_Boissons.pdf"
          rel="noreferrer"
          className="mt-10 duration-300 ease-in-out delay-100  space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full text-center md:w-52  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
          Télécharger notre Carte
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
