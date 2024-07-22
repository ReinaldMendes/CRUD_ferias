const ferias = [];
let data_ferias, atividades_ferias;
const prompt = require("prompt-sync")();

function lerDados() {
  let estado = "adicionar_dia";
  console.log("Digite a data que deseja registar:");
  if (estado === "adicionar_dia") {
    data_ferias = prompt("Data: ");
    estado = "atividade_ferias";
    console.log("Digite as atividades realizadas:");
    atividades_ferias = prompt("Atividades: ");
    estado = "adicionar_data";
    ferias.push({
      data_ferias: data_ferias,
      atividades_ferias: atividades_ferias,
    });
  }
}

function MostrarDados() {
  if (ferias.length === 0) {
    console.log("Nenhuma ferias para se lembrar.");
  } else {
    console.log("Ferias agendadas:");
    for (let datas of ferias) {
      console.log(
        `Data das Férias: ${datas.data_ferias}, Atividades Realizadas: ${datas.atividades_ferias}`
      );
    }
  }
}

function AtualizarDados() {
  console.log("Ferias agendadas:");
  for (let i = 0; i < ferias.length; i++) {
    console.log(
      `${i + 1}. Data das Férias: ${ferias[i].data_ferias}, Atividades Realizadas: ${ferias[i].atividades_ferias}`
    );
  }
  const indice = +prompt("Digite o número da férias que deseja atualizar: ") - 1;
  if (indice >= 0 && indice < ferias.length) {
    const novaData = prompt("Digite a nova data: ");
    const novasAtividades = prompt("Digite as novas atividades: ");
    ferias[indice] = {
      data_ferias: novaData,
      atividades_ferias: novasAtividades,
    };
  } else {
    console.log("Número inválido.");
  }
}

function ExcluirDados() {
  console.log("Ferias agendadas:");
  for (let i = 0; i < ferias.length; i++) {
    console.log(
      `${i + 1}. Data das Férias: ${ferias[i].data_ferias}, Atividades Realizadas: ${ferias[i].atividades_ferias}`
    );
  }
  const indice = +prompt("Digite o número da férias que deseja excluir: ") - 1;
  if (indice >= 0 && indice < ferias.length) {
    ferias.splice(indice, 1);
    console.log("Férias excluídas com sucesso.");
  } else {
    console.log("Número inválido.");
  }
}

module.exports = {
  lerDados,
  MostrarDados,
  AtualizarDados,
  ExcluirDados,
};
