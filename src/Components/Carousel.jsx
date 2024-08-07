import SongYTWrapper from "./SongYTWrapper";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Carousel = ({ songs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSongs = songs.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSongs);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSongs) % totalSongs);
  };

  if (totalSongs === 0) return null;

  return (
    <div className="relative ">
      <div className="flex overflow-hidden">
        <div
          className="flex gap-16 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {songs.map((song) => (
            <div
              key={song._id}
              className="flex-none w-full max-w-xs p-4 bg-blue-900 rounded-lg hover:bg-orange-700 transform transition-transform duration-200 hover:scale-105 "
            >
              <SongYTWrapper videoId={song.code} />
              <p className="text-center text-lg font-semibold text-white mt-2">
                {song.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-orange-600"
        onClick={prevSlide}
      >
        <FaChevronLeft color="#003366" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full hover:bg-orange-600"
        onClick={nextSlide}
      >
        <FaChevronRight color="#003366" />
      </button>
    </div>
  );
};

export default Carousel;
