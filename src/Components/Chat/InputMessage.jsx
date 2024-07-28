import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const InputMessage = ({ inputValue, setInputValue, handleSendMessage }) => {
  const { t } = useTranslation();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };
  return (
    <div className="flex items-center border-2 border-blue-500 rounded-full p-1">
      <input
        type="text"
        placeholder={t("Message")}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="flex-1 border-none outline-none px-4 py-2 rounded-full mr-3"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
        onClick={() => handleSendMessage(inputValue)}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
export default InputMessage;
