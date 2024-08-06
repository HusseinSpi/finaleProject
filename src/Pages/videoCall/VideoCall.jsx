import ScheduleCall from "../../Components/VideoCall/ScheduleCall";
import SettingsVideoCall from "../../Components/VideoCall/SettingsVideoCall";
import { useState, useEffect } from "react";
import axios from "../../axiosConfig";
import "./VideoCall.css";

const VideoCall = () => {
  const [roomUrl, setRoomUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [scheduledTime, setScheduledTime] = useState(null);
  const [isCallTime, setIsCallTime] = useState(false);

  const STATIC_ROOM_URL =
    "https://psychologyvideocall.whereby.com/8aad5053-4a01-4649-83cf-144ca62ef6db";

  useEffect(() => {
    const fetchScheduledTime = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/video-call/scheduled-time"
        );
        setScheduledTime(new Date(response.data.scheduledTime));
      } catch (error) {
        console.error("Error fetching scheduled time:", error);
      }
    };

    fetchScheduledTime();

    const interval = setInterval(() => {
      if (scheduledTime) {
        const now = new Date();
        const formattedScheduledTime = new Date(scheduledTime).getTime();
        const isTimeToCall =
          now.getTime() >= formattedScheduledTime &&
          now.getTime() < formattedScheduledTime + 5 * 60 * 1000;
        setIsCallTime(isTimeToCall);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [scheduledTime]);

  const handleJoinCall = () => {
    setLoading(true);
    window.open(STATIC_ROOM_URL, "_blank");
    setLoading(false);
  };

  const handleSchedule = async (date) => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/video-call/generate-room-url",
        {
          date,
        }
      );
      setScheduledTime(date);
      setIsCallTime(false);
    } catch (error) {
      console.error("Error scheduling the call:", error);
    }
  };

  return (
    <div className="App-videocall">
      <div className="description2">
        <h1 className="h1-video">Psychology Counseling Video Call</h1>
        <p className="description">
          This application is designed to help parents connect with experienced
          psychologists for counseling and support. If you are facing challenges
          with your child and need professional advice, you can start a video
          call with an expert to receive guidance and assistance.
        </p>
      </div>
      <ScheduleCall onSchedule={handleSchedule} />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <SettingsVideoCall roomUrl={roomUrl} />
      )}
    </div>
  );
};

export default VideoCall;
