import {
  PhoneIcon,
  CalendarDaysIcon,
  NewspaperIcon,
} from "@heroicons/react/20/solid";
import bgLocalEvent from "../../assets/images/EventHeader.webp";

const cards = [
  {
    title: "Réserver dès maintenant",
    description: "N'hésitez plus et réservez votre place dès maintenant !",
    icon: (
      <PhoneIcon className="w-6 h-6 mr-4 text-sky-50 group-hover:text-sky-200" />
    ),
    link: "tel:+33646849352",
  },
  {
    title: "Chaque semaine",
    description:
      "On vous propose différentes ateliers, conférences, soirées et bien plus.",
    icon: <NewspaperIcon className="w-6 h-6 mr-4 text-sky-50" />,
  },
  {
    title: "Notre Calendrier",
    description:
      "Vous pouvez noter l'événement que vous préférez dans votre calendrier !",
    icon: <CalendarDaysIcon className="w-6 h-6 mr-4 text-sky-50" />,
  },
];

const Header = () => {
  return (
    <div className="relative h-full py-12 overflow-hidden 2xl:h-[40rem] lg:h-screen bg-zinc-900 isolate sm:pt-32">
      <img
        alt=""
        src={bgLocalEvent}
        className="absolute inset-0 object-cover object-right w-full h-full opacity-30 -z-10 md:object-center md:h-screen"
      />
      {/* <!-- 1st BG Gradiant linear --> */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-20"
        />
      </div>
      {/* <!-- 2nd BG Gradiant linear --> */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#00A3FF] to-[#006aff] opacity-20"
        />
      </div>
      <div className="px-6 pt-32 pb-12 mx-auto lg:pt-10 max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-sky-50 font-kreon sm:text-6xl">
            Découvrez nos événements
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-200">
            Laissez-vous surprendre par des expériences uniques chaque semaine.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-opacity-50 rounded-lg group bg-zinc-950 text-sky-50">
                {card.icon}
                <div>
                  {card.link ? (
                    <a
                      href={card.link}
                      className="no-underline duration-300 ease-linear delay-75 text-sky-50 group-hover:text-sky-200 group-hover:bg-sky-200">
                      <h2 className="mb-2 text-xl font-semibold">
                        {card.title}
                      </h2>
                      <p className="text-sm">{card.description}</p>
                    </a>
                  ) : (
                    <>
                      <h2 className="mb-2 text-xl font-semibold">
                        {card.title}
                      </h2>
                      <p className="text-sm">{card.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
