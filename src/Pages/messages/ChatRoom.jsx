import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import io from "socket.io-client";

const socket = io("https://finaleprojectbe.onrender.com");

const ChatRoom = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser.data?.data?.user
  );
  const { roomNumber } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isRoomClosed, setIsRoomClosed] = useState(false);
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
        setIsRoomClosed(true);
      }
    });

    socket.on("roomClosed", (closedRoom) => {
      if (closedRoom === roomNumber) {
        setIsRoomClosed(true);
      }
    });

    return () => {
      socket.off("loadMessages");
      socket.off("receiveMessage");
      socket.off("roomEnded");
      socket.off("roomClosed");
    };
  }, [currentUser, roomNumber, navigate]);

  const sendMessage = () => {
    if (newMessage.trim() === "" || isRoomClosed) return;

    socket.emit("sendMessage", {
      senderId: currentUser._id,
      roomNumber,
      message: newMessage,
    });
    setNewMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
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
        <ul className="space-y-2 flex flex-col">
          {messages.map((message) => (
            <li
              key={message._id}
              className={`mb-2 p-2 inline-block rounded-xl break-words ${
                message.senderId === currentUser._id
                  ? "bg-green-200 self-end text-right"
                  : "bg-stone-300 self-start text-left"
              }`}
            >
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
            onKeyDown={handleKeyDown}
            className="flex-1 p-2 border rounded"
            placeholder="Type your message..."
            disabled={isRoomClosed}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white p-2 rounded"
            disabled={isRoomClosed}
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
        {isRoomClosed && (
          <p className="text-red-500 mt-2">
            This room has been closed. No new messages can be sent.
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
