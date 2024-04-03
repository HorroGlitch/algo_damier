import './style.css'

const app = document.querySelector(".container");

function damier(num) {
  for (let i = 0; i < num; i++) {
    const ligne = document.createElement("div");
    ligne.classList.add("row")
    app.appendChild(ligne)

    for (let j = 0; j < num; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell")

    if ((i+j)%2 === 0) {
      cell.classList.add("black")
    }
    
    ligne.appendChild(cell)
      
    }
  }
}
damier(9)