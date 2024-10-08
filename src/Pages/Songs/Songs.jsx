import Carousel from "../../Components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMusic } from "../../redux/thunk/musicsThunk";
import { useTranslation } from "react-i18next";
import background from "../../../public/bbg.jpg";
// import seacreatures from "../../../public/seacreatures.jpg"
import seacreatures from "../../../public/waves4.png";
import { PiMusicNotesSimpleBold } from "react-icons/pi";

const Songs = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics.data[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getAllMusic());
      setIsLoading(false);
    };

    if (!musics || musics.length === 0) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, musics]);

  let numbersSongs = [];
  let alphabetSongs = [];
  let generalSongs = [];

  if (musics) {
    const langSongs = musics[i18n.language] || musics.En;
    numbersSongs = langSongs.filter((song) => song.type === "numbers");
    alphabetSongs = langSongs.filter((song) => song.type === "alphabet");
    generalSongs = langSongs.filter((song) => song.type === "general");
  }

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div
      className="w-screen h-screen p-5 relative "
      style={{
        background: `url(${seacreatures})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 className=" flex items-center   justify-center text-3xl font-extrabold text-center mt-16 text-blue-950 ">
        <PiMusicNotesSimpleBold /> {t("learnWithUs")} <PiMusicNotesSimpleBold />
      </h1>

      <div className="mb-8  rounded-lg text-blue-950 bg-white">
        <h2 className="text-4xl mb-10 font-semibold text-blue-950 bg-white  font-theren">
          {t("NumbersSongs")}
        </h2>
        <Carousel songs={numbersSongs} />
      </div>

      <div className="mb-8 text-blue-950 bg-white ">
        <h2 className="text-4xl mb-10 font-semibold text-blue-950  font-theren">
          {t("AlphabetSongs")}
        </h2>
        <Carousel songs={alphabetSongs} />
      </div>

      <div className="mb-8 text-blue-950 bg-white ">
        <h2 className="text-4xl mb-10 font-semibold text-blue-950  font-theren">
          {t("GeneralSongs")}
        </h2>
        <Carousel songs={generalSongs} />
      </div>
    </div>
  );
};

export default Songs;
