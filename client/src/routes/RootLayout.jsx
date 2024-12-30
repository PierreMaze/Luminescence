import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { Footer } from "../components/layout/Footer.jsx";
import ScrollToTop from "../utils/ScrollToTop";
import FindUs from "../components/layout/FindUs";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
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
