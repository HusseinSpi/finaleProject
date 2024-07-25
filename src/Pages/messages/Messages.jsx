import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Messages = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("getRooms");
    socket.on("loadRooms", (rooms) => {
      setRooms(rooms);
    });

    return () => {
      socket.off("loadRooms");
    };
  }, []);

  const joinRoom = (roomNumber) => {
    navigate(`/chat/${roomNumber}`);
  };

  return (
    <div className="flex flex-col items-center h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Open Rooms</h1>
      <ul className="w-full max-w-md bg-white rounded shadow">
        {rooms.map((room) => (
          <li
            key={room}
            onClick={() => joinRoom(room)}
            className="p-4 border-b cursor-pointer hover:bg-gray-200"
          >
            Room {room}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
