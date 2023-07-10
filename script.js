// Elementos HTML pegos por meio do DOM.
const pedra = document.querySelector("#pedra");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");
const computadorPlacar = document.querySelector("#pontos-computador");
const jogadorPlacar = document.querySelector("#pontos-jogador");
const textResultado = document.querySelector("#resultado");
const escolhas = ["pedra", "papel", "tesoura"];

//Pontuação do JOGO
let pontosComputador = 0;
let pontosJogador = 0;


//Função que pega a escolha do jogador
function pegarEscolhaComputador() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolha = escolhas[numeroAleatorio];
    
    let escolhaComputador = {
      escolha: escolha,
      image: `images/${escolha}.png`
    };
  
    return escolhaComputador;
  }
  

//Função que roda uma partida do Jogo
function jogarRodada(escolhaJogador, escolhaComputador) {
    let resultado;
    let mensagem;

    // LÓGICA DO JOGO.

    // Se a escolha do jogador for igual a escolha do computador, retorna a mensagem "empate!"(empate).
    if (escolhaJogador === escolhaComputador) {
        resultado = "empatou";

        textResultado.classList.remove("perdeu", "ganhou");
    // Se não, compara a escolha do jogador e a escolha do computador, caso a escolha do computador seja uma condição de vitória, resultado recebe "perdeu", caso contrário resultado = "ganhou".
    } else {
        if (escolhaJogador === "pedra" && escolhaComputador === "tesoura") {
            resultado = "ganhou";
            
            textResultado.classList.remove("perdeu", "empate");
            textResultado.classList.add("ganhou");
        } else if (escolhaJogador === "papel" && escolhaComputador === "pedra"){
            resultado = "ganhou";
            
            textResultado.classList.remove("perdeu", "empate");
            textResultado.classList.add("ganhou");
        } else if (escolhaJogador === "tesoura" && escolhaComputador === "papel") {
            resultado = "ganhou";

            textResultado.classList.remove("perdeu", "empate");
            textResultado.classList.add("ganhou");
        } else {
            resultado = "perdeu"

            textResultado.classList.remove("ganhou", "empate");
            textResultado.classList.add("perdeu");
        }
    }
    // Formata a mensagem
    mensagem = `Computador escolheu ${escolhaComputador}, você ${resultado}!`;

    // Mostra a Mensagem via HTML
    textResultado.textContent = mensagem;
    // Mostra a Mensagem no Console
    console.log(mensagem);

    return resultado;
}

// Função para adicionar a transição Verde ao Botão escolhido
function addTranscitionStyle(element){
    // Pega o Elemento escolhido e adiciona a Classe "clicado"
    element.classList.add("clicado");
    // Adiciona um cronometro de 100ms para fazer a próxima instrução
    setTimeout(() => {
        // remove a classe clicado
        element.classList.remove("clicado");
    }, 100);
}

// Função onde inicializa o jogo, recebe o parametro "escolhaSelecionadaJogador";
function jogo(escolhaSelecionadaJogador){
    let mensagem;

    // adiciona as escolhas do jogador e do computador a variaveis
    let escolhaComputador = pegarEscolhaComputador();
    let escolhaJogador = escolhaSelecionadaJogador;

    // Chama a função rodada, onde roda uma partida do JOGO.
    let rodada = jogarRodada(escolhaJogador, escolhaComputador.escolha);

    // Define o jogo em 5 rounds
    if (pontosJogador === 5 || pontosComputador === 5) {
        textResultado.classList.remove("ganhou", "perdeu");
        if (pontosJogador > pontosComputador) {
            textResultado.textContent = "Ganha Quem Chegar Primeiro em 5 pontos. JOGADOR GANHOU!";
            textResultado.classList.add("ganhou");
        } else {
            textResultado.textContent = "Ganha Quem Chegar Primeiro em 5 pontos. COMPUTADOR GANHOU!";
            textResultado.classList.add("perdeu");
        }
        pontosJogador = 0;
        pontosComputador = 0;
        jogadorPlacar.textContent = pontosJogador;
        computadorPlacar.textContent = pontosComputador;
    } else {
        // Verifica o ganhador da partida e atribui um ponto a ele.
        // A função substring() pega uma parte de uma string
        // Verifica se o retorno da função "jogarRodada" iniciar em g(ganhou) ou p(perdeu).
        if (rodada.substring(0, 1) === "g") {
        pontosJogador += 1;
        jogadorPlacar.textContent = pontosJogador;

        } else if(rodada.substring(0, 1) === "p") {
            pontosComputador += 1;
            computadorPlacar.textContent = pontosComputador;
        }
    }
    // Mostra a mensagem no console.
    console.log(`jogador pontos: ${pontosJogador} | computador pontos: ${pontosComputador}`);
}

//se o jogador clicar em algum desses botões o jogo inicia, pegando sua escolha.
pedra.addEventListener("click", () => {
    addTranscitionStyle(pedra);
    jogo("pedra");
});
papel.addEventListener("click", () => {
    addTranscitionStyle(papel);
    jogo("papel")
});
tesoura.addEventListener("click", () => {
    addTranscitionStyle(tesoura);
    jogo("tesoura")
});
