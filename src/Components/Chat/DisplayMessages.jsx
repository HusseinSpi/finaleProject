import { useTranslation } from "react-i18next";

const DisplayMessages = ({
  messages,
  userId,
  isFirstMessageSent,
  isRoomClosed,
  handleSendMessage,
}) => {
  const { i18n } = useTranslation();

  const predefinedMessages = {
    en: [
      "I want help with an issue related to raising my child",
      "I need help with feeding my child",
      "I want help regarding my child's illness",
      "I want help with my child's education",
      "other",
    ],
    ar: [
      "أريد مساعدة في مسألة تتعلق بتربية طفلي",
      "أحتاج إلى مساعدة في إطعام طفلي",
      "أريد مساعدة بخصوص مرض طفلي",
      "أريد مساعدة في تعليم طفلي",
      "أخرى",
    ],
    he: [
      "אני רוצה עזרה בנושא הקשור לגידול הילד שלי",
      "אני צריך עזרה בהאכלת הילד שלי",
      "אני רוצה עזרה בנוגע למחלת הילד שלי",
      "אני רוצה עזרה בחינוך הילד שלי",
      "אחר",
    ],
  };

  return (
    <div className="bg-gray-100 p-2 rounded mb-4 h-chat flex flex-col overflow-y-auto relative">
      {messages
        .filter((msg) => msg.message && msg.message.trim() !== "")
        .map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-xl break-words ${
              msg.senderId === userId
                ? "bg-blue-200 self-end text-right"
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
        predefinedMessages[i18n.language].map((msg, index) => (
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
