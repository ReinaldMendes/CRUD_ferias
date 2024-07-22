const ferias = [];
let data_ferias, atividades_ferias;
const prompt = require("prompt-sync")();

function lerDados() {
  estado = "adicionar_dia";
  console.log("Digite a data que deseja registar:");
  if (estado === "adicionar_dia") {
    data_ferias = prompt;
    estado = "atividade_ferias";
    console.log("Digite as atividades realizadas:");
  } else if (estado === "atividade_ferias") {
    atividades_ferias = prompt;
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
  estado = "atualizar_ferias";
  console.log("Ferias agendadas:");
  for (let datas of ferias) {
    console.log(
      `Data das Férias: ${datas.data_ferias}, Atividades Realizadas: ${datas.atividades_ferias}`
    );
  }
  console.log("Digite a data das ferias que deseja atualizar:");
}

function ExcluirDados() {
  estado = "excluir_ferias";
  console.log("Digite a data que deseja excluir:");
}

module.exports = {
  lerDados,
  MostrarDados,
  AtualizarDados,
  ExcluirDados,
};
