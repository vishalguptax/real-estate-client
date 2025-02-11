import Chats from './Chats';
import MessageCard from './MessageCard';
import { useState } from 'react';

const Chat = () => {
    const [openChatBox, setOpenChatBox] = useState(true);

    return (
        <div className=' mx-2  h-full flex flex-col'>


            {/* Chats */}
            <Chats></Chats>

            {/* chat box */}
            {openChatBox && <div className=' flex-1 flex justify-between flex-col'>

                {/* top */}
                <div className='border flex items-center justify-between px-2  pr-5 py-1 bg-amber-300'>
                    <div className=' flex items-center gap-2'>
                        <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' className=' w-[40px] h-[40px]'></img>
                        <span className=' font-bold'>Anvay Gupta</span>
                    </div>
                    <p className=' font-bold cursor-pointer' onClick={() => setOpenChatBox(!openChatBox)}>X</p>
                </div>

                {/* center */}
                <div className='p-1 overflow-y-scroll flex flex-col gap-1 h-[350px] custom-scrollbar'>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((index) => <MessageCard key={index} index={index}></MessageCard>)}
                </div>

                {/* bottom */}
                <div className=' flex border-t-2 h-[60px]'>
                    <textarea className=' border-none flex-3 outline-none p-1 rounded-l-[10px] resize-none' placeholder='Write Your message here ...'></textarea>
                    <button className=' flex-1 bg-amber-400 cursor-pointer font-bold rounded-r-[10px]'>Send</button>
                </div>

            </div>}


        </div >
    )
}

export default Chat
