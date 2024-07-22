const prompt = require("prompt-sync")();
const crud = require("./crud.js");

let atividade = {
  data: {
    dia: [],
    atividade: [],
  },
};

function mostrarMenu() {
  console.log(
    "Bem vindo as anotações das suas Férias, escolha uma opção:\n1. Criar  ferias  \n2. Ler minhas Férias \n3. Atualizar Férias \n4. Excluir Férias\n5. Sair"
  );
  let ferias = +prompt("Digite aqui a opção desejada: ");
  return ferias;
}
function processarOperacao(opcao) {
  if (opcao === 1) {
  } else if (opcao === 2) {
  } else if (opcao === 3) {
  } else if (opcao === 4) {
  } else if (opcao === 5 || opcao == "Sair") {
    console.log("Saindo...");
    process.exit();
  }
}

while (true) {
  let resp = mostrarMenu();
  processarOperacao(resp);
}
