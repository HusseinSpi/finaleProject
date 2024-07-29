import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
import { getReplyFromAiChat } from "../../redux/thunk/chatWithAiThunk";
import { useTranslation } from "react-i18next";

const ChatAi = ({ messages, setMessages }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const chatWithAi = useSelector((state) => state.chatWithAi.data);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (chatWithAi) {
      if (
        messages.length !== 0 &&
        messages[messages.length - 1].sender === "user"
      ) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: chatWithAi, type: "Ai", sender: "bot" },
        ]);
      }
    }
  }, [chatWithAi]);

  const sendToAi = async (message) => {
    await dispatch(getReplyFromAiChat(message));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        type: "Ai",
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      sendToAi(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto">
        {messages
          .filter((msg) => msg.type === "Ai")
          .map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-xl break-words ${
                msg.sender === "user"
                  ? "bg-blue-200 text-right self-end"
                  : "bg-stone-300 text-left self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
      </div>
      <div className="flex items-center border-2 border-blue-500 rounded-full p-1">
        <input
          type="text"
          placeholder={t("Message")}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="flex-1 border-none outline-none px-4 py-2 rounded-full mr-3"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
          onClick={handleSendMessage}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ChatAi;
