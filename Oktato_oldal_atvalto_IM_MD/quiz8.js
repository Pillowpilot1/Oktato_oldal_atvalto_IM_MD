const questions = [
    { question: "Mi a 8-as számrendszerben a 13 szám értéke a 10-es számrendszerben?", options: ["11", "10", "13", "11"], answer: 1 },
    { question: "Mi a 8-as számrendszerben a 17 szám értéke a 10-es számrendszerben?", options: ["13", "15", "16", "17"], answer: 2 },
    { question: "Mi a 8-as számrendszerben a 22 szám értéke a 10-es számrendszerben?", options: ["18", "20", "22", "24"], answer: 1 },
    { question: "Mi a 8-as számrendszerben a 11 szám értéke a 10-es számrendszerben?", options: ["9", "7", "11", "13"], answer: 0 },
    { question: "Mi a 8-as számrendszerben a 30 szám értéke a 10-es számrendszerben?", options: ["24", "28", "30", "32"], answer: 1 }
];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    if (!quizDiv) return;

    const q = questions[currentQuestion];
    let optionsHtml = "";
    q.options.forEach((option, index) => {
        optionsHtml += `<li><label><input type="radio" name="answer" value="${index}"> ${option}</label></li>`;
    });

    quizDiv.innerHTML = `<div class="question">${q.question}</div><ul class="options">${optionsHtml}</ul>`;
}

function nextQuestion() {
    const selected = document.querySelector("input[name='answer']:checked");

    if (parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `<h2>Kvíz vége!</h2><p>Pontszámod: ${score}/${questions.length}</p>`;
        document.querySelector("button").style.display = "none"; // Elrejtjük a gombot a végén
    }
}


// Biztosítjuk, hogy a kérdés csak az oldal betöltődése után jelenjen meg
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    document.querySelector("button").addEventListener("click", nextQuestion);
});
