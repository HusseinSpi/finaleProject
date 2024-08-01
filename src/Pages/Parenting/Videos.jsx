import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVideos } from "../../redux/thunk/videosThunk";
import { useTranslation } from "react-i18next";
import { createRecentActivity } from "../../redux/thunk/recentActivityThunks";
import Video from "../../Components/SongYT"
import { useParams } from "react-router-dom";

const Videos = () => {
 const dispatch = useDispatch();
 const videos = useSelector((state) => state.videos.data[0]);
 const [isLoading, setIsLoading] = useState(true);
 const { t, i18n } = useTranslation();
   const { videoId } = useParams();
 const currentUser = useSelector(
   (state) => state.currentUser?.data?.data?.user
 );

 
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllVideos());
      setIsLoading(false)
    };
    fetchData();
  }, [dispatch]);

  if (!videos || !videos[i18n.language]) {
    return <div className="text-center">No Videos Available</div>;
  }

//   const video = videos[i18n.language].find((video) => video.code === videoId);
//   if (!video) {
//     return <div className="text-center">Song not found</div>;
//   }

//  if (videoId) {
//     const video = filteredVideos.find((video) => video.code === videoId);
//     if (!video) {
//       return <div className="text-center">Video not found</div>;
//     }
    const filteredVideos = videos[i18n.language] || videos["en"] || [];

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       await dispatch(getAllVideos());
//       setIsLoading(false);
//     };

//     if (videos.length === 0) {
//       fetchData();
//     } else {
//       setIsLoading(false);
//     }
//   }, [dispatch, videos]);


    // const handleVideoClicked = (video) => {
    //   if (currentUser) {
    //     dispatch(
    //       createRecentActivity({
    //         type: "video",
    //         description: video.title,
    //         user: currentUser._id,
    //       })
    //     );
    //   }
    //   window.location.href = video.link;
    // };

    if (isLoading) {
      return <div className="text-center">Loading...</div>;
    }

  return (
     <div className="flex flex-wrap gap-7">
      {filteredVideos.map((video) => (
        <div
          key={video.code}
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
