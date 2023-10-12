
// let audio = document.getElementById("audio");
// let playPause = document.getElementById("playPause");

// playPause.onclick = () =>{
    
//     if (audio.isPaused()) {
//         audio.play();
//     }else (audio.pause());
// }



document.onmousemove = animateCircles;

var colors = [ "#1F3C3A",  "#83D4B1",  "#F6C344", "#DCDCB4" ];
function animateCircles (event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";

    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;

    circle.style.transition = "all 0.5s linear 0s";

    circle.style.left = circle.offsetLeft - 80 + "px";
    circle.style.top = circle.offsetTop - 1 + "px";

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px"
    circle.style.opacity = 0;
}