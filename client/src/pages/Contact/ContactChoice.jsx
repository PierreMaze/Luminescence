import {
  EnvelopeOpenIcon,
  LifebuoyIcon,
  BugAntIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const ContactChoice = () => {
  return (
    <div className="px-4 py-12 bg-sky-50 2xl:h-screen">
      <div className="h-full max-w-2xl mx-auto mt-20 mb-12 ">
        <h1 className="text-2xl font-bold text-center uppercase lg:my-10 2xl:text-4xl 2xl:mt-32 font-kreon">
          Contactez-nous
        </h1>
        <div className="flex flex-col content-center space-y-6 2xl:mt-40 2xl:space-y-20 ">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full text-sky-600 bg-sky-100">
              <EnvelopeOpenIcon className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Prendre contact</h2>
              <p className="text-zinc-600">
                Vous avez des questions ou souhaitez en savoir plus sur
                Luminescence ? Que ce soit pour réserver un espace, organiser un
                événement, ou simplement obtenir des informations,
                n&apos;hésitez pas à nous contacter.
              </p>
              <Link
                to="/contact/contacter-nous"
                rel="noreferrer"
                className="inline-block mt-2 font-medium text-sky-600">
                Contacter nous →
              </Link>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full text-sky-600 bg-sky-100">
              <LifebuoyIcon className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Vous avez une réclamation ?
              </h2>
              <p className="text-zinc-600">
                Si vous avez rencontré un problème ou si quelque chose n’a pas
                répondu à vos attentes, nous sommes à votre écoute.
              </p>
              <a
                href="mailto:support@luminescence33.com"
                rel="noreferrer"
                target="_blank"
                className="inline-block mt-2 font-medium text-sky-600">
                Faire une réclamation →
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full text-sky-600 bg-sky-100">
              <BugAntIcon className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Vous avez trouvé un bug ?
              </h2>
              <p className="text-zinc-600">
                Si vous avez rencontré un bug ou un problème technique sur notre
                site, nous vous remercions de nous le signaler.
              </p>
              <a
                href="mailto:devteam@luminescence33.com"
                rel="noreferrer"
                target="_blank"
                className="inline-block mt-2 font-medium text-sky-600">
                Signaler un bug →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChoice;
