import { Outlet } from 'react-router-dom';
import Header from '../layout/Header.';
import Footer from '../layout/Footer';
import FindUs from '../components/FindUs';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FindUs />
      <Footer />
    </>
  );
};

export default RootLayout;
