// JavaScript - Changing elements content and attributes

//get h1 by its id
var hElement = document.getElementById("my-heading");
//get node value of text node inside heading
//alert(hElement.childNodes[0].nodeValue);

//get text node from heading (assuming it has solely one child node)
//alert(hElement.firstChild.nodeValue);

//set node value
//hElement.firstChild.nodeValue = "Heading text has been altered.";

// set content using textContent
//hElement.textContent = "Heading has changed again!";

// set content using innerHTML can take HTML tags unlike other methods
//hElement.innerHTML = "Welcome <small>to</small> <em>my</em> <b>Website</b>";

//set content using outerHTML, also takes html tags
//hElement.outerHTML = "<h2><em> Heading text just changed</em></h2>";

var imgElement = document.getElementsByTagName("img")[0];
//imgElement.setAttribute("src", "goodnews.jpg");
//imgElement.setAttribute("width", "400");
//imgElement.setAttribute("height", "500");

imgElement.src = "goodnews.jpg";
imgElement.height = 400;
imgElement.width = 300;

var linkElement = document.getElementsByTagName("a")[0];
linkElement.href = "https://news.ycombinator.com";