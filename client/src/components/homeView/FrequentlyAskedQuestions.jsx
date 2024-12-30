import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Qu'est ce que le Cabinet de soins ?",
    answer:
      "Le Cabinet de soins est un lieu où vous pouvez bénéficier de massages, de séances de Reiki et d'autres pratiques de médecine traditionnelle, conçues pour améliorer votre bien-être et votre santé.",
  },
  {
    question:
      "Je veux organiser un anniversaire, est-il possible d’avoir du bar et de la restauration ?",
    answer:
      "Oui bien sûr ! Luminescence est le lieu idéal pour célébrer un anniversaire. Vous pouvez louer la salle vide ou avec le mobilier, et bénéficier du bar ouvert et d'un traiteur.",
  },
  {
    question: "Je souhaite louer le cabinet de soin, est-ce possible ?",
    answer:
      "Oui, tout à fait ! Vous pouvez le louer à la demi-journée ou à la journée complète, avec la décoration actuelle ou personnalisée.",
  },
  {
    question:
      "Puis-je louer la salle pour organiser une Masterclass de Yoga/Pilates sur un week-end ?",
    answer:
      "Absolument ! Que vous ayez une idée précise ou non, nous pouvons en discuter. Je vous aiderai à créer un environnement idéal pour votre Masterclass.",
  },
  {
    question:
      "Est-ce possible d’organiser le départ à la retraite d’une collègue avec une Auberge Espagnole ?",
    answer:
      "Oui, bien sûr ! Vous pouvez louer Luminescence sans obligation de traiteur. L’Auberge Espagnole est acceptée et je peux vous aider à organiser votre événement pour qu’il soit adapté à vos besoins.",
  },
  {
    question: "Puis-je privatiser la salle et le bar pour une soirée à thème ?",
    answer:
      "Chez Luminescence, tout est possible ! Nous vous aidons avec la décoration, les costumes, la communication, et proposons plusieurs devis selon vos besoins. Pour toutes sortes de soirées à thème, Luminescence s’adapte à toutes vos envies.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 my-2 duration-300 ease-in-out delay-75 border-b lg:mx-10 hover:rounded-lg border-zinc-200 hover:border-transparent hover:ring hover:ring-sky-100 hover:bg-sky-50">
      <button
        className="flex items-center justify-between w-full px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-zinc-950 text-md lg:text-lg">
          {question}
        </span>
        <span className="pl-4 font-bold text-zinc-600">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="mx-6 mt-2 font-normal lg:mx-6 text-zinc-700">{answer}</p>
      )}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const FAQSection = () => {
  return (
    <>
      <div className="py-12 lg:py-24 max-w-[960px] px-4 mx-auto">
        {/* <!--Header section--> */}
        <div id="notre-faq" className="text-center">
          <h2 className="text-lg font-semibold leading-7 text-sky-800">
            Vos questions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 font-kreon sm:text-4xl">
            LES PLUS RECCURENTES
          </p>
          <p className="my-8 text-lg leading-6 text-zinc-500">
            Explorez notre FAQ pour trouver des réponses détaillées à toutes vos
            questions
          </p>
        </div>
        {/* <!--FAQ section--> */}
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        {/* <!--Action section--> */}
        <div className="flex flex-col items-center gap-6 pt-8">
          <p className="italic">
            Vous ne trouvez pas votre réponse dans la FAQ ?
          </p>
          <Link
            to="contact/contacter-nous"
            rel="noopener noreferrer"
            className="flex justify-center duration-300 ease-in-out delay-100  space-y-8 leading-7 text-sky-50 lg:max-w-none  rounded-md bg-sky-500 w-full md:w-44  md:px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
            Contactez-nous
          </Link>
        </div>
      </div>
      {/* <!--Divider section--> */}
      <div className="relative flex flex-row">
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="flex-grow border-t border-zinc-200"></div>
          <span className="mx-4 scale-150 text-sky-500">+</span>
          <div className="flex-grow border-t border-zinc-200"></div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
