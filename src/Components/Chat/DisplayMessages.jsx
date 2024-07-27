const DisplayMessages = ({
  messages,
  userId,
  isFirstMessageSent,
  isRoomClosed,
  handleSendMessage,
}) => {
  const predefinedMessages = [
    "I want help with an issue related to raising my child",
    "I need help with feeding my child",
    "I want help regarding my child's illness",
    "I want help with my child's education",
    "other",
  ];
  return (
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
      {!isFirstMessageSent &&
        !isRoomClosed &&
        predefinedMessages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-xl break-words bg-blue-200 self-start text-left cursor-pointer`}
            onClick={() => handleSendMessage(msg)}
          >
            {msg}
          </div>
        ))}
    </div>
  );
};
export default DisplayMessages;
