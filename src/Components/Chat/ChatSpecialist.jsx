import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { FaArrowUp } from "react-icons/fa";

let socket;

const ChatSpecialist = ({ currentUser }) => {
  const [inputValue, setInputValue] = useState("");
  const [isRoomClosed, setIsRoomClosed] = useState(true);
  const [roomNumber, setRoomNumber] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const userId = currentUser?._id;

  const fetchRoomNumber = async () => {
    try {
      const response = await fetch(
        "https://finaleprojectbe.onrender.com/api/v1/getRoomNumber"
      );
      const data = await response.json();
      setRoomNumber(data.roomNumber);
      return data.roomNumber;
    } catch (error) {
      console.error("Failed to fetch room number", error);
    }
  };

  useEffect(() => {
    if (!currentUser) return;

    socket = io("https://finaleprojectbe.onrender.com", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit("getUserRooms", userId);
    });

    socket.on("loadUserRooms", (loadedRooms) => {
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
    });

    socket.on("roomEnded", (endedRoom) => {
      if (endedRoom === roomNumber) {
        setIsRoomClosed(true);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: "This room has been closed. No new messages can be sent.",
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
            message: "This room has been closed. No new messages can be sent.",
            type: "System",
          },
        ]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [currentUser, userId, roomNumber]);

  const handleRoomClick = (room) => {
    setActiveRoom(room._id);
    setMessages([]);
    setIsRoomClosed(room.isClosed);
    socket.emit("joinRoom", userId, room._id);
  };

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
        roomNumber: activeRoom,
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

  const startNewChat = async () => {
    const newRoomNumber = await fetchRoomNumber();
    setMessages([]);
    setIsRoomClosed(false);
    setActiveRoom(newRoomNumber);
  };

  useEffect(() => {
    if (activeRoom) {
      socket.emit("joinRoom", userId, activeRoom);
    }
  }, [activeRoom, userId]);

  return (
    <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto">
      {!activeRoom ? (
        <div className="overflow-y-auto h-full">
          <ul>
            {rooms.map((room) => (
              <li
                key={room._id}
                className={`p-2 mb-2 rounded cursor-pointer flex items-center ${
                  room._id === activeRoom
                    ? "bg-green-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleRoomClick(room)}
              >
                <div className="flex-grow">
                  <p className="font-semibold">{room.firstMessage}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(room.firstMessageDate).toLocaleDateString()}
                  </p>
                </div>
                {room.isClosed && (
                  <span className="text-red-500 ml-auto"> (Closed)</span>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={startNewChat}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 absolute bottom-24 left-1/2 transform -translate-x-1/2"
          >
            New Chat
          </button>
        </div>
      ) : (
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
        </div>
      )}
      {!isRoomClosed && activeRoom && (
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
