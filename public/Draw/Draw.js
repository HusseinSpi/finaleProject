const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const uploadBtn = document.getElementById("jsUpload");
const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;
const INITIAL_COLOR = "#2c2c2c";

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
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
function onMouseDown(event) {
  painting = true;
}

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
// function handleModeClick() {
//   if (filling === true) {
//     filling = false;
//     mode.innerText = "Draw";
//   } else {
//     filling = true;
//     mode.innerText = "Filling";
//   }
// }
function handleSaveClick() {
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image;
  link.download = "Paint";
  link.click();
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
  thresholdInput = document.createElement("input");
  thresholdInput.type = "range";
  thresholdInput.min = "5";
  thresholdInput.max = "40";
  thresholdInput.value = "10";
  thresholdInput.id = "thresholdRange";
  thresholdInput.className = "draw-threshold draw-Image-threshold";
  document.body.appendChild(thresholdInput);

  doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.id = "doneButton";
  doneButton.className = "draw-threshold draw-Button-threshold";
  document.body.appendChild(doneButton);

  thresholdInput.addEventListener("input", updateThreshold);
  doneButton.addEventListener("click", removeControls);

  window.addEventListener("popstate", handleRouteChange);
  window.addEventListener("pushstate", handleRouteChange);
}

function updateThreshold() {
  if (uploadedImage) {
    const threshold = parseInt(thresholdInput.value, 10);
    processImage(uploadedImage, threshold);
  }
}

function removeControls() {
  if (thresholdInput) {
    thresholdInput.remove();
    thresholdInput = null;
  }
  if (doneButton) {
    doneButton.remove();
    doneButton = null;
  }
  window.removeEventListener("popstate", handleRouteChange);
  window.removeEventListener("pushstate", handleRouteChange);
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

  const edgeImageData = new ImageData(edgeData, CANVAS_WIDTH, CANVAS_HEIGHT);
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
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function handleRouteChange() {
  if (window.location.pathname !== "/Draw") {
    removeControls();
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
function handleRangeChange(event) {
  const rangeValue = event.target.value;
  ctx.lineWidth = rangeValue;
}
if (range) {
  range.addEventListener("input", handleRangeChange);
}

// if (mode) {
//   mode.addEventListener("click", handleModeClick);
// }
if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
if (uploadBtn) {
  uploadBtn.addEventListener("change", handleUploadImage);
}
