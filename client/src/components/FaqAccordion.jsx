import { useState } from 'react';
import PropTypes from 'prop-types';

export default function FaqAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 my-2 duration-300 ease-in-out delay-75 border-b lg:mx-10 hover:rounded-lg border-zinc-200 hover:border-transparent hover:ring hover:ring-sky-100 hover:bg-sky-50">
      <button
        className="flex items-center justify-between w-full px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-zinc-950 text-md lg:text-lg">
          {question}
        </span>
        <span className="pl-4 font-bold text-zinc-600">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="mx-6 mt-2 font-normal lg:mx-6 text-zinc-700">{answer}</p>
      )}
    </div>
  );
}

FaqAccordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
