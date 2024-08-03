import { useTranslation } from "react-i18next";

const Books = ({ books }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-7">
      {books.map((book) => (
        <div
          key={book._id}
          className="w-[30rem] bg-sky-700 flex flex-col items-center p-5 mt-10 gap-5 text-white text-center"
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-[16rem] h-[18rem]"
          />
          <h1 className="font-bold">{book.title}</h1>
          <h2 className="font-semibold">{book.author}</h2>
          <p>{book.desc}</p>
          <button className="bg-white text-blue-900 rounded-xl p-3">
            {t("Buy Now!")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Books;
