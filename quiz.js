const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "new delhi"
    },
    {
        question: "Which language is used to style web pages?",
        answer: "css"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "let"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: "//"
    },
    {
        question: "What method converts text to lowercase in JavaScript?",
        answer: "tolowercase"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answer: "a"
    },
    {
        question: "Which company developed JavaScript?",
        answer: "netscape"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        answer: "==="
    },
    {
        question: "What keyword is used to define a function in JavaScript?",
        answer: "function"
    },
    {
        question: "Which built-in method removes extra spaces from a string?",
        answer: "trim"
    },
    {
        question: "What does CSS stand for?",
        answer: "cascading style sheets"
    }
];
function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(
            "Question " + (i + 1) + ":\n" + quizQuestions[i].question
        );

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            alert("✅ Correct!");
            score++;
        } else {
            alert(
                "❌ Wrong!\nCorrect answer: " + quizQuestions[i].answer
            );
        }
    }

    // Final score
    alert(
        "Quiz Completed!\nYour Score: " +
        score + " out of " + quizQuestions.length
    );
}

// Start the quiz
runQuiz();