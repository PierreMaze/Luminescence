import About from "../components/barView/About";
import Header from "../components/barView/Header";
import PriceCard from "../components/barView/PriceCard";

const BarLounge = () => {
  return (
    <div className="scroll-pt-4">
      <Header />
      <About />
      <PriceCard />
    </div>
  );
};

export default BarLounge;
