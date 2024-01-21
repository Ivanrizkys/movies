"use client";

import Close from "@/icons/Close";
import Hearts from "@/icons/Hearts";
import Search from "@/icons/Search";
import Star from "@/icons/Star";
import Thumb from "@/icons/Thumb";
import { motion } from "framer-motion";
import { Movies } from "@/libs/dto/index";
import { FormEvent, useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import ImageCover from "@/components/ImageCover";
import dynamicBlurDataUrl from "@/utils/dynamicBlurDataUrl";

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

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

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

  const modalVariants = {
    open: {
      scale: 1,
    },
    closed: {
      scale: 0,
    },
    initial: {
      scale: 0,
    },
  };

  const backdropVariants = {
    open: {
      display: "flex",
      backdropFilter: "blur(4px)",
      backgroundColor: "rgb(0 0 0 / 0.4)",
    },
    closed: {
      display: "none",
      backdropFilter: "blur(0)",
      backgroundColor: "transparent",
    },
    initial: {
      display: "none",
      backdropFilter: "blur(0)",
      backgroundColor: "transparent",
    },
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
          <div className="grid grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 gap-6 mt-6">
            {data &&
              data.map((movie) => (
                <motion.div
                  key={movie?.show?.id}
                  variants={cardVariants}
                  initial="offScreen"
                  whileInView="onScreen"
                  viewport={{ once: true }}
                  style={{ background: "rgb(77 80 91 / 20%)" }}
                  className="rounded-xl backdrop-blur-[40px] transform-gpu px-2 pt-2 pb-4 relative"
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
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-x-2 mt-4"
                  >
                    <Thumb />
                    <p className="text-base font-semibold text-primary-400">
                      Suggest this
                    </p>
                  </button>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 gap-6 mt-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <div
                key={val}
                className="rounded-xl bg-grey-900 backdrop-blur-[40px] px-2 pt-2 pb-4 relative cursor-pointer"
              >
                <div className="bg-black/20 w-16 h-6 absolute top-[18px] left-4 backdrop-blur-[40px] rounded-lg p-2 flex gap-1 items-center z-10"></div>
                <div className="w-full aspect-[1/1.7] xl:aspect-[1/1.6] rounded-lg relative overflow-hidden bg-grey-800 animate-pulse"></div>
                <div className="mt-4 w-full max-w-[150px] h-4  bg-grey-800 rounded-lg animate-pulse"></div>
                <div className="flex items-center w-full gap-x-2 mt-6">
                  <div className="w-4 h-4 rounded-full bg-grey-800 animate-pulse"></div>
                  <div className="w-full max-w-[150px] h-4 rounded-full bg-grey-800 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

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
          className="bg-[#121829cc] border-1 border-solid border-grey-800 rounded-3xl backdrop-blur-xl w-full max-w-[560px] flex flex-col items-center gap-y-6 p-20 relative"
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
