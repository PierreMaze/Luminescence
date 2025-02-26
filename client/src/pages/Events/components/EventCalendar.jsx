import { useMemo } from 'react';
import { calendarUrls } from './data/eventData';

export default function EventCalendar() {
  const isMobile = useMemo(() => window.innerWidth <= 768, []);

  return (
    <div className="w-full h-full antialiased bg-sky-50 sans-serif">
      <div className="container px-4 py-6 mx-auto md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg shadow bg-sky-50 lg:m-12">
          <iframe
            src={isMobile ? calendarUrls.mobile : calendarUrls.desktop}
            style={{ border: 0 }}
            height={isMobile ? '400' : '450'}
            width="100%"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
