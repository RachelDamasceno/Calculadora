function inserir(num) {
  document.querySelector(".tela").innerHTML += num;
}
function limpar() {
  document.querySelector(".tela").innerHTML = " ";
}
function apagar(num) {
  let apagar = document.querySelector(".tela").innerHTML;
  document.querySelector(".tela").innerHTML = apagar.substring(
    0,
    apagar.length - 1
  );
}

function resultado() {
  let resultado = document.querySelector(".tela").innerHTML;

  if (resultado) {
    document.querySelector(".tela").innerHTML = eval(resultado);
  } else {
    document.querySelector(".tela").innerHTML = "0 comandos";
  }
  verificarValorTela();
}

function verificarValorTela() {
  let telaFuncao = document.querySelector(".tela");
  let valorTela = Number(telaFuncao.innerHTML);
  let imagemGoku = document.getElementById("imagem-goku");

  if (valorTela >= 8000) {
    imagemGoku.src = "Imagem/goku.gif";
  } else {
    imagemGoku.src = "Imagem/esfera-dragrao.png";
  }
}
