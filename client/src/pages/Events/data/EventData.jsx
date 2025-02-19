import { HiPhone, HiMiniCalendarDays, HiNewspaper } from 'react-icons/hi2';

export const cards = [
  {
    title: 'Réserver dès maintenant',
    description: "N'hésitez plus et réservez votre place dès maintenant !",
    icon: HiPhone,
    link: 'tel:+33646849352',
  },
  {
    title: 'Chaque semaine',
    description:
      'On vous propose différentes ateliers, conférences, soirées et bien plus.',
    icon: HiNewspaper,
  },
  {
    title: 'Notre calendrier',
    description:
      "Vous pouvez noter l'événement que vous préférez dans votre calendrier !",
    icon: HiMiniCalendarDays,
  },
];

export const calendarUrls = {
  mobile:
    'https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showNav=0&showTz=0&title&src=bHVtaW5lc2NlbmNlMzNAb3V0bG9vay5mcg&color=%23039BE5',
  desktop:
    'https://calendar.google.com/calendar/embed?height=400&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=bHVtaW5lc2NlbmNlMzNAb3V0bG9vay5mcg&color=%23039BE5',
};
