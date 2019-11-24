// constant vars for bar dimensions
NUM_BARS = 200;
BAR_WIDTH = 2;
MAX_BAR_HEIGHT = 500;
MIN_BAR_HEIGHT = 5;

// generates a number between min and max
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// func that generates a sorted array
const generateArray = (size, min, max) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    let num = randomIntFromInterval(min, max);
    arr.push(num);
  }

  return arr;
};

// creates a sorted array and places it on the .array div
const newArrayBtn = document.querySelector("#new-array");
const visualizeBars = (arr, width) => {
  let array = document.querySelector("#array");
  if (array.innerHTML === "") {
    arr.forEach(height => {
      let bar = document.createElement("div");
      bar.className = "bar";
      array.appendChild(bar);
      bar.style.height = `${height}px`;
      bar.style.width = `${width}px`;
    });
  } else {
    const bars = array.querySelectorAll(".bar");
    arr.forEach((height, i) => {
      bars[i].style.height = `${height}px`;
    });
  }
};

newArrayBtn.addEventListener("click", () => {
  let sortedArray = generateArray(NUM_BARS, MIN_BAR_HEIGHT, MAX_BAR_HEIGHT);
  console.log(sortedArray);
  visualizeBars(sortedArray, BAR_WIDTH);
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
      visualizeBars(arr, BAR_WIDTH);
      requestAnimationFrame(shuffleHelper);
    } else {
      cancelAnimationFrame(shuffleId);
    }
  }
}

const shuffleBtn = document.querySelector("#shuffle");
shuffleBtn.addEventListener("click", () => {
  shuffle();
});

const sortingFinisher = () => {
  let i = 0;
  let bars = document.querySelectorAll(".bar");
  console.log(bars);
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  console.log(arr);

  let finisherId = requestAnimationFrame(sortingFinisherHelper);
  function sortingFinisherHelper() {
    if (i < arr.length) {
      bars[i].style.backgroundColor = "green";
      i++;
      requestAnimationFrame(sortingFinisherHelper);
    } else {
      cancelAnimationFrame(finisherId);
    }
  }
};

// RESEARCH requestAnimationFrame !!!!!
