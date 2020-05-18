var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;
var rodadaJogo = 0;
// Math.random() = [0-1), o *6  é para o intervalo ir de 1 a 5(pois nunca chega no 6) por isso se soma o +1

var botaoLancarDado =  document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

var pontuacaoRodadas = [pontuacaoRodada0,pontuacaoRodada1];
var pontuacaoGlobais = [pontuacaoGlobal0,pontuacaoGlobal1];

var fimDeJogo = function(){
    if(pontuacao[0]>pontuacao[1])
        alert ("Jogador 1 Venceu!!");
    else if(pontuacao[0]<pontuacao[1])
        alert ("Jogador 2 Venceu!!");
    else if(pontuacao[0] == pontuacao[1])
        alert ("TEMOS UM EMPATE!");
    jogoNovo();
}
var juiz = function(){
    rodadaJogo ++;
    if(rodadaJogo>1)
        fimDeJogo();
    else
        alert("Trocando Jogador");
}

var jogoNovo = function(){
    pontuacao = [0,0];
    pontuacaoRodadas[0].textContent = pontuacaoRodadas[1].textContent = 0;
    pontuacaoGlobais[0].textContent = pontuacaoGlobais[1].textContent = 0;
    jogadorAtual = Math.floor(Math.random() * 2);
    rodadaJogo = 0;
    alert("Nova Partida");
}
botaoLancarDado.addEventListener("click", function (){
    var dado = Math.floor(Math.random() * 6) + 1;
    if(dado == 1){
        pontuacao[jogadorAtual] = 0;
        pontuacaoRodadas[jogadorAtual].textContent = 0;
        pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
        juiz();
    }
    else{
        pontuacao[jogadorAtual] += dado;
        pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacaoRodadas[jogadorAtual].textContent = dado;
    }
});

botaoPassarVez.addEventListener("click", function(){
    jogadorAtual = 1 - jogadorAtual;
    juiz();
});

botaoNovoJogo.addEventListener("click",jogoNovo);

