# Change Log

## [1.0.22] - 2025-02-24

### <u>Added :</u>

- **SocialLinks Component**:
  - Created a reusable `SocialLinks.jsx` component to display social media links.
  - Designed with TailwindCSS for a consistent look across the project.
  - Supports dynamic props for flexibility in different pages.

### <u>Changed :</u>

- **ContactCollab Page**:
  - Integrated the `SocialLinks` component to display social media links on the contact page.
  - Ensured responsive design and styling consistency with the existing UI.

## [1.0.21] - 2025-02-24

### <u>Added :</u>

- **FormButton Component**:
  - Created a reusable `FormButton.jsx` component with a built-in loading spinner.
  - Automatically disables the button when `isLoading` is `true` to prevent multiple submissions.
  - Supports a dynamic label via the `label` prop, defaulting to `"Envoyer"`.

### <u>Changed :</u>

- **ContactRentalForm**:

  - Replaced the inline submit button with the new `FormButton` component.
  - Passed `isLoading` from `useContactForm.jsx` to ensure consistent UI feedback.

- **Other Forms**:
  - Updated other related forms to use `FormButton` for better code reusability and maintainability.

### <u>Fixed :</u>

- Prevented duplicate form submissions by ensuring the submit button is properly disabled while processing.
- Improved user experience by standardizing the loading spinner across multiple forms.

## [1.0.20] - 2025-02-24

### <u>Added :</u>

- **Loading Spinner**: Implemented a spinner animation in the submit button to improve user feedback during form submission.

### <u>Changed :</u>

- **ContactRentalForm**:

  - Replaced static input fields with the shared `InputField` component from `utils/InputField.jsx` for cleaner and more maintainable code.
  - Integrated `isLoading` state to disable the button and show a loading animation while sending data.
  - Ensured that form submission logic is handled through `useContactForm.jsx` for better state management.

- **RentalContactSection**:
  - Updated the component to use the `useContactForm.jsx` hook directly, simplifying form handling and ensuring consistency.
  - Passed `isLoading` as a prop to `ContactRentalForm` to keep UI feedback in sync.

### <u>Fixed :</u>

- Prevented multiple form submissions by disabling the submit button while the form is processing.
- Improved user experience by displaying `"Envoi en cours..."` instead of `"Envoyer"` during submission.

#

## [1.0.19] - 2025-02-24

### <u>Changed :</u>

- **Form messages**: Simplified and unified success messages across all forms.
- **Message handling**: Standardized message display logic for better consistency.
- **ContactCollab Form**:
  - Refactored to map input fields dynamically using a configuration array for improved readability and debugging.
  - Updated the component to use the shared `InputField` component from `utils/InputField.jsx` for DRY code.
  - Integrated the custom hook `useContactForm.jsx` for centralized form logic and validations.
  - Added validation to ensure the privacy policy checkbox (conditionsAccepted) must be checked before submission.
  - Maintained TailwindCSS classes and ensured compatibility with existing project structure.
- **Contact Page (ContactCollab.jsx)**:
  - Defined a dynamic array of contact fields to pass to the form component.
  - Cleaned up the initial state configuration to default `conditionsAccepted` to false.

### <u>Fixed :</u>

- Prevented form submission if the privacy policy checkbox is not selected.

#

## [1.0.18] - 2025-02-24

### <u>Added :</u>

- **ReCAPTCHA safety check**: Added null check for reCAPTCHA reference before accessing getValue() method.
- **Form state initialization**: Implemented proper initial state handling for newsletter subscription form.

### <u>Refactored :</u>

- **Newsletter structure**: Improved component organization by separating form logic into modular components.
- **Contact form hook**: Enhanced useContactForm hook with better state management and error handling.
- **Form validation**: Streamlined form validation process in NewsletterForm component.
- **Component props**: Implemented comprehensive PropTypes validation for better type safety.

### <u>Changed :</u>

- **Form architecture**: Updated form handling to use shared contact form hook for consistent behavior.
- **Newsletter layout**: Optimized newsletter component structure for better maintainability.

#

## [1.0.17] - 2025-02-24

### <u>Added :</u>

- Created InputField component: Centralizes input and textarea elements with Tailwind styling.
- Developed useContactForm hook: Consolidates form logic including state management, validation, and API submission.
- Implemented ContactForm presentation component: Clean separation of UI and logic for the contact form.
- Integrated contact page enhancements: Structured ContactUS page to display contact details and form efficiently.

### <u>Changed :</u>

- Updated form event handlers to use functional updates for state consistency.
- Adjusted file structure: Organized components into dedicated folders for better code maintainability.

### <u>Refactored :</u>

- Separated concerns between logic and presentation by moving API calls and form state management to a custom hook.
- Improved prop validation using PropTypes across form components for enhanced debugging and type safety.

## [1.0.16] - 2025-02-24

### <u>Added :</u>

- **Contact Choice page**: Created new central hub for managing different contact options with clear navigation paths.
- **Information Contact page**: Implemented new page for general information inquiries with complete functionality.
- **Contact navigation system**: Added routing links to Information, Support, and Bug contact pages for improved user flow.

### <u>Changed :</u>

**Contact architecture**: Restructured contact system to use a centralized choice page for better user experience.

#

## [1.0.15] - 2025-02-19

### <u>Added :</u>

- **Factored Event page**: Separated logic into modular components for better maintainability.
- **Created EventCard component**: Now handles props efficiently with JavaScript default parameters.
- **Optimized event detection**: Improved performance by debouncing the resize event.
- **Enhanced prop validation**: Used `PropTypes` for type safety and better debugging.
- **Better debugging & independence**: Structured files into `components/` and `data/` for easier debugging.

### <u>Changed :</u>

- **Footer**: Updated copyright year from 2024 to 2025.

### <u>Refactored :</u>

- **Rental**: Adjusted icon size in the care office section using Tailwind's `size-6` class for better formatting.

#

## [1.0.14] - 2025-02-10

### <u>Refactored :</u>

- **Optimized `ContactRentalForm` component**:
  - Moved form state management to `ContactRentalSection` for better separation of concerns.
  - Passed form fields, handlers, and ReCAPTCHA reference as props for improved modularity.
  - Implemented PropTypes validation for better debugging and maintainability.

### <u>Changed :</u>

- **Enhanced Code Readability**:
  - Removed inline form logic from `ContactRentalForm` and centralized it in the parent component.
  - Improved the reusability of `ContactRentalForm` by making it independent of internal state.

### <u>Improvements :</u>

- **Component Decoupling**:
  - `ContactRentalForm` now purely renders the UI based on props, making it more flexible.
  - Future modifications to form logic can be done directly in `ContactRentalSection` without modifying the form component.

### <u>Fixed :</u>

- **State Synchronization Issues**:
  - Ensured form state resets correctly upon successful submission.
  - Prevented unnecessary re-renders by optimizing state updates.

#

## [1.0.13] - 2025-02-10

### <u>Refactored :</u>

- **Contact Form (`ContactRentalForm.jsx`)**:

  - Extracted EmailJS logic into a separate file (`feature/emailjs/emailService.js`) for better maintainability.
  - Improved readability and debugging by passing the email-sending function as a prop.
  - Replaced repeated input fields with a mapped array structure for cleaner JSX.

- **Newsletter Component**:
  - Moved the newsletter form to `feature/emailjs/Newsletter.jsx`.
  - Converted the newsletter logic into a reusable component.

### <u>Changed :</u>

- **General Form Improvements**:
  - Added validation conditions to the newsletter form.
  - Ensured better state handling for form submissions.

### <u>Improvements :</u>

- **Code Modularity**:

  - Separated concerns by isolating logic into dedicated files.
  - Improved future scalability by making components more reusable.

- **Form UX Enhancements**:
  - Ensured proper form resets after successful submissions.
  - Improved error handling for failed submissions.

### <u>Fixes :</u>

- **Form Handling Issues**:
  - Fixed issues with state management causing incorrect form resets.
  - Ensured `ReCAPTCHA` validation is properly checked before sending emails.

#

## [1.0.12] - 2025-02-10

### <u>Refactored :</u>

- **Optimized `OrganizeEvent` component**:
  - Replaced repetitive list items with a structured array to improve maintainability.
  - Extracted icons and texts into an iterable array for cleaner JSX.
  - Improved readability by reducing redundant class names and structuring the code more effectively.
  - Added an `alt` attribute to the event image for better accessibility.

### <u>Changed :</u>

- **ImageCarousel Component**:
  - Refactored `ImageCarousel.jsx` to accept `images` as a prop instead of using hardcoded values.
  - Improved reusability by allowing dynamic image sources.
  - Updated `RentalLocalSection.jsx` and `Cabinet.jsx` to pass the correct images as props.

### <u>Improvements :</u>

- **Code Organization**:

  - Increased modularity for future scalability.
  - Enhanced maintainability by making the feature list easier to modify.

- **Component Reusability**:
  - `ImageCarousel` can now be used across multiple sections without modification.
  - Eliminated hardcoded image dependencies, enhancing flexibility.

### <u>Fixes :</u>

- **Image Display Issues**:
  - Resolved issue where `ImageCarousel` always displayed the same images regardless of the section.
  - Ensured proper image updates when switching between different rental sections.

#

## [1.0.11] - 2025-02-10

### <u>Added :</u>

- Created the following new component files under `components/`:

  - `RentalCabinetSection.jsx`
  - `RentalContactSection.jsx`
  - `RentalEventSection.jsx`
  - `RentalHeader.jsx`
  - `RentalLocalSection.jsx`
  - `CarousselLocal.jsx`

  ### <u>Changed :</u>

- **Carousel component section Rental**:
  Added propTypes for ArrowButton and ImageCarousel to improve type safety and prevent runtime errors.

- **Rental Page Structure**:
  - Refactored `Rental/index.jsx` by extracting sections into separate component files

### <u>Improvements :</u>

- **Code Organization**:
  - Improved modularity by separating concerns into distinct components
  - Enhanced maintainability by isolating sections for better readability and scalability

### <u>Fixes :</u>

- **Data Management**:
  - Moved static image and data files under `data/` for better separation of concerns
  - Created:
    - `CabinetImages.jsx`
    - `LocalImages.jsx`
  - Ensured proper imports across the Rental page to avoid redundancy

## [1.0.10] - 2025-02-07

### <u>Changed :</u>

- **Home Page Data Structure**:
  - Refactored and reorganized data files for better structure and clarity
  - Moved the following data into their respective files under `data/`:
    - `bar-details`
    - `services-offered`
    - `event-images`
    - `events-details`
    - `faq-section`

### <u>Improvements :</u>

- **Code Organization**:
  - Improved maintainability by isolating data specific to the Home page into dedicated files
  - Enhanced data management for easy updates and better scalability

### <u>Fixes :</u>

- **Data Management**:
  - Removed redundant or outdated data imports
  - Corrected paths for consistent data retrieval

## [1.0.9] - 2025-02-06

### <u>Changed :</u>

- Updated import paths in all files of the `barlounge` project by adding "../" to correct relative paths.

### <u>Improvements :</u>

- **Home Page Structure**:

  - Created new `/pages/home/` directory for better organization
  - Created dedicated `/home/components/` directory for Home-specific components
  - Moved `CardEvent.jsx` into `/home/components/`
  - Implemented lazy loading for CardEvent component

- **Code Organization**:

  - Improved component isolation and reusability
  - Enhanced project structure consistency with BarLounge page
  - Better separation of concerns between page and components

### <u>Fixes :</u>

- **Code Cleanup**:

  - Updated import paths for relocated components
  - Ensured proper lazy loading implementation
  - Maintained consistent project structure

#

## [1.0.8] - 2025-02-06

### <u>Added :</u>

- **BarLounge Page Creation**:

  - Implemented the `BarLounge` page with a structured layout
  - Added a **hero section** with background image and introductory text
  - Ensured a **responsive design** for better adaptability across devices

- **New BarLounge Components**:
  - Created `LinkList` Component for dynamic navigation links
  - Created `StatsList` Component to display bar statistics
  - Created `CallButton` Component for quick direct calls
  - Created `BarImage` Component for bar-related images
  - Created `InfoList` Component for bar information structure
  - Created `DrinkMenu` Component with lazy-loaded assets

### <u>Improvements :</u>

- **Component Structure & Organization**:

  - Created new `/components/card/` directory and moved `CardEvent.jsx`
  - Created new `/components/button/` directory for `Button.jsx` and `AnchorButton.jsx`
  - Deleted three unused button components
  - Improved component reusability by lifting state where necessary

- **Form Handling**:

  - Moved `msg` state to parent component
  - Enhanced state management and reusability

- **Performance & Optimization**:

  - Implemented **lazy-loading** for images
  - Reduced redundant code through refactoring
  - Improved component structure for better maintainability

- **Footer Social Links**:

  - Refactored using array and `.map()` to remove duplication
  - Moved static data outside component
  - Centralized social links configuration

- **Google Maps Integration**:

  - Streamlined button implementation within Google Maps component

- **SEO & Accessibility**:
  - Added meaningful `alt` attributes to images
  - Improved color contrast for readability
  - Added `aria-label` to social links
  - Removed redundant `alt` attributes from `<a>` elements

### <u>Fixes :</u>

- **Code Cleanup & Optimization**:

  - Removed unnecessary imports
  - Fixed minor layout shifts
  - Ensured proper message rendering after form submission
  - Optimized re-renders
  - Updated import paths
  - Improved overall code structure

- **UI/UX Improvements**:
  - Adjusted text sizes and spacing
  - Enhanced hover effects for interactive elements
  - Ensured consistent hover effect across icons
  - Ensured all links open correctly with proper feedback

## [1.0.7] - 2025-02-05

### <u>Improvements :</u>

- **Hero Section** :

  - Updated title font weight from `font-bold` to `font-semibold` for better design consistency.

- **Newsletter Feature** :

  - Renamed env variables to uppercase for better readability.
  - Used useCallback to optimize handleChange and avoid unnecessary re-renders.
  - Refactored form inputs using .map() for cleaner and more maintainable code.
  - Improved form reset on successful submission.
  - Enhanced code readability and consistency.
  - Extracted `NewsletterForm` into a reusable component under `src/component/form/`.
  - Passed form fields as props to improve flexibility and reusability.
  - Kept the `newsletterFields` mapping inside `Newsletter.jsx` for better control.
  - Improved prop validation using `PropTypes`.
  - Enhanced modularity while maintaining code clarity.

### <u>Fixes :</u>

- **Newsletter Feature** :

  - Changed name to from_name to match EmailJS expectations.
  - Improved error handling to provide better user feedback.
  - Ensured form validation still works correctly after refactoring.
  - Fixed potential edge cases where the form state might not reset properly.
  - Improved accessibility and consistency in input handling.

- **Event Card** :

  - Fixed incorrect date formatting.
  - Corrected price display to ensure accuracy.

#

## [1.0.6] - 2025-02-05

### <u>Added :</u>

- **Newsletter Feature** :

  - Created `Newsletter.jsx` in `src/feature/emailjs`
  - Implemented a functional newsletter subscription form
  - Configured EmailJS templates and environment variables
  - Added required environment variables to `.env.sample`
  - Imported the newsletter feature into the `Footer`

- **Footer Links Feature** :

  - Created `feature/social-network/` directory
  - Added `LinkFooter.jsx` component for social network links
  - Structured `layout/footer/` for better organization

### <u>Changed :</u>

- **Footer Links Feature** :

  - Updated `Footer.jsx` to use the new `LinkFooter.jsx` component

#

## [1.0.5] - 2025-02-04

### <u>Added :</u>

- Created reusable `Button`, `AnchorButton`, `IconButton`, `SubmitButton`, and `DisabledButton` components.
- Applied TailwindCSS for styling, including hover, focus, and active states for improved interactivity.
- Applied Tailwind's scroll-smooth class to the HTML element for smooth scrolling on anchor links.
- Added support for accessibility features like `aria-label` and focus states.
- Smooth accordion animation with CSS transitions.
- Added **underlines** for clickable lines to improve user interaction.

- **FAQ section** :

  - Created a new `features/accordeon/` directory to organize the FAQ component separately.
  - Moved `Faq.jsx` into `features/accordeon/` to improve code structure and maintainability.
  - Implemented an accordion system within `Faq.jsx` for better user experience.

- Added **FindUs** section to the page, including:

  - A descriptive text with the business address.
  - An interactive Google Maps embed.
  - A button to redirect to Google Maps with an interactive icon.

### <u>Changed :</u>

- Updated button components to support customizable styles through the `className` prop
- Updated the font size of the `event date` on the `event card` for better readability and consistency with design.
- Updated footer background color from white to `bg-sky-50` for a softer appearance.
- Improved visual consistency and readability.
- Replaced static visibility toggle with animated height transition
- Enhanced user experience with fluid open/close motion

- Restructure FindUs component and organize files :

  - Moved `FindUs.jsx` to `components/components/`
  - Created `features/google/` directory for Google integrations
  - Added `GoogleMaps.jsx` to handle the iframe separately
  - Improved project structure for better maintainability

### <u> Fixes : </u>

- Fix iframe Google Maps display issue and improve interaction :

  - Fixed Google Maps iframe not being interactive
  - Adjusted iframe width to 100% for full-page responsiveness
  - Improved button positioning over the map

- **Footer Layout** :
  - Improved footer layout using TailwindCSS for better structure and intuitiveness.
  - Enhanced overall user experience by making the footer more organized and readable.
  - Implemented **footer** with a completed form.

#

## [1.0.4] - 2025-02-03

### <u>Added :</u>

- Added text truncation for the description in `CardEvent`
- Added lazy loading to images and components with `Suspense`

### <u>Changed :</u>

- Replaced `div` elements with `section` tags in all sections
- Updated image import to use <img> tag with lazy loading
- Moved data arrays for each section of Home page to `src/data/home.data.jsx`
- Added margin-x to the events section for consistent spacing

#

## [1.0.3] - 2025-02-02

### <u> Fixes : </u>

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

### <u>Added :</u>

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

### <u>Added :</u>

- Added `components` and `layout` folders
- Added `Header.jsx` file in the `layout` folder
- Added `Logo.jsx` file in the `components` folder
- Set up `Header` and `Logo`

#

## [1.0.0] - 2025-01-30

### <u>Added :</u>

- Initial project setup
- Added file structure for Markdown files (Readme, Installation, Changelog, TodoList, etc.)
- Added and configured Tailwind library
- Added and configured Prettier library
- Defined services offered

### <u>Changed :</u>

- Set up the basic project structure
