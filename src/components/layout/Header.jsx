import LogoLumi from "../../assets/images/Logo-lumi.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-20 w-full bg-zinc-950/95">
      {/* <!--Header--> */}
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        {/* <!--Logo container--> */}
        <div className="flex lg:flex-1">
          <Link
            to="/"
            rel="noreferrer"
            className="flex flex-row justify-center  -m-1.5 p-1.5">
            <img
              alt="Logo Luminescence / Bouton Accueil"
              src={LogoLumi}
              className="size-12 md:size-14 xl:size-16"
            />
            <div className="flex flex-col pt-4 xl:pt-3 ml-px font-kreon xl:pl-1.5">
              <p className="text-2xl font-normal tracking-wider text-transparent md:text-3xl xl:text-4xl bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text">
                UMINESCENCE
              </p>

              <p className="text-[10px] -mt-1 tracking-wider text-cyan-50 italic">
                La culture sous toutes ses coutures...
              </p>
            </div>
          </Link>
        </div>
        {/* <!--Burger container--> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky-100">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
        {/* <!--Navigation container--> */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-3 transition duration-300 ease-in-out delay-150 xl:w-6 xl:h-6 hover:text-sky-500">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </Link>
          <Link
            to="/bar-lounge"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600">
            Bar-Lounge
          </Link>
          <Link
            to="/location"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600">
            Location
          </Link>
          <Link
            to="/evenements"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600">
            Événements
          </Link>
          <Link
            to="/contact"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600">
            Contact
          </Link>
          <Link
            to="/a-propos"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600">
            A propos
          </Link>
        </PopoverGroup>
      </nav>
      {/* <!--Modal Burger Open--> */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        {/* <!--Modal container--> */}
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-zinc-950 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* <!--Logo container--> */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              rel="noreferrer"
              className="flex flex-row justify-center  -m-1.5 p-1.5">
              <img
                alt="Logo Luminescence / Bouton Accueil"
                src={LogoLumi}
                className="w-auto h-14"
              />
              <div className="flex flex-col items-start justify-end pt-4 -ml-3 ps-4 font-kreon">
                <p className="text-3xl font-normal tracking-wider text-transparent bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text">
                  UMINESCENCE
                </p>

                <p className="text-[10px] tracking-wider text-cyan-50 italic">
                  La culture sous toutes ses coutures...
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-sky-400">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          {/* <!--Nav modal container--> */}
          <div className="flow-root mt-6 text-4xl">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-10 space-y-3 ">
                <Link
                  to="/"
                  rel="noreferrer"
                  className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-6 text-gray-100 rounded-lg hover:bg-sky-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  🏠 Accueil
                </Link>

                <Link
                  to="/bar-lounge"
                  rel="noreferrer"
                  className="block px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  🍹 Bar-Lounge
                </Link>

                <Link
                  to="/location"
                  rel="noreferrer"
                  className="block px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  🔑 Location
                </Link>

                <Link
                  to="/evenements"
                  rel="noreferrer"
                  className="block px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  🎉 Événements
                </Link>

                <Link
                  to="/contact"
                  rel="noreferrer"
                  className="block px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  🖋️ Contact
                </Link>

                <Link
                  to="/a-propos"
                  rel="noreferrer"
                  className="block px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  ℹ️ A propos
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
