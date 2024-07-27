import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import RoomList from "./RoomList";
import DisplayMessages from "./DisplayMessages";
import InputMessage from "./InputMessage";

const ChatSpecialist = ({ currentUser }) => {
  const [inputValue, setInputValue] = useState("");
  const [isRoomClosed, setIsRoomClosed] = useState(true);
  const [roomNumber, setRoomNumber] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isFirstMessageSent, setIsFirstMessageSent] = useState(false);
  const socketRef = useRef(null);
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

    socketRef.current = io("https://finaleprojectbe.onrender.com", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    const socket = socketRef.current;

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
      if (loadedMessages.length > 0) {
        setIsFirstMessageSent(true);
      }
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
    socketRef.current.emit("joinRoom", userId, room._id);
  };

  const handleSendMessage = (message) => {
    if (message.trim() === "" || isRoomClosed) return;

    const newMessage = {
      text: message,
      type: "Specialist",
      sender: "user",
      socketMessage: {
        senderId: userId,
        message: message,
        roomNumber: activeRoom,
      },
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    socketRef.current.emit("sendMessage", newMessage.socketMessage);
    setInputValue("");
    setIsFirstMessageSent(true);
  };

  const startNewChat = async () => {
    const newRoomNumber = await fetchRoomNumber();
    setMessages([]);
    setIsRoomClosed(false);
    setActiveRoom(newRoomNumber);
    setIsFirstMessageSent(false);
  };

  useEffect(() => {
    if (activeRoom) {
      socketRef.current.emit("joinRoom", userId, activeRoom);
    }
  }, [activeRoom, userId]);

  return (
    <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto">
      {!activeRoom ? (
        <RoomList
          rooms={rooms}
          activeRoom={activeRoom}
          handleRoomClick={handleRoomClick}
          startNewChat={startNewChat}
        />
      ) : (
        <DisplayMessages
          messages={messages}
          userId={userId}
          isFirstMessageSent={isFirstMessageSent}
          isRoomClosed={isRoomClosed}
          handleSendMessage={handleSendMessage}
        />
      )}
      {!isRoomClosed &&
        activeRoom &&
        isFirstMessageSent && ( // add activeRoom === roomNumber
          <InputMessage
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={handleSendMessage}
          />
        )}
    </div>
  );
};

export default ChatSpecialist;
