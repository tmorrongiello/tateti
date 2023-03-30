
let index = Math.floor(Math.random() * 9)

const p1 = document.querySelectorAll("button")[0]
const p2 = document.querySelectorAll("button")[1]

const Tablero = {
    casilleros: [".c1",".c2",".c3",".c4",".c5",".c6",".c7",".c8",".c9"],
    gameboard : [{
        
    }]
}

const Player1 = {};
const Player2 = {};

function mainGame(){
    if(document.querySelector(".c1").innerText && document.querySelector(".c2").innerText && document.querySelector(".c3").innerText == "x")
    {
        console.log("Hola")
    }
};


p1.addEventListener('click', () => console.log("ABC"))
p2.addEventListener('click', () => document.querySelector(Tablero.casilleros[index]).innerText = "O")

mainGame()




// Declarar Ejes Ganadores!!