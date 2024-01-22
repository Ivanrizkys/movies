const CardMovieLoader = () => {
  return (
    <div
      className="rounded-xl bg-grey-900 backdrop-blur-2xl px-2 pt-2 pb-4 relative cursor-pointer"
    >
      <div className="bg-black/20 w-16 h-6 absolute top-[18px] left-4 backdrop-blur-2xl rounded-lg p-2 flex gap-1 items-center z-10"></div>
      <div className="w-full aspect-[1/1.7] xl:aspect-[1/1.6] rounded-lg relative overflow-hidden bg-grey-800 animate-pulse"></div>
      <div className="mt-4 w-full max-w-[150px] h-4 bg-grey-800 rounded-lg animate-pulse"></div>
      <div className="flex items-center w-full gap-x-2 mt-6">
        <div className="w-4 h-4 rounded-full bg-grey-800 animate-pulse"></div>
        <div className="w-full max-w-[150px] h-4 rounded-full bg-grey-800 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CardMovieLoader;
