"use strict";
const startButton = document.getElementById('start-quizz');
const header = document.querySelector('.quizz-header');
const quizzBody = document.querySelector('.quizz-body');
const timerContainer = document.querySelector('.timer');
// function for remove header
const removeHeader = () => {
    header.remove();
};
// function for timer to start
const timer = (time) => {
    let seconds = time;
    const timer = setInterval(() => {
        seconds--;
        timerContainer.textContent = `${seconds}`;
        if (seconds === 0) {
            clearInterval(timer);
            timerContainer.textContent = `GOO`;
            // remove header 
            setTimeout(() => {
                removeHeader();
                quizzBody.style.display = 'flex';
            }, 1100);
        }
    }, 1000);
};
// start timer button 
startButton.addEventListener('click', () => {
    timer(1);
});
