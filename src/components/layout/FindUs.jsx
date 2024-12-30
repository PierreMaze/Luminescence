// FindUs.jsx
import Maps from "../../assets/images/Maps.webp";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const FindUs = () => {
  return (
    <div className="pt-12 lg:pt-24">
      {/* <!--Header section--> */}
      <div className="px-6 mx-3 max-w-8xl lg:px-12 2xl:mx-80">
        <div className=" text-start">
          <h2 className="text-lg font-semibold text-sky-800">Où nous</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 font-kreon sm:text-4xl">
            TROUVER ?
          </p>
          <div className="py-6 mt-4 text-lg leading-6 lg:py-10 text-zinc-600">
            <p>
              L’ entrée du local se trouve sur{" "}
              <strong>la Place de la Claire</strong>, entre le Tegalet et la
              Boulangerie.
            </p>
            <p className="flex flex-row pt-6 italic font-normal">
              108 Place de la Claire, 2 ème étage (Ascenseur), 33470
              Gujan-Mestras.
            </p>
          </div>
        </div>
      </div>
      {/* <!--Maps section--> */}
      <div className="relative w-full overflow-hidden bg-cover group bg-clip-border">
        <img
          src={Maps}
          alt=""
          className="object-cover w-full max-h-52 2xl:max-h-96"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://www.google.fr/maps/place/LUMINESCENCE/@44.638864,-1.0605077,19z/data=!3m1!4b1!4m6!3m5!1s0xd5499415bca91f7:0x1f53aae507216527!8m2!3d44.638863!4d-1.059864!16s%2Fg%2F11y43t5xvv?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4  duration-300 ease-in-out delay-100 border-none  space-y-8 leading-7 text-zinc-900 lg:max-w-none  rounded-md bg-zinc-50  mx-auto md:w-44  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm group-hover:text-zinc-50 group-hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
            Ouvrir dans maps
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
