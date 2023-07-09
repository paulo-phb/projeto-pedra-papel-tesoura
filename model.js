class jogoModel {
    constructor() {
        this.pontosComputador = 0
        this.pontosJogador = 0
        this.escolhas = ["pedra", "papel", "tesoura"]
    }

    pegarEscolhaComputador() {
        let numeroAleatorio = Math.floor(Math.random() * 3);
        let escolha = this.escolhas[numeroAleatorio];

        return { escolha: escolha, imagem: `images/${escolha}.png` };
    }

    jogarRodada(escolhaJogador, escolhaComputador) {
        let resultado;
        let mensagem;

        if (escolhaJogador === escolhaComputador) {
            resultado = "empatou";
        } else if ((escolhaJogador === "pedra" && escolhaComputador === "tesoura") || (escolhaJogador === "papel" && escolhaComputador === "pedra") || (escolhaJogador === "tesoura" && escolhaComputador === "papel")) {
            resultado = "ganhou";
        } else {
            resultado = "perdeu";
        }

        mensagem = `Computador escolheu ${escolhaComputador}, você ${resultado}!`;

        return { resultado: resultado, mensagem: mensagem };
    }

    atualizarPontos(resultado) {
        if (resultado === "ganhou") {
            this.pontosJogador += 1;
        } else if (resultado === "perdeu") {
            this.pontosComputador += 1;
        }
    }

    verificarFimDoJogo() {
        return this.pontosJogador === 5 || this.pontosComputador === 5;
    }
}