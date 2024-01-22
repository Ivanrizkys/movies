"use client";

import Search from "@/icons/Search";
import { Movies } from "@/libs/dto/index";
import { FormEvent, useState } from "react";
import useSWR, { Fetcher } from "swr";
import dynamicBlurDataUrl from "@/utils/dynamicBlurDataUrl";
import Modal from "@/components/Modal";
import CardMovie from "@/components/CardMovie/client";
import CardMovieLoader from "@/components/CardMovie/client/loader";

const ListContent = () => {
  const [search, setSearch] = useState<string>("hero");
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const { data, isLoading, isValidating } = useSearchMovies(search);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (((e.target as any).search.value as string) === "")
      return setSearch("hero");
    setSearch((e.target as any).search.value as string);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex items-center gap-x-2">
        <div className="relative">
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search Movies or TV Shows"
            className="text-base border-1 border-solid border-grey-700 rounded-xl bg-black/10 placeholder:text-sm placeholder:text-grey-600 text-grey-400 outline-none p-3 pl-14 pr-4"
          />
          <div className="absolute left-4 top-2/4 z-10 -translate-y-2/4">
            <Search />
          </div>
        </div>
        <button
          type="submit"
          className="text-white text-base rounded-xl bg-primary-400 py-4 px-8 hover:bg-primary-500 active:bg-primary-600"
        >
          Search
        </button>
      </form>

      <div className="mt-[88px]">
        {!isLoading || !isValidating ? (
          <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 mt-6">
            {data &&
              data.map((movie, index) => (
                <CardMovie
                  key={movie.show.id}
                  index={index}
                  title={movie.show.name}
                  rating={movie.show.rating.average}
                  imageUrl={movie.show.image ? movie.show.image.original : ""}
                  imageHash={movie.show.imageHash}
                  setShowModal={setShowModal}
                />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 gap-6 mt-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <CardMovieLoader key={val} />
            ))}
          </div>
        )}
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

function useSearchMovies(query: string = "hero") {
  const fetcher: Fetcher<Movies[]> = (url: string) =>
    fetch(url).then((res) =>
      res.json().then(
        async (res) =>
          await Promise.all(
            res.map(async (movie: Movies) => ({
              ...movie,
              show: {
                ...movie.show,
                imageHash: await dynamicBlurDataUrl(
                  movie.show.image?.original ?? ""
                ),
              },
            }))
          )
      )
    );

  return useSWR<Movies[]>(
    `https://api.tvmaze.com/search/shows?q=${query}`,
    fetcher
  );
}

export default ListContent;
