import { CalendarDaysIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { Link } from "react-router-dom";
import LogoLumi from "../../assets/images/Logo-lumi.webp";
// import useToast from "../../utils/Toast";

export const Footer = () => {
  const environment = import.meta.env.VITE_ENV;

  const apiUrl =
    environment === "production"
      ? import.meta.env.VITE_API_URL
      : "http://localhost:8888/";

  // const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      errorMessage: "",
    }));

    try {
      const response = await fetch(`${apiUrl}sub-newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      const data = await response.json();

      if (data.errors) {
        setFormData((prevData) => ({
          ...prevData,
          errorMessage: data.message || "Une erreur s'est produite.",
        }));
        return;
      }

      alert("Merci de vous être inscrit à notre newsletter !", "success");

      console.info(formData.name, formData.email);
    } catch (error) {
      console.error(error);
      alert("Échec de l'abonnement. Veuillez réessayer plus tard.", "error");
    }
  };

  return (
    <footer className="gap-3 text-center bg-zinc-950 text-neutral-50 lg:text-left">
      <div className="relative py-1 overflow-hidden -z-1 bg-zinc-950 isolate sm:py-14 lg:py-10">
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
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            {/* <!-- Instagram icons container --> */}
            <a
              href="https://www.instagram.com/luminescence333"
              target="_blank"
              rel="noreferrer"
              title="Page Instagram"
              alt="Page Instagram"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* <!-- Tik Tok icons container --> */}
            <a
              href="https://www.tiktok.com/@luminescence.gujan?_t=8nIvyDlMPVR&_r=1"
              target="_blank"
              rel="noreferrer"
              title="Page Tik Tok"
              alt="Page Tik Tok"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 449.45 515.38">
                <path
                  fillRule="nonzero"
                  d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"
                />
              </svg>
            </a>
            {/* <!-- Linkedin icons container --> */}
            <a
              href="https://www.linkedin.com/in/frederique-caignard-609a22159/"
              target="_blank"
              rel="noreferrer"
              title="Page Linkedin"
              alt="Page Linkedin"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            {/* <!-- Youtuube icons container --> */}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              title="Page Youtube"
              alt="Page Youtube"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 640 640">
                <path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z" />
              </svg>
            </a>
            {/* <!-- Whatsapp icons container --> */}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              title="Notre groupe whatsapp"
              alt="Notre groupe whatsapp"
              className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-4"
                fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <!--Newsletter section--> */}
        <div className="py-16 md:mx-10 2xl:mx-2 isolate sm:py-24 lg:py-32 border-sky-200">
          <div className="w-full px-8 mx-auto lg:max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-2xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-kreon">
                  Abonnez-vous à notre newsletter.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  En vous abonnant à notre newsletter, vous profitez de contenus
                  exclusifs, d&apos;avant-premières, d&apos;offres spéciales et
                  des dernières mises à jour.
                </p>
                <p className="text-sky-300">
                  Soyez les premiers à en être informés !
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col max-w-xs gap-4 mx-auto mt-6 sm:max-w-xs lg:mx-0 lg:max-w-xl lg:flex-row lg:gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nom / Entreprise"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                  />
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="johndoe@exemple.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md duration-300 ease-in-out delay-100 bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                    S&apos;abonner
                  </button>
                </form>
                <p className="pt-2 text-xs">
                  En soumettant ce formulaire, j&apos;accepte que Luminescence
                  collecte, traite et conserve mes données conformément à sa{" "}
                  <Link
                    to="/politique-confidentialite"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                    Politique de Confidentialité
                  </Link>
                  .
                </p>
                <p className="text-xs italic text-sky-50">
                  (Uniquement pour l&apos;envoi de la newsletter)
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                    <CalendarDaysIcon
                      aria-hidden="true"
                      className="text-white size-6"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">
                    Articles hebdomadaires
                  </dt>
                  <dd className="mt-2 leading-7 text-left text-gray-400">
                    L&apos;essentiel de chaque semaine vous attend dans votre
                    boîte : restez informé avec notre résumé hebdomadaire !
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                    <ArrowPathIcon
                      aria-hidden="true"
                      className="text-white size-6"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Mise à jour</dt>
                  <dd className="mt-2 leading-7 text-left text-gray-400">
                    Restez au courant des dernières évolutions de notre site !
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 text-sm text-center 2xl:mx-80 lg:mx-20 2xl:text-md lg md:text-left">
          <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- LUMINESCENCE section --> */}
            <Link
              to="/"
              rel="noopener noreferrer"
              className="pb-8 font-light font-kreon lg:pb-0">
              <img
                src={LogoLumi}
                alt="Logo luminescence"
                className="w-24 pb-6 m-auto md:m-0"
              />
              <h6 className="text-3xl font-normal tracking-wider text-transparent bg-gradient-to-r from-sky-500 via-sky-100 to-sky-50 bg-clip-text">
                LUMINESCENCE
              </h6>
              <p className="text-xs italic tracking-wider">
                La culture sous toutes ses coutures...
              </p>
            </Link>
            {/* <!-- BAR-LOUNGE section --> */}
            <div className="">
              <h6 className="flex justify-center mb-4 font-semibold uppercase text-sky-500 md:justify-start">
                Navigation
              </h6>
              <p className="mb-4">
                <Link
                  to="/"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Accueil
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  to="/bar-lounge"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Bar-Lounge
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  to="/location"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Location
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  to="/evenements"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Événements
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  to="/contact"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Contact
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  to="/a-propos"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  A propos
                </Link>
              </p>
            </div>
            {/* <!-- LEGAL section --> */}
            <div className="">
              <h6 className="flex justify-center mb-4 font-semibold uppercase text-sky-500 md:justify-start">
                Legal
              </h6>
              <p className="mb-4">
                <Link
                  to="mentions-legales"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Mentions légales
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  to="politique-confidentialite"
                  rel="noopener noreferrer"
                  className="text-sky-50 hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                  Politique de confidentialité
                </Link>
              </p>
            </div>
            {/* <!-- CONTACT section --> */}
            <div>
              <h6 className="flex justify-center mb-4 font-semibold uppercase text-sky-500 md:justify-start">
                Contact
              </h6>
              <a
                href="https://www.google.fr/maps/place/LUMINESCENCE/@44.638864,-1.0605077,19z/data=!3m1!4b1!4m6!3m5!1s0xd5499415bca91f7:0x1f53aae507216527!8m2!3d44.638863!4d-1.059864!16s%2Fg%2F11y43t5xvv?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center mb-4 md:justify-start hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  x="0px"
                  y="0px"
                  className="mr-3 size-6 min-[2000px]:size-10"
                  viewBox="0 0 120.87 122.88">
                  <path d="M79.21,70.64c11.61,1.57,21.65,4.57,28.79,8.49c8.11,4.45,12.88,10.3,12.88,17c0,8.29-7.44,15.35-19.46,20.05 c-10.58,4.14-25.07,6.69-40.98,6.69c-15.9,0-30.4-2.56-40.98-6.69C7.44,111.49,0,104.43,0,96.14c0-6.8,4.91-12.71,13.23-17.19 c7.32-3.94,17.6-6.93,29.47-8.44l1.28,10.11c-10.6,1.34-19.64,3.94-25.92,7.32c-4.93,2.65-7.83,5.51-7.83,8.2 c0,3.65,4.95,7.41,12.95,10.53c9.44,3.69,22.61,5.97,37.26,5.97c14.65,0,27.82-2.28,37.26-5.97c8-3.13,12.95-6.89,12.95-10.53 c0-2.63-2.8-5.44-7.57-8.05c-6.09-3.34-14.88-5.94-25.23-7.34L79.21,70.64L79.21,70.64z M65.33,44.36v50.87H55.1V44.36 c-9.95-2.32-17.36-11.24-17.36-21.89C37.74,10.06,47.8,0,60.22,0c12.41,0,22.47,10.06,22.47,22.47 C82.69,33.13,75.28,42.05,65.33,44.36L65.33,44.36z" />
                </svg>
                108 Place de la Claire, 2 ème étage (Ascenseur), 33470
                Gujan-Mestras
              </a>
              <a
                href="mailto:contact@luminescence33.com"
                rel="noreferrer"
                className="flex items-center justify-center mb-4 md:justify-start hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 size-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                contact@luminescence33.com
              </a>
              <a
                href="tel:+33 6 46 84 93 52"
                rel="noreferrer"
                className="flex items-center justify-center mb-4 tabular-nums md:justify-start hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 size-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 33 6 46 84 93 52
              </a>
            </div>
          </div>
        </div>
        {/* <!-- BG  Gradiant linear --> */}
        <div
          aria-hidden="true"
          className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6">
          <div
            style={{
              clipPath:
                "polygon(74.1% 54.1%, 100% 71.6%, 87.5% 36.9%, 85.5% 100.1%, 80.7% 12%, 72.5% 42.5%, 60.2% 72.4%, 52.4% 78.1%, 47.5% 68.3%, 45.2% 44.5%, 27.5% 86.7%, 0.1% 74.9%, 17.9% 110%, 27.6% 86.8%, 76.1% 107.7%, 74.1% 54.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-30"
          />
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="p-6 text-center bg-zinc-950 ">
        <span>© 2024 Copyright : </span>
        <Link
          to="/"
          rel="noopener noreferrer"
          className="tracking-wider text-sky-500 font-kreon">
          Luminescence33
        </Link>
      </div>
    </footer>
  );
};
