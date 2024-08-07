import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getAllAppointments } from "../../redux/thunk/appointmentThunk";
import { toast } from "react-toastify";

const VideoCallSpecialist = () => {
  const dispatch = useDispatch();

  const appointments = useSelector((state) => state.appointments.data || []);

  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const formatDateTime = (dateTime) => {
    return moment(dateTime).format("YYYY-MM-DD HH:mm:ss");
  };

  const STATIC_ROOM_URL =
    "https://psychologyvideocall.whereby.com/8aad5053-4a01-4649-83cf-144ca62ef6db";

  const handleAppointmentDetails = (date) => {
    const d = new Date();
    const appointmentDate = new Date(date);

    if (d > appointmentDate) {
      window.open(STATIC_ROOM_URL, "_blank");
    } else {
      toast.error("It's not time yet");
    }
  };

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Video Call Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">
              {appointment.clientName}
            </h2>
            <p className="mb-2">
              <strong>Date:</strong> {formatDateTime(appointment.date)}
            </p>
            <button
              onClick={() => handleAppointmentDetails(appointment.date)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Join Video Call
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCallSpecialist;
