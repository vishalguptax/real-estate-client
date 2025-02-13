const ChatCard = ({ setOpenChatBox, chat, setOpenChatBoxUser }) => {
  return (
    <div
      className="chat-card"
      onClick={() => {
        setOpenChatBox(true);
        setOpenChatBoxUser(chat);
      }}
    >
      <img
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        className=" w-[40px] h-[40px] rounded-full"
      ></img>
      <span className=" font-bold w-[15%] cursor-pointer">{chat.name}</span>
      <p className="cursor-pointer">{chat.message}</p>
    </div>
  );
};

export default ChatCard;
