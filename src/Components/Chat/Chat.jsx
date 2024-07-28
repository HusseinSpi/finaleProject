import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { IoChatboxEllipses, IoPersonSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import ChatAi from "./ChatAi";
import ChatSpecialist from "./ChatSpecialist";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser.data?.data?.user
  );
  const [isOpen, setIsOpen] = useState(false);
  const [messageType, setMessageType] = useState("Ai");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageTypeChange = (type) => {
    setMessageType(type);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 p-4 w-chat z-10">
        {!isOpen && (
          <div
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 cursor-pointer rounded-full text-center hover:bg-blue-600 transition duration-300"
            onClick={toggleChat}
          >
            <IoChatboxEllipses className="text-3xl" />
          </div>
        )}
        {isOpen && (
          <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2 mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="m-auto flex flex-col">
                <span className="font-bold text-lg">
                  {i18n.language === "en" ? (
                    <>KIDDOFUN {t("Support")}</>
                  ) : (
                    <>{t("Support")} KIDDOFUN</>
                  )}
                </span>
              </div>
            </div>
            {messageType === "Ai" ? (
              <ChatAi messages={messages} setMessages={setMessages} />
            ) : (
              <ChatSpecialist
                currentUser={currentUser}
                messages={messages}
                setMessages={setMessages}
              />
            )}
            <div className="flex justify-around mt-4">
              <button
                className={`text-black ${
                  messageType === "Ai" ? "text-blue-500" : ""
                }`}
                onClick={() => handleMessageTypeChange("Ai")}
              >
                <FaRobot className="m-auto text-2xl" />
                {t("ChatWithAI")}
              </button>
              <button
                className={`text-black ${
                  messageType === "Specialist" ? "text-blue-500" : ""
                }`}
                onClick={() => handleMessageTypeChange("Specialist")}
              >
                <IoPersonSharp className="m-auto text-2xl" />
                {t("VirtualSpecialist")}
              </button>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 cursor-pointer rounded-full text-center hover:bg-blue-600 transition duration-300 z-10"
          onClick={toggleChat}
        >
          <IoMdClose className="text-3xl" />
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Chat;
