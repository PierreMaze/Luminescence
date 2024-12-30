// Galerie.jsx
// import InstagramFeed from "../../services/InstagramFeeds";
import PictureMaintenance from "../../assets/images/PictureMaintenance.svg";

const Galerie = () => {
  return (
    <>
      <div className="container px-4 py-12 mx-auto overflow-hidden lg:py-24 md:px-8 lg:px-10 xl:px-14 2xl:px-18">
        {/* header section */}
        <div className="w-full px-6 text-center md:px-8 lg:px-10 xl:px-14 2xl:px-18">
          <h2 className="text-lg font-semibold leading-7 text-sky-800">
            Nos dernières
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
            PHOTOS
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Découvrez un aperçu de notre ambiance unique et de nos moments forts
            à travers notre galerie d&apos;images.
          </p>
        </div>

        {/* Gallery section */}
        {/* <InstagramFeed /> */}
        <div className="flex justify-center pt-4 ">
          <img
            src={PictureMaintenance}
            alt="Maintenance en cours"
            className="w-full max-w-md"
          />
        </div>

        {/* Button section */}
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/luminescence333"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 mt-10 duration-300 items-center ease-in-out delay-100  space-y-8 leading-7 text-sky-50 lg:max-w-none rounded-md bg-sky-500 w-full mx-auto md:w-36 justify-center md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
            Voir plus
          </a>
        </div>
      </div>

      {/* Divider section */}
      <div className="relative flex flex-row">
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-200"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-200"></div>
        </div>
      </div>
    </>
  );
};

export default Galerie;
