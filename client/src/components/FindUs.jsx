import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import { AnchorButtonIcon } from '../components/Button.jsx';

const FindUs = () => {
  return (
    <div className="pt-12 lg:pt-24">
      {/* <!--Header section--> */}
      <div className="px-6 mx-3 max-w-8xl lg:px-12 2xl:mx-80">
        <div className=" text-start">
          <h2 className="text-lg font-semibold text-sky-800">Où nous</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 font-kreon sm:text-4xl">
            TROUVER ?
          </p>
          <div className="py-6 mt-4 text-base leading-6 lg:py-10 text-zinc-600">
            <p>
              L’ entrée du local se trouve sur{' '}
              <strong>la Place de la Claire</strong>, entre le Tegalet et la
              Boulangerie.
            </p>
            <p className="flex flex-row pt-6 italic font-normal">
              108 Place de la Claire, 2 ème étage (Ascenseur), 33470
              Gujan-Mestras.
            </p>
          </div>
        </div>
      </div>
      {/* <!--Maps section--> */}
      <div className="relative w-full overflow-hidden bg-cover group bg-clip-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.9535272818507!2d-1.0624389238206646!3d44.63886678812647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5499415bca91f7%3A0x1f53aae507216527!2sLUMINESCENCE!5e0!3m2!1sfr!2sfr!4v1738657215516!5m2!1sfr!2sfr"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center">
          <AnchorButtonIcon
            href="https://www.google.fr/maps/place/LUMINESCENCE/@44.638864,-1.0605077,19z/data=!3m1!4b1!4m6!3m5!1s0xd5499415bca91f7:0x1f53aae507216527!8m2!3d44.638863!4d-1.059864!16s%2Fg%2F11y43t5xvv?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            label="Où nous trouver ?"
            className="flex justify-center text-nowrap mt-10 w-full md:w-50"
            icon={HiMiniArrowTopRightOnSquare}
          >
            Ouvrir dans maps
          </AnchorButtonIcon>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
