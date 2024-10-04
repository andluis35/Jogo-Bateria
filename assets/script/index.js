let numberOfDrumButtons = document.querySelectorAll(".drum").length;

initializeButtonsWhenIsClicked();
initializeButtonsWhenKeyIsPressed();

function initializeButtonsWhenIsClicked() {
    for(let i = 0; i < numberOfDrumButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", chooseButtonToPlay);
    }
    return;
}

function initializeButtonsWhenKeyIsPressed() {
    document.addEventListener("keydown", function(event) {
        let soundPath = defineSoundPath(event.key);
        let audioKeyPressed = new Audio(soundPath);
        audioKeyPressed.play();
        animateButtons(event.key);
    });
    return;
}

function chooseButtonToPlay() {
    let key = this.innerHTML;
    let soundPath = defineSoundPath(key);
    let audioClicked = new Audio(soundPath);
    audioClicked.play();
    animateButtons(key);
    return;
}

function defineSoundPath(key) {
    let soundPath = "";
    switch(key) {
        case "w":
            soundPath = "./assets/sounds/tom-1.mp3";
            break;
        
        case "a":
            soundPath = "./assets/sounds/tom-2.mp3";
            break;

        case "s":
            soundPath = "./assets/sounds/tom-3.mp3"
            break;

        case "d":
            soundPath = "./assets/sounds/tom-4.mp3"
            break;

        case "j":
            soundPath = "./assets/sounds/snare.mp3"
            break;

        case "k":
            soundPath = "./assets/sounds/crash.mp3"
            break;

        case "l":
            soundPath = "./assets/sounds/kick-bass.mp3"
            break;

        default:
            console.log(key);
    }
    return soundPath;
}

function animateButtons(key) {
    let buttonPressed = document.querySelector("." + key);
    addAnimation(buttonPressed)

    setTimeout(function() {
        buttonPressed.classList.remove("pressed");
    }, 100);
}

function addAnimation(buttonPressed) {
    buttonPressed.classList.add("pressed");
}