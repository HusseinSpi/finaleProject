import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowUp, FaRobot } from "react-icons/fa";
import { IoChatboxEllipses, IoPersonSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getReplyFromAiChat } from "../../redux/thunk/chatWithAiThunk";

const Chat = () => {
  const dispatch = useDispatch();
  const chatWithAi = useSelector((state) => state.chatWithAi.data);
  const [isOpen, setIsOpen] = useState(false);
  const [messageType, setMessageType] = useState("Ai");
  const [aiMessages, setAiMessages] = useState([]);
  const [personMessages, setPersonMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (chatWithAi && messageType === "Ai") {
      if (
        aiMessages.length !== 0 &&
        aiMessages[aiMessages.length - 1] !== chatWithAi
      ) {
        setAiMessages((prevMessages) => [...prevMessages, chatWithAi]);
        console.log(aiMessages);
      }
    }
  }, [chatWithAi]);

  const sendToAi = async (message) => {
    await dispatch(getReplyFromAiChat(message));
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageTypeChange = (type) => {
    setMessageType(type);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      if (messageType === "Ai") {
        setAiMessages((prevMessages) => [...prevMessages, inputValue]);
        sendToAi(inputValue);
      } else {
        setPersonMessages((prevMessages) => [...prevMessages, inputValue]);
      }
      setInputValue("");
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 p-4 w-chat z-10">
        {!isOpen && (
          <div
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 cursor-pointer rounded-full text-center hover:bg-green-600 transition duration-300"
            onClick={toggleChat}
          >
            <IoChatboxEllipses className="text-3xl" />
          </div>
        )}
        {isOpen && (
          <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2 mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="m-auto flex flex-col">
                <span className="font-bold text-lg">Kids Land Support</span>
              </div>
            </div>
            <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex-col content-end overflow-y-auto">
              {(messageType === "Ai" ? aiMessages : personMessages).map(
                (msg, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded ${
                      index % 2 === 0
                        ? "bg-green-200 text-right"
                        : "bg-stone-300 text-left"
                    }`}
                  >
                    {msg}
                  </div>
                )
              )}

              <div className="flex items-center border-2 border-green-500 rounded-full p-1">
                <input
                  type="text"
                  placeholder="Message..."
                  value={inputValue}
                  onChange={handleInputChange}
                  className="flex-1 border-none outline-none px-4 py-2 rounded-full mr-3"
                />
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300"
                    onClick={handleSendMessage}
                  >
                    <FaArrowUp />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <button
                className={`text-black ${
                  messageType === "Ai" ? "text-green-500" : ""
                }`}
                onClick={() => handleMessageTypeChange("Ai")}
              >
                <FaRobot className="m-auto text-2xl" />
                Chat With AI
              </button>
              <button
                className={`text-black ${
                  messageType === "Person" ? "text-green-500" : ""
                }`}
                onClick={() => handleMessageTypeChange("Person")}
              >
                <IoPersonSharp className="m-auto text-2xl" />
                Virtual Specialist
              </button>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 cursor-pointer rounded-full text-center hover:bg-green-600 transition duration-300 z-10"
          onClick={toggleChat}
        >
          <IoMdClose className="text-3xl" />
        </div>
      )}
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Chat;
