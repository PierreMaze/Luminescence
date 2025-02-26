import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 🔥 Détecte le changement de page

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 🔥 Scroll en haut à chaque changement de route
  }, [pathname]); // 🔥 Déclenché à chaque changement d'URL

  return null;
};

export default ScrollToTop;
