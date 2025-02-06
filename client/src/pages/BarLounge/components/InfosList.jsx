import { HiMiniCurrencyEuro, HiClock } from 'react-icons/hi2';
import { TbGlassFullFilled } from 'react-icons/tb';

export default function InfoList() {
  const infoItems = [
    {
      icon: HiClock,
      title: 'Horaires flexibles.',
      description:
        "Nos horaires peuvent varier selon les événements et la saison. Pour connaître nos jours et heures d'ouverture actuels, veuillez consulter ",
      link: {
        text: 'notre page Facebook.',
        href: 'https://www.facebook.com/profile.php?id=61560269117702',
      },
    },
    {
      icon: TbGlassFullFilled,
      title: 'Boissons & Tapas.',
      description:
        'Profitez de notre carte avec une variété de softs, de bières pression, de vins et de champagne. Vous pourrez aussi grignoter des tapas telles que des samoussas, du camembert rôti, de la charcuterie, etc..',
    },
    {
      icon: HiMiniCurrencyEuro,
      title: 'Paiement.',
      description:
        "Tous les services et paiements se font au bar directement, vous n'avez qu'à demander...",
    },
  ];

  return (
    <ul role="list" className="mt-8 space-y-8 text-zinc-600">
      {infoItems.map(({ icon: Icon, title, description, link }, index) => (
        <li key={index} className="flex gap-x-3">
          <Icon
            aria-hidden="true"
            className="flex-none w-5 h-5 mt-1 text-sky-600"
          />
          <span>
            <strong className="font-semibold text-zinc-900">{title}</strong>{' '}
            {description}
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-600 underline lg:underline-none hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600"
              >
                {link.text}
              </a>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
