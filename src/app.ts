const startButton = document.getElementById('start-quizz') as HTMLButtonElement;
const header = document.querySelector('.quizz-header') as HTMLDivElement;
const timerContainer = document.querySelector('.timer') as HTMLDivElement;

const removeHeader = () => {
    header.remove(); 
}

const timer = (time:number) => {
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
}

startButton.addEventListener('click', () => {
    timer(6);
});

