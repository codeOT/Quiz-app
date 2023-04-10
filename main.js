const quizData = [
    {
        question: "Most likely to have a threesome?",
        a: "General",
        b: "Ganiyu Ishola",
        c: "Maybe General Ghan",
        d: "Definitely General dat guy madd ",
        correct: '',
    },
    {
        question: "Most likely to get caught having sex in public?",
        a: "Na James e go be",
        b: "CeeJay",
        c: "Radopyper",
        d: "Definitely General",
        correct: "a",
    },
    {
        question: "Most likely to marry someone they just met?",
        a: "Toyibah jor",
        b: "Maybe LarryBrand",
        c: "Definitely not p-sam",
        d: "Abi na Alakanke",
        correct: "a",
    },
    {
        question: "Most likely to be killed first if they were in a horror movie?",
        a: "Na CeeJay",
        b: "John but d guy rugged sha",
        c: "Not Rado",
        d: "hmm P-sam",
        correct: "a",
    },
       {
        question: "Most likely to have a one night stand?",
        a: "Omo na John",
        b: "OTD",
        c: "General",
        d: "Not Jamiu",
        correct: "a",
    },
    {
        question: "Most likely to laugh in a serious moment?",
        a: "Radopyper",
        b: "Ceejay",
        c: "Semiahh",
        d: "Menzino olowo 2k",
        correct: "a",
    },
    {
        question: "Most likely to save up all their money and never spend it?",
        a: "Definitely not LarryBrand",
        b: "OTD",
        c: "Omo na Toyibahh",
        d: "Wo na anybody jare",
        correct: "a",
    },
    {
        question: "Most likely to die cos of TALKING?",
        a: "Ehe Wahala",
        b: "Hmmmmmm",
        c: "Make una choose anything o",
        d: "I dont know",
        correct: "a",
    },
     {
        question: "Did you like dis quiz",
        a: "Yes boss",
        b: "Yess ",
        c: "I too like am",
        d: "Yes sir",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 3
// const emoji = 0x10000
// console.log(emoji)
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = Math.floor(Math.random() * quizData.length)
    questionEl.innerText = quizData[currentQuizData].question
    // questionEl.innerText = currentQuizData.question
    a_text.innerText = quizData[currentQuizData].a
    b_text.innerText = quizData[currentQuizData].b
    c_text.innerText = quizData[currentQuizData].c
    d_text.innerText = quizData[currentQuizData].d 

}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Retake</button>
           `
       }
    }
})