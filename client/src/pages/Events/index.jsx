import bgLocalEvent from '../../assets/img/EventHeader.webp';
import { cards } from './data/EventData.jsx';
import EventCard from './components/EventCard.jsx';
import EventCalendar from './components/EventCalendar.jsx';

export default function Events() {
  return (
    <>
      <div className="px-8 lg:px-16 relative h-full py-12 overflow-hidden 2xl:h-[40rem] bg-zinc-900 isolate sm:pt-32">
        <img
          alt=""
          src={bgLocalEvent}
          className="absolute inset-0 object-cover object-right w-full h-full opacity-30 -z-10 md:object-center md:h-screen"
        />

        <div className=" pt-24 mx-auto lg:pt-8 max-w-7xl ">
          <div className="w-full mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-sky-50 font-kreon sm:text-6xl">
              Découvrez nos événements
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-200">
              Laissez-vous surprendre par des expériences uniques chaque
              semaine.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <EventCard key={index} {...card} Icon={card.icon} />
          ))}
        </div>
      </div>

      <EventCalendar />
    </>
  );
}
