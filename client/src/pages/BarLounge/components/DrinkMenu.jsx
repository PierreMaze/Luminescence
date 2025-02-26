import TarifsBoissonsP1 from '../../../assets/img/TarifsBoissonsP1.webp';
import TarifsBoissonsP2 from '../../../assets/img/TarifsBoissonsP2.webp';

export default function DrinkMenu() {
  return (
    <>
      <div className="flex flex-col p-8 lg:p-16 2xl:p-32 lg:flex-row">
        {[TarifsBoissonsP1, TarifsBoissonsP2].map((img, index) => (
          <div key={index} className="w-full mx-auto lg:w-7xl 2xl:w-3xl">
            <img
              src={img}
              alt={`Tarifs Boissons partie ${index + 1}`}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="/docs/Luminescence_Tarifs_Boissons.pdf"
          download="Luminescence_Tarifs_Boissons.pdf"
          className="mt-0 lg:mt-8 justify-center inline-flex w-full lg:w-fit text-center px-6 py-3 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-600"
        >
          Télécharger notre Carte
        </a>
      </div>
    </>
  );
}
