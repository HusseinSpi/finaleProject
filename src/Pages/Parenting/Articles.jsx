import { MdArticle } from "react-icons/md";
import { useTranslation } from "react-i18next";



const Articles = ({ articles }) => {
    const { t } = useTranslation();
  if (!articles || articles.length === 0) {
    return <div>No article available</div>;
  }

  const article = articles[0]; 
  const handleButtonClicked = () => {
    window.location.href = article.link;
  };

  return (
    <div className="p-2">
      <div className="flex flex-col gap-3 md:flex-row items-center">
        <div className="mb-10">

        <MdArticle size={50} />
        </div>
        <div className="flex flex-col w-full gap-1 ">
          <h1 className="font-bold text-lg">{article.title}</h1>
          <h1 className="font-pretty text-sm">{article.author}</h1>
          <button
            onClick={handleButtonClicked}
            className="bg-orange-600 text-white rounded-xl px-4 py-2 text-sm hover:bg-orange-700 mx-auto"
          >
            {t(" Read Full Article!")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
