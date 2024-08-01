import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../redux/thunk/booksThunk";
import { getAllVideos } from "../../redux/thunk/videosThunk";
import { getAllArticles } from "../../redux/thunk/articlesThunk";
import { useTranslation } from "react-i18next";
import Books from "./Books";
import Videos from "./Videos";
import Articles from "./Articles";

const Parenting = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

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
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div>
      <Books books={books[i18n.language] || books["en"] || []} />
      {/* <Videos videos={videos[i18n.language] || videos["en"] || []} /> */}
      <Articles articles={articles[i18n.language] || articles["en"] || []} />
    </div>
  );
};

export default Parenting;
