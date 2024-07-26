import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("https://finaleprojectbe.onrender.com");

const Messages = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("getRooms");
    socket.on("loadRooms", (rooms) => {
      console.log("Received rooms", rooms);
      const sortedRooms = rooms.sort(
        (a, b) => new Date(a.firstMessageDate) - new Date(b.firstMessageDate)
      );
      setRooms(sortedRooms);
    });

    return () => {
      socket.off("loadRooms");
    };
  }, []);

  const joinRoom = (roomNumber) => {
    navigate(`/chat/${roomNumber}`);
  };

  return (
    <div className="flex flex-col items-center h-screen p-4 text-white">
      <h1 className="text-4xl font-bold mb-8">Open Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div
              key={room._id}
              onClick={() => joinRoom(room._id)}
              className="p-6 bg-white text-black rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:bg-indigo-100"
            >
              <h2 className="text-2xl font-semibold">Room {room._id}</h2>
              <p className="mt-2 text-gray-800">Subject: {room.firstMessage}</p>
              <p className="mt-2 text-gray-600">
                Date: {new Date(room.firstMessageDate).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No open rooms available.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
