const SettingsVideoCall = ({ roomUrl }) => {
  return (
    <div className="video-call-container">
      <iframe
        src={roomUrl}
        width="100%"
        height="600px"
        allow="camera; microphone; fullscreen"
        frameBorder="0"
        title="Video Call"
      ></iframe>
    </div>
  );
};

export default SettingsVideoCall;
