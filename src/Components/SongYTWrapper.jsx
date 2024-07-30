import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRecentActivity } from "../redux/thunk/recentActivityThunks";
import { useTranslation } from "react-i18next";

const SongYTWrapper = ({ videoId }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user
  );
  const songs = useSelector((state) => state.musics.data[0]);
  const coverImage = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const song = songs[i18n.language].find((song) => song.code === videoId);
  console.log(song);

  const handleSongClicked = () => {
    dispatch(
      createRecentActivity({
        type: "song",
        description: song.name,
        user: currentUser._id,
      })
    );
    navigate(`/song/${videoId}`);
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={coverImage}
        alt="Cover"
        className="cursor-pointer w-full max-w-xs"
        onClick={handleSongClicked}
      />
    </div>
  );
};

export default SongYTWrapper;
