const questions = [
    { question: "Mi a 16-os számrendszerben a A3 szám értéke a 10-es számrendszerben?", options: ["163", "31", "39", "49"], answer: 0 },
    { question: "Mi a 16-os számrendszerben a 1F szám értéke a 10-es számrendszerben?", options: ["31", "30", "32", "33"], answer: 0 },
    { question: "Mi a 16-os számrendszerben a 7B szám értéke a 10-es számrendszerben?", options: ["125", "126", "124", "127"], answer: 1 },
    { question: "Mi a 16-os számrendszerben a 3E szám értéke a 10-es számrendszerben?", options: ["62", "63", "64", "60"], answer: 0 },
    { question: "Mi a 16-os számrendszerben a C9 szám értéke a 10-es számrendszerben?", options: ["199", "200", "201", "198"], answer: 0 }
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
