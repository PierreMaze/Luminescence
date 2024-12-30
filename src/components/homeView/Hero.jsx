import PictureBgHero from "../../assets/images/LocalWelcome.webp";
import LogoLumiWhite from "../../assets/images/Logo-White.webp";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="aspect-auto"
        style={{
          backgroundImage: `url('../assets/images/LocalWelcome.webp')`,
        }}>
        {/* <!--Picture local BG--> */}
        <img
          src={PictureBgHero}
          alt="Photo du local Luminescence"
          className="object-cover w-full h-screen"
        />

        {/* <!--Blur screen--> */}
        <div className="absolute top-0 w-full h-screen z-1 bg-zinc-950/70"></div>

        {/* <!-- Welcome container --> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 text-center">
          <img
            src={LogoLumiWhite}
            alt="Logo Luminescence en blanc"
            className="mb-4 w-60 lg:w-72 2xl::w-96"
          />
          <h1 className="text-4xl font-bold tracking-wider text-transparent font-kreon bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text xl:text-6xl 2xl:text-8xl lg:font-semibold">
            LUMINESCENCE
          </h1>
          <p className="text-base font-medium tracking-wide text-sky-50 lg:text-lg xl:text-xl lg:font-medium">
            Évènementiel & Location d&apos;Espaces
          </p>
          <p className="text-sm font-semibold tracking-wide text-sky-200 lg:text-md 2xl:text-lg">
            BAR LOUNGE & ROOFTOP
          </p>
          <p className="absolute text-xs font-normal tracking-wider text-center bottom-2 2xl:bottom-4 2xl:text-md text-sky-100">
            GUJAN - MESTRAS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
