import React from 'react'
import Chat from '../components/Chat'

const Profile = () => {
    return (
        <div className=' bg-white md:h-[calc(100vh-50px)] flex flex-col md:flex-row '>

            {/* left box */}
            <div className=' flex-3 h-full overflow-y-auto '>

                {/* wrapper */}
                <div className='pr-[20px] h-full'>

                    {/* profile box */}
                    <div className=' p-3'>
                        <div className=' flex items-center justify-between'>
                            <h1 className=' font-bold text-2xl'>User Information</h1>
                            <button className=' bg-amber-400 py-2 px-4 rounded-[10px] cursor-pointer text-medium'>Update Profile</button>
                        </div>
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
                            <button className=' bg-amber-400 py-2 px-4 rounded-[10px] cursor-pointer text-medium'>Add New Post</button>
                        </div>
                        <div></div>
                    </div>

                    {/* saved box */}
                    <div className=' p-3'>
                        <h1 className=' font-bold text-2xl'>Saved Posts</h1>
                    </div>
                </div>


            </div>

            {/* right box */}
            <div className=' flex-2 h-full border-r border-l'>
                <Chat></Chat>
            </div>
        </div>

    )
}

export default Profile
