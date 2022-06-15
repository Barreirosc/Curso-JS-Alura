let listaAlunos = ['João', 'Juliana', 'Caio', 'Ana']

let MediasAlunos = [10, 7, 9, 6]

let listaDeNotasAlunos = [listaAlunos, MediasAlunos]

let exibeNomeNota = nomeDoAluno => {
  if (listaDeNotasAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno)
    return (
      listaDeNotasAlunos[0][indice] +
      ', sua média é ' +
      listaDeNotasAlunos[1][indice]
    )
  } else {
    return 'Aluno não está cadastrado'
  }
}

console.log(exibeNomeNota('João'))
