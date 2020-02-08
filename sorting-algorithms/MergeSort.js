class MergeSort extends SortingAlgorithm {
  async _compare(start, middle, end, location) {
    let i = start;
    let j = middle + 1;
    while (i <= middle || j <= end) {
      if (i === middle && j === end) break;
      await this._sleep();
      Comparison.compare(
        i,
        j,
        this.comparisonColor1,
        this.comparisonColor2,
        location
      );
      if (i < middle) i++;
      if (j < end) j++;
      await this._sleep();
    }
  }

  async _merge(arr, start, middle, end, location) {
    let mergedArr = [];
    let a = arr.slice(start, middle + 1);
    let b = arr.slice(middle + 1, end + 1);

    let mergePromise = new Promise(async resolve => {
      await this._compare(start, middle, end, location);

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
