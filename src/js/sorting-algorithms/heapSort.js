const heapSortBtn = document.querySelector("#heap-sort");

// const swap = async (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

const siftDownHelper = async function(data, parent, i, end = data.length - 1) {
  let size = end;
  if (2 * i + 1 > size) return Promise.resolve(i);

  let siftDownPromise = new Promise((resolve, reject) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largestChild = right <= size && data[right] > data[left] ? right : left;

    if (data[largestChild] > parent) {
      swap(data, i, largestChild);
      i = largestChild;
      resolve(i);
    } else {
      resolve(i);
    }
  });

  return siftDownPromise;
};

const siftDown = async function(data, parent, i, end = data.length - 1) {
  let parentIndexAfterSifting = await siftDownHelper(data, parent, i, end);
  //   console.log(`Index: ${i}`);
  //   console.log(parentIndexAfterSifting);

  if (parentIndexAfterSifting === i) {
    // console.log(true);
    return;
  }
  await siftDown(data, parent, parentIndexAfterSifting, end);
};

const heapify = async function(data, end = data.length - 1) {
  let size = end;
  let parent = Math.floor((size - 1) / 2);
  for (let i = parent; i >= 0; i--) {
    // console.log(`parent: ${data[i]}`);
    await siftDown(data, data[i], i, end);
  }

  console.log(data);
  return data;
};

const heapSort = async arr => {
  let size = arr.length;
  let end = size - 1;

  let sorted = [];
  for (let i = end; i >= 0; i--) {
    arr = await heapify(arr, end);
    console.log(arr[0]);
    sorted.push(arr[0]);
    arr.push(...sorted);
    console.log(sorted);
    console.log(arr);
    visualizeBars(arr, BAR_WIDTH);
  }

  console.log(arr);
};

// let arr = [];
// for (let i = 0; i < 100; i++) arr.push(i);

// heapSort(arr);

heapSortBtn.addEventListener("click", () => {
  let bars = document.querySelectorAll(".bar");
  let arr = Array.from(bars).map(elem => elem.clientHeight);
  heapSort(arr);
});
