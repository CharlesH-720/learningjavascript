// JavaScript Window -> Document

//document.write("<br>This text was added through JavaScript.<br>");

//Accesssing elements and attributes using document object
//access through getElementById

//var heading = document.getElementById("my-heading");
//alert(heading);
//alert(heading.innerHTML);
//alert(heading.getAttribute("id"));
//alert(heading.tagName);

//accessing elements using class attribute
//var paragraphs = document.getElementsByClassName("my-paragraph"); //Node list

/*
alert(paragraphs);
alert(paragraphs[0]);
alert(paragraphs[0].innerHTML);*/

/*for (var i = 0; i < paragraphs.length; i++){
    document.write(paragraphs[i].innerHTML+"<br>");
}*/
/*
var ulElements = document.getElementsByTagName("ul");
document.write(ulElements[1].innerHTML);
var liElements = ulElements[0].getElementsByTagName("li");
document.write(liElements[0].innerHTML);
*/

//var naElements = document.getElementsByName("user-name");
//alert(naElements[0].tagName);

//ACCESS ELEMENT USING CSS QUERY
//accesses first element of the type
//var pElement = document.querySelector("p");
//alert(pElement.innerHTML);
//accesses all elements of type
//document.querySelectorAll("p");

var ulElements = document.getElementsByTagName("ul")[0];
//alert("Node name: " + ulElements.nodeName);
//alert("Node type: " + ulElements.nodeType);

//get parent node
//alert("Node parent: " + ulElements.parentNode.nodeName);

//get child nodes
//alert("Node child: " + ulElements.childNodes);

//return num child nodes
//alert("Number of children: " + ulElements.childNodes.length);//returns 7 instead of 3 due to 4 groups of whitespace

//get child nodes without whitespace
//var ulChildren = ulElements.childNodes;
//for (var i = 0; i < ulChildren.length; i++){
  //  if(ulChildren[i].nodeType == 1){
//        alert(ulChildren[i].innerHTML);
//    }
//}


var liFirstChild = ulElements.firstChild.firstChild.nodeValue;
alert(liFirstChild);

var liLastChild = ulElements.lastChild.firstChild.nodeValue;
alert(liLastChild);


// white space betweent the UL and P in index.html is counted as a node so you must use the previousSibling attribute twice.
alert(ulElements.previousSibling.previousSibling.innerHTML);