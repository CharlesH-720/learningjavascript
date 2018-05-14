//JavaScript Number Type and Numbers

var n = new Number(20.25);
document.write(n+"<br>");
document.write("Primitive Value: "+n.valueOf()+"<br>");

var numCheck = 20 + "t";
document.write(numCheck + "<br>");
document.write(numCheck + " is not a valid number: " + isNaN(numCheck) + "<br>");
document.write(n + " is not a valid number: " + isNaN(n) + "<br>");
document.write(n.toString()+"<br>");