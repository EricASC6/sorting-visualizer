// drop down for algorithms
const algorithmDropDown = document.getElementById("algo-drop-down");

algorithmDropDown.addEventListener("click", () => {
  const caret = document.getElementById("caret");
  const dropDown = document.getElementById("sorting-algo-drop-down");

  dropDown.classList.toggle("drop-active");
  caret.classList.toggle("active");
});
