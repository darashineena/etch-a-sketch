const container = document.querySelector(".container");

const rowsAmountInput = document.querySelector("#row-number");
rowsAmountInput.defaultValue = 16;
let rowsAmount = rowsAmountInput.value;
rowsAmountInput.addEventListener('change', resetCanvas);

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
};

const btnReset = document.querySelector("#reset");
btnReset.addEventListener('click', resetCanvas);

function resetCanvas() {
    rowsAmount = parseInt(rowsAmountInput.value);
    if (rowsAmount > 100) rowsAmount = 100;
    if (rowsAmount < 1) rowsAmount = 1;
    document.querySelectorAll('.cell').forEach(e => e.remove());
    createCanvas(rowsAmount);
};

const btnColor = document.querySelectorAll(".button-color");
btnColor.forEach(btn => setBtnColorProperties(btn));
let selectedColor = "black";

function setBtnColorProperties(btn) {
    btn.style["background-color"] = `${btn.id}`;
    btn.addEventListener('click', () => {
        removeCheckmarks();
        if (btn.id === "white" || btn.id === "yellow") {
            btn.style["color"] = "black";
        } else btn.style["color"] = "white";
        btn.textContent = '✔';
        selectedColor = `${btn.id}`;
    });
}

function removeCheckmarks() {
    for (let i = 0; i < btnColor.length; i++) {
        btnColor[i].textContent = '';
    }
}

function colorCell(selectedCell) {
    selectedCell.style["background-color"] = selectedColor;
}

const btnRandomColor = document.querySelector("#random-color");
btnRandomColor.addEventListener('click', randomColor);

function randomColor() {
    removeCheckmarks();
    r = getRandomNumber0to255();
    g = getRandomNumber0to255();
    b = getRandomNumber0to255();
    selectedColor = `rgb(${r}, ${g}, ${b})`;
}

const btnRandomToBlack = document.querySelector("#random-to-black");
btnRandomToBlack.addEventListener('click', randomToBlack);

function randomToBlack() {
    removeCheckmarks();
    let r = getRandomNumber0to255();
    let g = getRandomNumber0to255();
    let b = getRandomNumber0to255();
    let x, y, z;
    let blackening = 0;
    selectedColor = `rgb(${r}, ${g}, ${b})`;
    const cellForRandomToBlack = document.querySelectorAll('.cell');
    cellForRandomToBlack.forEach(cellRandom => {
        cellRandom.addEventListener('mouseover', () => {
            blackening = blackening + 20;
            x = r - blackening;
            y = g - blackening;
            z = b - blackening;
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (z < 0) z = 0;
            if (x === 0 && y === 0 && z === 0) return;
            selectedColor = `rgb(${x}, ${y}, ${z})`;
        });
    });
 }
 
function getRandomNumber0to255(e){
    e = Math.floor(Math.random() * 255);
    return e;
}