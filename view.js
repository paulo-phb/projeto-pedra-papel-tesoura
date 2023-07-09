// view

class jogoView {
    constructor() {
        this.pedra = document.querySelector("#pedra");
        this.papel = document.querySelector("#papel");
        this.tesoura = document.querySelector("#tesoura");
        this.computadorPlacar = document.querySelector("#pontos-computador");
        this.jogadorPlacar = document.querySelector("#pontos-jogador");
        this.textoResultado = document.querySelector("#resultado");
    }

    mostrarMensagem(mensagem) {
        this.textoResultado.textContent = mensagem;
    }

    atualizarPlacar(pontosJogador, pontosComputador) {
        this.jogadorPlacar.textContent = pontosJogador;
        this.computadorPlacar.textContent = pontosComputador;
    }

    destacarResutado(resultado) {
        this
            .textoResultado
            .classList
            .remove("ganhou", "perdeu", "empate");
        this
            .textoResultado
            .classList
            .add(resultado);
    }

    addClickEventToButtons(callback) {
        this
            .pedra
            .addEventListener("click", () => {
                this.addTranscitionStyle(this.pedra);
                callback("pedra");
            });

        this
            .papel
            .addEventListener("click", () => {
                this.addTranscitionStyle(this.papel);
                callback("papel");
            });

        this
            .tesoura
            .addEventListener("click", () => {
                this.addTranscitionStyle(this.tesoura);
                callback("tesoura");
            });
    }

    addTranscitionStyle(element) {
        element
            .classList
            .add("clicado");
        setTimeout(() => {
            element
                .classList
                .remove("clicado");
        }, 100);
    }
}
