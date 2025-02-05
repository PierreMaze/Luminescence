import { MdLocalPhone, MdEmail } from 'react-icons/md';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoWhatsapp,
} from 'react-icons/io5';

import LogoLumi from '../assets/img/Lumi.svg';
import Newsletter from '../features/emailjs/Newsletter.jsx';

export const Footer = () => {
  return (
    <footer className="gap-3 text-center bg-zinc-950 text-neutral-50 lg:text-left">
      <div className="relative py-1 overflow-hidden z-10 bg-zinc-950 isolate sm:py-14 lg:py-10">
        {/* <!-- Social network container --> */}
        <div className="flex items-center justify-center p-6 2xl:mx-80 lg:ml-12 lg:justify-start ">
          <div className="hidden mr-2 lg:block">
            <span>Rejoignez-nous sur les réseaux sociaux : </span>
          </div>
          {/* <!-- Social network icons container --> */}
          <div className="flex justify-center gap-4">
            {/* <!-- Facebook icons container --> */}
            <a
              href="https://www.facebook.com/profile.php?id=61560269117702"
              target="_blank"
              rel="noreferrer"
              title="Page Facebook"
              alt="Page Facebook"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
            >
              <IoLogoFacebook />
            </a>
            {/* <!-- Instagram icons container --> */}
            <a
              href="https://www.instagram.com/luminescence333"
              target="_blank"
              rel="noreferrer"
              title="Page Instagram"
              alt="Page Instagram"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
            >
              <IoLogoInstagram />
            </a>
            {/* <!-- Tik Tok icons container --> */}
            <a
              href="https://www.tiktok.com/@luminescence.gujan?_t=8nIvyDlMPVR&_r=1"
              target="_blank"
              rel="noreferrer"
              title="Page Tik Tok"
              alt="Page Tik Tok"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
            >
              <IoLogoTiktok />
            </a>
            {/* <!-- Linkedin icons container --> */}
            <a
              href="https://www.linkedin.com/in/frederique-caignard-609a22159/"
              target="_blank"
              rel="noreferrer"
              title="Page Linkedin"
              alt="Page Linkedin"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
            >
              <IoLogoLinkedin />
            </a>
            {/* <!-- Youtuube icons container --> */}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              title="Page Youtube"
              alt="Page Youtube"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
            >
              <IoLogoYoutube />
            </a>
            {/* <!-- Whatsapp icons container --> */}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              title="Notre groupe whatsapp"
              alt="Notre groupe whatsapp"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>

        {/* <!--Newsletter section--> */}
        <Newsletter />
        {/* NavBar */}
        <section className="w-60 mx-auto mb-12 flex flex-col justify-center ">
          {/* <!-- Logo section --> */}
          <a
            href="/"
            rel="noopener noreferrer"
            className="pb-8 font-light font-kreon lg:pb-0"
          >
            <img
              src={LogoLumi}
              alt="Logo luminescence"
              className="w-24 pb-6 mx-auto"
            />
            <div className="text-start">
              <p className="text-3xl font-semibold tracking-wider text-transparent bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text">
                LUMINESCENCE
              </p>
              <p className="text-xs italic tracking-wider">
                La culture sous toutes ses coutures...
              </p>
            </div>
          </a>
        </section>
        <nav className="place-self-center grid gap-8 grid-1 md:grid-cols-3">
          {/* <!-- BAR-LOUNGE section --> */}
          <div className="flex flex-col justify-center lg:justify-start">
            <h6 className="mb-4 font-semibold uppercase text-sky-500">
              Navigation
            </h6>
            <a
              href="/"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Accueil
            </a>
            <a
              href="/bar-lounge"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Bar-Lounge
            </a>
            <a
              href="/location"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Location
            </a>
            <a
              href="/evenements"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Événements
            </a>
            <a
              href="/contact"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Contact
            </a>
            <a
              href="/a-propos"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              A propos
            </a>
          </div>
          {/* <!-- LEGAL section --> */}
          <div className="flex flex-col justify-center md:justify-start">
            <h6 className="mb-4 font-semibold uppercase text-sky-500 ">
              Legal
            </h6>
            <a
              href="mentions-legales"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Mentions légales
            </a>
            <a
              href="politique-confidentialite"
              rel="noopener noreferrer"
              className="mb-4 text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              Politique de confidentialité
            </a>
          </div>
          {/* <!-- CONTACT section --> */}
          <div className="flex flex-col justify-center md:justify-start">
            <h6 className=" mb-4 font-semibold uppercase text-sky-500 ">
              Contact
            </h6>
            <a
              href="mailto:contact@luminescence33.com"
              rel="noreferrer"
              className="flex justify-center md:justify-start mb-4 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              <MdEmail className="size-5 mr-2" />
              {'contact@luminescence33.com'}
            </a>
            <a
              href="tel:+33 6 46 84 93 52"
              rel="noreferrer"
              className="flex justify-center md:justify-start mb-4 tabular-nums hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
            >
              <MdLocalPhone className="size-5 mr-2" /> {'+ 33 6 46 84 93 52'}
            </a>
          </div>
        </nav>
        {/* <!-- BG  Gradiant linear --> */}
        <div
          aria-hidden="true"
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 54.1%, 100% 71.6%, 87.5% 36.9%, 85.5% 100.1%, 80.7% 12%, 72.5% 42.5%, 60.2% 72.4%, 52.4% 78.1%, 47.5% 68.3%, 45.2% 44.5%, 27.5% 86.7%, 0.1% 74.9%, 17.9% 110%, 27.6% 86.8%, 76.1% 107.7%, 74.1% 54.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-30"
          />
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="p-6 text-center bg-zinc-950 ">
        <span>© 2024 Copyright : </span>
        <a
          href="/"
          rel="noopener noreferrer"
          className="tracking-wider text-sky-500 font-kreon hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
        >
          Luminescence33
        </a>
      </div>
    </footer>
  );
};
