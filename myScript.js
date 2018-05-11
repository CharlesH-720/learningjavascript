/*function Foo(inputString) {
    document.write("Foo is working: " + inputString);
}
function Bar(i1, i2){
    document.write("<br>" + (i1 + i2));
}

Foo("Yo my dude");
Bar(1,10);
document.write("<br>");

var anonymousInnerClass = function(){
    return true;
};

document.write(anonymousInnerClass());
document.write("<br>");
(function(){
    alert("This is a self-executing anonymous function. How cool.");
})();

(function(string){
    document.write(string);
})("This is from a parameterized anonymous function.");

function calculateAge(birthYear, currentYear){
    var age = currentYear-birthYear;
    document.write("Your age is either " + age + " or " + (age - 1));
}
calculateAge(1994,2018);
*/

alert("This is an alert");

var v = confirm("Would you like to receive updates?");
if(v){
    var email = prompt("Please enter your email to receive updates: ");
    var c = confirm("Please confirm that your email is " + email);
    if(c){
        document.write("Your email: "+email+" will now receive updates. Thank you.");
    }
}

var user = new Object();
user.firstName = "John"
user.lastName = "Doe"
user.age = 18;
user.email = email;
user.fullName = function(){
    return (user.firstName + " " + user.lastName);
}

document.write("New user created:<br>");
document.write("Name: " + user.fullName + "<br>");
document.write("Age: " + user.age + "<br>");
document.write("Email: " + email + "<br>");