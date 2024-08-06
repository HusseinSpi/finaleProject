import underwater from "./pictures/underwater.mp4";
// import underwater from "../../../public/underwater1.mp4";
import starfish from "./pictures/starfish.png";
import background from "../../../public/bbg.jpg";
import { GiMeal, GiCoral, GiSeaStar } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineMusicNote } from "react-icons/hi";
import { RiParentLine } from "react-icons/ri";
import { LuGamepad2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import "../../index.css";
import bubble from "../../../public/bubble.png";
import { useTranslation } from "react-i18next";
import seashell from "../../../public/seashell2.png";
import coral from "../../../public/coral.png";
import seahorse from "../../../public/seahorse.png";
import crab from "../../../public/crab.png";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={underwater}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-[5.5rem] flex flex-col  items-center left-0 w-full p-4 text-xl font-extrabold leading-8 tracking-wider text-center">
          <h1 className=" text-4xl md:text-6xl font-bold flex mb-4 text-white">
            {i18n.language === "en" ? (
              <>
                <GiCoral /> {t("Welcome")} KiddoFun <GiCoral />
              </>
            ) : (
              <>
                <GiCoral /> KiddoFun {t("Welcome")}
                <GiCoral />
              </>
            )}
          </h1>
          <p className="text-white w-2/3 text-base sm:text-xl md:text-2xl lg:text-2xl font-bold leading-tight mb-4">
            {t("homeIntroP1")}
          </p>
          <p className="text-white w-2/3 text-base sm:text-xl md:text-2xl lg:text-2xl font-bold leading-tight">
            {t("homeIntroP2")}
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center h-[12rem] p-1 custom-radial">
        <div className="flex flex-col items-center justify-center h-full w-full bg-white text-blue-900 font-bold">
          <p className="text-md md:text-xl lg:text-xl text-center">
            {t("quote")}
          </p>
          <span>— {t("einstein")} </span>
        </div>
      </div>

      <div
        className="w-screen h-screen p-5 flex flex-col items-center justify-evenly relative "
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="text-center">
          <h1 className="text-blue-900 text-4xl flex font-bold ">
            <GiSeaStar /> {t("KidsSection")} <GiSeaStar />
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8 -mt-6 relative">
          <Link to="/games">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full flex flex-col gap-2 items-center justify-center text-blue-900 text-xl font-semibold"
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
                src={starfish}
                alt="Starfish"
                className="absolute w-16 h-16 animate-spin-around-circle"
              />
            </div>
          </Link>
          <Link to="/stories">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-blue-900 text-xl font-semibold"
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
                src={seashell}
                alt="Seashell"
                className="absolute w-16 h-16 animate-spin-around-circle"
              />
            </div>
          </Link>
          <Link to="/songs">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-blue-900 text-xl font-semibold"
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
                src={coral}
                alt="Coral"
                className="absolute w-16 h-20 animate-spin-around-circle"
              />
            </div>
          </Link>
        </div>

        <div className="text-center ">
          <h1 className="text-blue-900 text-4xl flex font-bold">
            <GiSeaStar /> {t("ParentsSection")} <GiSeaStar />
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-8 relative -mt-6">
          <Link to="/culinary-kids">
            <div
              className="relative w-[12rem] h-[12rem] rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-blue-900 text-xl font-semibold text-center"
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
                src={seahorse}
                alt="Seahorse"
                className="absolute w-14 h-16 animate-spin-around-circle"
              />
            </div>
          </Link>
          <Link to="/parenting">
            <div
              className="relative w-[12rem] h-[12rem] text-center rounded-full bg-[#B5A5D0] flex flex-col gap-2 items-center justify-center text-blue-900 text-xl font-semibold"
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
                src={crab}
                alt="Crab"
                className="absolute w-16 h-16 animate-spin-around-circle"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
