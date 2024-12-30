import Hero from "../components/homeView/Hero";
import Restauration from "../components/homeView/Restauration";
import Location from "../components/homeView/Rental";
import Evenement from "../components/homeView/Events";
// import Galerie from "../components/homeView/Gallery";
import FrequentlyAskedQuestions from "../components/homeView/FrequentlyAskedQuestions";

const Home = () => {
  return (
    <div className="w-full h-full ">
      {/* <!-- Hero section --> */}
      <Hero id="#hero" />
      {/* <!-- Restauration section --> */}
      <Restauration id="#restauration" />
      {/* <!-- Location section --> */}
      <Location id="#location" />
      {/* <!-- Evenement section --> */}
      <Evenement id="#evenements" />
      {/* <!-- Galerie section --> */}
      {/* <Galerie id="#galerie" />
      <!-- Frequently Asked Questions section --> */}
      <FrequentlyAskedQuestions id="#faq" />
    </div>
  );
};

export default Home;
