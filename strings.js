/***********************************************************************
JavaScript String Type and String Object
***********************************************************************/

var s = String("Potatoes motherfucker.");

document.write(s + "<br>");

var ss = 'whattup my taters';

document.write(ss+"<br>");

var a = "This is how you use \"special\" characters.";

document.write(a+"<br>");
document.write(s.length+"<br>"+ss.length+"<br>"+a.length+"<br>");
document.write(a.indexOf("use")+"<br>");
document.write(a.substring(16,19)+"<br>");
document.write(a.replace("use", "display")+"<br>");
document.write(a+"<br>");
document.write(s.toUpperCase()+"<br>");
document.write(s.toLowerCase()+"<br>");
document.write(s+"<br>");
document.write(s.charAt(5));