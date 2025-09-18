
const container = document.querySelector("#container");
const body = document.querySelector("body");
body.appendChild(container);
const gridButton = document.createElement("button");
body.insertBefore(gridButton, container);
gridButton.style.width = "80px";
gridButton.style.height = "20px";
gridButton.textContent = "Edit Grid";


container.style.height = "700px";
container.style.width = "700px";
container.style.alignContent = "center";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";

const numberofSquares = 256;

for (i = 0; i < numberofSquares; i++){
    const square = document.createElement("div");

    square.style.width = "43.75px";
    square.style.height = "43.75px";
    square.style.border = "1px dashed rgba(0, 0, 0, 0.1)";
    square.style.boxSizing = "border-box";

    container.appendChild(square);
}

const divs = document.querySelectorAll("#container div");

divs.forEach((hover) => {
    hover.addEventListener("mouseenter", () => {
        hover.style.background = `hsl(${Math.random() * 350}, 80%, 50%)`
    })

})

gridButton.addEventListener("click", () => {
    let userPrompt = prompt("Enter number of squares per side:");
    userPrompt = parseInt(userPrompt);
    if (userPrompt > 100) {
        alert("Grid should be at most 100 squares.");
        
    }

    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    container.style.flexDirection = "column";
    const containerSize = 700; //in px
    const squareSize = (containerSize / userPrompt) + "px";
    const totalSquares = userPrompt * userPrompt;

    if (userPrompt < 101) {
    for (i = 0; i < totalSquares; i++){
    const square = document.createElement("div");

    square.style.width = squareSize;
    square.style.height = squareSize;
    square.style.border = "1px dashed rgba(0, 0, 0, 0.1)";
    square.style.boxSizing = "border-box";
    square.style.padding = "0";
    square.style.margin = "0";

    container.appendChild(square);

    }
}

    const newGrid = document.querySelectorAll("#container div");
    newGrid.forEach((hovering) => {
        hovering.addEventListener("mouseenter", () => {
        hovering.style.background = `hsl(${Math.random() * 360}, 80%, 40%)`
        })

    })

    

})