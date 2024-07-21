import  { useEffect, useRef } from "react";

const SongYT = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {

      const loadYouTubeAPI = () => {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      };

    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
        height: "250",
        width: "350",
        videoId: videoId,
        playerVars: {
          autoplay: 0,
        },
      });
    };

      if (!window.YT) {
        loadYouTubeAPI();
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      } else {
        onYouTubeIframeAPIReady();
      }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <div id={`youtube-player-${videoId}`} className=""></div>
  );
};
export default SongYT;
