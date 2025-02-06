import TarifsBoissonsP1 from '../../../assets/img/TarifsBoissonsP1.webp';
import TarifsBoissonsP2 from '../../../assets/img/TarifsBoissonsP2.webp';

export default function DrinkMenu() {
  return (
    <>
      <div className="flex flex-col p-6 lg:flex-row">
        {[TarifsBoissonsP1, TarifsBoissonsP2].map((img, index) => (
          <div key={index} className="w-full lg:mr-20 lg:ml-10">
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
          className="mt-10 w-full md:w-52 text-center py-2.5 text-sm font-semibold text-white bg-sky-500 rounded-md hover:bg-sky-600"
        >
          Télécharger notre Carte
        </a>
      </div>
    </>
  );
}
