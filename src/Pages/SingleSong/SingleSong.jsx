import { useParams } from "react-router-dom"
import Song from "../../Components/SongYT"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {shuffle} from "lodash"

const SingleSong = () => {
const {videoId} = useParams()
const navigate = useNavigate()


  const songs = useSelector((state) => state.musics.data);

  const song = songs.find((song) => song.code === videoId);

  if (!song) {
    return <div className="text-center">Song not found</div>;
  }

   const otherSongs = shuffle(songs.filter((s) => s.code !== videoId)).slice(
     0,
     5
   );

  return (
    <div
      className="p-4 w-full h-full"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/e1/31/53/e13153cf62ba84a0df806d6d54b353b0.jpg')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // width: "100%",
      }}
    >
      <h1 className="text-3xl font-bold text-center mt-20">{song.name}</h1>
      <div className="flex justify-center mb-6 p-7">
        <Song videoId={song.code} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Other Songs You Might Like
        </h2>
        <div className="flex sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-3/4 ml-36 rounded-xl">
          {otherSongs.map((otherSong) => (
            <div
              key={otherSong.code}
              className=" items-center cursor-pointer w-full bg-yellow-200 p-2  rounded-lg hover:transform hover:-translate-x-2 hover:-translate-y-2 hover:ease-in-out mb-14"
              onClick={() => navigate(`/song/${otherSong.code}`)}
            >
              <img
                src={`https://img.youtube.com/vi/${otherSong.code}/hqdefault.jpg`}
                alt={otherSong.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <p className="text-center">{otherSong.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SingleSong
