import Song from "../Components/SongYT";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Carousel = ({ songs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSongs = songs.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSongs);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSongs) % totalSongs
    );
  };

  if (totalSongs === 0) return null;

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex gap-16 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {songs.map((song) => (
            <div key={song._id} className="flex-none w-full max-w-xs p-4">
              <Song videoId={song.code} />
              <p className="text-center mt-2">{song.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
