// JavaScript HTML element animation

var hElement = document.getElementById("my-heading");
hElement.className = "heading-css";

(function() {
    var imgElement = document.getElementById("img");
    var imgTop = 0;
    var imgLeft = 450;
    
    setInterval(moveImage, 10);
    
    function moveImage() {
        if (imgTop < 270 && imgLeft == 450) {
            imgTop++;
            imgElement.style.top = imgTop + "px";
        } else if (imgLeft < 720 && imgTop == 270){
            imgLeft++;
            imgElement.style.left = imgLeft + "px";
        } else if (imgTop > 0 ) {
            imgTop--;
            imgElement.style.top = imgTop + "px";
        } else if (imgLeft > 450) {
            imgLeft--;
            imgElement.style.left = imgLeft + "px";
        }
        
        
    }
})();