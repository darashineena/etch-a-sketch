const container = document.querySelector(".container")
const maxShrinkWidth = container.offsetWidth;
let rowsAmount = 16;

for (let i = 0; i < rowsAmount ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.cssText = `flex-basis: 40px`;
    cell.addEventListener('mouseover', () => {  //also on click?
        colorCell(cell)
    });
    container.appendChild(cell);
}

function colorCell(selectedCell) {
    selectedCell.style.cssText = "flex-basis: 40px; background-color: blue";
}
