import { letsGo, checkAnswer } from "./play.js";

const startButton = document.getElementById('start-quizz') as HTMLButtonElement;
const header = document.querySelector('.quizz-header') as HTMLDivElement;
const quizzBody = document.querySelector('.quizz-body') as HTMLDivElement;
const timerContainer = document.querySelector('.timer') as HTMLDivElement;

// function for remove header
const removeHeader = () => {
    header.style.display = 'none'; 
}

// function for timer to start
const timer = (time:number) => {
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
}

// start timer button 
startButton.addEventListener('click', () => {
    timer(6);
});

letsGo();
checkAnswer();

export { quizzBody, header, timerContainer };
