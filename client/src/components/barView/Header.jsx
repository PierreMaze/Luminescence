import BgBarlounge from "../../assets/images/Bar-Lounge.webp";

const links = [
  { name: "A propos du bar-lounge", href: "#a-propos-bar-lounge" },
  { name: "La carte de boissons", href: "#la-carte-des-boissons" },
];
const stats = [
  { name: "Superficie totale", value: "150m²" },
  { name: "De places assises", value: "+100" },
  {
    name: (
      <a
        href="https://www.facebook.com/votre-page-facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-200 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-200">
        Consultez notre page Facebook <span aria-hidden="true">&rarr;</span>
      </a>
    ),
    value: "Horaires",
  },
];

const Header = () => {
  return (
    <div className="relative h-full pb-12 overflow-hidden lg:h-screen 2xl:h-[40rem] bg-zinc-900 isolate sm:pt-32">
      {/* <!-- Picture BG Header --> */}
      <img
        alt="Picture Background Bar-lounge"
        src={BgBarlounge}
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center md:h-screen"
      />
      {/* <!-- 1st BG  Gradiant linear --> */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-20"
        />
      </div>
      {/* <!-- 2nd BG  Gradiant linear --> */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-20"
        />
      </div>
      {/* <!-- Rental Header content --> */}
      <div className="px-6 pt-40 mx-auto max-w-7xl lg:pt-8">
        {/* <!-- Header content (Title, Subtile, txt) --> */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight font-kreon text-sky-50 sm:text-6xl">
            Découvrez notre Bar
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Que ce soit pour un apéritif décontracté ou une soirée festive,
            laissez-vous séduire par notre sélection de boissons soigneusement
            préparées.
          </p>
        </div>
        {/* <!-- Body content (Link & Stat) --> */}
        <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
          {/* <!-- Link anchor sections  --> */}
          <div className="grid grid-cols-1 text-base font-bold leading-7 tracking-wide text-sky-50 gap-x-8 gap-y-6 sm:grid-cols- 2 md:flex lg:gap-x-10">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-200 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-200">
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          {/* <!-- Stats sections--> */}
          <dl className="grid grid-cols-1 gap-8 mt-16 font-normal sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-lg leading-7 text-zinc-50">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-sky-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Header;
