// JavaScript Window -> Cookies Object

//create Cookies
document.cookie = "userFirstName=Charles;"
document.cookie = "hooplah = potato;"

//read cookies
alert(document.cookie);

//delete cookies --- MUST HAVE TIME IN UTC
document.cookie = "userFirstName=Charles;expires= Thu, 22 Jan 2017 12:00:00 UTC";

alert(document.cookie);

document.cookie = "hooplah=potato;expires= Thu, 22 Jan 2017 12:00:00 UTC";

alert(document.cookie);