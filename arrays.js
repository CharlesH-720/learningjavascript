/*var myColors = new Array("Red", "Yellow", "Blue");
var myColors = ["Red", "Yellow", "Blue"];
document.write(myColors.length+"<br>");
for (var x = 0; x < myColors.length; x++){
    document.write(myColors[x]+"<br>");
}
document.write(myColors + "<br>");
document.write(myColors.sort()+"<br>");
document.write(myColors.reverse()+"<br>");
myColors.reverse();
myColors.push("Pink");
document.write(myColors+"<br>");
myColors.pop();
document.write(myColors+"<br>");
var secondaryColors = ["Purple", "Green","Orange"];
document.write(secondaryColors+"<br>");
var combineArray = myColors.concat(secondaryColors);
document.write(combineArray + "<br>");
*/

var myCars = [
    {make:"Honda", model:"Accord",year:"2002"},
    {make:"Kia", model:"Sorento",year:"2012"},
    {make:"Ford", model:"F250",year:"2008"}
];

for(var i = 0; i < myCars.length; i++){
    var myCar = "";
    for (var property in myCars[i]){
        myCar = myCar + myCars[i][property] + " ";
    }
    document.write(myCar+"<br>");
}