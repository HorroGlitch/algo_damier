import './style.css'

let number = prompt("Type a number")
const app = document.querySelector(".container");

function damier(num) {
  for (let i = 0; i < num; i++) {
    const ligne = document.createElement("div");
    ligne.classList.add("row");
    app.appendChild(ligne);

    for (let j = 0; j < num; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if ((i+j)%2 === 0) {
      cell.classList.add("black");
    }
    
    ligne.appendChild(cell);
      
    }
  }
}
damier(number);


// let num = prompt("Type a number");

// function prime(nbr) {

//   if (nbr <= 1) {
//     return false;
//   }

//   for (let i = 2; i*i < nbr; i++) {
//     if (nbr%i === 0) {
//       return false;
//     }
//   }

//   return true
  
// }

// prime(num)


// function isTrue(prime) {
// let total = 0
//   if (prime === true) {
//     total+=prime[i]
//   }
// console.log(total)
// }
// isTrue(prime)