const container = document.querySelector(".container");

const rowsAmountInput = document.querySelector("#row-number");
rowsAmountInput.defaultValue = 16;
let rowsAmount = rowsAmountInput.value;
rowsAmountInput.addEventListener('change', resetCanvas) 

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

const btnReset = document.querySelector("#reset")
btnReset.addEventListener('click', resetCanvas)

function resetCanvas() {
    rowsAmount = parseInt(rowsAmountInput.value);
    if (rowsAmount > 100) rowsAmount = 100;
    document.querySelectorAll('.cell').forEach(e => e.remove())
    createCanvas(rowsAmount)
}

const btnColor = document.querySelectorAll(".button-color");
btnColor.forEach(btn => setBtnColorProperties(btn));
let selectedColor = "black";

function setBtnColorProperties(btn) {
    btn.style["background-color"] = `${btn.id}`;
    btn.addEventListener('click', () => {
        for (let i = 0; i < btnColor.length; i++) {
            btnColor[i].textContent = '';
        }
        if (btn.id === "white" || btn.id === "yellow") {
            btn.style["color"] = "black";
        } else btn.style["color"] = "white";
        btn.textContent = '✔';
        selectedColor = `${btn.id}`;
    });
}

function colorCell(selectedCell) {
    selectedCell.style["background-color"] = selectedColor;
}
