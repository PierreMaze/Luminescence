import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const RootLayout = lazy(() => import('./RoutesLayout'));

const Home = lazy(() => import('../pages/Home/index'));

const AboutUs = lazy(() => import('../pages/AboutUs/index'));

const BarLounge = lazy(() => import('../pages/BarLounge/index'));

const ContactChoice = lazy(() => import('../pages/Contact/index'));
const ContactCollab = lazy(() => import('../pages/Contact/ContactCollab'));
const ContactSupport = lazy(() => import('../pages/Contact/ContactSupport'));
const ContactBug = lazy(() => import('../pages/Contact/ContactBug'));

const Error = lazy(() => import('../pages/Errors/Error'));

const Events = lazy(() => import('../pages/Events/index'));

const MentionLegal = lazy(() => import('../pages/Legal/LegalNotice'));
const PolitiqueConfidentiality = lazy(
  () => import('../pages/Legal/PoliticyConfidentiality')
);

const Rental = lazy(() => import('../pages/Rental/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'bar-lounge', element: <BarLounge /> },
      { path: 'location', element: <Rental /> },
      { path: 'evenements', element: <Events /> },
      {
        path: 'contact',
        children: [
          { index: true, element: <ContactChoice /> },
          { path: 'collaborer', element: <ContactCollab /> },
          { path: 'support', element: <ContactSupport /> },
          { path: 'signalement-bug', element: <ContactBug /> },
        ],
      },
      { path: 'a-propos', element: <AboutUs /> },
      { path: 'mentions-legales', element: <MentionLegal /> },
      {
        path: 'politique-confidentialite',
        element: <PolitiqueConfidentiality />,
      },
      { path: '*', element: <Error /> },
    ],
  },
]);

export default router;
