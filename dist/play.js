import questions from './questions.js';
import { quizzBody, header, timerContainer } from './app.js';
const questionTitle = document.querySelector('.question-title');
const answersButton = document.querySelectorAll('.option');
const scoreContainer = document.querySelector('.score');
const letsGo = () => {
    let currentQuestion = 0;
    questions.forEach((question, index) => {
        // get only ne question from the array
        if (index === currentQuestion) {
            questionTitle.textContent = question.question;
            answersButton.forEach((answer, index) => {
                answer.textContent = question.answers[index];
            });
        }
    });
};
const checkAnswer = () => {
    let currentQuestion = 0;
    let score = 1;
    answersButton.forEach((answer, index) => {
        answer.addEventListener('click', () => {
            // check if answer is correct or not
            let correctAnswer = questions[currentQuestion].correctAnswer;
            if (index === questions[currentQuestion].answers.indexOf(correctAnswer)) {
                let currentScore = score++;
                scoreContainer.textContent = `Score: ${currentScore}`;
            }
            // get next question
            currentQuestion++;
            if (currentQuestion < questions.length) {
                questionTitle.textContent = questions[currentQuestion].question;
                if (currentQuestion === questions.length - 1) {
                    scoreContainer.textContent = `Score: ${score}`;
                }
                // get only one question from the array
                answersButton.forEach((answer, index) => {
                    answer.textContent = questions[currentQuestion].answers[index];
                    // if is the last question, show the score
                });
            }
            else {
                // remove answers button
                answersButton.forEach((answer) => {
                    answer.remove();
                    setTimeout(() => {
                        quizzBody.style.display = 'none';
                        header.style.display = 'flex';
                        scoreContainer.textContent = '';
                        score = 0;
                        timerContainer.textContent = '';
                    }, 1000);
                });
            }
        });
    });
};
export { letsGo, checkAnswer };
