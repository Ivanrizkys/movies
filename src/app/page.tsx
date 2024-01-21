import Link from "next/link";
import Star from "@/icons/Star";
import { getMovies } from "@/service/index";
import Container from "@/components/Container";
import { TypeMovie } from "@/libs/enums/index";
import ImageCover from "@/components/ImageCover";
import { MotionDiv } from "./framer";

export default async function Home() {
  const movies = await getMovies();

  const cardVariants = {
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

  return (
    <main>
      <Container className="pt-[150px]">
        <h1 className="text-[#EBEEF5] font-semibold text-5xl md:text-[64px]">
          MaileHereko
        </h1>
        <p className="text-sm md:text-base text-[#8E95A9] mt-4 w-full max-w-[588px]">
          List the movies and TV shows that{" "}
          <span className="text-[#9C92F8]">Ivan Rizky Saputra</span> has watched
          to date. Please provide insights into his viewing habits and feel free
          to make suggestions. 😉
        </p>
      </Container>
      <Container className="mt-20">
        <h2 className="text-[#767E94] font-semibold text-[32px]">
          All <span className="text-base">{movies ? movies.length : "0"}</span>
        </h2>
        <div className="grid grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 gap-6 mt-6">
          {movies.map((movie) => (
            <MotionDiv
              key={movie?.show?.id}
              variants={cardVariants}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true }}
              style={{ background: "rgb(77 80 91 / 20%)" }}
              className="rounded-xl backdrop-blur-[40px] px-2 pt-2 pb-4 relative cursor-pointer transform-gpu"
            >
              <Link
                href={`/${
                  movie?.show?.externals?.imdb ?? movie?.show?.externals?.thetvdb
                }-${
                  movie.show.externals.imdb ? TypeMovie.IMDB : TypeMovie.THETVDB
                }`}
              >
                <div
                  style={{ background: "rgba(0, 0, 0, 0.65)" }}
                  className="absolute top-[18px] left-4 backdrop-blur-[40px] rounded-lg p-2 flex gap-1 items-center z-10"
                >
                  <Star />
                  <p className="text-[#FFAD49] text-base">
                    {movie?.show?.rating?.average?.toFixed(1) ?? "??"}
                  </p>
                </div>
                <div className="w-full aspect-[1/1.7] xl:aspect-[1/1.6] rounded-lg relative overflow-hidden">
                  <ImageCover
                    url={movie?.show?.image?.original ?? ""}
                    alt={`${movie?.show?.name} image`}
                    imageHash={movie.show.imageHash}
                  />
                </div>
                <h3 className="mt-4 text-[#EBEEF5] text-base font-semibold">
                  {movie?.show?.name}
                </h3>
              </Link>

            </MotionDiv>
          ))}
        </div>
      </Container>
    </main>
  );
}
