import Link from "next/link";
import Star from "@/icons/Star";
import { cardVariants } from "../animate";
import { TypeMovie } from "@/libs/enums/index";
import { MotionDiv } from "@/components/Framer";
import ImageCover from "@/components/ImageCover";

interface CardMovieProps {
  index: number;
  id: string | number | null;
  type: TypeMovie.IMDB | TypeMovie.THETVDB;
  rating: number | null;
  imageUrl: string;
  imageHash: string;
  title: string;
}

const CardMovie = (props: CardMovieProps) => {
  const { index, id, type, rating, imageUrl, imageHash, title } = props;

  return (
    <MotionDiv
      variants={cardVariants}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
      className="rounded-xl backdrop-blur-2xl px-2 pt-2 pb-4 relative cursor-pointer bg-card/20 transform-gpu"
    >
      <Link href={`/${id}-${type}`}>
        <div className="absolute top-[18px] left-4 backdrop-blur-2xl bg-black/65 rounded-lg p-2 flex gap-1 items-center z-10">
          <Star />
          <p className="text-warning-500 text-base">
            {rating ? rating.toFixed(1) : "??"}
          </p>
        </div>
        <div className="w-full aspect-[1/1.7] xl:aspect-[1/1.6] rounded-lg relative overflow-hidden">
          <ImageCover
            url={imageUrl}
            alt={`${title} image`}
            priority={index <= 3}
            imageHash={imageHash}
          />
        </div>
        <h3 className="mt-4 text-grey-50 text-base font-semibold">{title}</h3>
      </Link>
    </MotionDiv>
  );
};

export default CardMovie;
