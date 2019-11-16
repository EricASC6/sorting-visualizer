// constant vars for bar dimensions
NUM_BARS = 100;
BAR_WIDTH = 2;
MIN_BAR_HEIGHT = 25;

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
  let sortedArray = generateArray(NUM_BARS, MIN_BAR_HEIGHT, BAR_WIDTH);
  let b = generateArray(NUM_BARS, 30, BAR_WIDTH);
  console.log(sortedArray);
  visualizeBars([...sortedArray, ...b], BAR_WIDTH);
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
