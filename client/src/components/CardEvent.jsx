import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

import { HiMiniCalendarDays } from 'react-icons/hi2';
import { TbClockHour2Filled } from 'react-icons/tb';

export default function CardEvent({ event }) {
  return (
    <a
      href={event.link}
      target="_blank"
      rel="nofollow"
      key={event.id}
      alt={event.title}
      className="relative grid flex-col gap-2 shadow-lg min-[1900px]:max-h-80 2xl:max-h-64 bg-sky-50 bg-clip-border rounded-xl sm:grid-cols-2 hover:opacity-75 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
    >
      <div className="relative overflow-hidden bg-clip-border rounded-xl">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="object-cover w-full h-full min-[1900px]:max-h-80 2xl:max-h-64 l:h-80"
        />
      </div>
      <div className="p-4 sm:pr-6 sm:pl-4">
        <p className="block mb-2 font-sans text-xl antialiased min[1900px]:text-4xl 2xl:text-md font-semibold leading-snug tracking-normal normal-case transition-colors text-blue-gray-900">
          {event.title}
        </p>
        <p className="block mb-4 font-sans text-sm antialiased font-semibold leading-normal 2xl:text-lg text-sky-800">
          {event.subtitle}
        </p>

        <p className="block antialiased font-sans !line-clamp-3 text-sm min[1900px]:text-xl 2xl:text-md leading-relaxed 2xl:mb-4 font-normal !text-gray-500">
          {event.description}
        </p>
        <div className="flex mt-4 items-center gap-2 2xl:justify-start 2xl:mr-4 2xl:mt-4 min[1900px]:mt-14">
          <div className="flex flex-col gap-2 size-10">
            <HiMiniCalendarDays />
            <TbClockHour2Filled />
          </div>
          <div className="flex flex-col">
            <p className="antialiased text-base capitalize 2xl:text-xl text-blue-gray-900 mb-0.5 font-semibold">
              <time dateTime={event.date}>
                {event.parsedDate
                  ? format(event.parsedDate, 'dd MMMM yyyy', { locale: fr })
                  : event.date}
              </time>
            </p>
            <p className="mx-0 text-sm antialiased font-normal text-gray-700 2xl:text-md">
              {event.author.schedules}
            </p>
          </div>
          <div className="flex flex-row  align-items ml-16 md:ml-4 w-14">
            <p className="px-2 py-1 mx-0 lining-nums text-base antialiased font-semibold border-none text-zinc-100 2xl:text-md rounded-xl ring-offset-sky-600 ring-2 bg-sky-600">
              {event.author.price}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

CardEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    parsedDate: PropTypes.instanceOf(Date),
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      schedules: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
