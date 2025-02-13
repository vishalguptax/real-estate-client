import Chats from "./Chats";
import MessageCard from "./MessageCard";
import { useState } from "react";

const Chat = () => {
  const [openChatBox, setOpenChatBox] = useState(false);
  const [openChatBoxUser, setOpenChatBoxUser] = useState(null);

  return (
    <div className=" mx-2 h-full flex flex-col">
      {/* Chats */}
      <div className="flex-1/2 md:max-h-fit sm:max-h-[350px] h-[200px] flex-col overflow-y-scroll custom-scrollbar">
        <Chats
          setOpenChatBox={setOpenChatBox}
          setOpenChatBoxUser={setOpenChatBoxUser}
        ></Chats>
      </div>
      {/* chat box */}
      <div className="md:flex-1/2 md:h-fit sm:flex-col sm:p-3">
        {openChatBox && (
          <div className=" flex justify-between flex-col">
            {/* top */}
            <div className="flex items-center justify-between px-2  pr-5 py-1 bg-primary/50">
              <div className=" flex items-center gap-2">
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                  className=" w-[40px] h-[40px]"
                ></img>
                <span className="font-bold cursor-pointer">{openChatBoxUser?.name}</span>
              </div>
              <p
                className=" font-bold cursor-pointer"
                onClick={() => setOpenChatBox(!openChatBox)}
              >
                X
              </p>
            </div>

            {/* center */}
            <div className="p-1 overflow-y-scroll flex flex-col gap-1  md:h-[280px] sm:h-[250px] h-[250px] custom-scrollbar">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
                (index) => (
                  <MessageCard key={index} index={index}></MessageCard>
                )
              )}
            </div>

            {/* bottom */}
            <div className="flex border-t-2 border-primary rounded-lg h-[50px]">
              <textarea
                className="chat-input"
                placeholder="Write Your message here ..."
              ></textarea>
              <button className="chat-button">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
