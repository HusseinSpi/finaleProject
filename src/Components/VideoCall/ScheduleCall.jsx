import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ScheduleCall.css";
import { MdPsychology } from "react-icons/md";

const ScheduleCall = ({ onSchedule }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [error, setError] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledTime, setScheduledTime] = useState("");

  const handleSchedule = () => {
    const now = new Date();

    setError("");

    if (startDate <= now) {
      setError("The selected date and time must be in the future.");
      return;
    }

    onSchedule(startDate);

    setScheduledTime(startDate.toLocaleString());
    setIsScheduled(true);
  };

  const isValidDay = (date) => {
    const day = date.getDay();
    return day >= 1 && day <= 4;
  };

  const isValidTime = (date) => {
    const hours = date.getHours();
    return hours >= 7 && hours <= 18;
  };

  const handleDateChange = (date) => {
    if (date) {
      if (isValidDay(date) && isValidTime(date)) {
        setStartDate(date);
        setError("");
      } else {
        setError(
          "Selected date and time must be between Monday and Thursday, and within 7 AM to 6 PM."
        );
      }
    }
  };

  const getMinTime = () => {
    const minTime = new Date();
    minTime.setHours(7, 0, 0, 0);
    return minTime;
  };

  const getMaxTime = () => {
    const maxTime = new Date();
    maxTime.setHours(18, 0, 0, 0);
    return maxTime;
  };

  return (
    <div className="schedule-call-container">
      <MdPsychology className="psycoicon" />
      <h2>Schedule a Video Call</h2>
      <p className="description1">
        Select a suitable date and time for your video call.
      </p>
      <div className="datepicker-container">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
          timeIntervals={60}
          minDate={new Date()}
          filterDate={isValidDay}
          minTime={getMinTime()}
          maxTime={getMaxTime()}
          placeholderText="Select a date and time"
        />
      </div>
      <button onClick={handleSchedule}>
        {isScheduled ? "Scheduled" : "Schedule Call"}
      </button>
      {error && <p className="error-message">{error}</p>}
      {isScheduled && (
        <p className="scheduled-time">Scheduled Call Time: {scheduledTime}</p>
      )}
    </div>
  );
};

export default ScheduleCall;
