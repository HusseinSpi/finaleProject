import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllArticles } from "../../redux/thunk/articlesThunk";
import { useTranslation } from "react-i18next";
import { createRecentActivity } from "../../redux/thunk/recentActivityThunks";

const Articles = () => {
 const dispatch = useDispatch();
 const articles = useSelector((state) => state.articles.data[0] || []);
 const [isLoading, setIsLoading] = useState(true);
 const { t, i18n } = useTranslation();
 const currentUser = useSelector(
   (state) => state.currentUser?.data?.data?.user
 );
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getAllArticles());
      setIsLoading(false);
    };

    if (articles.length === 0) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, articles]);

  const filteredArticles = articles[i18n.language] || articles["en"] || [];

  const handleButtonClicked = (article) => {
    if (currentUser) {
      dispatch(
        createRecentActivity({
          type: "article",
          description: article.title,
          user: currentUser._id,
        })
      );
    }
    window.location.href = article.link;
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-7">
      {filteredArticles.map((article) => (
        <div
          key={article.title}
          className="w-[30rem] bg-sky-700 flex flex-col items-center p-5 mt-10 gap-5 text-white text-center"
        >
       
          <h1 className="font-bold">{article.title}</h1>
          <h2 className="font-semibold">{article.author}</h2>
          <button
            onClick={() => handleButtonClicked(article)}
            className="bg-white text-blue-900 rounded-xl p-3"
          >
            {t("Buy Now!")}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Articles;
