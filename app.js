

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

const endPollButtEL = document.querySelector('.end-poll-button');
const pastPolls = document.querySelector('.past-polls-container');



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

// voting event listeners
optOnePlus.addEventListener('click', () => {
    optionOneCount++;
    displayCurrentPoll();
});

optOneMinus.addEventListener('click', () => {
    optionOneCount--;
    displayCurrentPoll();
});

optTwoPlus.addEventListener('click', () => {
    optionTwoCount++;
    displayCurrentPoll();
});

optTwoMinus.addEventListener('click', () => {
    optionTwoCount--;
    displayCurrentPoll();
});

endPollButtEL.addEventListener('click', () => {
    currentPoll.textContent = '';
    displayAllPolls();
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

    question.textContent = `Question: ${poll.userQuestion}`;
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

function displayAllPolls() {
    pastPolls.textContent = '';
    const div = renderPoll({ userQuestion, optionOne, optionOneCount, optionTwo, optionTwoCount }); 
    div.classList.add('past-poll');
    pastPolls.append(div);
}