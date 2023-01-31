// Create the divs for the grid
var mousePress = 0;
var gridSize = 16;

const sliderLabel = document.querySelector(".sizeLabel");
const slider = document.querySelector(".slider");
const grid = document.querySelector(".Grid");


var cells = [];

// Fill the Grid
function createGrid(size)
{
    for (var row = 0; row < size; row++)
    {
        const cDiv = document.createElement('div');
        cDiv.classList.add('row');
        for (var column = 0; column < size; column++)
        {
            const div = document.createElement('div');
            cells.push(div);

            cDiv.appendChild(div);
            div.classList.add('cell');
            // Turn black when mouse is pressed
            div.addEventListener('mousedown', () => {
                mousePress = 1;
                div.classList.add('pressed');
            });
            div.addEventListener('mouseup', () => {
                mousePress = 0;
            })
            div.addEventListener('mouseover', () =>{
                if (mousePress == 1)
                {
                    div.style.backgroundColor = "black";
                }
                
            })
        }
        grid.appendChild(cDiv);
    }
}
// Get apply Button
const apply = document.querySelector('.apply')
apply.addEventListener('click', ()=>{
    const newGridSize = slider.value;
    const rows = document.querySelectorAll(".Grid .row");
    rows.forEach(function (row) {
        grid.removeChild(row);
    });
    createGrid(newGridSize);
});

slider.addEventListener('click', ()=>{
    console.log("Hello");
    sliderLabel.textContent = `${slider.value} x ${slider.value}`;
})
createGrid(gridSize);
console.log("Hello");