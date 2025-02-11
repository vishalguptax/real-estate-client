import { useContext, useState } from "react"
import Chat from "../../components/Chat"
import Card from "../../components/listIems/Card"
import { DataContext } from "../../components/listIems/DataContext"


const Profile = () => {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([...data])

  return (
    <div className=' bg-white h-[calc(100vh-60px)] overflow-y-scroll custom-scrollbar md:flex md:flex-row  '>

      {/* left box */}
      <div className=' flex-3 md:h-full overflow-y-auto custom-scrollbar '>

        {/* wrapper */}
        <div className='pr-[20px] '>

          {/* profile box */}
          <div className=' p-3'>

            <h1 className=' font-bold text-2xl'>User Information</h1>

            <div className=' flex flex-col gap-2 mt-3'>
              <span className=' flex items-center gap-1'>Avatar : <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' className=' w-[40px] h-[40px]'></img></span>
              <span className=''>Username : <b>Anvay Gupta</b></span>
              <span className=''>Email : <b>guptaanvay1940@gmail.com</b></span>
            </div>

          </div>



          {/* my list box */}
          <div className=' p-3'>
            <div className=' flex items-center justify-between'>
              <h1 className=' font-bold text-2xl'>My List</h1>
              {/* <button className=' bg-amber-400 py-2 px-4 rounded-[10px] cursor-pointer text-medium'>Add New Post</button> */}


            </div>
            <div className="   gap-10">
              {filteredData.length > 0 ? (
                filteredData.map((item) => <Card key={item.id} item={item} />)
              ) : (
                <p className="text-sm text-gray-500">No result found.</p>
              )}
            </div>
            <div></div>
          </div>

          {/* saved box */}
          <div className=' p-3'>
            <h1 className=' font-bold text-2xl'>Saved Posts</h1>

            <div className=" gap-10">
              {filteredData.length > 0 ? (
                filteredData.map((item) => <Card key={item.id} item={item} />)
              ) : (
                <p className="text-sm text-gray-500">No result found.</p>
              )}
            </div>
          </div>
        </div>


      </div>

      {/* right box */}
      <div className=' flex-2 md:h-full border-r border-l'>
        <Chat></Chat>
      </div>

    </div>

  )
}

export default Profile
