// (Contact us) shift text in place holder after user interaction
const inputs = document.querySelectorAll(".input");

// when user input area is clicked on,
// shifts placeholder text up
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

// if input is left empty, 
// reverts placeholder text back to original spot
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

// listen for event on placeholder text
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
