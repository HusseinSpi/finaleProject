// import familybg from "./pictures/familybg.mp4";
import familybg from "./pictures/underwater.mp4";
// import flower from "./pictures/flower.png"
// import flower from "./pictures/yellow.png";
import flower from "./pictures/starfish.png";
import background from "../../../public/bbg.jpg";
import { GiMeal } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineMusicNote } from "react-icons/hi";
import { RiParentLine } from "react-icons/ri";
import { LuGamepad2 } from "react-icons/lu";
import { MdOutlineBubbleChart } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../index.css";
import bubble from "../../../public/bubble.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="h-screen w-full relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={familybg}
          autoPlay
          loop
          muted
        />
        {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
      </div>
      <div className="relative flex flex-col items-center justify-center h-[15rem] p-1 custom-radial">
        <div className="flex flex-col items-center justify-center h-full w-full bg-white">
          <h1 className="text-blue-900 text-3xl md:text-5xl font-bold text-center items-center justify-center mb-4 flex">
            {i18n.language === "en" ? (
              <>
                <MdOutlineBubbleChart /> {t("Welcome")} KiddoFun{" "}
                <MdOutlineBubbleChart />
              </>
            ) : (
              <>
                <MdOutlineBubbleChart /> KiddoFun {t("Welcome")}
                <MdOutlineBubbleChart />
              </>
            )}
          </h1>
        </div>
      </div>
      <div
        className="w-screen h-screen  p-5 flex flex-col items-center justify-evenly relative"
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Circle Containers */}
        <div className="text-center">
          <h1 className="text-blue-900 text-4xl font-bold mt-4">
            {t("KidsSection")}
          </h1>
        </div>
        <div className="flex justify-center gap-8 -mt-6 relative">
          <Link to="/games">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full  flex flex-col gap-2 items-center justify-center text-violet-950 text-xl font-semibold "
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              {t("Games")} <LuGamepad2 size={40} color="#2E1065" />
              <img
                src={flower}
                alt="Rain"
                className="absolute w-20 h-20 animate-spin-around-circle"
              />
            </div>
          </Link>
          <Link to="/stories">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-violet-950 text-xl font-semibold"
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              {t("Stories")} <MdOutlineMenuBook size={40} color="#2E1065" />
              <img
                src={flower}
                alt="Rain"
                className="absolute w-20 h-20 animate-spin-around-circle"
              />
            </div>
          </Link>
          <Link to="/songs">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-violet-950 text-xl font-semibold"
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              {t("Songs")} <HiOutlineMusicNote size={40} color="#2E1065" />
              <img
                src={flower}
                alt="Rain"
                className="absolute w-20 h-20 animate-spin-around-circle"
              />
            </div>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-blue-900 text-4xl font-bold">
            {t("ParentsSection")}
          </h1>
        </div>
        <div className="flex justify-center gap-8 relative -mt-6">
          <Link to="/meals">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-violet-950 text-xl font-semibold text-center"
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              {t("MealRecipes")} <GiMeal size={40} color="#2E1065" />
              <img
                src={flower}
                alt="Rain"
                className="absolute w-20 h-20 animate-spin-around-circle"
              />
            </div>
          </Link>
          <Link to="/parenting">
            <div
              className="relative w-[12rem] h-[12rem] text-center  rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-violet-950 text-xl font-semibold"
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              {t("ParentingTips")} <RiParentLine size={40} color="#2E1065" />
              <img
                src={flower}
                alt="Rain"
                className="absolute w-20 h-20 animate-spin-around-circle"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
