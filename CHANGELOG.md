# Change Log

## [1.0.5] - 2025-02-04

### Added

- Created reusable `Button`, `AnchorButton`, `IconButton`, `SubmitButton`, and `DisabledButton` components.
- Applied TailwindCSS for styling, including hover, focus, and active states for improved interactivity.
- Applied Tailwind's scroll-smooth class to the HTML element for smooth scrolling on anchor links.
- Added support for accessibility features like `aria-label` and focus states.

- Added **FindUs** section to the page, including:

  - A descriptive text with the business address.
  - An interactive Google Maps embed.
  - A button to redirect to Google Maps with an interactive icon.

- Implemented **footer** with a completed form.
- Added **underlines** for clickable lines to improve user interaction.

### Changed

- Updated button components to support customizable styles through the `className` prop
- Updated the font size of the `event date` on the `event card` for better readability and consistency with design.

- Fix iframe Google Maps display issue and improve interaction :

  - Fixed Google Maps iframe not being interactive
  - Adjusted iframe width to 100% for full-page responsiveness
  - Improved button positioning over the map

- Restructure FindUs component and organize files :
  - Moved `FindUs.jsx` to `components/components/`
  - Created `features/google/` directory for Google integrations
  - Added `GoogleMaps.jsx` to handle the iframe separately
  - Improved project structure for better maintainability

#

## [1.0.4] - 2025-02-03

### Added

- Added text truncation for the description in `CardEvent`
- Added lazy loading to images and components with `Suspense`

### Changed

- Replaced `div` elements with `section` tags in all sections
- Updated image import to use <img> tag with lazy loading
- Moved data arrays for each section of Home page to `src/data/home.data.jsx`
- Added margin-x to the events section for consistent spacing

#

## [1.0.3] - 2025-02-02

### Fixed

- Hero section styling:

  - Corrected z-index to bring the hero section to the foreground.
  - Added spacing between subtitles in the hero section.
  - Updated font color to match the design system (gray -> zinc).

- Rental section styling:

  - Fixed button layout and adjusted font size in the location section of the homepage.
  - Updated button style on mobile to match the others.

- Events section styling:

  - Added a message in the Events section when no events are scheduled.
  - Fixed CardEvent display bug
  - Formatted CardEvent content in French using an algorithm
  - Fixed the props type for the `date` in the `Card` component.

- FAQ section styling:

  - Implemented accordion behavior to close the previously opened item when selecting a new one.

#

## [1.0.2] - 2025-02-01

### Added

- Added Home page sections:

  - Hero section
  - Bar section
  - Rental section
  - Events section
  - FAQ section

- Added data tables for all Home page sections:

  - Details Bar data
  - Services Offered data
  - Events data
  - FAQ data

- Mapped data for all Home page sections.

- Added `CardEvent.jsx` and `FaqAccordion.jsx` components

#

## [1.0.1] - 2025-01-31

### Added

- Added `components` and `layout` folders
- Added `Header.jsx` file in the `layout` folder
- Added `Logo.jsx` file in the `components` folder
- Set up `Header` and `Logo`

#

## [0.1.0] - 2025-01-30

### Added

- Initial project setup
- Added file structure for Markdown files (Readme, Installation, Changelog, TodoList, etc.)
- Added and configured Tailwind library
- Added and configured Prettier library
- Defined services offered

### Changed

- Set up the basic project structure
