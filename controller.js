// controller

class jogoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    iniciar() {
        this
            .view
            .addClickEventToButtons((selecaoJogador) => {
                this.playGame(selecaoJogador);
            });
    }

    playGame(selecaoJogador) {
        let escolhaComputador = this
            .model
            .pegarEscolhaComputador();
        let resultado = this
            .model
            .jogarRodada(selecaoJogador, escolhaComputador.escolha);

        this
            .view
            .destacarResutado(resultado.resultado);

        this
            .model
            .atualizarPontos(resultado.resultado);
        this
            .view
            .atualizarPlacar(this.model.pontosJogador, this.model.pontosComputador);

        if (this.model.verificarFimDoJogo()) {
            this.acabarJogo();
        }
    }

    acabarJogo() {
        if (this.model.pontosJogador > this.model.pontosComputador) {
            this
                .view
                .mostrarMensagem("Ganha Quem Chegar Primeiro em 5 pontos. JOGADOR GANHOU!");
            this
                .view
                .textoResultado
                .classList
                .add("ganhou");
        } else {
            this
                .view
                .mostrarMensagem("Ganha Quem Chegar Primeiro em 5 pontos. COMPUTADOR GANHOU!");
            this
                .view
                .textoResultado
                .classList
                .add("perdeu");
        }

        this.model.pontosJogador = 0;
        this.model.pontosComputador = 0;
        this
            .view
            .atualizarPlacar(this.model.pontosJogador, this.model.pontosComputador);
    }
}
