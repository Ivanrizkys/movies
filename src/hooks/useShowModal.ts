import { useEffect } from "react";

const useShowModal = (showModal: boolean) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);
};

export default useShowModal;
