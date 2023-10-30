// prelevo elemento html
const gridElem = document.querySelector(".grid");

const bombs = arrayBombs(100);
console.log(bombs);
let gameOver = false;

// ciclo for 

 for (let i = 1; i < 100; i++) {
        const cell = generateGridCell(i + 1);
        cell.addEventListener("click", eventClick);
        gridElem.appendChild(cell);
 }



//******************************+
//           FUNZIONI 
//******************************* 


// genera una cella della griglia e aggiunge il numero come contenuto 
function generateGridCell(cellNumber) {
    const cellElem = document.createElement("div");
    cellElem.classList.add("cell");
    cellElem.textContent = cellNumber;
   
    return cellElem;
}


// aggiunge un evento al click della cella (cambia colore )
function eventClick() {
    if(gameOver) {
        const result = document.querySelector("h4");
        result.innerHTML = `<h4 class="result">Hai vinto!</h4>`

        return;
    }

    const clickNumber = parseInt(this.textContent);
    console.log(clickNumber);
    this.classList.add("blue");  
    console.log(bombs.includes(clickNumber))

 if (bombs.includes(clickNumber)) {
    this.classList.add("red");
    const result = document.querySelector("h4")
    result.innerHTML = `<h4 class="result">Hai perso</h4>`
    console.log(result)
    
    gameOver = true;
 }

}

// genera numero random  
function generateNumberRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

