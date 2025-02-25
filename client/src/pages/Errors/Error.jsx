import LogoLumi from '../../assets/img/Lumi.svg';

const Error = () => {
  return (
    <>
      <section
        id="error-page"
        className="flex bg-sky-50 flex-col items-center justify-center h-screen lg:h-screen"
      >
        <img
          src={LogoLumi}
          className="pb-8 w-40 lg:w-60 lg:pt-24 2xl:w-[30rem]"
          alt="Logo Luminescence de couleur"
        />
        <div></div>
        <h2 className="font-kreon">Oups!</h2>
        <p className>Désolé, une erreur imprévue s&apos;est produite.</p>
        <p className=" mt-6">
          <i>Tu t&apos;es perdu ?</i>
        </p>
        <a href="/" rel="noreferrer">
          <button className="px-4 mt-10 animate-bounce duration-300 ease-in-out delay-100 border-none ring-none hover:ring  hover:ring-sky-600 space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full mx-auto md:w-44  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
            Revenir à l&apos;accueil
          </button>
        </a>
      </section>
    </>
  );
};

export default Error;
