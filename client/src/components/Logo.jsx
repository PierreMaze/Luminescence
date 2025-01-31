import LogoLumi from '../assets/img/Lumi.svg';

const Logo = () => {
  return (
    <div className="flex lg:flex-1">
      <a
        href="/"
        rel="noreferrer"
        className="flex flex-row justify-center  -m-1.5 p-1.5"
      >
        <img
          alt="Logo Luminescence / Bouton Accueil"
          src={LogoLumi}
          className="size-12 md:size-14 xl:size-16"
        />
        <div className="flex flex-col pt-4 xl:pt-3 ml-px font-kreon xl:pl-1.5">
          <p className="text-2xl font-semibold tracking-wider text-transparent md:text-3xl xl:text-4xl bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text">
            UMINESCENCE
          </p>

          <p className="text-[10px] -mt-1 tracking-wider text-cyan-50 italic">
            La culture sous toutes ses coutures...
          </p>
        </div>
      </a>
    </div>
  );
};

export default Logo;
