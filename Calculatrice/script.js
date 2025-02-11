const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('input');
const calc = document.querySelector('.calculate');
const clear = document.querySelector('.reset');
let isNumber = true;
let isFinished = false;
let isStart = true;

// event click sur touche chiffre
for (const number of numbers) {
    number.addEventListener('click', () => {
        if (isStart || isFinished) {
            screen.value = number.textContent;
            isStart = false;
            isFinished = false;
        }
        else {
            screen.value += number.textContent;
            isNumber = true;
        }
    })
}

// event click sur touche opérateur
for (const operator of operators) {
    operator.addEventListener('click', () => {
        if (isFinished)
            isFinished = false;
        if (isStart)
            isStart = false;
        if (isNumber)
            isNumber = false;
        else
            screen.value = screen.value.slice(0, -3);
        screen.value += ` ${operator.textContent} `;
    })
}


// calcule le résultat
calc.addEventListener('click', () => {
    if (!isNumber) {
        screen.value = screen.value.slice(0, -3);
        isNumber = true;
    }
    let newStr = screen.value.replace(/×/g, "*");
    newStr = newStr.replace(/÷/g, "/");
    let reslt = eval(newStr);
    if (reslt === Infinity || reslt === -Infinity || reslt === NaN)
        reslt = "Désolé, opération impossible.";
    screen.value = reslt;
    isFinished = true;
})


// remet à zéro l'écran
clear.addEventListener('click', () => {
    screen.value = 0;
    isStart = true;
})