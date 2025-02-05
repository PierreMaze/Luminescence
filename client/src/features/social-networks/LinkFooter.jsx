import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoWhatsapp,
} from 'react-icons/io5';

const LinkFooter = () => {
  return (
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
  );
};

export default LinkFooter;
