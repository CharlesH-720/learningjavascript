// JavaScript Window -> Location Object

//Navigate to a new page
//location = "https://www.cnn.com";

//get current url
document.write("Current Page: " + location.href + "<br>");

//get hostname
document.write("Current host name: " + location.hostname + "<br>");

//get page path
document.write("Current page path name: " + location.pathname + "<br>");

//get page web protocol
document.write("Current page protocol: " + location.protocol + "<br>");

//redirects page to url supplied
//location.assign("https://old.reddit.com/r/politics/rising");

//continually reload a webpage
//location.reload();

//replaces current url/path with supplied one
location.replace("https://google.com");