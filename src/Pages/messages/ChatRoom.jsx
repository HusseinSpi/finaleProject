import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const ChatRoom = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser.data?.data?.user
  );
  const { roomNumber } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (!currentUser) return;

    socket.emit("joinRoom", currentUser._id, roomNumber);

    socket.on("loadMessages", (messages) => {
      setMessages(messages);
    });

    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("roomEnded", (endedRoom) => {
      if (endedRoom === roomNumber) {
        navigate("/");
      }
    });

    return () => {
      socket.off("loadMessages");
      socket.off("receiveMessage");
      socket.off("roomEnded");
    };
  }, [currentUser, roomNumber, navigate]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    socket.emit("sendMessage", {
      senderId: currentUser._id,
      roomNumber,
      message: newMessage,
    });
    setNewMessage("");
  };

  const endRoom = () => {
    socket.emit("endRoom", roomNumber);
    navigate("/messages");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-bold">Room {roomNumber}</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <ul className="space-y-2">
          {messages.map((message) => (
            <li key={message._id} className="p-2 bg-white rounded shadow">
              {message.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Send
          </button>
          <button
            onClick={endRoom}
            className="bg-red-600 text-white p-2 rounded"
          >
            End Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
