"use strict";
const startButton = document.getElementById('start-quizz');
const header = document.querySelector('.quizz-header');
const timerContainer = document.querySelector('.timer');
const removeHeader = () => {
    header.remove();
};
const timer = (time) => {
    let seconds = time;
    const timer = setInterval(() => {
        seconds--;
        timerContainer.textContent = `${seconds}`;
        if (seconds === 0) {
            clearInterval(timer);
            timerContainer.textContent = `GOO`;
            setTimeout(() => {
                removeHeader();
            }, 1100);
        }
    }, 1000);
};
startButton.addEventListener('click', () => {
    timer(6);
});
