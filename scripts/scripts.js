let container = document.querySelector(".container")

for (let i = 0; i<16; i++){
    column = document.createElement("div");
    column.className = 'column';
    container.appendChild(column);
    for (let j = 0; j<16; j++){
        row = document.createElement("div");
        row.className = 'row';
        column.appendChild(row);
    }
}
