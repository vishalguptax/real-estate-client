import { ChatCardDummy } from "./lib/chatCardDummy";
const ChatCard = ({ setOpenChatBox, chat, setOpenChatBoxUser }) => {
  return (
    <div
      className=" flex gap-2 items-center border-1 p-2 rounded-lg"
      onClick={() => {
        setOpenChatBox(true);
        setOpenChatBoxUser(chat);
      }}
    >
      <img
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        className=" w-[40px] h-[40px] rounded-full"
      ></img>
      <span className=" font-bold">{chat.name}</span>
      <p>{chat.message}</p>
    </div>
  );
};

export default ChatCard;
