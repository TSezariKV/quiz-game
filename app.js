const question = document.querySelector('.question')
const buttons = document.querySelectorAll('.btn')
const nextButton = document.querySelector('.next-btn')
const questionsLeftDisplay = document.querySelector('.questions-left-display')

let isCorrect = false

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
    {
        question: 'What is 10 + 5 = ?',
        answer1: '5',
        answer2: '10',
        answer3: '15',
        answer4: '20',
        correct: '15'
    },
    {
        question: 'What is 60 + 9 = ?',
        answer1: '61',
        answer2: '65',
        answer3: '66',
        answer4: '69',
        correct: '69'
    },
    {
        question: 'What is 55 + 14 = ?',
        answer1: '60',
        answer2: '59',
        answer3: '69',
        answer4: '70',
        correct: '69'
    },
    {
        question: 'What is 100 - 31 = ?',
        answer1: '69',
        answer2: '70',
        answer3: '76',
        answer4: '79',
        correct: '69'
    },
    {
        question: 'What is 77 + 33 = ?',
        answer1: '100',
        answer2: '103',
        answer3: '107',
        answer4: '110',
        correct: '110'
    },
    {
        question: 'What is 50 + 54 = ?',
        answer1: '94',
        answer2: '104',
        answer3: '109',
        answer4: '154',
        correct: '104'
    },
    {
        question: 'What is 99 - 31 = ?',
        answer1: '68',
        answer2: '69',
        answer3: '78',
        answer4: '79',
        correct: '68'
    },
]

let randomNumber
let randomQuestion
let questionsLeft

nextQuestion()

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
                isCorrect = true
            }
        })
    })

    QUESTIONS.pop(randomQuestion)
    console.log(QUESTIONS)

    questionsLeft = QUESTIONS.length
    questionsLeftDisplay.innerHTML = questionsLeft

    if(QUESTIONS.length == 0) {
        buttons.forEach(btn => {
            btn.style.visibility = 'hidden'
        })
        question.innerHTML = 'Congrats you won!'
    }
}

nextButton.addEventListener('click', nextQuestion)