// prelevo elemento html
const gridElem = document.querySelector(".grid");

// ciclo for 

 for (let i = 1; i < 100; i++) {
        const cell = generateGridCell(i + 1)
        cell.addEventListener("click", eventClick)
        gridElem.appendChild(cell)
       
}

// FUNZIONI 

// 
function generateGridCell(cellNumber) {
    const cellElem = document.createElement("div")
    cellElem.classList.add("cell")
    cellElem.textContent = cellNumber
   
    return cellElem;
}

function eventClick() {
    const clickNumber = parseInt(this.textContent)
    console.log(clickNumber)
    this.classList.add("pink")
    

        
    
}

