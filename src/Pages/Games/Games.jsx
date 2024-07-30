import { NavLink, Link } from "react-router-dom"
import background from "../../../public/bbg.jpg"
import tetris from "../../../public/tetrisBG.jpg"
import animals from "../../../public/animalsBG.jpg"
import drawing from "../../../public/drawingBG.jpg"
import matching from "../../../public/matchingBG.png"
import tictactoe from "../../../public/tictactoe.webp"
import puzzel from "../../../public/puzzelBG.jpg"
import { useTranslation } from "react-i18next";

const Games = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="w-screen h-screen p-5 relative"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-wrap gap-10 justify-center ">
        <div className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          <NavLink to="/tetris">
            <img className="w-[20rem] h-[15rem]" src={tetris} alt="tetris" />
            <h1 className="text-white text-center mt-5">{t("Tetris")}</h1>
          </NavLink>
        </div>
        <div className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          <NavLink to="/forming-word-game">
            <img
              className="w-[20rem] h-[15rem]"
              src={animals}
              alt="forming words"
            />
            <h1 className="text-white text-center mt-5">
              {t("Forming Words")}
            </h1>
          </NavLink>
        </div>
        <div className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          <NavLink to="/Draw">
            <img className="w-[20rem] h-[15rem]" src={drawing} alt="drawing" />
            <h1 className="text-white text-center mt-5">
              {t(" Drawing and Coloring")}
            </h1>
          </NavLink>
        </div>
        <div className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          <NavLink to="/MatchingGame">
            <img
              className="w-[20rem] h-[15rem]"
              src={matching}
              alt="matching pairs"
            />
            <h1 className="text-white text-center mt-5">
              {t("Matching Pairs")}
            </h1>
          </NavLink>
        </div>
        <div className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          <NavLink to="/tictactoe">
            <img
              className="w-[20rem] h-[15rem]"
              src={tictactoe}
              alt="matching pairs"
            />
            <h1 className="text-white text-center mt-5">{t("Tic Tac Toe")}</h1>
          </NavLink>
        </div>
        <div className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800">
          <NavLink to="/puzzel">
            <img className="w-[20rem] h-[15rem]" src={puzzel} alt="puzzel" />
            <h1 className="text-white text-center mt-5">{t("Puzzel")}</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Games