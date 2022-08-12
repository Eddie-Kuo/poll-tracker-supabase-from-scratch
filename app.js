

const inputForm = document.querySelector('.input-section');

let userQuestion = '';
let optionOne = '';
let optionTwo = '';

inputForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const data = new FormData(inputForm);

    userQuestion = data.get('user-question');
    optionOne = data.get('option-one');
    optionTwo = data.get('option-two');

    inputForm.reset();
    console.log(userQuestion, optionOne, optionTwo);

});