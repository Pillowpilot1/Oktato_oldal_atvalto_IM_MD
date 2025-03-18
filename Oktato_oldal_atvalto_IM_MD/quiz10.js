const questions = [
    { question: "Mi a 10-es számrendszerben a 15 szám értéke?", options: ["12", "13", "14", "15"], answer: 3 },
    { question: "Mi a 10-es számrendszerben a 25 szám értéke?", options: ["20", "21", "22", "25"], answer: 3 },
    { question: "Mi a 10-es számrendszerben a 40 szám értéke?", options: ["36", "38", "39", "40"], answer: 3 },
    { question: "Mi a 10-es számrendszerben a 100 szám értéke?", options: ["99", "100", "101", "102"], answer: 1 },
    { question: "Mi a 10-es számrendszerben a 75 szám értéke?", options: ["74", "75", "76", "77"], answer: 1 }
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
