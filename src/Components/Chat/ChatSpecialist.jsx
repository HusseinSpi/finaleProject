import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { FaArrowUp } from "react-icons/fa";

let socket;

const ChatSpecialist = ({ currentUser, messages, setMessages }) => {
  const [inputValue, setInputValue] = useState("");
  const [isRoomClosed, setIsRoomClosed] = useState(true);
  const [roomNumber, setRoomNumber] = useState(null);
  const userId = currentUser._id;

  const fetchRoomNumber = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/getRoomNumber"
      );
      const data = await response.json();
      console.log(`data: ${JSON.stringify(data)}`);
      setRoomNumber(data.roomNumber);
    } catch (error) {
      console.error("Failed to fetch room number", error);
    }
  };

  useEffect(() => {
    if (currentUser && roomNumber) {
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
      });

      socket.on("roomEnded", (endedRoom) => {
        if (endedRoom === roomNumber) {
          setIsRoomClosed(true);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message:
                "This room has been closed. No new messages can be sent.",
              type: "System",
            },
          ]);
        }
      });

      socket.on("roomClosed", (closedRoom) => {
        if (closedRoom === roomNumber) {
          setIsRoomClosed(true);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message:
                "This room has been closed. No new messages can be sent.",
              type: "System",
            },
          ]);
        }
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [roomNumber]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "" || isRoomClosed) return;

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
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setIsRoomClosed(false);
    fetchRoomNumber();
  };

  return (
    <div className="relative">
      <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto relative">
        {messages
          .filter((msg) => msg.message && msg.message.trim() !== "")
          .map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-xl break-words ${
                msg.senderId === userId
                  ? "bg-green-200 self-end text-right"
                  : msg.type === "System"
                  ? "bg-red-400 self-center text-center"
                  : "bg-stone-300 self-start text-left"
              }`}
              style={{ maxWidth: "70%" }}
            >
              {msg.message}
            </div>
          ))}
        {isRoomClosed && (
          <button
            onClick={startNewChat}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 absolute bottom-5 left-1/2 transform -translate-x-1/2"
          >
            New Chat
          </button>
        )}
      </div>
      {!isRoomClosed && (
        <div className="flex items-center border-2 border-green-500 rounded-full p-1">
          <input
            type="text"
            placeholder="Message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-1 border-none outline-none px-4 py-2 rounded-full mr-3"
            disabled={isRoomClosed}
          />
          <button
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300"
            onClick={handleSendMessage}
            disabled={isRoomClosed}
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatSpecialist;
