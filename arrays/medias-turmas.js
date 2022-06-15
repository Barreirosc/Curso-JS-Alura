let salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
let salaJava = [6, 5, 8, 9, 5, 6]
let salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
  let somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
  return somaDasNotas / notasDaSala.length
}

console.log(`Média das sala de JavaScript: ${mediaSala(salaJS)}`)
console.log(`Média das sala de Java: ${mediaSala(salaJava)}`)
console.log(`Média das sala de Python: ${mediaSala(salaPython)}`)

// Médias com reduce
let notas = [10, 6.5, 8, 7]

let media = Math.round(
  notas.reduce((acum, atual) => atual + acum, 0) / notas.length
)
console.log(`Média ${media}`)
