import { useParams } from "react-router-dom";
import Song from "../../Components/SongYT";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusic } from "../../redux/thunk/musicsThunk";
import { useNavigate } from "react-router-dom";
import { shuffle } from "lodash";
import { useTranslation } from "react-i18next";
import background from "../../../public/bbg.jpg";
import { PiMusicNotesSimpleBold } from "react-icons/pi";
import { useEffect } from "react";

const SingleSong = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { videoId } = useParams();
  const navigate = useNavigate();

  const songs = useSelector((state) => state.musics.data[0]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllMusic());
    };
    fetchData();
  }, [dispatch]);

  if (!songs || !songs[i18n.language]) {
    return <div className="text-center">Loading songs...</div>;
  }

  const song = songs[i18n.language].find((song) => song.code === videoId);
  if (!song) {
    return <div className="text-center">Song not found</div>;
  }

  const otherSongs = shuffle(
    songs[i18n.language].filter((s) => s.code !== videoId)
  ).slice(0, 5);

  return (
    <div
      className="w-screen h-screen p-5 relative"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 className="text-3xl font-bold flex text-center items-center justify-center text-blue-950 ">
        <PiMusicNotesSimpleBold /> {song.name} <PiMusicNotesSimpleBold />
      </h1>
      <div className="flex justify-center mb-6 p-7 ">
        <Song videoId={song.code} />
      </div>

      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-semibold mb-10 p-3 text-blue-950 bg-white/40 w-[rem] text-center  rounded-xl">
          {t("OtherSongsYouMightLike")}
        </h2>
        <div className="flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-3/4 ml-36 rounded-xl">
          {otherSongs.map((otherSong) => (
            <div
              key={otherSong.code}
              className=" items-center cursor-pointer w-[20rem] h-[15rem] bg-[#0A70B8] p-3  rounded-lg  transform transition-transform duration-200 hover:scale-105 hover:bg-blue-500 mb-5"
              onClick={() => navigate(`/song/${otherSong.code}`)}
            >
              <img
                src={`https://img.youtube.com/vi/${otherSong.code}/hqdefault.jpg`}
                alt={otherSong.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <p className="text-center text-lg font-semibold mt-4 text-white">
                {otherSong.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleSong;
