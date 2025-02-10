import { useNavigate } from "react-router-dom";
import { singlePostData, userData } from "../../components/Dummydata";
import Slider from "../../components/Slider/Slider";

function SinglePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-100px)] p-4 gap-5">
      {/* Details Section */}
      <div className="flex-3 h-full w-full md:w-2/3">
        <div className="p-4 lg:pr-5 md:pr-0">
          <Slider images={singlePostData.images} />
          <div className="mt-6">
            <div className="flex flex-col justify-between sm:flex-row gap-2 ">
              <div className="flex flex-col gap-5">
                <h1 className="font-normal text-lg md:text-xl">{singlePostData.title}</h1>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <img src="/pin.png" alt="Location" className="w-4 h-4" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="px-3 py-3 bg-yellow-200 rounded text-lg font-light w-max">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 px-5 py-5 rounded-lg bg-yellow-200 font-semibold w-full sm:w-auto">
                <img src={userData.img} alt="User" className="w-15 h-12 rounded-full object-cover" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="mt-5 text-gray-600 text-sm md:text-base">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex-2 h-full md:w-1/3 w-full flex flex-col gap-5 px-3 md:px-6">
        <p className="font-bold text-lg">General</p>
        <div className="bg-white p-4 rounded-lg flex flex-col gap-5 shadow-md">
          <Feature icon="/utility.png" title="Utilities" desc="Tenant is responsible" />
          <Feature icon="/pet.png" title="Pet Policy" desc="Pets Allowed" />
          <Feature icon="/fee.png" title="Property fees" desc="30 Million" />
        </div>

        <p className="font-bold text-lg">Sizes</p>
        <div className="flex flex-wrap justify-between text-sm md:text-base gap-2">
          <SizeFeature icon="/size.png" desc="100 sqft" />
          <SizeFeature icon="/bed.png" desc="5 beds" />
          <SizeFeature icon="/bath.png" desc="2 bathrooms" />
        </div>

        <p className="font-bold text-lg">Nearby Places</p>
        <div className="bg-white p-4 rounded-lg flex justify-between shadow-md mb-4">
          <Feature icon="/school.png" title="School" desc="1 km away" />
          <Feature icon="/bus.png" title="Bus Stop" desc="200 m away" />
          <Feature icon="/restaurant.png" title="Restaurant" desc="100 m away" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button className="flex items-center gap-3 px-5 py-3 border rounded-xl bg-amber-200 hover:bg-amber-100 w-full sm:w-auto" onClick={() => navigate("/profile")}> 
            <img src="/chat.png" alt="Chat" className="w-4 h-4" /> Send a Message
          </button>
          <button className="flex items-center gap-3 px-5 py-3 border rounded-xl bg-amber-200 hover:bg-amber-100 w-full sm:w-auto">
            <img src="/save.png" alt="Save" className="w-4 h-4" /> Place Saved
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 w-full">
      <img src={icon} alt={title} className="w-6 h-6 bg-yellow-100 p-2 rounded" />
      <div>
        <span className="font-bold">{title}</span>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

function SizeFeature({ icon, desc }) {
  return (
    <div className="flex items-center gap-3 bg-white p-2 rounded shadow-md w-full sm:w-auto">
      <img src={icon} alt={desc} className="w-6 h-6" />
      <span>{desc}</span>
    </div>
  );
}

export default SinglePage;