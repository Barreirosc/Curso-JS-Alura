let nomes = ['João Paulo', 'Gabriel', 'Rafaela', 'Vilma']
let notas = [7, 4.5, 8, 7, 9]

let reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)
