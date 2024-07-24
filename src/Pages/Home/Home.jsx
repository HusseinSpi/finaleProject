import videoBg from "./pictures/videoBg.mp4";
import tunnel from "./pictures/tunnel.png";
import game from "./pictures/game.png";
import stories from "./pictures/stories.jpeg";
import song from "./pictures/song.jpeg";
import parents from "./pictures/parents.png";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex items-center justify-center h-full w-full"></div>
      </div>
      <div className="bg-yellow-900 relative">
        <img className="m-auto p-16" src={tunnel} alt="tunnel" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center">
          <ul className="flex flex-wrap justify-center items-center">
            <li className="circle">
              <img className="circle-img" src={game} alt="game" />
            </li>
            <li className="circle">
              <img className="circle-img" src={stories} alt="stories" />
            </li>
            <li className="circle">
              <img className="circle-img" src={song} alt="song" />
            </li>
            <li className="circle">
              <img className="circle-img" src={parents} alt="parents" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
