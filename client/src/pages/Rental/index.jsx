// src/pages/Rental/index.jsx
import RentalHeader from './components/RentalHeader';
import RentalLocalSection from './components/RentalLocalSection';
import RentalCabinetSection from './components/RentalCabinetSection';
import RentalEventSection from './components/RentalEventSection';
import RentalContactSection from './components/RentalContactSection';

const Rental = () => {
  return (
    <>
      <RentalHeader />
      <RentalLocalSection />
      <RentalCabinetSection />
      <RentalEventSection />
      <RentalContactSection />
    </>
  );
};

export default Rental;
