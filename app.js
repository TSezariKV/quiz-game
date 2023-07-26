const question = document.querySelector('.question')
const buttons = document.querySelectorAll('.btn')
const nextButton = document.querySelector('.next-btn')

const QUESTIONS = [
    {
        question: 'What is 2 + 2 = ?',
        answer1: '2',
        answer2: '4',
        answer3: '6',
        answer4: '8',
        correct: '4'
    },
    {
        question: 'What is 3 + 3 = ?',
        answer1: '5',
        answer2: '6',
        answer3: '9',
        answer4: '11',
        correct: '6'
    },
    {
        question: 'What is 5 + 5 = ?',
        answer1: '10',
        answer2: '15',
        answer3: '20',
        answer4: '25',
        correct: '10'
    },
]

let randomNumber = Math.floor(Math.random() * QUESTIONS.length)
let randomQuestion = QUESTIONS[randomNumber]

question.innerHTML = randomQuestion.question

buttons.forEach(btn => {
    if(btn.classList.contains('btn1')) {
        btn.innerHTML = randomQuestion.answer1
    } else if(btn.classList.contains('btn2')) {
        btn.innerHTML = randomQuestion.answer2
    } else if(btn.classList.contains('btn3')) {
        btn.innerHTML = randomQuestion.answer3
    } else if(btn.classList.contains('btn4')) {
        btn.innerHTML = randomQuestion.answer4
    }
    btn.addEventListener('click', function() {
        if(btn.textContent == randomQuestion.correct) {
            btn.innerHTML = 'Correct!'
            nextButton.style.visibility = 'visible'
        } else {
            btn.innerHTML = 'Not Correct!'
        }
    })
})

function nextQuestion() {
    nextButton.style.visibility = 'hidden'
    randomNumber = Math.floor(Math.random() * QUESTIONS.length)
    randomQuestion = QUESTIONS[randomNumber]

    question.innerHTML = randomQuestion.question

    buttons.forEach(btn => {
        if(btn.classList.contains('btn1')) {
            btn.innerHTML = randomQuestion.answer1
        } else if(btn.classList.contains('btn2')) {
            btn.innerHTML = randomQuestion.answer2
        } else if(btn.classList.contains('btn3')) {
            btn.innerHTML = randomQuestion.answer3
        } else if(btn.classList.contains('btn4')) {
            btn.innerHTML = randomQuestion.answer4
        }
        btn.addEventListener('click', function() {
            if(btn.textContent == randomQuestion.correct) {
                btn.innerHTML = 'Correct!'
                nextButton.style.visibility = 'visible'
            } else {
                btn.innerHTML = 'Not Correct!'
            }
        })
    })

    QUESTIONS.pop(randomQuestion)
    console.log(QUESTIONS)

    if(QUESTIONS.length == 0) {
        buttons.forEach(btn => {
            btn.style.visibility = 'hidden'
        })
        question.innerHTML = 'Congrats you won!'
    }
}

nextButton.addEventListener('click', nextQuestion)