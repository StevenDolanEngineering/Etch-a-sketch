let numOfDivs = 16;

function createGrid(num) {

    let totalSquares  = Math.pow(num, 2);

    let boxSize = 960 / num;

    const gridSize = document.getElementById('container');

    for (let i = 0; i < totalSquares; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'box';
        newDiv.style.width = `${boxSize}px`;
        newDiv.style.height = `${boxSize}px`;
        newDiv.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'black';
        });
        gridSize.appendChild(newDiv);
    }
}

function makeNewGrid() {
    const gridSize = document.getElementById('container');
    gridSize.innerHTML = '';
    let newNumber = parseInt(prompt('How large would you like to make your grid size? '));
    createGrid(newNumber);
}

createGrid(numOfDivs);

const btn = document.querySelector('#btn');

btn.addEventListener('click', makeNewGrid);