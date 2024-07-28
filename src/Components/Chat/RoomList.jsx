import { useTranslation } from "react-i18next";

const RoomList = ({ rooms, activeRoom, handleRoomClick, startNewChat }) => {
  const { t } = useTranslation();
  return (
    <div className="overflow-y-auto h-full">
      <ul>
        {rooms.map((room) => (
          <li
            key={room._id}
            className={`p-2 mb-2 rounded cursor-pointer flex items-center ${
              room._id === activeRoom ? "bg-blue-500 text-white" : "bg-white"
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
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 absolute bottom-24 left-1/2 transform -translate-x-1/2"
      >
        {t("NewChat")}
      </button>
    </div>
  );
};
export default RoomList;
