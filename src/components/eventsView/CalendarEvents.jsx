import { useState, useEffect } from "react";

const Calendar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Fonction pour détecter si l'écran est mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Vérifier la taille de l'écran au chargement
    checkIsMobile();
    // Ajouter un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener("resize", checkIsMobile);
    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // URLs des iframes pour mobile et desktop
  const mobileUrl =
    "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showNav=0&showTz=0&title&src=bHVtaW5lc2NlbmNlMzNAb3V0bG9vay5mcg&color=%23039BE5";
  const desktopUrl =
    "https://calendar.google.com/calendar/embed?height=400&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=bHVtaW5lc2NlbmNlMzNAb3V0bG9vay5mcg&color=%23039BE5";

  return (
    <div className="w-full h-full antialiased bg-sky-50 sans-serif">
      <div className="container px-4 py-6 mx-auto md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg shadow bg-sky-50 lg:m-12">
          <iframe
            src={isMobile ? mobileUrl : desktopUrl}
            style={{ border: 0 }}
            height={isMobile ? "400" : "450"}
            width="100%"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
            className="w-full"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
