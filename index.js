let bg = document.getElementById('particles-js');

document.addEventListener("keydown", function (event) {
    bg.style.backgroundColor = getRandomColor();
    let key = event.key;
    playMusic(key);
});

function playMusic(key) {
    switch (key) {
        case "d":
            let audio = new Audio("Kick1.wav");
            audio.play();
            break;
        case "e":
            let audio1 = new Audio("kick.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("kick2.mp3");
            audio2.play();
            break;
        case "z":
            let audio3 = new Audio("Clap1.wav");
            audio3.play();
            break;
    }
}

function getRandomColor() {

    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
