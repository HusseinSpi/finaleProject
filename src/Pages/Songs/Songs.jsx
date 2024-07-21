import Song from "../../Components/SongYT";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMusicByType } from "../../redux/thunk/musicsThunk";

const Songs = () => {
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics.data);

  useEffect(() => {
    dispatch(getMusicByType("numbers"));
    dispatch(getMusicByType("alphabet"));
    dispatch(getMusicByType("general"));
  }, [dispatch]);

  const numbersSongs = musics?.filter((song) => song.type === "numbers") || [];
  const alphabetSongs =
    musics?.filter((song) => song.type === "alphabet") || [];
  const generalSongs = musics?.filter((song) => song.type === "general") || [];

  return (
    <div>
      <h1>Learn with us!</h1>
      <h2>Numbers Songs</h2>
      {numbersSongs.map((song) => (
        <Song key={song.id} videoId={song.videoId} />
      ))}
      <h2>Alphabet Songs</h2>
      {alphabetSongs.map((song) => (
        <Song key={song.id} videoId={song.videoId} />
      ))}
      <h2>General Songs</h2>
      {generalSongs.map((song) => (
        <Song key={song.id} videoId={song.videoId} />
      ))}
    </div>
  );
};
export default Songs;
