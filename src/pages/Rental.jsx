import Cabinet from "../components/rentalView/Cabinet";
import ContactRental from "../components/rentalView/ContactRental";
import Header from "../components/rentalView/Header";
import Local from "../components/rentalView/Local";
import OrganizeEvent from "../components/rentalView/OrganizeEvent";

const Rental = () => {
  return (
    <>
      <Header />
      <Local />
      <Cabinet />
      <OrganizeEvent />
      <ContactRental />
    </>
  );
};

export default Rental;
