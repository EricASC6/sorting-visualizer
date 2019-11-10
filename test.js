// div where the bars will be sorted and placed in
const array = document.querySelector("#array");

// constant vars for bar dimensions
NUM_BARS = 300;
BAR_WIDTH = 2;
MIN_BAR_HEIGHT = 5;

// func that generates a sorted array
const generateArray = (size, start, increment) => {
  let arr = [];
  let height = start;
  for (let i = 0; i < size; i++) {
    arr.push(height);
    height += increment;
  }

  return arr;
};

// creates a sorted array and places it on the .array div
const newArrayBtn = document.querySelector("#new-array");
const visualizeBars = (arr, canvas, width) => {
  canvas.innerHTML = "";
  arr.forEach(height => {
    let bar = document.createElement("div");
    bar.className = "bar";
    canvas.appendChild(bar);
    bar.style.height = `${height}px`;
    bar.style.width = `${width}px`;
  });
};

newArrayBtn.addEventListener("click", () => {
  let sortedArray = generateArray(NUM_BARS, MIN_BAR_HEIGHT, BAR_WIDTH);
  console.log(sortedArray);
  visualizeBars(sortedArray, array, BAR_WIDTH);
});

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// func that shuffles an array (Fisher-Yates Shuffle)

function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function shuffle() {
  let arr = Array.from(document.querySelectorAll(".bar")).map(
    elem => elem.clientHeight
  );

  var currentIndex = arr.length,
    randomIndex;

  let shuffleId = requestAnimationFrame(shuffleHelper);

  // While there remain elements to shuffle...
  function shuffleHelper() {
    if (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      swap(arr, currentIndex, randomIndex);
      visualizeBars(arr, array, BAR_WIDTH);
      requestAnimationFrame(shuffleHelper);
      console.log(currentIndex);
    } else {
      cancelAnimationFrame(shuffleId);
    }
  }

  return array;
}

const shuffleBtn = document.querySelector("#shuffle");
shuffleBtn.addEventListener("click", () => {
  shuffle();
});

// RESEARCH requestAnimationFrame !!!!!
