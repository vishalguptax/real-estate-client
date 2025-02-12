import ChatCard from "./ChatCard";
import { ChatCardDummy } from "./lib/chatCardDummy";

const Chats = ({ setOpenChatBox , setOpenChatBoxUser}) => {
  return (
    <div className=" overflow-y-scroll flex flex-col gap-2 flex-1 custom-scrollbar custom-scrollbar">
      <h1 className=" font-bold text-2xl p-3">Messages</h1>
      <>
        {ChatCardDummy.map((chat, index) => (
          <ChatCard
            key={index}
            setOpenChatBox={setOpenChatBox} 
            setOpenChatBoxUser={setOpenChatBoxUser}
            chat={chat}
          ></ChatCard>
        ))}
      </>
    </div>
  );
};

export default Chats;
