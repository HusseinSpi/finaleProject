let currTile;
let turns = 0;
let rows, columns, tileWidth, tileHeight;
let boardTiles = [];
let correctOrder = [];

export function initGame(board, pieces, setTurns) {
  turns = 0;
  setTurns(turns);

  rows = parseInt(document.getElementById("gridSize").value);
  columns = rows; // For a square grid
  board.innerHTML = "";
  pieces.innerHTML = "";
  boardTiles = [];
  correctOrder = [];

  board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  // Create the empty whiteboard grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.classList.add("puzzle-empty-tile");
      tile.dataset.position = `${r}-${c}`;
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("drop", dragDrop(setTurns));
      board.appendChild(tile);
      boardTiles.push(tile);
    }
  }

  const uploadedFile = document.getElementById("upload").files[0];
  if (uploadedFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        tileWidth = img.width / columns;
        tileHeight = img.height / rows;
        createPuzzle(img, pieces);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(uploadedFile);
  } else {
    alert("Please upload an image to start the game.");
  }
}

function createPuzzle(img, pieces) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);

  // Create puzzle pieces
  let puzzlePieces = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let pieceCanvas = document.createElement("canvas");
      pieceCanvas.width = tileWidth;
      pieceCanvas.height = tileHeight;
      let pieceCtx = pieceCanvas.getContext("2d");
      pieceCtx.drawImage(
        img,
        c * tileWidth,
        r * tileHeight,
        tileWidth,
        tileHeight,
        0,
        0,
        tileWidth,
        tileHeight
      );

      let tile = document.createElement("img");
      tile.src = pieceCanvas.toDataURL();
      tile.width = tileWidth;
      tile.height = tileHeight;
      tile.dataset.position = `${r}-${c}`;

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop());
      tile.addEventListener("dragend", dragEnd);
      puzzlePieces.push(tile);
      correctOrder.push(tile.src); // Save the correct order of pieces
    }
  }

  // Shuffle pieces and add to the pieces container
  puzzlePieces = shuffleArray(puzzlePieces);
  puzzlePieces.forEach((tile) => pieces.appendChild(tile));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function dragStart() {
  currTile = this; // this refers to the image that was clicked on for dragging
}

export function dragOver(e) {
  e.preventDefault();
}

export function dragEnter(e) {
  e.preventDefault();
}

export function dragLeave() {}

export function dragDrop(setTurns) {
  return function (e) {
    e.preventDefault();
    if (currTile && currTile.src) {
      const currTileParent = currTile.parentElement;
      const targetTile = this;

      if (
        targetTile.classList.contains("puzzle-empty-tile") ||
        targetTile.tagName === "IMG"
      ) {
        // Create a new tile if dropping into an empty spot
        const newTile = document.createElement("img");
        newTile.src = currTile.src;
        newTile.style.width = "100%";
        newTile.style.height = "100%";
        newTile.dataset.position = currTile.dataset.position;
        newTile.addEventListener("dragstart", dragStart);
        newTile.addEventListener("dragover", dragOver);
        newTile.addEventListener("dragenter", dragEnter);
        newTile.addEventListener("dragleave", dragLeave);
        newTile.addEventListener("drop", dragDrop(setTurns));
        newTile.addEventListener("dragend", dragEnd);

        if (targetTile.classList.contains("puzzle-empty-tile")) {
          targetTile.replaceWith(newTile);
        } else {
          // Move the target tile back to the puzzle area
          const oldTile = document.createElement("img");
          oldTile.src = targetTile.src;
          oldTile.style.width = "100%";
          oldTile.style.height = "100%";
          oldTile.dataset.position = targetTile.dataset.position;
          oldTile.addEventListener("dragstart", dragStart);
          oldTile.addEventListener("dragover", dragOver);
          oldTile.addEventListener("dragenter", dragEnter);
          oldTile.addEventListener("dragleave", dragLeave);
          oldTile.addEventListener("drop", dragDrop(setTurns));
          oldTile.addEventListener("dragend", dragEnd);
          document.getElementById("pieces").appendChild(oldTile);

          // Replace the target tile with the new tile
          targetTile.replaceWith(newTile);
        }

        // Replace the original spot of currTile with an empty tile
        if (currTileParent.id === "board") {
          const emptyTile = document.createElement("div");
          emptyTile.classList.add("puzzle-empty-tile");
          emptyTile.dataset.position = currTileParent.dataset.position;
          emptyTile.addEventListener("dragover", dragOver);
          emptyTile.addEventListener("drop", dragDrop(setTurns));
          currTileParent.replaceChild(emptyTile, currTile);
        } else {
          currTile.remove();
        }

        turns += 1;
        setTurns(turns);
        checkWin();
      }
    }
    currTile = null;
  };
}

export function dragEnd() {
  // Do nothing
}

function checkWin() {
  let currentOrder = [];
  for (let tile of boardTiles) {
    const img = tile.querySelector("img");
    if (img) {
      currentOrder.push(img.src);
    } else {
      return;
    }
  }

  if (currentOrder.join() === correctOrder.join()) {
    showModal();
  }
}

function showModal() {
  document.getElementById("modal").style.display = "block";
}

export function refreshPage() {
  location.reload();
}
