// JavaScript - Removing Elements and Attributes

//get unordered list
var ulElement = document.getElementsByTagName("ul")[1];
var reElement = ulElement.removeChild(ulElement.childNodes[3]);
//alert(reElement);

//remove attribute using removeAttribute method
//ulElement.removeAttribute("id");

var hElement = document.getElementById("my-heading");
//hElement.removeAttribute("id");

