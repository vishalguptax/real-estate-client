import { useContext, useEffect, useState } from "react";
import Chat from "../../components/chats/Chat";
import Card from "../../components/listIems/Card";
import { DataContext } from "../../components/listIems/DataContext";

const Profile = () => {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([...data]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("data>>", data);
    setUserData(data);
  }, []);

  return (
    <div className=" bg-white h-[calc(100vh-60px)] px-8 overflow-y-auto custom-scrollbar md:flex md:flex-row  ">
      {/* left box */}
      <div className="flex-3 md:h-full overflow-y-auto custom-scrollbar">
        {/* wrapper */}
        <div className="pr-[20px]">
          {/* profile box */}
          <div className="p-2 flex-1 ml-0 my-4">
            <h1 className=" font-bold text-2xl">User Information</h1>

            <div className=" flex flex-col gap-2 mt-5">
              <span className=" flex items-center gap-1">
                Avatar :{" "}
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                  className=" w-[40px] h-[40px]"
                ></img>
              </span>
              <span className="cursor-pointer">
                Username : <b>{userData?.name}</b>
              </span>
              <span className="cursor-pointer">
                Email : <b>{userData?.email}</b>
              </span>
            </div>
          </div>

          <div className="lg:flex lg:mt-10 lg:gap-3">
            {/* my list box */}
            <div className="lg:border-r-2 lg:border-primary/50">
              {/* <div className="flex items-center justify-between"> */}
              <h1 className=" font-bold text-2xl">My List</h1>
              {/* <button className=' bg-amber-400 py-2 px-4 rounded-[10px] cursor-pointer text-medium'>Add New Post</button> */}
              <div className="h-[400px] overflow-y-scroll custom-scrollbar gap-10">
                {filteredData.length > 0 ? (
                  filteredData.map((item) => <Card key={item.id} item={item} />)
                ) : (
                  <p className="text-sm text-gray-500">No result found.</p>
                )}
              </div>
            </div>
            {/* <div></div> */}
            {/* </div> */}

            {/* saved box */}
            <div className="">
              <h1 className=" font-bold text-2xl">Saved Posts</h1>

              <div className="h-[400px] overflow-y-scroll custom-scrollbar gap-10">
                {filteredData.length > 0 ? (
                  filteredData.map((item) => <Card key={item.id} item={item} />)
                ) : (
                  <p className="text-sm text-gray-500">No result found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right box */}
      <div className=" flex-2 md:h-full">
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Profile;
