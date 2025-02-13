const MessageCard = ({ index }) => {
    console.log("index >>", index);
    return (
        <div className={`w-[40%] p-2 rounded-lg px-1 bg-primary-foreground/10 text-left ${(index % 2 == 0) && "ml-auto text-right"}`}>
            <p className=' font-bold'>Hii How are you ?</p>
            <p className=' text-[10px]'>1 hour ago</p>
        </div>
    )
}

export default MessageCard
