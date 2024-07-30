import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentActivity } from "../../redux/thunk/recentActivityThunks";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const recentActivity = useSelector(
    (state) => state.recentActivity.data?.data || []
  );
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user || {}
  );
  const [selectedTab, setSelectedTab] = useState("history");

  useEffect(() => {
    dispatch(getRecentActivity());
  }, [dispatch]);

  const gameHistory = recentActivity.filter(
    (activity) => activity.type === "game" && activity.user === currentUser._id
  );
  const songHistory = recentActivity.filter(
    (activity) => activity.type === "song" && activity.user === currentUser._id
  );
  const storyHistory = recentActivity.filter(
    (activity) => activity.type === "story" && activity.user === currentUser._id
  );

  const renderContent = () => {
    switch (selectedTab) {
      case "history":
        return (
          <div className="flex space-x-4 text-center">
            <div className="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
              <h1 className="text-xl font-semibold mb-5">{t("Game")}</h1>
              <div>
                {gameHistory.length > 0
                  ? gameHistory.map((game, index) => (
                      <div key={index} className="mb-4">
                        {game.description}
                      </div>
                    ))
                  : t("No game history")}
              </div>
            </div>
            <div className="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
              <h1 className="text-xl font-semibold mb-5">{t("Song")}</h1>
              <div>
                {songHistory.length > 0
                  ? songHistory.map((song, index) => (
                      <div key={index} className="mb-4">
                        {t("SongView")} {song.description}
                      </div>
                    ))
                  : t("No song history")}
              </div>
            </div>
            <div className="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
              <h1 className="text-xl font-semibold mb-5">{t("Story")}</h1>
              <div>
                {storyHistory.length > 0
                  ? storyHistory.map((story, index) => (
                      <div key={index} className="mb-4">
                        {t("SongView")} {story.description}
                      </div>
                    ))
                  : t("No story history")}
              </div>
            </div>
          </div>
        );
      case "imageAnalysis":
        return <p>{t("Image analysis content goes here")}</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-blue-100 p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{t("Account")}</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setSelectedTab("history")}
            className={`px-4 py-2 ${
              selectedTab === "history"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-700"
            } rounded shadow`}
          >
            {t("History")}
          </button>
          <button
            onClick={() => setSelectedTab("imageAnalysis")}
            className={`px-4 py-2 ${
              selectedTab === "imageAnalysis"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-700"
            } rounded shadow`}
          >
            {t("Image Analysis")}
          </button>
        </div>
      </div>
      <div className="w-3/4 p-4">{renderContent()}</div>
    </div>
  );
};

export default Account;
