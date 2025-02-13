import ChatCard from "./ChatCard";
import { ChatCardDummy } from "../lib/chatCardDummy";

const Chats = ({ setOpenChatBox, setOpenChatBoxUser }) => {
  return (
    <div className="md:p-3 sm:p-4">
        <h1 className=" font-bold text-2xl py-4 mb-2">Messages</h1>
      
      <div className="overflow-y-scroll mb-3 flex-col gap-2 custom-scrollbar">
        {ChatCardDummy.map((chat, index) => (
          <ChatCard
            key={index}
            setOpenChatBox={setOpenChatBox}
            setOpenChatBoxUser={setOpenChatBoxUser}
            chat={chat}
          ></ChatCard>
        ))}
      </div>
    </div>
  );
};

export default Chats;
