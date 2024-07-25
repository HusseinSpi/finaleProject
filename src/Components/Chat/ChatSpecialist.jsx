import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { FaArrowUp } from "react-icons/fa";

let socket;

const ChatSpecialist = ({ currentUser, roomNumber, messages, setMessages }) => {
  const [inputValue, setInputValue] = useState("");
  const userId = currentUser._id;

  useEffect(() => {
    if (currentUser) {
      socket = io("http://localhost:3000", {
        withCredentials: true,
        extraHeaders: {
          "my-custom-header": "abcd",
        },
      });

      socket.on("connect", () => {
        console.log("Connected to server");
        socket.emit("joinRoom", userId, roomNumber);
        console.log(`User ${userId} joined room ${roomNumber}`);
      });

      socket.on("loadMessages", (loadedMessages) => {
        setMessages(
          loadedMessages.map((msg) => ({ ...msg, type: "Specialist" }))
        );
      });

      socket.on("receiveMessage", (message) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...message, type: "Specialist" },
        ]);
        console.log(messages);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        type: "Specialist",
        sender: "user",
        socketMessage: {
          senderId: userId,
          message: inputValue,
          roomNumber: roomNumber,
        },
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      socket.emit("sendMessage", newMessage.socketMessage);
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
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-xl break-words ${
              msg.senderId === userId
                ? "bg-green-200 self-end text-right"
                : "bg-stone-300 self-start text-left"
            }`}
            style={{ maxWidth: "70%" }}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="flex items-center border-2 border-green-500 rounded-full p-1">
        <input
          type="text"
          placeholder="Message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="flex-1 border-none outline-none px-4 py-2 rounded-full mr-3"
        />
        <button
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300"
          onClick={handleSendMessage}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ChatSpecialist;
