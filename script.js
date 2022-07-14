let container = document.querySelector("#container");

let rowClass = document.querySelectorAll('.row');

let number = prompt("Please enter desired dimension");

let reset = document.querySelector(".reset");

function createGrid(number){
i = number;
j = number;


 for (let i = 0; i < number; i++) {
  let row =document.createElement('div');
  row.classList.add('row')
  container.appendChild(row);





  for (j = 0; j< number; j++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', (event)=>{cell.classList.add("moused")});
    row.appendChild(cell);
  }




}


  
}



let resetter = document.querySelector(".reset");

resetter.addEventListener('click', function (){
console.log("clicked.")

let allCells = document.querySelectorAll("div > .cell");
allCells.classList.remove("moused");


});

createGrid (number);





