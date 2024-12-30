import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSink } from "@fortawesome/free-solid-svg-icons";

import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

import {
  faChampagneGlasses,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";

export const GlassDrinkBarAbsolute = () => {
  return (
    <FontAwesomeIcon
      icon={faChampagneGlasses}
      className="absolute size-5 text-sky-600 left-1 top-1 "
    />
  );
};

export const GlassDrinkBar = () => {
  return (
    <FontAwesomeIcon
      icon={faChampagneGlasses}
      className="pt-1 size-5 text-sky-600"
    />
  );
};

export const AccessibleHandicape = () => {
  return (
    <FontAwesomeIcon icon={faAccessibleIcon} className=" size-5 text-sky-50" />
  );
};

export const SquareParking = () => {
  return (
    <FontAwesomeIcon icon={faSquareParking} className=" size-5 text-sky-50" />
  );
};

export const Sink = () => {
  return <FontAwesomeIcon icon={faSink} className=" size-5 text-sky-600" />;
};
