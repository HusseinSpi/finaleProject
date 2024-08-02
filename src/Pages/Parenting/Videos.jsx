import Video from "../../Components/SongYT";

const Videos = ({ videos }) => {
  return (
    <div className="flex flex-wrap gap-7">
      {videos.map((video) => (
        <div
          key={video._id}
          className="w-[30rem] bg-sky-700 flex flex-col items-center p-5 mt-10 gap-5 text-white text-center"
        >
          <h1 className="font-bold">{video.title}</h1>
          <div className="flex justify-center mb-6 p-7 ">
            <Video videoId={video.code} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
