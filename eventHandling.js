// JavaScript - Handling events such as clicks, button presses, etc.

/*
    There are three methods to add an event handler to an event.
        1. Inline - adding directly into the html document, demonstrated below:
            <button id='btn' onclick="alert('Yay you clicked me');">Confirm</button>
            
            This is line method creates an alert when clicked, and displays "Confirm" inside.
        2. element.event - 
        3. elemenet.addEventListener - 


*/


//get element by id
var bElement = document.getElementById("button0");
bElement.onclick = function() {
    alert("You made a button do this with anonymous functions.")
}

function doSomething() {
    alert("You made a button do something with external JavaScript.");
}

window.onload = function() {
    alert("window has loaded")
}

//get heading element by its id
var hElement = document.getElementById("my-heading");
/*
hElement.onmouseover = function() {
    if(this.className == "heading-css") {
        this.className = "heading-css-01";
    }
    else {this.className = "heading-css";}
}*/





//Using addEventHandler you can add multiple event handlers to the same element
var chngbtn = document.getElementById("chngbtn");
chngbtn.addEventListener("click", changeButtonFontSize)
function changeButtonFontSize() {
    this.style.fontSize = "45px";
}
chngbtn.addEventListener("click", function(){alert("Potatoes");});

//remove event handler
chngbtn.removeEventListener("click", changeButtonFontSize);