import { HiBugAnt } from 'react-icons/hi2';
import { RiLifebuoyFill } from 'react-icons/ri';
import { FaEnvelopeOpenText } from 'react-icons/fa6';

export default function ContactChoice() {
  return (
    <div className="px-4 pt-6 pb-2 bg-sky-50 lg:m-0 lg:h-screen">
      <div className="h-full max-w-2xl mr-8 lg:mx-auto mt-32 mb-12">
        <div className="flex flex-col content-center space-y-8 2xl:mt-40 2xl:space-y-20 ">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full text-sky-600 bg-sky-100">
              <FaEnvelopeOpenText className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Prendre contact</h2>
              <p className="text-zinc-600">
                Vous avez des questions ou souhaitez en savoir plus sur
                Luminescence ? Que ce soit pour réserver un espace, organiser un
                événement, ou simplement obtenir des informations,
                n&apos;hésitez pas à nous contacter.
              </p>
              <a
                href="/contact/contacter-nous"
                rel="noreferrer"
                className="inline-block mt-2 font-medium text-sky-600"
              >
                Contacter nous →
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full text-sky-600 bg-sky-100">
              <RiLifebuoyFill className="size-6" />
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
                className="inline-block mt-2 font-medium text-sky-600"
              >
                Faire une réclamation →
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full text-sky-600 bg-sky-100">
              <HiBugAnt className="size-6" />
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
                className="inline-block mt-2 font-medium text-sky-600"
              >
                Signaler un bug →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
