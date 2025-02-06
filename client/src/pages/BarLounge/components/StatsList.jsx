export default function StatsList() {
  const stats = [
    { name: 'Superficie totale', value: '150m²' },
    { name: 'De places assises', value: '+100' },
    {
      name: (
        <a
          href="https://www.facebook.com/votre-page-facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap underline hover:text-sky-200 hover:underline-offset-2"
        >
          Consultez notre page Facebook <span aria-hidden="true">&rarr;</span>
        </a>
      ),
      value: 'Horaires',
    },
  ];

  return (
    <dl className="grid grid-cols-1 gap-8 mt-16 font-normal sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ name, value }, index) => (
        <div key={index} className="flex flex-col-reverse">
          <dt className="text-lg leading-7 text-zinc-50">{name}</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-sky-400">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
