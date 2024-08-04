import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import "./Draw.css";

const Draw = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user
  );
  const canvasRef = useRef(null);
  const colorsRef = useRef(null);
  const rangeRef = useRef(null);
  const saveBtnRef = useRef(null);
  const uploadBtnRef = useRef(null);
  const [showThresholdControls, setShowThresholdControls] = useState(false);
  const [chooseFile, setChooseFile] = useState(false);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colors = colorsRef.current.getElementsByClassName("jsColor");
    const range = rangeRef.current;
    const saveBtn = saveBtnRef.current;
    const uploadBtn = uploadBtnRef.current;

    const CANVAS_WIDTH = 710;
    const CANVAS_HEIGHT = 610;
    const INITIAL_COLOR = "#2c2c2c";

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = INITIAL_COLOR;

    let painting = false;
    let filling = false;
    let uploadedImage = null;
    let thresholdInput = null;
    let doneButton = null;
    ctx.fillStyle = INITIAL_COLOR;

    function stopPainting() {
      painting = false;
    }

    function startPainting() {
      painting = true;
    }

    function onMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    function onMouseDown() {
      painting = true;
    }

    function changeColor(event) {
      const color = event.target.style.backgroundColor;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;

      Array.from(colors).forEach((colorElement) =>
        colorElement.classList.remove("active")
      );
      event.target.classList.add("active");
    }

    function handleCanvasClick() {
      if (filling && uploadedImage) {
        ctx.drawImage(uploadedImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      }
    }

    function handeCM(event) {
      event.preventDefault();
    }

    function createControls() {
      const controlsDiv = document.querySelector(".thresholdContainer");

      const thresholdText = document.createElement("p");
      thresholdText.innerText = "Please choose the Threshold";
      thresholdText.className = "draw-threshold-text";
      controlsDiv.appendChild(thresholdText);

      thresholdInput = document.createElement("input");
      thresholdInput.type = "range";
      thresholdInput.min = "5";
      thresholdInput.max = "40";
      thresholdInput.value = "10";
      thresholdInput.id = "thresholdRange";
      thresholdInput.className = "draw-threshold draw-Image-threshold";
      controlsDiv.appendChild(thresholdInput);

      doneButton = document.createElement("button");
      doneButton.innerText = "Done";
      doneButton.id = "doneButton";
      doneButton.className = "draw-threshold draw-Button-threshold";
      controlsDiv.appendChild(doneButton);

      thresholdInput.addEventListener("input", updateThreshold);
      doneButton.addEventListener("click", handleDoneClick);

      window.addEventListener("popstate", removeControls);
      window.addEventListener("pushstate", removeControls);
    }

    function updateThreshold() {
      if (uploadedImage) {
        const threshold = parseInt(thresholdInput.value, 10);
        processImage(uploadedImage, threshold);
      }
    }

    function removeControls() {
      const thresholdText = document.querySelector(".draw-threshold-text");
      if (thresholdText) {
        thresholdText.remove();
      }
      if (thresholdInput) {
        thresholdInput.remove();
        thresholdInput = null;
      }
      if (doneButton) {
        doneButton.remove();
        doneButton = null;
      }
      window.removeEventListener("popstate", removeControls);
      window.removeEventListener("pushstate", removeControls);
    }

    function processImage(img, threshold) {
      ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      const imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }
      ctx.putImageData(imageData, 0, 0);

      const edgeData = new Uint8ClampedArray(data.length);
      for (let i = 0; i < data.length; i += 4) {
        edgeData[i] = 255;
        edgeData[i + 1] = 255;
        edgeData[i + 2] = 255;
        edgeData[i + 3] = 255;
      }

      for (let y = 1; y < CANVAS_HEIGHT - 1; y++) {
        for (let x = 1; x < CANVAS_WIDTH - 1; x++) {
          const i = (y * CANVAS_WIDTH + x) * 4;
          const left = (y * CANVAS_WIDTH + (x - 1)) * 4;
          const right = (y * CANVAS_WIDTH + (x + 1)) * 4;
          const up = ((y - 1) * CANVAS_WIDTH + x) * 4;
          const down = ((y + 1) * CANVAS_WIDTH + x) * 4;

          const gx = data[right] - data[left];
          const gy = data[down] - data[up];
          const g = Math.sqrt(gx * gx + gy * gy);

          if (g > threshold) {
            edgeData[i] = 0;
            edgeData[i + 1] = 0;
            edgeData[i + 2] = 0;
          }
        }
      }

      const edgeImageData = new ImageData(
        edgeData,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      ctx.putImageData(edgeImageData, 0, 0);

      ctx.strokeStyle = "black";
      ctx.fillStyle = "black";
    }

    function handleUploadImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const img = new Image();
          img.onload = function () {
            uploadedImage = img;
            createControls();
            processImage(img, 10);
            setShowThresholdControls(true);
            setChooseFile(false);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    }

    async function handleSaveClick() {
      const image = canvas.toDataURL("image/jpeg");
      const blob = dataURLToBlob(image);
      const formData = new FormData();
      console.log(currentUser._id);
      formData.append("image", blob, "canvasImage.jpg");
      formData.append("user", currentUser._id);

      try {
        const response = await fetch(
          "https://finaleprojectbe.onrender.com/api/v1/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();
        if (response.ok) {
          console.log("Image uploaded successfully:", result.filePath);
        } else {
          console.error("Failed to upload image:", result.message);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      const link = document.createElement("a");
      link.href = image;
      link.download = "Paint";
      link.click();
    }

    function dataURLToBlob(dataURL) {
      const parts = dataURL.split(";base64,");
      const byteString = atob(parts[1]);
      const mimeString = parts[0].split(":")[1];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    }

    function handleDoneClick() {
      removeControls();
      setShowThresholdControls(false);
      setChooseFile(true);
    }

    function handleRouteChange() {
      if (window.location.pathname !== "/Draw") {
        removeControls();
        setShowThresholdControls(false);
      }
    }

    if (canvas) {
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mousedown", onMouseDown);
      canvas.addEventListener("mouseup", stopPainting);
      canvas.addEventListener("mouseleave", stopPainting);
      canvas.addEventListener("click", handleCanvasClick);
      canvas.addEventListener("contextmenu", handeCM);
    }

    Array.from(colors).forEach((color) =>
      color.addEventListener("click", changeColor)
    );

    if (range) {
      range.addEventListener("input", (event) => {
        ctx.lineWidth = event.target.value;
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", handleSaveClick);
    }

    if (uploadBtn) {
      uploadBtn.addEventListener("change", handleUploadImage);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mousedown", onMouseDown);
        canvas.removeEventListener("mouseup", stopPainting);
        canvas.removeEventListener("mouseleave", stopPainting);
        canvas.removeEventListener("click", handleCanvasClick);
        canvas.removeEventListener("contextmenu", handeCM);
      }

      Array.from(colors).forEach((color) =>
        color.removeEventListener("click", changeColor)
      );

      if (range) {
        range.removeEventListener("input", (event) => {
          ctx.lineWidth = event.target.value;
        });
      }

      if (saveBtn) {
        saveBtn.removeEventListener("click", handleSaveClick);
      }

      if (uploadBtn) {
        uploadBtn.removeEventListener("change", handleUploadImage);
      }

      window.removeEventListener("popstate", removeControls);
      window.removeEventListener("pushstate", removeControls);

      removeControls();
    };
  }, [dispatch, currentUser]);

  return (
    <div className="draw-body">
      <canvas id="jsCanvas" ref={canvasRef} className="drawcanvas"></canvas>
      <div className="controls">
        <h1>Choose the width </h1>
        <div className="controls__range" ref={rangeRef}>
          <input
            type="range"
            id="jsRange"
            min="0.1"
            max="20.0"
            defaultValue="2.5"
            step="0.1"
          />
        </div>
        {!showThresholdControls && (
          <div className="controls__btn">
            <h1>Please Choose the picture</h1>
            <button id="jsSave" ref={saveBtnRef}>
              Save
            </button>
            <input
              type="file"
              id="jsUpload"
              ref={uploadBtnRef}
              accept="image/*"
            />
          </div>
        )}
        <div className="controls__colors" id="jsColors" ref={colorsRef}>
          <div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "black" }}
            ></div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "orange" }}
            ></div>
          </div>
          <div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "red" }}
            ></div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "green" }}
            ></div>
          </div>
          <div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "rgb(79, 79, 177)" }}
            ></div>

            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "blue" }}
            ></div>
            <div
              className="controls__colors jsColor"
              style={{ backgroundColor: "rgb(187, 76, 187)" }}
            ></div>
          </div>
        </div>
        <div className="thresholdContainer"></div>
      </div>
    </div>
  );
};

export default Draw;
