import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStories } from "../../redux/thunk/storiesThunk";
import { createRecentActivity } from "../../redux/thunk/recentActivityThunks";
import { useTranslation } from "react-i18next";

const Stories = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories.data);
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user
  );
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    dispatch(getAllStories());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  useEffect(() => {
    if (currentUser && stories.length > 0) {
      dispatch(
        createRecentActivity({
          type: "story",
          description:
            i18n.language === "ar"
              ? stories[currentStoryIndex].title_Ar
              : i18n.language === "he"
              ? stories[currentStoryIndex].title_He
              : stories[currentStoryIndex].title,
          user: currentUser._id,
        })
      );
    }
  }, [currentStoryIndex, dispatch, i18n.language]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (audio) {
        audio.pause();
      }
      const soundUrl = `https://finaleprojectbe.onrender.com/sounds/${
        i18n.language === "ar"
          ? stories[currentStoryIndex].sound_Ar
          : i18n.language === "he"
          ? stories[currentStoryIndex].sound_He
          : stories[currentStoryIndex].sound
      }`;
      const newAudio = new Audio(soundUrl);
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    }
  };

  const handleNavigation = (direction) => {
    const newIndex = currentStoryIndex + direction;
    if (newIndex >= 0 && newIndex < stories.length) {
      setCurrentStoryIndex(newIndex);
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  if (!stories.length) return <div>{t("Loading...")}</div>;

  let title, paragraphs, img;

  if (i18n.language === "ar") {
    title = stories[currentStoryIndex].title_Ar;
    paragraphs = stories[currentStoryIndex].paragraphs_Ar;
  } else if (i18n.language === "he") {
    title = stories[currentStoryIndex].title_He;
    paragraphs = stories[currentStoryIndex].paragraphs_He;
  } else {
    title = stories[currentStoryIndex].title;
    paragraphs = stories[currentStoryIndex].paragraphs;
  }

  img = stories[currentStoryIndex].img;

  return (
    <div className="bg-white text-gray-800 p-8 font-serif">
      <div className="relative bg-blue-50 p-12 shadow-md rounded-lg max-w-1xl mx-auto">
        <div className="flex justify-between mb-10">
          <button
            onClick={() => handleNavigation(-1)}
            disabled={currentStoryIndex === 0}
            className="text-gray-500 hover:text-gray-700"
          >
            ‹ {t("back")}
          </button>
          <button
            onClick={() => handleNavigation(1)}
            disabled={currentStoryIndex === stories.length - 1}
            className="text-gray-500 hover:text-gray-700"
          >
            {t("next")} ›
          </button>
        </div>
        <h1 className="text-center text-xl font-bold mb-16">{title}</h1>
        <div className="flex justify-between items-start">
          <div className="flex-1 text-justify max-w-4xl">
            {paragraphs.map((p, index) => (
              <p key={index} className="mb-4">
                {p.text}
              </p>
            ))}
          </div>
          <img
            src={`https://finaleprojectbe.onrender.com/images/${img}`}
            alt={title}
            className="w-96 h-auto ml-4"
          />
        </div>
        <div className="text-center mt-6">
          <button
            onClick={togglePlay}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            {isPlaying ? t("Pause") : t("Play")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
