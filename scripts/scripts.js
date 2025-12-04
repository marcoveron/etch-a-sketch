let container = document.querySelector(".container")

let newGridButton = document.querySelector("button");

for (let i = 0; i<16; i++){
    column = document.createElement("div");
    column.className = 'column';
    container.appendChild(column);
    for (let j = 0; j<16; j++){
        row = document.createElement("div");
        row.className = 'row';
        row.addEventListener("mouseover", (event) => [event.target.style.backgroundColor = "white", event.target.style.border = "1px solid white"])
        column.appendChild(row);
    }
}

let newGridSize = 0;

function insertGrid(size) { 

    if (size >= 100) {
        size = 100;
    }

    let columns = document.querySelectorAll(".column");
    let rows = document.querySelectorAll(".row");

    for (x of columns) {
        x.remove();
    }

    for (y of rows) {
        y.remove();
    }

    let width = 500/(size);

    for (let i = 0; i<size; i++){
        column = document.createElement("div");
        column.className = 'column';
        container.appendChild(column);
        for (let j = 0; j<size; j++){
            row = document.createElement("div");
            row.className = 'row';
            row.style.width = `${width}px`;
            row.style.height = `${width}px`;
            row.addEventListener("mouseover", (event) => [event.target.style.backgroundColor = "white", event.target.style.border = "1px solid white"])
            column.appendChild(row);
        }
    }
}

newGridButton.addEventListener("click", () => insertGrid(newGridSize = window.prompt("Please enter the new size of your grid")));


