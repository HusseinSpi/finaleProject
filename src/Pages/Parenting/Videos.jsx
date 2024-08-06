import Video from "../../Components/SongYT";
import { PiVideoFill } from "react-icons/pi";

const Videos = ({ videos }) => {
  return (
    <div className="p-2">
      {videos.map((video) => (
        <div key={video._id} className="flex flex-col items-center">
          {/* <PiVideoFill size={50}/> */}
          <h1 className="font-bold text-center">{video.title}</h1>
          <div className="flex justify-center mb-6 p-7 w-full max-w-full">
            <Video
              videoId={video.code}
              height="360"
              width="100%"
              className="md:w-3/4 sm:w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
