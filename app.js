/**
 * Jogo do Dado
 * @author Caio Castro
 */

//              [0]     [1]     [2]     [3]     [4]     [5]
let faces = ["face1","face2","face3","face4","face5","face6",]

let dado = faces[Math.floor(Math.random() * 6)]
console.log(dado)
let captura = document.getElementById('face') //DOM
//A linha abaixo adiciona uma TAG a div indentificada como face
captura.innerHTML = `<img src="./img/${dado}.png">`
