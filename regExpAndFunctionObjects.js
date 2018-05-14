/***********************************************************************
REGULAR EXPRESSIONS
***********************************************************************

//creating regex with new keyword
var regExp = new RegExp("abcd");

//creating regex with slashes
var regExp1 = /123/;

var strToSearch = "this abcd 123 is to be searched";

var matchFound = regExp.test(strToSearch);

alert(matchFound);

/***********************************************************************
Function Objects
***********************************************************************/

var funcAsObj = new Function("a", "b", "return a + b");

var x = funcAsObj(10,25);

alert(x);

var y = function(a,b){return (a+b)};
alert(y(20, 45));