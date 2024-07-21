import Song from "../../Components/SongYT";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMusic } from "../../redux/thunk/musicsThunk";

const Songs = () => {
  const dispatch = useDispatch();
  const musics = useSelector((state) => state.musics.data);

  useEffect(() => {
    dispatch(getAllMusic());
  }, [dispatch]);

   useEffect(() => {
     console.log("Musics State:", musics); 
   }, [musics]);

 const numbersSongs = musics?.filter((song) => song.type === "numbers") || [];
 const alphabetSongs = musics?.filter((song) => song.type === "alphabet") || [];
 const generalSongs = musics?.filter((song) => song.type === "general") || [];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Learn with us!</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Numbers Songs</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {numbersSongs.map((song) => (
            <div key={song._id} className="flex-1 max-w-xs">
              <Song videoId={song.code} />
              <p className="text-center mt-2">{song.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alphabet Songs</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {alphabetSongs.map((song) => (
            <div key={song._id} className="flex-1 max-w-xs">
              <Song videoId={song.code} />
              <p className="text-center mt-2">{song.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">General Songs</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {generalSongs.map((song) => (
            <div key={song._id} className="flex-1 max-w-xs">
              <Song videoId={song.code} />
              <p className="text-center mt-2">{song.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Songs;
