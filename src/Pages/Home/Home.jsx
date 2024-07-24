import videoBg from "./pictures/videoBg.mp4";
import game from "./pictures/game.png";
import stories from "./pictures/stories.jpeg";
import song from "./pictures/song.jpeg";
import parents from "./pictures/parents.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex items-center justify-center h-full w-full"></div>
      </div>
      <div className="bg-yellow-900 py-10">
        <div className="flex flex-wrap justify-center items-center gap-20">
          <ul className="flex flex-wrap justify-center items-center gap-20">
            <li className="circle">
              <Link to="/games">
                <img className="circle-img" src={game} alt="game" />
              </Link>
            </li>
            <li className="circle">
              <Link to="/stories">
                <img className="circle-img" src={stories} alt="stories" />
              </Link>
            </li>
            <li className="circle">
              <Link to="/songs">
                <img className="circle-img" src={song} alt="song" />
              </Link>
            </li>
            <li className="circle">
              <Link to="/parents">
                <img className="circle-img" src={parents} alt="parents" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
