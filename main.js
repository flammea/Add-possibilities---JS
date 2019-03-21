const possibilities = ['Doceń małe sukcesy', 'Zacznij od nowa'];
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.clean');
const showAdviceBtn = document.querySelector('.showAdvice');
const showPossibilityBtn = document.querySelector('.showOptions');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

console.log(showAdviceBtn, showPossibilityBtn)

const addPossibility = (e) => {
    e.preventDefault();
    if (input.value !== '') {
        possibilities.push(input.value);
        input.value = '';
        console.log(possibilities);
        alert('Dodano ' + input.value)
    }
}

const resetPossibilities = (e) => {
    e.preventDefault()
    possibilities.length = 0;
    h1.textContent = '';
}

const showPossibilities = () => {
    alert(possibilities.join(', '))
}

const showAdvice = () => {
    const index = Math.floor(Math.random() * possibilities.length);
    h1.textContent = possibilities[index];
}

addBtn.addEventListener('click', addPossibility);
resetBtn.addEventListener('click', resetPossibilities);
showPossibilityBtn.addEventListener('click', showPossibilities);
showAdviceBtn.addEventListener('click', showAdvice)