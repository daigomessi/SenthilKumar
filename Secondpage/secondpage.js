document.addEventListener("DOMContentLoaded", function () {

    const words = ["AR/VR", "Python", "Game"];
    const changingWord = document.getElementById("changing-word");

    if (!changingWord) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        changingWord.textContent = currentWord.substring(0, charIndex);

        let speed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1000;
            isDeleting = true;
        }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
