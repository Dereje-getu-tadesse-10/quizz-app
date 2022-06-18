import questions from './questions.js';
import { quizzBody, header, timerContainer } from './app.js';
const questionTitle = document.querySelector('.question-title') as HTMLHeadingElement;
const answersButton = document.querySelectorAll('.option') as NodeListOf<HTMLDivElement>; 
const scoreContainer = document.querySelector('.score') as HTMLDivElement;


const letsGo = () => {
    let currentQuestion: number = 0;
    questions.forEach((question, index) => {
        // get only ne question from the array
        if (index === currentQuestion) {
            questionTitle.textContent = question.question;
            answersButton.forEach((answer, index) => {
                answer.textContent = question.answers![index]; 
            });
        }
    });
}

const checkAnswer = () => {
    let currentQuestion: number = 0;
    let score: number = 1;
    answersButton.forEach((answer, index) => {
        answer.addEventListener('click', () => {
            // check if answer is correct or not
            let correctAnswer: string = questions[currentQuestion].correctAnswer;
            if (index === questions[currentQuestion].answers!.indexOf(correctAnswer)) {
                let currentScore: number = score ++;
                if(currentScore % 2 === 0) {
                    scoreContainer.style.color = "green";
                } else {
                    scoreContainer.style.color = "red";
                }
                scoreContainer.textContent = `Score: ${currentScore}`;
            }        
            // get next question
            currentQuestion++;

            // verify if this is the last question and if yes, display the result
            if (currentQuestion === questions.length) {
                questionTitle.textContent = `fin du quizz`;
            }
            

            if (currentQuestion < questions.length) {
                questionTitle.textContent = questions[currentQuestion].question;
                console.log(questions[currentQuestion].question);
                
                // get only one question from the array
                answersButton.forEach((answer, index) => {
                    answer.textContent = questions[currentQuestion].answers![index];  
                });
            } else {
                // remove answers button
                answersButton.forEach((answer) => {
                    answer.style.display = 'none';
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                });
            }
        }
        );
    });
}

export { letsGo, checkAnswer };
