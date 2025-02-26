import { Outlet } from 'react-router-dom';
import Header from '../layout/Header.';
import Footer from '../layout/Footer';
import FindUs from '../components/FindUs';
import ScrollToTop from '../utils/ScrollToTop';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <FindUs />
      <Footer />
    </>
  );
};

export default RootLayout;
