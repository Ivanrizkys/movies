"use client";

import Close from "@/icons/Close";
import Hearts from "@/icons/Hearts";
import { motion } from "framer-motion";
import useShowModal from "@/hooks/useShowModal";
import { Dispatch, SetStateAction } from "react";
import { backdropVariants, modalVariants } from "./animate";

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  useShowModal(showModal);

  return (
    <motion.div
      variants={backdropVariants}
      initial="initial"
      animate={showModal ? "open" : "closed"}
      className="fixed top-0 left-0 w-full h-screen justify-center items-center"
    >
      <motion.div
        variants={modalVariants}
        animate={showModal ? "open" : "closed"}
        initial="initial"
        transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
        className="bg-[#121829cc] border-1 border-solid border-grey-800 rounded-3xl backdrop-blur-xl transform-gpu w-full max-w-[560px] flex flex-col items-center gap-y-6 p-20 relative"
      >
        <button
          onClick={() => setShowModal(false)}
          className="rounded-lg bg-black/30 p-4 absolute top-6 right-6"
        >
          <Close />
        </button>
        <Hearts />
        <p className="text-2xl font-bold text-grey-50 text-center">
          Thank you for your suggestion
        </p>
        <p className="text-base text-grey-400 text-center">
          Your suggestion has been succesfully added to my watchlist, I will
          manage sometime to watch your suggestion. ❤
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
