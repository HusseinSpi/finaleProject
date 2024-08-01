import { useTranslation } from "react-i18next";

const Articles = ({ articles }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-7">
      {articles.map((article) => (
        <div
          key={article._id}
          className="w-[30rem] bg-sky-700 flex flex-col items-center p-5 mt-10 gap-5 text-white text-center"
        >
          <h1 className="font-bold">{article.title}</h1>
          <h2 className="font-semibold">{article.author}</h2>
          <button className="bg-white text-blue-900 rounded-xl p-3">
            {t("Buy Now!")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Articles;
