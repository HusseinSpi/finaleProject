import { useParams } from "react-router-dom";
import Song from "../../Components/SongYT";
import { useSelector, useDispatch } from "react-redux";
import { getAllMusic } from "../../redux/thunk/musicsThunk";
import { useNavigate } from "react-router-dom";
import { shuffle } from "lodash";
import { useTranslation } from "react-i18next";
import background from "../../../dist/bbg.jpg";
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
      className="w-screen h-full p-5 relative bg-cover bg-no-repeat"
      style={{
        background: `url(${background})`,
      }}
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-950 flex items-center justify-center mb-6">
        <PiMusicNotesSimpleBold /> {song.name} <PiMusicNotesSimpleBold />
      </h1>

      <div className="flex justify-center mb-6 px-4 mx-48 sm:px-7">
        <Song videoId={song.code} />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-10 px-3 text-blue-950 bg-white/40 w-full max-w-md text-center rounded-xl">
          {t("OtherSongsYouMightLike")}
        </h2>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-4xl mx-auto">
            {otherSongs.map((otherSong) => (
              <div
                key={otherSong.code}
                className="cursor-pointer bg-[#0A70B8] p-3 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-blue-500 mb-5"
                onClick={() => navigate(`/song/${otherSong.code}`)}
              >
                <img
                  src={`https://img.youtube.com/vi/${otherSong.code}/hqdefault.jpg`}
                  alt={otherSong.name}
                  className="w-full h-32 object-cover mb-2 rounded"
                />
                <p className="text-center text-sm sm:text-lg font-semibold mt-4 text-white">
                  {otherSong.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSong;
