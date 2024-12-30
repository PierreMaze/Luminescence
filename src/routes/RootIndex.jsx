import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../routes/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import BarLounge from "../pages/BarLounge.jsx";
import Rental from "../pages/Rental.jsx";
import Events from "../pages/Events.jsx";
import ContactChoice from "../pages/Contact/ContactChoice.jsx";
import ContactUs from "../pages/Contact/ContactUs.jsx";
import MentionLegal from "../pages/Legal/MentionsLegales.jsx";
import PolitiqueConfidentiality from "../pages/Legal/PoliticyConfidentiality.jsx";
import Error from "../pages/Error/Error.jsx";
import AboutUs from "../pages/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "bar-lounge", element: <BarLounge /> },
      { path: "location", element: <Rental /> },
      { path: "evenements", element: <Events /> },
      {
        path: "contact",
        children: [
          { index: true, element: <ContactChoice /> },
          { path: "contacter-nous", element: <ContactUs /> },
        ],
      },
      { path: "a-propos", element: <AboutUs /> },
      { path: "mentions-legales", element: <MentionLegal /> },
      {
        path: "politique-confidentialite",
        element: <PolitiqueConfidentiality />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
