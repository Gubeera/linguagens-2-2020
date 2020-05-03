var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;
// Math.random() = [0-1), o *6  é para o intervalo ir de 1 a 5(pois nunca chega no 6) por isso se soma o +1

var botaoLancarDado =  document.querySelector("#botao-lancar-dado");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("pontuacao-global-1");

var pontuacaoRodadas = [pontuacaoRodada0,pontuacaoRodada1];
var pontuacaoGlobais = [pontuacaoGlobal0,pontuacaoGlobal1];

botaoLancarDado.addEventListener("click", function (){
    var dado = Math.floor(Math.random() * 6) + 1;
    if(dado == 1){
        pontuacao[jogadorAtual] = 0;
        pontuacaoRodadas[jogadorAtual].textContent = 0;
        pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual
    }
    else{
        pontuacao[jogadorAtual] += dado;
        pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacaoRodadas[jogadorAtual].textContent = dado;
    }
});