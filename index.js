const prompt = require("prompt-sync")();
const crud = require("./Crud.js");

function mostrarMenu() {
  console.log(
    "Bem-vindo às anotações das suas Férias, escolha uma opção:\n1. Criar Férias\n2. Ler minhas Férias\n3. Atualizar Férias\n4. Excluir Férias\n5. Sair"
  );
  let opcao = +prompt("Digite aqui a opção desejada: ");
  return opcao;
}

function processarOperacao(opcao) {
  switch (opcao) {
    case 1:
      crud.lerDados();
      break;
    case 2:
      crud.MostrarDados();
      break;
    case 3:
      crud.AtualizarDados();
      break;
    case 4:
      crud.ExcluirDados();
      break;
    case 5:
      console.log("Saindo...");
      process.exit();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

while (true) {
  let resp = mostrarMenu();
  processarOperacao(resp);
}
