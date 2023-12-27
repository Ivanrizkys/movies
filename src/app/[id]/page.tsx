import Image from "next/image";
import Star from "@/icons/Star";
import { Metadata } from "next";
import Container from "@/components/Container";
import { MovieParams } from "@/libs/dto/index";
import { TypeMovie } from "@/libs/enums/index";
import { getDetailMovie, getMovies } from "@/service/index";

export default async function Page({ params }: { params: MovieParams }) {
  const { id } = params;
  const movie = await getDetailMovie(id);

  return (
    <Container className="pt-[100px]">
      <div className="relative w-full aspect-[2.2/1] sm:aspect-[2.6/1] rounded-[40px] overflow-hidden">
        <Image
          src={"https://source.unsplash.com/random/1200×500/?girl"}
          unoptimized
          alt="banner image"
          fill
          className="object-cover"
        />
      </div>
      <div className="lg:mx-12 xl:mx-20 -mt-[72px]">
        <div className="w-9/12 sm:w-full sm:max-w-[560px] p-7 sm:p-10 rounded-3xl bg-[rgb(32,40,62)]/70 backdrop-blur-lg mx-auto lg:mx-0">
          <div className="text-primary-200 text-[10px] sm:text-xs flex items-center gap-x-2 justify-center lg:justify-start">
            <p>MaileHereko</p>
            <p>/</p>
            <p>Movies</p>
          </div>
          <h1 className="text-white text-2xl sm:text-[32px] font-semibold mt-2 text-center lg:text-left">
            {movie.name}
          </h1>
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-12 lg:gap-x-20 mt-12 sm:mt-20">
          <div className="relative rounded-3xl overflow-hidden w-2/3 sm:w-auto aspect-[1/1.3] sm:aspect-[1/1.5] mx-auto sm:mx-0">
            <Image
              src={movie.image?.original ?? ""}
              alt={`${movie.name} movie image`}
              fill
            />
          </div>
          <div className="text-grey-100 text-lg sm:text-xl mt-8 sm:mt-0">
            <h2 className="text-grey-50 font-bold">What you will see?</h2>
            <div
              className="text-grey-300 mt-6"
              dangerouslySetInnerHTML={{ __html: movie?.summary as string }}
            ></div>
            <div className="mt-6 flex items-center bg-black/65 rounded-lg gap-x-1 px-2 py-1 w-min">
              <Star />
              <p className="text-base text-warning-500">
                {movie?.rating?.average?.toFixed(1) ?? "?"}
              </p>
            </div>
            <h3 className="text-sm sm:text-base text-grey-400 mt-6">Type</h3>
            <p className="text-lg sm:text-xl text-grey-100 mt-2">Movie</p>
            <h3 className="text-sm sm:text-base text-grey-400 mt-6">
              Release Date
            </h3>
            <p className="text-lg sm:text-xl text-grey-100 mt-2">
              {movie?.premiered?.toString() ?? "?"}
            </p>
            <h3 className="text-sm sm:text-base text-grey-400 mt-6">
              Run Time
            </h3>
            <p className="text-lg sm:text-xl text-grey-100 mt-2">
              {movie?.runtime ?? "?"}
            </p>
            <h3 className="text-sm sm:text-base text-grey-400 mt-6">Genres</h3>
            <p className="text-lg sm:text-xl text-grey-100 mt-2">
              {movie?.genres.join(", ") ?? "?"}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function generateStaticParams() {
  const movies = await getMovies();

  return movies.map<MovieParams>((movie) => ({
    id: `${movie?.show?.externals?.imdb ?? movie?.show?.externals?.thetvdb}-${
      movie.show.externals.imdb ? TypeMovie.IMDB : TypeMovie.THETVDB
    }`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: MovieParams;
}): Promise<Metadata> {
  const { id } = params;

  const movie = await getDetailMovie(id);

  return {
    title: `Movie - ${movie.name}`,
    description: `This is short description about ${movie.name} movie`,
  };
}
