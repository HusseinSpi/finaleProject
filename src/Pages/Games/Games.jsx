import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecentActivity } from "../../redux/thunk/recentActivityThunks";
import { useTranslation } from "react-i18next";
import background from "../../../dist/bbg.jpg";
import tetris from "../../../dist/tetrisBG.jpg";
import animals from "../../../dist/animalsBG.jpg";
import drawing from "../../../dist/drawingBG.jpg";
import matching from "../../../dist/matchingBG.png";
import tictactoe from "../../../dist/tictactoe.webp";
import puzzel from "../../../dist/puzzelBG.jpg";
import "./carousel.css";

const Games = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user
  );
  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);

  useEffect(() => {
    const autorotate = true;
    const rotatespeed = -60;

    const updateDimensions = () => {
      let radius;
      let imgwidth;
      let imgheight;

      if (window.innerWidth <= 480) {
        radius = 180;
        imgwidth = 90;
        imgheight = 135;
      } else if (window.innerWidth <= 768) {
        radius = 240;
        imgwidth = 120;
        imgheight = 180;
      } else if (window.innerWidth <= 1200) {
        radius = 360;
        imgwidth = 180;
        imgheight = 270;
      } else {
        radius = 440;
        imgwidth = 240;
        imgheight = 370;
      }

      const ospin = spinContainerRef.current;
      const ground = document.getElementById("carousel-ground");

      ospin.style.width = `${imgwidth}px`;
      ospin.style.height = `${imgheight}px`;

      ground.style.width = `${radius * 3}px`;
      ground.style.height = `${imgheight * 3}px`;

      const odrag = dragContainerRef.current;
      const aimg = ospin.getElementsByTagName("img");
      const ele = [...aimg];

      function init(delaytime = 0) {
        for (let i = 0; i < ele.length; ++i) {
          ele[i].style.transform = `rotateY(${
            i * (360 / ele.length)
          }deg) translateZ(${radius}px)`;
          ele[i].style.transition = "transform 3s";
          ele[i].style.transitionDelay =
            delaytime || `${(ele.length - i) / 10}s`;
        }
      }

      function applytransform(obj) {
        if (ty > 180) ty = 180;
        if (ty < 0) ty = 0;
        obj.style.transform = `rotateX(${-ty}deg) rotateY(${tx}deg)`;
      }

      function playspin(yes) {
        ospin.style.animationPlayState = yes ? "running" : "paused";
      }

      let sx,
        sy,
        nx,
        ny,
        desx = 0,
        desy = 0,
        tx = 0,
        ty = 10;
      if (autorotate) {
        const animationname = rotatespeed > 0 ? "spin" : "spinrevert";
        ospin.style.animation = `${animationname} ${Math.abs(
          rotatespeed
        )}s infinite linear`;
      }

      document.onpointerdown = function (e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        sx = e.clientX;
        sy = e.clientY;
        this.onpointermove = function (e) {
          e = e || window.event;
          nx = e.clientX;
          ny = e.clientY;
          desx = nx - sx;
          desy = ny - sy;
          tx += desx * 0.1;
          ty += desy * 0.1;
          applytransform(odrag);
          sx = nx;
          sy = ny;
        };
        this.onpointerup = function () {
          odrag.timer = setInterval(function () {
            desx *= 0.95;
            desy *= 0.95;
            tx += desx * 0.1;
            ty += desy * 0.1;
            applytransform(odrag);
            playspin(false);
            if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
              clearInterval(odrag.timer);
              playspin(true);
            }
          }, 17);
          this.onpointermove = this.onpointerup = null;
        };
        return false;
      };

      document.onmousewheel = function (e) {
        e = e || window.event;
        var d = e.wheelDelta / 2 || -e.detail;
        radius += d;
        init(1);
      };

      init();
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handlePlayGame = (gameName) => {
    if (currentUser) {
      dispatch(
        createRecentActivity({
          type: "game",
          description: gameName,
          user: currentUser._id,
        })
      );
    }
  };

  const games = [
    { link: "/tetris", imgSrc: tetris, alt: "tetris", label: t("Tetris") },
    {
      link: "/forming-word-game",
      imgSrc: animals,
      alt: "forming words",
      label: t("Forming Words"),
    },
    {
      link: "/Draw",
      imgSrc: drawing,
      alt: "drawing",
      label: t("Drawing and Coloring"),
    },
    {
      link: "/MatchingGame",
      imgSrc: matching,
      alt: "matching pairs",
      label: t("Matching Pairs"),
    },
    {
      link: "/tic-tac-toe",
      imgSrc: tictactoe,
      alt: "tic tac toe",
      label: t("Tic Tac Toe"),
    },
    { link: "/puzzle", imgSrc: puzzel, alt: "puzzle", label: t("Puzzle") },
  ];

  return (
    <div
      className="carousel-container"
      style={{ background: `url(${background})` }}
    >
      <div id="dragcontainer" ref={dragContainerRef}>
        <div id="spincontainer" ref={spinContainerRef}>
          {games.map((game, index) => (
            <a
              className="carousel-a"
              href={game.link}
              key={index}
              onClick={() => handlePlayGame(game.label)}
            >
              <img
                src={game.imgSrc}
                alt={game.alt}
                className="carousel-image"
              />
            </a>
          ))}
          <p className="carousel-text">Please choose the Game</p>
        </div>
        <div id="carousel-ground" className="carousel-ground"></div>
      </div>
    </div>
  );
};

export default Games;
