import BgRental from '../../../assets/img/BgLocation.webp';

const links = [
  { name: 'Privatisez le local', href: '#privatiser-le-local' },
  { name: 'Privatisez le cabinet de soins', href: '#privatiser-le-cabinet' },
  { name: 'Organisez votre événement', href: '#organiser-un-evenement' },
  { name: 'Devis personnalisé', href: '#votre-devis-personnalisé' },
];
const stats = [
  { name: 'Superficie totale', value: '150m²' },
  { name: 'Aménagez votre espace', value: 'Modulaire' },
  { name: "Capacité d'accueil", value: '+200' },
  { name: "À l'écoute de vos besoins", value: 'Sur mesure' },
];

const RentalHeader = () => {
  return (
    <div className="relative pb-12 overflow-hidden lg:py-34 2xl:h-[40rem] lg:h-screen bg-zinc-900 isolate sm:pt-32">
      <img
        alt="Background"
        src={BgRental}
        className="absolute inset-0 object-cover w-full h-full -z-10 md:h-screen"
      />
      <div className="px-6 pt-40 mx-auto max-w-7xl lg:pt-8">
        <h2 className="text-4xl font-bold tracking-tight text-sky-50 sm:text-6xl">
          Travaillez avec nous !
        </h2>
        <p className="mt-6 text-lg text-zinc-300">
          Notre espace s’adapte parfaitement à vos besoins.
        </p>
        <div className="grid mt-10 text-sky-50 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="duration-300 ease-linear delay-75 underline md:no-underline hover:underline hover:text-sky-200 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-200"
            >
              {link.name} →
            </a>
          ))}
        </div>
        <dl className="grid gap-8 mt-16 text-zinc-50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse">
              <dt className="text-lg">{stat.name}</dt>
              <dd className="text-2xl font-bold text-sky-400">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default RentalHeader;
