import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecentActivity } from "../../redux/thunk/recentActivityThunks";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const recentActivity = useSelector((state) => state.recentActivity.data);
  const [selectedTab, setSelectedTab] = useState("history");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getRecentActivity());
    };

    fetchData();
  }, [dispatch]);

  const renderContent = () => {
    switch (selectedTab) {
      case "history":
        return (
          <div className="flex space-x-4">
            <div className="w-1/3 h-32 bg-blue-100 text-center">
              <h1 className="p-5 text-xl">Game</h1>
              <p>History content goes here</p>
            </div>
            <div className="w-1/3 h-32 bg-blue-100 text-center">
              <h1 className="p-5 text-xl">Song</h1>
              <p>History content goes here</p>
            </div>{" "}
            <div className="w-1/3 h-32 bg-blue-100 text-center">
              <h1 className="p-5 text-xl">Stories</h1>
              <p>History content goes here</p>
            </div>
          </div>
        );
      case "imageAnalysis":
        return <p>Image analysis content goes here</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-blue-100 p-4">
        <h1 className="text-2xl font-bold mb-4">eds</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setSelectedTab("history")}
            className={`px-4 py-2 ${
              selectedTab === "history"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-700"
            } rounded`}
          >
            History
          </button>
          <button
            onClick={() => setSelectedTab("imageAnalysis")}
            className={`px-4 py-2 ${
              selectedTab === "imageAnalysis"
                ? "bg-blue-500 text-white"
                : "bg-blue-100 text-blue-700"
            } rounded`}
          >
            Image Analysis
          </button>
        </div>
      </div>
      <div className="w-3/4 p-4">{renderContent()}</div>
    </div>
  );
};

export default Account;
