class MergeSort extends SortingAlgorithm {
  async _merge(arr, start, middle, end, location) {
    let mergedArr = [];
    let a = arr.slice(start, middle + 1);
    let b = arr.slice(middle + 1, end + 1);

    let mergePromise = new Promise(async resolve => {
      for (let i = start; i < middle + 1; i++) {
        await this._sleep();
        Comparison.compare(
          i,
          i,
          this.comparisonColor1,
          this.comparisonColor1,
          location
        );
      }

      for (let i = middle + 1; i < end + 1; i++) {
        await this._sleep();
        Comparison.compare(
          i,
          i,
          this.comparisonColor2,
          this.comparisonColor2,
          location
        );
      }

      while (a.length > 0 && b.length > 0) {
        await this._sleep();
        let small = a[0] < b[0] ? a.shift() : b.shift();
        mergedArr.push(small);
        arr.splice(start, mergedArr.length, ...mergedArr);
        this._visualize(arr, location);
      }

      arr.splice(start, end - start + 1, ...[...mergedArr, ...a, ...b]);
      this._visualize(arr, location);
      this.sortingVisualizerObject.array = arr;
      resolve();
    });

    return mergePromise;
  }

  async sort(arr, location, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    let mid = Math.floor((start + end) / 2);
    await this.sort(arr, location, start, mid);
    await this.sort(arr, location, mid + 1, end);
    await this._merge(arr, start, mid, end, location);
  }
}
