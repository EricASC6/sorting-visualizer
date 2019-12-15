class QuickSort extends SortingAlgorithm {
  async _partition(arr, location, start, end) {
    let pivot = start;
    start++;

    let partitionPromise = new Promise(async resolve => {
      while (start <= end) {
        await this._sleep();
        if (arr[start] > arr[pivot] && arr[end] < arr[pivot]) {
          SortingAlgorithm.swap(arr, start, end);
          this.sortingVisualizerObject.array = arr;
          this._visualize(arr, location);
          continue;
        }

        if (arr[start] <= arr[pivot]) start++;
        if (arr[end] >= arr[pivot]) end--;
      }

      SortingAlgorithm.swap(arr, pivot, end);
      this._visualize(arr, location);
      this.sortingVisualizerObject.array = arr;
      resolve(end);
    });

    return partitionPromise;
  }

  async sort(arr, location, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    let mid = await this._partition(arr, location, start, end);
    await this.sort(arr, location, start, mid);
    await this.sort(arr, location, mid + 1, end);
  }
}
