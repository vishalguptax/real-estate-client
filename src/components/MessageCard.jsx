import React from 'react'

const MessageCard = ({ index }) => {
    console.log("index >>", index);
    return (
        <div className={`border w-[50%] rounded-lg px-1 text-left ${(index % 2 == 0) && "ml-auto text-right"}`}>
            <p className=' font-bold'>Hii How are you ?</p>
            <p className=' text-[10px]'>1 hour ago</p>
        </div>
    )
}

export default MessageCard
