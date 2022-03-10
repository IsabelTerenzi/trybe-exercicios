let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  //exercicio 1
  console.log('Bem vinda,', info.personagem);

  //exercicio 2
  console.log(info.recorrente);

  //exercicio 3
  for (chaves in info){
      console.log(chaves);
  }

  //exercicio 4
  for (chaves in info) {
      console.log (info[chaves]);
  }

  //exercicio 5
  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota: 'O último MacPatinhas',
      recorrente: 'Sim',
  }
  console.log (info.personagem, 'e', info2.personagem);
  console.log (info.origem, 'e', info2.origem);
  console.log (info.nota, 'e', info2.nota);
  console.log ('Ambos recorrentes');

  //exercicio 6
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Askaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };
let primeiroLivro = leitor.livrosFavoritos[0];
let segundoLivro = leitor.livrosFavoritos[1];
  console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', primeiroLivro.titulo);

  //exercicio 7
console.log(leitor.name, 'tem 2 livros favoritos', ':', primeiroLivro.titulo, 'e', segundoLivro.titulo);