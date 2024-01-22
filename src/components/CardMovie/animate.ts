import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  offScreen: {
    y: 40,
  },
  onScreen: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
