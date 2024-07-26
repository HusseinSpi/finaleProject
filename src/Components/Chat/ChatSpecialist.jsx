import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { FaArrowUp } from "react-icons/fa";

let socket;

const ChatSpecialist = ({ currentUser, roomNumber, messages, setMessages }) => {
  const [inputValue, setInputValue] = useState("");
  const [isRoomClosed, setIsRoomClosed] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(roomNumber);
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

      socket.on("loadAllRooms", (loadedRooms) => {
        setRooms(loadedRooms);
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

      socket.on("roomEnded", (endedRoom) => {
        if (endedRoom === activeRoom) {
          setIsRoomClosed(true);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              message:
                "This room has been closed. No new messages can be sent.",
              type: "system",
            },
          ]);
        }
      });

      socket.emit("getAllRooms", userId);

      return () => {
        socket.disconnect();
      };
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "" && !isRoomClosed) {
      const newMessage = {
        text: inputValue,
        type: "Specialist",
        sender: "user",
        socketMessage: {
          senderId: userId,
          message: inputValue,
          roomNumber: activeRoom,
        },
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      socket.emit("sendMessage", newMessage.socketMessage);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isRoomClosed) {
      handleSendMessage();
    }
  };

  const handleRoomClick = (room) => {
    setActiveRoom(room._id);
    setIsRoomClosed(room.isClosed);
    setMessages([]);
    socket.emit("joinRoom", userId, room._id);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">Rooms</h2>
        <ul>
          {rooms.map((room) => (
            <li
              key={room._id}
              className={`p-2 mb-2 rounded cursor-pointer ${
                room._id === activeRoom ? "bg-green-500 text-white" : "bg-white"
              }`}
              onClick={() => handleRoomClick(room)}
            >
              Room {room.firstMessage}
              {room.isClosed && <span className="text-red-500"> (Closed)</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4">
        <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-xl break-words ${
                msg.type === "system"
                  ? "bg-red-200 text-center mx-a mx-auto"
                  : msg.senderId === userId
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
      </div>
    </div>
  );
};

export default ChatSpecialist;
