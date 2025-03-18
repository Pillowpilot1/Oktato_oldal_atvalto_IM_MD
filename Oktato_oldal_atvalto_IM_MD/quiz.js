const questions = [
    { question: "Mi a 2-es számrendszerben a 1011 szám értéke a 10-es számrendszerben?", options: ["11", "13", "9", "7"], answer: 0 },
    { question: "Mi a 2-es számrendszerben a 1101 szám értéke a 10-es számrendszerben?", options: ["13", "14", "11", "12"], answer: 0 },
    { question: "Mi a 2-es számrendszerben a 11100 szám értéke a 10-es számrendszerben?", options: ["28", "30", "29", "32"], answer: 2 },
    { question: "Mi a 2-es számrendszerben a 1001 szám értéke a 10-es számrendszerben?", options: ["9", "7", "8", "6"], answer: 0 },
    { question: "Mi a 2-es számrendszerben a 11000 szám értéke a 10-es számrendszerben?", options: ["16", "17", "18", "19"], answer: 0 }
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
