import GoogleMap from "../features/google/GoogleMap.jsx";

const FindUs = () => {
  return (
    <div className="pt-12 lg:pt-24">
      <div className="px-6 mx-3 max-w-8xl lg:px-12 2xl:mx-80">
        <div className=" text-start">
          <h2 className="text-lg font-semibold text-sky-800">Où nous</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 font-kreon sm:text-4xl">
            TROUVER ?
          </p>
          <div className="py-6 mt-4 text-base leading-6 lg:py-10 text-zinc-600">
            <p>
              L’ entrée du local se trouve sur{' '}
              <strong>la Place de la Claire</strong>, entre le Tegalet et la
              Boulangerie.
            </p>
            <p className="flex flex-row text-[.8rem] pt-6 italic font-normal">
              Au 108 Place de la Claire, 2 ème étage (Ascenseur), 33470
              Gujan-Mestras.
            </p>
          </div>
        </div>
      </div>
      < GoogleMap />
    </div>
  );
};

export default FindUs;
