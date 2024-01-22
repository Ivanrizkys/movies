import Header from "@/components/Header";
import { getMovies } from "@/service/index";
import Container from "@/components/Container";
import { TypeMovie } from "@/libs/enums/index";
import CardMovie from "@/components/CardMovie/server";

export default async function Home() {
  const movies = await getMovies();

  return (
    <main>
      <Container className="pt-[150px]">
        <Header title="MaileHereko">
          <p className="text-sm md:text-base text-grey-300 mt-4 w-full max-w-[588px]">
            List the movies and TV shows that{" "}
            <span className="text-primary-300 selection:text-primary-400">
              Ivan Rizky Saputra
            </span>{" "}
            has watched to date. Please provide insights into his viewing habits
            and feel free to make suggestions. 😉
          </p>
        </Header>
      </Container>
      <Container className="mt-20">
        <h2 className="text-grey-400 font-semibold text-[32px]">
          All <span className="text-base">{movies ? movies.length : "0"}</span>
        </h2>
        <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 mt-6">
          {movies.map((movie, index) => (
            <CardMovie
              key={movie?.show?.id}
              id={
                movie?.show?.externals?.imdb ?? movie?.show?.externals?.thetvdb
              }
              type={
                movie.show.externals.imdb ? TypeMovie.IMDB : TypeMovie.THETVDB
              }
              index={index}
              title={movie?.show?.name}
              imageUrl={movie?.show?.image ? movie?.show?.image?.original : ""}
              rating={movie?.show?.rating?.average}
              imageHash={movie.show.imageHash}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
