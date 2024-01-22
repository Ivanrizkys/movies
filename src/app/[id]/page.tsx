import Image from "next/image";
import { Metadata } from "next";
import Container from "@/components/Container";
import { MovieParams } from "@/libs/dto/index";
import { TypeMovie } from "@/libs/enums/index";
import { getDetailMovie, getMovies } from "@/service/index";
import Description from "./_components/Description";

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
      <Description
        title={movie.name}
        imageUrl={movie.image?.original ?? ""}
        summary={movie?.summary ?? "-"}
        rating={movie?.rating?.average}
        premiered={movie?.premiered}
        runtime={movie?.runtime}
        genres={movie?.genres}
      />
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
