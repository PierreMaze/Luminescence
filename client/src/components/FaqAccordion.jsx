import PropTypes from 'prop-types';

export default function FaqAccordion({ question, answer, isOpen, onClick }) {
  return (
    <div className="flex flex-col">
      <div
        className={`faq-accordion py-6 lg:mx-10 rounded-lg border-none
        hover:border-transparent hover:ring hover:ring-sky-100 hover:bg-sky-50 
        ${isOpen ? 'ring ring-sky-100 bg-sky-50' : ''}`}
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
        {isOpen && (
          <p className="mx-6 mt-2 font-normal lg:mx-6 text-zinc-700">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}

FaqAccordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
