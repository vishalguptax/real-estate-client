import Search from "./Search";

function Home() {
  return (
    <div className="flex  h-[calc(100vh-100px)] border">
      {/* Text Container */}
      <div className="flex relative flex-1 ">
        <img
          src="./background.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-16 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-semibold max-w-2xl">
            Find the perfect property that fits your lifestyle and budget.
            Whether you&apos;re looking to buy, sell, or rent, we make the process
            simple and hassle-free.
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home;
