var btnIdade = document
  .querySelector("#calcular")
  .addEventListener("click", idades);
function idades() {
  var nome = document.getElementById("nome").value;
  var dNasc = document.getElementById("ano-nasc").value;
  var dataNasc = parseInt(dNasc);
  var aAtual = document.getElementById("ano-atual").value;
  var anoAtual = parseInt(aAtual);
  var iEm = document.getElementById("idade-em").value;
  var suaIdadeEm = parseInt(iEm);
  var idadeAtual = anoAtual - dataNasc;
  //Ele podera escolher o ano em que deseja saber sua idade com base em sua data de nascimento
  var idadeSurpresa = suaIdadeEm - dataNasc;

  if (dataNasc == anoAtual || dataNasc > anoAtual) {
    alert("Preencha corretamente, ou voce ainda não nasceu.");
    
  }
  else if (dataNasc == suaIdadeEm) {
    alert("Preencha corretamente");
    
  } else {
    document.getElementById("resultado-paragrafo").textContent =
      nome + ", sua idade atual é " + idadeAtual + " anos.";

    document.getElementById("resultado-input").value =
      nome + ", em " + suaIdadeEm + " , você terá " + idadeSurpresa + " anos.";
  }
}
