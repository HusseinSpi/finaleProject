import Carousel from "../../Components/Carousel";
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
        <Carousel songs={numbersSongs} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alphabet Songs</h2>
        <Carousel songs={alphabetSongs} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">General Songs</h2>
        <Carousel songs={generalSongs} />
      </div>
    </div>
  );
};
export default Songs;
