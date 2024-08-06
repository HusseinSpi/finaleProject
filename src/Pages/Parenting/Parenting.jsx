import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../redux/thunk/booksThunk";
import { getAllVideos } from "../../redux/thunk/videosThunk";
import { getAllArticles } from "../../redux/thunk/articlesThunk";
import { useTranslation } from "react-i18next";
import Books from "./Books";
import Videos from "./Videos";
import Articles from "./Articles";
import bg from "../../../public/parentingBG.webp"


const Parenting = ( ) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
    const { t } = useTranslation();


  const books = useSelector((state) => state.books.data[0] || []);
  const videos = useSelector((state) => state.videos.data[0] || []);
  const articles = useSelector((state) => state.articles.data[0] || []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getAllBooks());
      await dispatch(getAllVideos());
      await dispatch(getAllArticles());
      setIsLoading(false);
    };

    if (books.length === 0 || videos.length === 0 || articles.length === 0) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, books.length, videos.length, articles.length]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

    const combinedData = Array.from({ length: 10 }, (_, index) => ({
      book: books[i18n.language]?.[index] || books["en"]?.[index],
      video: videos[i18n.language]?.[index] || videos["en"]?.[index],
      article: articles[i18n.language]?.[index] || articles["en"]?.[index],
    })).filter((item) => item.book && item.video && item.article);

  return (
    <div
      className="flex flex-col gap-6 p-4 bg-orange-50"
      // style={{
      //   background: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <div className="bg-orange-50 text-blue-950 rounded-xl w-full max-w-4xl p-4 mx-auto flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold mb-4">
          {t("Enhance your parenting knowledge with us!")}
        </h1>
        <p className="text-center text-lg">{t("parentingIntro")}</p>
      </div>
      {combinedData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row border rounded-lg overflow-hidden p-4 gap-4 bg-white shadow-lg ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div
            className={`md:w-1/2 ${
              (index % 2 === 0 && i18n.language === "en") ||
              (index % 2 !== 0 && i18n.language !== "en")
                ? "border-r-2"
                : "border-l-2"
            } border-orange-500`}
          >
            <Videos videos={[item.video]} />
          </div>
          <div className="flex flex-col md:w-1/2 gap-4">
            <div className="border-b-2 border-orange-500 p-2">
              <Articles articles={[item.article]} />
            </div>
            <div>
              <Books books={[item.book]} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parenting;
