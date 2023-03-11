const container = document.querySelector(".container");

const rowsAmountInput = document.querySelector("#row-number");
rowsAmountInput.defaultValue = 16;
let rowsAmount = rowsAmountInput.value;
rowsAmountInput.addEventListener('change', resetCanvas) 
const button = document.querySelector("#reset")
button.addEventListener('click', resetCanvas)

createCanvas(rowsAmount);

function createCanvas(rowsAmount) {
    for (let i = 0; i < rowsAmount ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style["flex-basis"] = `${640 / rowsAmount}px`;
        cell.addEventListener('mouseover', () => {  //also on click?
            colorCell(cell)
        });
        container.appendChild(cell);
    }
}

function resetCanvas() {
    rowsAmount = parseInt(rowsAmountInput.value);
    if (rowsAmount > 100) rowsAmount = 100;
    document.querySelectorAll('.cell').forEach(e => e.remove())
    createCanvas(rowsAmount)
}

function colorCell(selectedCell) {
    selectedCell.style["background-color"] = "blue";
}
