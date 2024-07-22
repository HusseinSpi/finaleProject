import  { useEffect, useRef } from "react";

const SongYT = ({ videoId }) => {
   const playerRef = useRef(null);

   useEffect(() => {
     const createPlayer = () => {
       if (window.YT && window.YT.Player) {
         if (playerRef.current) {
           playerRef.current.destroy(); 
         }
         playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
           height: "250",
           width: "350",
           videoId: videoId,
           playerVars: {
             autoplay: 0,
           },
         });
       } else {
         console.error("YT.Player is not available");
       }
     };

     if (window.YT && window.YT.Player) {
       createPlayer();
     } else {
       const checkYTReady = setInterval(() => {
         if (window.YT && window.YT.Player) {
           clearInterval(checkYTReady);
           createPlayer();
         }
       }, 100);
     }

     return () => {
       if (playerRef.current) {
         playerRef.current.destroy();
       }
     };
   }, [videoId]);

   return (
     <div id={`youtube-player-${videoId}`} className="youtube-player"></div>
   );
};
export default SongYT;
