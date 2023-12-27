import { TypeMovie } from "@/libs/enums/index";
import { Movies, Show } from "@/libs/dto/index";

const getMovies = async (): Promise<Movies[]> => {
  const res = await fetch(`${process.env.API_URL}/search/shows?q=girls`, {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getDetailMovie = async (key: string): Promise<Show> => {
  let res: Response;

  const keySplit = key.split("-");
  const id: string = keySplit[0];
  const type: string = keySplit[1];

  switch (type) {
    case TypeMovie.IMDB:
      res = await fetch(`${process.env.API_URL}/lookup/shows?imdb=${id}`, {
        next: {
          revalidate: 10,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      break;
    case TypeMovie.THETVDB:
      res = await fetch(`${process.env.API_URL}/lookup/shows?thetvdb=${id}`, {
        next: {
          revalidate: 10,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      break;
    default:
      throw new Error("Type movie is not define");
      break;
  }

  return res.json();
};

export { getMovies, getDetailMovie };
