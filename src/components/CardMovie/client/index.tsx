"use client";

import Star from "@/icons/Star";
import Thumb from "@/icons/Thumb";
import { motion } from "framer-motion";
import { cardVariants } from "../animate";
import { Dispatch, SetStateAction } from "react";
import ImageCover from "@/components/ImageCover";

interface CardMovieProps {
  index: number;
  rating: number | null;
  imageUrl: string;
  imageHash: string;
  title: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CardMovie = (props: CardMovieProps) => {
  const { index, rating, imageUrl, imageHash, title, setShowModal } = props;

  return (
    <motion.div
      variants={cardVariants}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
      className="rounded-xl backdrop-blur-2xl bg-card/20 transform-gpu px-2 pt-2 pb-4 relative"
    >
      <div className="absolute top-[18px] left-4 backdrop-blur-2xl bg-black/65 rounded-lg p-2 flex gap-1 items-center z-10">
        <Star />
        <p className="text-warning-500 text-base">
          {rating?.toFixed(1) ?? "??"}
        </p>
      </div>
      <div className="w-full aspect-[1/1.7] xl:aspect-[1/1.6] rounded-lg relative overflow-hidden">
        <ImageCover
          priority={index <= 3}
          url={imageUrl}
          alt={`${title} image`}
          imageHash={imageHash}
        />
      </div>
      <h3 className="mt-4 text-grey-50 text-base font-semibold">{title}</h3>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-x-1 min-[500px]:gap-x-2 mt-4"
      >
        <Thumb />
        <p className="text-base font-semibold text-primary-400 block min-[500px]:hidden">
          Suggest
        </p>
        <p className="text-base font-semibold text-primary-400 hidden min-[500px]:block">
          Suggest this
        </p>
      </button>
    </motion.div>
  );
};

export default CardMovie;
