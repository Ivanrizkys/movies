import { Variants } from "framer-motion";

export const modalVariants: Variants = {
  open: {
    scale: 1,
  },
  closed: {
    scale: 0,
  },
  initial: {
    scale: 0,
  },
};

export const backdropVariants: Variants = {
  open: {
    display: "flex",
    backdropFilter: "blur(4px)",
    backgroundColor: "rgb(0 0 0 / 0.4)",
  },
  closed: {
    display: "none",
    backdropFilter: "blur(0)",
    backgroundColor: "transparent",
  },
  initial: {
    display: "none",
    backdropFilter: "blur(0)",
    backgroundColor: "transparent",
  },
};
