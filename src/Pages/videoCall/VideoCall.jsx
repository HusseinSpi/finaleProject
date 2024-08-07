import React, { useEffect } from "react";
import ScheduleCall from "../../Components/VideoCall/ScheduleCall";
import SettingsVideoCall from "../../Components/VideoCall/SettingsVideoCall";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import { appointmentBooking } from "../../redux/thunk/appointmentThunk";
import "./VideoCall.css";

const VideoCall = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleSchedule = (date) => {
    dispatch(appointmentBooking({ date, user: currentUser }));
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
      <SettingsVideoCall />
    </div>
  );
};

export default VideoCall;
