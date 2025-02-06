import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoWhatsapp,
} from 'react-icons/io5';

const socialLinks = [
  { href: 'https://www.facebook.com/profile.php?id=61560269117702', icon: IoLogoFacebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/luminescence333', icon: IoLogoInstagram, label: 'Instagram' },
  { href: 'https://www.tiktok.com/@luminescence.gujan?_t=8nIvyDlMPVR&_r=1', icon: IoLogoTiktok, label: 'TikTok' },
  { href: 'https://www.linkedin.com/in/frederique-caignard-609a22159/', icon: IoLogoLinkedin, label: 'LinkedIn' },
  { href: '', icon: IoLogoYoutube, label: 'YouTube' },
  { href: '', icon: IoLogoWhatsapp, label: 'WhatsApp' },
];

const LinkFooter = () => {
  return (
    <div className="flex items-center justify-center p-6 2xl:mx-80 lg:ml-12 lg:justify-start">
      <span className="hidden mr-2 lg:block">Rejoignez-nous sur les réseaux sociaux :</span>

      <div className="flex justify-center gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Page ${label}`}
            className="p-1 transition duration-300 ease-in-out delay-150 rounded-md lg:hover:-translate-y-1 lg:hover:scale-125 bg-zinc-50/90 text-zinc-950 lg:bg-zinc-50/60 hover:bg-sky-400"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkFooter;
