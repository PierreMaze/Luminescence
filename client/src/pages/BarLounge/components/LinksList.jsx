export default function LinkList() {
  const links = [
    { name: 'A propos du bar-lounge', href: '#a-propos-bar-lounge' },
    { name: 'La carte de boissons', href: '#la-carte-des-boissons' },
  ];

  return (
    <div className="grid grid-cols-1 text-base font-bold leading-7 tracking-wide text-sky-50 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
      {links.map(({ name, href }, index) => (
        <a
          key={index}
          href={href}
          className="duration-300 ease-linear delay-75 underline lg:underline-none hover:underline hover:text-sky-200 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-200"
        >
          {name} <span aria-hidden="true">&rarr;</span>
        </a>
      ))}
    </div>
  );
}
