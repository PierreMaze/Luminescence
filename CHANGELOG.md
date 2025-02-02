# Change Log

## [1.0.3] - 2025-02-02

### Fixed

- Hero section layout and style:

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
