import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SongYTWrapper = ({ videoId }) => {
  const navigate = useNavigate();

  const coverImage = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handleSongClicked = () => {
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
