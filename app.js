

// DOM elements
const inputForm = document.querySelector('.input-section');
const currentPoll = document.querySelector('.current-poll-container');
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
let optionOneCount = 0;
let optionTwoCount = 0;


// form event listener
inputForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const data = new FormData(inputForm);

    userQuestion = data.get('user-question');
    optionOne = data.get('option-one');
    optionTwo = data.get('option-two');

    // currentQuestionEl.textContent = userQuestion;
    // currentOptOne.textContent = optionOne;
    // currentOptTwo.textContent = optionTwo;

    optionOneCount = 0;
    optionTwoCount = 0;
    inputForm.reset();
    displayCurrentPoll();

});

// render poll - then create a function to display the current poll in current poll el

function renderOption(option, count) {
    const optionDiv = document.createElement('div');
    const optionName = document.createElement('p')
    const optionScore = document.createElement('p');

    optionName.textContent = option;
    optionScore.textContent = count;

    optionDiv.append(optionName, optionScore);
    return optionDiv;
}

function renderPoll(poll) {
    const div = document.createElement('div');
    const optionDiv = document.createElement('div');
    const question = document.createElement('h4');
    const optionOneDiv = renderOption(poll.optionOne, poll.optionOneCount);
    const optionTwoDiv = renderOption(poll.optionTwo, poll.optionTwoCount);

    question.textContent = `Current Question: ${poll.userQuestion}`;
    optionDiv.classList.add('current-poll-stats');

    optionDiv.append(optionOneDiv, optionTwoDiv);
    div.append(question, optionDiv);
    return div;
}

function displayCurrentPoll() {
    currentPoll.textContent = ''; 

    const pollEl = renderPoll({ userQuestion, optionOne, optionOneCount, optionTwo, optionTwoCount });
    currentPoll.append(pollEl);

}












// function renderOption(option, count) {
//     const optDiv = document.createElement('div');
//     const p = document.createElement('p');
//     const scoreP = document.createElement('p');

//     p.textContent = option;
//     scoreP.textContent = count;

//     optDiv.append(p, scoreP);
//     return optDiv;
// }

// function renderPoll(poll) {
//     const div = document.createElement('div');
//     const question = document.createElement('h4');
//     const optionTwoDiv = renderOption(poll.optionOne, poll.optionOneCount);
//     const optionTwoDiv = renderOption(poll.optionTwo, poll.optionTwoCount);

//     question.textContent = poll.userQuestion;
//     div.classList.add('current-poll-stats');

//     div.append(question, optionOneDiv, optionTwoDiv);
//     return div;
// }

// function displayCurrentPoll() {
//     currentPoll.textContent = '';

//     currentQuestionEl.textContent = userQuestion;
//     currentOptOne.textContent = optionOne;
//     currentOptTwo.textContent = optionTwo;

//     const pollEl = renderPoll({ userQuestion, optionOne, optionOneCount, optionTwo, optionTwoCount });

//     currentPoll.append(pollEl);
// }