// JavaScript Creating Elements and Attributes
/*
//get first ul element by id
var ulElement = document.getElementById("my-list");

//create list item node
var newLiElement = document.createElement("li");

//create text node for li
var newLiText = document.createTextNode("This is a new list item added through JavaScript");

//Append text node to new list item as child node
newLiElement.appendChild(newLiText);

//append list item to the unordered list as a child node
ulElement.appendChild(newLiElement);

//Alternate way to add new element/node using parent node

//get list item using ID
var liElement = document.getElementById("list-item-01");

liElement.parentNode.appendChild(newLiElement);

//Alternate way: insert Before
liElement.parentNode.insertBefore(newLiElement, liElement);

//replace element
//liElement.parentElement.replaceChild(newLiElement, liElement);
*/






//Adding attributes through JavaScript
var hElement = document.getElementById("my-heading");
hElement.setAttribute("align", "center");

//get anchor
var aElement = document.getElementsByTagName("a")[0];
//aElement.setAttribute("id","firstLink");
aElement.id = "firstLink";