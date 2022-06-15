let notasAluno = [10, 9, 8, 7, 6]

let notasAtualizadas = notasAluno.map(nota => (nota == 10 ? nota : ++nota))

console.log(notasAtualizadas)
