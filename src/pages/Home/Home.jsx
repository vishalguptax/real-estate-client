import Search from "./Search";

function Home() {
  return (
    <div className="flex h-[calc(100vh-100px)] border">
      {/* Text Container */}
      <div className="flex relative flex-1 gap-2">
        <img
          src="./background.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bottom-[30%] md:bottom-[20%] relative flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-12 lg:px-24">
          <h1 className="text-xl sm:text-xl md:text-4xl lg:text-5xl font-bold text-white">
            Find Real Estate & Get Your Dream Place
          </h1>
          <br></br>
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