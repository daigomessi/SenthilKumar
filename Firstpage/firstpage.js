const words = ["AR/VR", "Python", "Game"];
const changingWord = document.getElementById("changing-word");

let index = 0;

changingWord.textContent = words[0];

setInterval(() => {
    changingWord.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % words.length;
        changingWord.textContent = words[index];
        changingWord.style.opacity = 1;
    }, 400);

}, 2500);
