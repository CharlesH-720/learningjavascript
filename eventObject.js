// JavaScript  - Event Objects

// get button by its id
var button = document.getElementById("button0");

function changeButtonSize() {
    this.style.fontSize = "40px";
}

button.addEventListener("click", changeButtonSize);