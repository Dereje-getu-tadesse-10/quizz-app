const startButton = document.getElementById('start-quizz') as HTMLButtonElement;
const header = document.querySelector('.quizz-header') as HTMLDivElement;
const timerContainer = document.querySelector('.timer') as HTMLDivElement;

// function for remove header
const removeHeader = () => {
    header.remove(); 
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
            }, 1100);
        }
    }, 1000);
}

// start timer button 
startButton.addEventListener('click', () => {
    timer(1);
});

