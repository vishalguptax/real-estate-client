import React from 'react'
import ChatCard from './ChatCard';

const Chats = () => {


    return (
        <div className=' overflow-y-scroll flex flex-col gap-2 flex-1 custom-scrollbar custom-scrollbar'>

            <h1 className=' font-bold text-2xl p-3'>Messages</h1>

            <>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => <ChatCard key={index}></ChatCard>)}
            </>

        </div>
    )
}

export default Chats
