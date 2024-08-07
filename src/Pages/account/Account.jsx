import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getRecentActivity } from "../../redux/thunk/recentActivityThunks";
import { getAllDraws } from "../../redux/thunk/drawThunk";
import { getAllAppointments } from "../../redux/thunk/appointmentThunk";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recentActivity = useSelector(
    (state) => state.recentActivity.data?.data || []
  );
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user || {}
  );
  const draws = useSelector((state) => state.draws.data || []);
  const appointments = useSelector((state) => state.appointments.data || []);
  const [selectedTab, setSelectedTab] = useState("history");
  const [selectedDraw, setSelectedDraw] = useState(null);

  useEffect(() => {
    dispatch(getRecentActivity());
    dispatch(getAllDraws());
    dispatch(getAllAppointments());
  }, [dispatch]);

  const formatDateTime = (dateTime) => {
    return moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
  };

  const gameHistory = recentActivity.filter(
    (activity) => activity.type === "game" && activity.user === currentUser._id
  );
  const songHistory = recentActivity.filter(
    (activity) => activity.type === "song" && activity.user === currentUser._id
  );
  const storyHistory = recentActivity.filter(
    (activity) => activity.type === "story" && activity.user === currentUser._id
  );
  const drawHistory = draws.filter((draw) => draw.user === currentUser._id);

  const appointmentsM = appointments.filter(
    (appointment) => appointment.user === currentUser._id
  );

  const STATIC_ROOM_URL =
    "https://psychologyvideocall.whereby.com/8aad5053-4a01-4649-83cf-144ca62ef6db";

  const handleImageClick = (draw) => {
    setSelectedDraw(draw);
  };

  const handleAppointmentDetails = (date) => {
    const d = new Date();
    const appointmentDate = new Date(date);

    console.log(d);
    console.log(appointmentDate);

    if (d > appointmentDate) {
      window.open(STATIC_ROOM_URL, "_blank");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "history":
        return (
          <div className="flex space-x-5 text-center bg-sky-50 p-5">
            <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mt-5">
              <h1 className="text-xl font-semibold mb-5">{t("Game")}</h1>
              <div>
                {gameHistory.length > 0
                  ? gameHistory.map((game, index) => (
                      <div
                        key={index}
                        className="mb-4 text-center flex flex-col bg-sky-50 shadow-md text-md"
                      >
                        <span className="font-bold ml-2">
                          {game.description}
                        </span>
                        {formatDateTime(game.date)}
                      </div>
                    ))
                  : t("No game history")}
              </div>
            </div>
            <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mt-5">
              <h1 className="text-xl font-semibold mb-5">{t("Song")}</h1>
              <div>
                {songHistory.length > 0
                  ? songHistory.map((song, index) => (
                      <div
                        key={index}
                        className="mb-4 text-center flex flex-col bg-sky-50 shadow-md text-md"
                      >
                        <span className="font-bold ml-2 ">
                          {song.description}
                        </span>
                        {formatDateTime(song.date)}
                      </div>
                    ))
                  : t("No song history")}
              </div>
            </div>
            <div className="w-1/3 bg-white p-4 rounded-lg shadow-md mt-5">
              <h1 className="text-xl font-semibold mb-5">{t("Story")}</h1>
              <div>
                {storyHistory.length > 0
                  ? storyHistory.map((story, index) => (
                      <div
                        key={index}
                        className="mb-4 flex flex-col bg-sky-50 shadow-md items-center text-md"
                      >
                        <span className="font-bold">{story.description}</span>{" "}
                        {formatDateTime(story.date)}
                      </div>
                    ))
                  : t("No story history")}
              </div>
            </div>
          </div>
        );
      case "imageAnalysis":
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">
              {t("Image Analysis")}
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {drawHistory.length > 0
                ? drawHistory.map((draw, index) => (
                    <div
                      key={index}
                      className="mb-4 shadow-xl"
                      onClick={() => handleImageClick(draw)}
                    >
                      <img
                        src={`https://finaleprojectbe.onrender.com/uploads/${draw.name}`}
                        alt="draw"
                        className="w-full h-auto cursor-pointer"
                      />
                    </div>
                  ))
                : t("No draw history")}
            </div>
          </div>
        );
      case "appointments":
        return (
          <div>
            <h1 className="text-xl font-semibold mb-4">{t("appointments")}</h1>
            <div>
              {appointmentsM.length > 0
                ? appointmentsM.map((appointment, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <h2 className="text-lg font-bold">
                          You have an appointment with a psychiatrist on
                        </h2>
                        <p>{formatDateTime(appointment.date)}</p>
                      </div>
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded shadow"
                        onClick={() =>
                          handleAppointmentDetails(
                            formatDateTime(appointment.date)
                          )
                        }
                      >
                        {t("Enter")}
                      </button>
                    </div>
                  ))
                : t("No appointments")}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-sky-50 ">
      <div className="w-1/4 h-screen bg-white p-4 shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-2xl text-center font-bold mb-4">
            {t("Account")}
          </h1>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setSelectedTab("history")}
              className={`px-4 py-2 ${
                selectedTab === "history"
                  ? "bg-[#32BAF1] text-white"
                  : "bg-blue-100 text-[#1b81aa] hover:bg-[#32BAF1] hover:text-white"
              } rounded shadow`}
            >
              {t("History")}
            </button>
            <button
              onClick={() => setSelectedTab("imageAnalysis")}
              className={`px-4 py-2 ${
                selectedTab === "imageAnalysis"
                  ? "bg-[#32BAF1] text-white"
                  : "bg-blue-100 text-[#1b81aa] hover:bg-[#32BAF1] hover:text-white"
              } rounded shadow`}
            >
              {t("Image Analysis")}
            </button>
            <button
              onClick={() => setSelectedTab("appointments")}
              className={`px-4 py-2 ${
                selectedTab === "appointments"
                  ? "bg-[#32BAF1] text-white"
                  : "bg-blue-100 text-[#1b81aa] hover:bg-[#32BAF1] hover:text-white"
              } rounded shadow`}
            >
              {t("Appointments")}
            </button>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded shadow"
        >
          {t("Log Out")}
        </button>
      </div>
      <div className="w-3/4 p-4 bg-sky-50">
        {renderContent()}
        {selectedDraw && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative shadow-lg overflow-y-auto max-h-full">
              <button
                className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors duration-200"
                onClick={() => setSelectedDraw(null)}
              >
                &times;
              </button>
              <img
                src={`https://finaleprojectbe.onrender.com/uploads/${selectedDraw.name}`}
                alt="Selected draw"
                className="w-full h-image mb-4 rounded-lg"
              />
              <div className="p-4 bg-blue-100 rounded-lg">
                <ReactMarkdown className="prose">
                  {selectedDraw.analysis}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
