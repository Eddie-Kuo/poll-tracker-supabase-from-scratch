

// DOM elements
const inputForm = document.querySelector('.input-section');
const currentQuestionEl = document.querySelector('.current-question');
const currentOptOne = document.querySelector('.current-opt-one');
const currentOptTwo = document.querySelector('.current-opt-two');
const optOnePlus = document.querySelector('.opt-one-plus');
const optOneMinus = document.querySelector('.opt-one-minus');
const optTwoPlus = document.querySelector('.opt-two-plus');
const optTwoMinus = document.querySelector('.opt-two-minus');


// state
let userQuestion = '';
let optionOne = '';
let optionTwo = '';


// form event listener
inputForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const data = new FormData(inputForm);

    userQuestion = data.get('user-question');
    optionOne = data.get('option-one');
    optionTwo = data.get('option-two');

    currentQuestionEl.textContent = userQuestion;
    currentOptOne.textContent = optionOne;
    currentOptTwo.textContent = optionTwo;

    inputForm.reset();
});