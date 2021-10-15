// alert("hello");

// document.querySelector("button").addEventListener("click", clickResponce);

var buttons = document.querySelectorAll(".drum");
// for( var i=0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", clickResponce);
// }
// function clickResponce(){
//     alert("I was clicked!!");
// }

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        //         alert("I was clicked!!");
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

    });
}
