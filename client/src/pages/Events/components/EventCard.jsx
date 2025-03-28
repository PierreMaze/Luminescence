import PropTypes from 'prop-types';

export default function EventCard({ title, description, Icon, link = null }) {
  return (
    <div className="flex items-start p-6 bg-opacity-50 rounded-lg group first:bg-sky-900/90 bg-zinc-950/80 text-sky-50 first:ring-2 lg:first:ring-0 delay-150 duration-150 not-first:cursor-none ring-sky-950 lg:first:hover:ring-2">
      <div className="size-10">
        <Icon className="mt-2 mr-4 text-sky-50" />
      </div>
      <div>
        {link ? (
          <a
            href={link}
            className="no-underline duration-300 ease-linear delay-75 text-sky-50 group-hover:text-sky-200 group-hover:bg-sky-200"
          >
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
          </a>
        ) : (
          <>
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
          </>
        )}
      </div>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string,
};
