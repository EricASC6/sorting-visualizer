class Comparison {
  static compare(i, j, col1, col2, location) {
    location.children[i].style.backgroundColor = col1;
    location.children[j].style.backgroundColor = col2;
  }
}
