// JavaScript - Event Object

var btn = document.getElementById("btn");

function changeButtonFontSize(event) {
    this.style.fontSize = "50px";
    alert(event.type);
    alert(event.target);
}

btn.addEventListener("click", changeButtonFontSize);

var aElement = document.getElementById("click-me");

function clickMe(event) {
    event.preventDefault();
    alert("Yo you clicked me, dawg");
}

aElement.addEventListener("click", clickMe);