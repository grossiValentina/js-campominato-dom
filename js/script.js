// prelevo elemento html
const gridElem = document.querySelector(".grid");

// ciclo for 

 for (let i = 1; i < 100; i++) {
        const cell = generateGridCell(i + 1);
        cell.addEventListener("click", eventClick);
        gridElem.appendChild(cell);
}



//******************************+
//           FUNZIONI 
//******************************* 

// aggiunge un numero in una cella  
function generateGridCell(cellNumber) {
    const cellElem = document.createElement("div");
    cellElem.classList.add("cell");
    cellElem.textContent = cellNumber;
   
    return cellElem;
}

// aggiunge un evento al click della cella (cambia colore )
function eventClick() {
    const clickNumber = parseInt(this.textContent);
    console.log(clickNumber);
    this.classList.add("blue");   
}

// genera numero random  
function generateNumberRnd(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// genera array di 16 numeri random senza ripetizione 
function arrayBombs(max) {
    const myArray = [];
    while (myArray.length < 16) {
        const rndNunber = generateNumberRnd(1, max);
        if (!myArray.includes(rndNunber)) {
            myArray.push(rndNunber);
        }
        }
        return myArray;
    
}
console.log(arrayBombs(20));