// Create the divs for the grid
const grid = document.querySelector(".Grid");
for (var row = 0; row < 16; row++)
{
    const cDiv = document.createElement('div');
    cDiv.classList.add('row');
    for (var column = 0; column < 16; column++)
    {
        const div = document.createElement('div');
        cDiv.appendChild(div);
        div.classList.add('cell');
    }
    grid.appendChild(cDiv);
}
console.log("Hello");