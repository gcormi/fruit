// Correct answers
const correctGrid = [
    ['A', 'P', 'P', 'L', 'E', '', '', '', '', ''],
    ['B', 'A', 'N', 'A', 'N', 'A', '', '', '', ''],
    ['C', 'A', 'R', 'R', 'O', 'T', '', '', '', ''],
    ['T', 'O', 'M', 'A', 'T', 'O', '', '', '', ''],
    ['O', 'R', 'A', 'N', 'G', 'E', '', '', '', ''],
    ['P', 'E', 'A', 'C', 'H', '', '', '', '', ''],
    ['G', 'R', 'A', 'P', 'E', '', '', '', '', ''],
    ['B', 'R', 'O', 'C', 'C', 'O', 'L', 'I', '', ''],
    ['L', 'E', 'M', 'O', 'N', '', '', '', '', ''],
    ['C', 'U', 'C', 'U', 'M', 'B', 'E', 'R', '', '']
];

// Function to generate grid
function generateGrid() {
    const table = document.getElementById('crossword-grid');
    correctGrid.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.addEventListener('input', checkLetter);
            td.appendChild(input);
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

// Function to check answers
function checkAnswers() {
    let correct = true;
    const table = document.getElementById('crossword-grid');
    const cells = table.getElementsByTagName('input');
    for (let i = 0; i < cells.length; i++) {
        const row = Math.floor(i / 10);
        const col = i % 10;
        if (cells[i].value.toUpperCase() !== correctGrid[row][col]) {
            correct = false;
            cells[i].style.backgroundColor = 'red';
        } else {
            cells[i].style.backgroundColor = 'lightgreen';
        }
    }
    if (correct) {
        revealMagicWord();
    }
}

// Function to reveal magic word
function revealMagicWord() {
    const magicWord = "STRAWBERRY";
    document.getElementById('magic-word').innerText = `The magic word is: ${magicWord}`;
}

// Event listener for check button
document.getElementById('check-button').addEventListener('click', checkAnswers);

// Initialize grid
generateGrid();