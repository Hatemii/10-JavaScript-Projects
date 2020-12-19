

const quizData = [
    {
        question: "What year was JavaScript launched?",
        a: "2005",
        b: "2007",
        c: "2012",
        d: "none of above",
        correct: "d"
    },
    {
        question: "Which is the best Program Language?",
        a: "Java",
        b: "JavaScript",
        c: "ReactJs",
        d: "C++",
        correct: "a"
    },
    {
        question: "What color is Facebook logo?",
        a: "Red",
        b: "Green",
        c: "Yellow",
        d: "Blue",
        correct: "d"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "HyperTag Markup Language",
        correct: "a"
    }
]


// get elements
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// get answer class
const answersElement = document.querySelectorAll(".answer")
const questionElement = document.getElementById('question')
const quiz = document.getElementById("quiz")

let currentQuiz = 0
let score = 0

checkAnswers()

function checkAnswers() {

    // deselect radio on next question
    deselectAnswers()


    // moving to next question
    const currentQuizData = quizData[currentQuiz]

    questionElement.innerText = currentQuizData.question

    // return values
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function getSelected() {
    let answer = undefined

    answersElement.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}


// deselct answer on next question
function deselectAnswers() {
    answersElement.forEach(answerEl => {
        answerEl.checked = false
    })
}


// submit button
submitBtn.addEventListener("click", () => {

    // check to see the answer
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            checkAnswers()
        } else {
            // show result
            quiz.innerHTML =
                `<h2>You answered correctly ${score} / ${quizData.length} questions.</h2>
                <button onclick="location.reload()">Try Again</button>
                `
        }
    }
})