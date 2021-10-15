// document.querySelector("button").addEventListener("click", clickResponce);

var buttons = document.querySelectorAll(".drum");
// for( var i=0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", clickResponce);
// }
// function clickResponce(){
//     alert("I was clicked!!");
// }

//Button response
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playMusic(buttonInnerHTML);
        //call animation function
        buttonAnimation(buttonInnerHTML);
    });
}

//Keyboard response
document.addEventListener("keypress", function (event) {
    // console.log(event.key);
    var pressedKey = event.key;
    playMusic(pressedKey);

    //call animation function
    buttonAnimation(pressedKey);
});


//function to play music based on key pressed/ or button clicked
function playMusic(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(key);
    }
}

// function for animation affect
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    // add new effect style class
    activeButton.classList.add("pressed");

    // remove new effect style class after 1 sec
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}