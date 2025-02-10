import React from 'react'

const ChatCard = () => {
    return (
        <div className=' flex gap-2 items-center border-1 p-2 rounded-lg'>
            <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' className=' w-[40px] h-[40px] rounded-full'></img>
            <span className=' font-bold'>Anvay</span>
            <p>Hii, How are you? I am fine here and hope the same ....</p>
        </div>
    )
}

export default ChatCard
