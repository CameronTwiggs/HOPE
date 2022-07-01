window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        //user input invalid
        if (!task) {
            alert("Please fill out the task");
            return;
        }
    })
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
