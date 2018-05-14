// JavaScript Window -> Screen

//Pulls info about the screen resolution on the users screen

document.write(window.screen.width + " ");
document.write(window.screen.height + "<br>");
document.write(screen.width + " " + screen.height + "<br>");


//Pulls info about the available width and height of the screen (subtracts things like taskbar)

document.write("Avaiable width and height: " + screen.availWidth + " " + screen.availHeight + "<br>");

//pulls screen color and pixel depth
document.write("Color depth: " + screen.colorDepth + "<br>");
document.write("Pixel depth: " + screen.pixelDepth + "<br>");