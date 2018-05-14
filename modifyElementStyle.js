// JavaScript - Modifying Element's style

//get element/node
var hElement = document.getElementById("my-heading");

/*change css with javascript to make website prettier
hElement.style.color = "#fff";
hElement.style.border= "1px solid red";
hElement.style.background = "darkblue";
hElement.style.padding = "12px";
*/

//can make css classes to more easily edit.
//you can implement multiplay css classes as shown below
hElement.className = "heading-css heading-css-01";

//remove css classes by:
//hElement.className = "";

//hElement.setAttribute("class","heading-css-01");