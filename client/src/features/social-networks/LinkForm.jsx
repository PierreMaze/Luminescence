import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoWhatsapp,
} from 'react-icons/io5';

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=61560269117702',
    icon: IoLogoFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/luminescence333',
    icon: IoLogoInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@luminescence.gujan?_t=8nIvyDlMPVR&_r=1',
    icon: IoLogoTiktok,
    label: 'TikTok',
  },
  {
    href: 'https://www.linkedin.com/in/frederique-caignard-609a22159/',
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
  },
  { href: '', icon: IoLogoYoutube, label: 'YouTube' },
  { href: '', icon: IoLogoWhatsapp, label: 'WhatsApp' },
];

const LinkFooter = () => {
  return (
    <div className="flex justify-start gap-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Page ${label}`}
          className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-sky-200 text-zinc-950 lg:bg-zinc-50/60 lg:hover:bg-sky-200"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default LinkFooter;
