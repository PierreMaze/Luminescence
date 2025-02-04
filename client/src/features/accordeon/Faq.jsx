import PropTypes from 'prop-types';

export default function Faq({ question, answer, isOpen, onClick }) {
  return (
    <div className="flex flex-col">
      <div
        className={`faq-accordion py-4 md:my-1 lg:mx-10 rounded-lg border-none
        hover:border-transparent hover:ring hover:ring-2 hover:ring-sky-200 hover:bg-sky-100 
        ${isOpen ? 'ring ring-2 ring-sky-200 bg-sky-100' : ''} duration-300 ease-in-out delay-100`}
      >
        <button
          className="flex items-center justify-between w-full px-6 text-left"
          onClick={onClick}
        >
          <span className="font-medium text-zinc-950 text-md lg:text-lg">
            {question}
          </span>
          <span className="pl-4 font-bold text-zinc-600">
            {isOpen ? '-' : '+'}
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: isOpen ? '500px' : '0' }}
        >
          <p className="mx-6 mt-2 font-normal lg:mx-6 text-zinc-700">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
