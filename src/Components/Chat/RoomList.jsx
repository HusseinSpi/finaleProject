import { useState, useEffect } from "react";
import { io } from "socket.io-client";

let socket;

const RoomList = ({ currentUser }) => {
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [messages, setMessages] = useState([]);
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
        socket.emit("getUserRooms", userId);
      });

      socket.on("loadUserRooms", (loadedRooms) => {
        setRooms(loadedRooms);
        console.log(rooms);
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

      return () => {
        socket.disconnect();
      };
    }
  }, [currentUser]);

  const handleRoomClick = (room) => {
    setActiveRoom(room._id);
    setMessages([]);
    socket.emit("joinRoom", userId, room._id);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4 h-chat">
        <h2 className="text-lg font-bold mb-4">Rooms</h2>
        <ul className="overflow-y-auto h-full">
          {rooms.map((room) => (
            <li
              key={room._id}
              className={`p-2 mb-2 rounded cursor-pointer flex items-center ${
                room._id === activeRoom ? "bg-green-500 text-white" : "bg-white"
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
      </div>
      {activeRoom && (
        <div className="w-3/4">
          <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-xl break-words ${
                  msg.type === "system"
                    ? "bg-red-200 text-center mx-auto"
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
        </div>
      )}
    </div>
  );
};

export default RoomList;
