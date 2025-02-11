const btnSubmit = document.querySelector('.btnSubmit');
const btnNext = document.querySelector('.btnNext');
const card = document.querySelector('.quiz-card');

const tabQuestion = [
    {
        question: "Quel mot clé est utilisé pour déclarer une variable en ES6",
        response: ["var", "let", "const", "let et const"],
        correct: "question4",
    },
    {
        question: "Quel est le résultat de l'expression typeof null en JavaScript ?",
        response: ["null", "object", "undefined", "[]"],
        correct: "question2"
    },
    {
        question: "Quelle est la méthode utilisée pour ajouter un élément à la fin d'un tableau en JavaScript ?",
        response: ["push()", "pop()", "shift()", "unshift()"],
        correct: "question1"
    },
    {
        question: "Quelle est la méthode utilisée pour convertir une chaîne de caractères en tableau en JavaScript ?",
        response: ["split()", "join()", "slice()", "map()"],
        correct: "question1"
    }
];

let indexCard = 0;
let score = 0;
const colorRight = 'rgba(87, 197, 60, 0.7)';
const colorWrong = 'rgba(212, 64, 64, 0.7)'


document.querySelector(".form").addEventListener('submit', (event) => {
    event.preventDefault();
    btnSubmit.disabled = true;
    btnNext.disabled = false;
    checkAnswer(event);
})

btnNext.addEventListener('click', () => {
    buildCard();
    btnSubmit.disabled = false;
    btnNext.disabled = true;
})


function checkAnswer(e) {
    const userRes = document.querySelector('input[type="radio"]:checked');
    const div = userRes.closest('div');
    const trueAnswer = tabQuestion[indexCard].correct;
    const divTrueAnswer = document.querySelector(`#${trueAnswer}`).closest('div');
    divTrueAnswer.style.backgroundColor = colorRight;
    if (userRes.id === trueAnswer) {
        score++;
        card.style.borderColor = colorRight;
        card.style.boxShadow = `3px 3px 8px ${colorRight}`;
    }

    else {
        card.style.borderColor = colorWrong;
        card.style.boxShadow = `3px 3px 8px ${colorWrong}`;
        div.style.backgroundColor = colorWrong;
    }
    indexCard++;
}


function buildCard() {
    card.style.borderColor = '#000';
    card.style.boxShadow = '3px 3px 8px #333';
    if (indexCard < tabQuestion.length) {
        const divs = document.querySelectorAll('div');
        divs.forEach((div) => {
            div.style.backgroundColor = '#fff';
        })
        const question = document.querySelector('legend');
        question.textContent = `${indexCard + 1}. ${tabQuestion[indexCard].question}`;
        const radios = document.querySelectorAll('input[type=radio]');
        radios.forEach((radio) => {
            radio.checked = false;
        })
        const labels = document.querySelectorAll('label');
        const responses = tabQuestion[indexCard].response;
        labels.forEach((label, index) => {
            label.textContent = responses[index];
        })
    }
    else {
        const form = document.querySelector(".form");
        form.classList.add("inactive");
        document.querySelector(".score").classList.toggle("inactive");
        document.querySelector(".score").textContent = `Votre score : ${score} / 4 !`;
    }


}



buildCard();