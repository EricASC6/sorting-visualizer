class InsertionSort extends SortingAlgorithm {
  async sort(arr, location) {
    for (let i = 0; i < arr.length; i++) {
      let j = i;

      while (arr[j] < arr[j - 1]) {
        await this._sleep();
        SortingAlgorithm.swap(arr, j, j - 1);
        this._visualize(arr, location);
        this.sortingVisualizerObject.array = arr;
        j--;
      }
    }
  }
}
