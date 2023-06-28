// const PEDRA = "pedra";
// const PAPEL = "papel";
// const TESOURA = "tesoura";

// function escolhaRandomica() {
//     return [PEDRA, TESOURA, PAPEL][Math.floor(Math.random() * 3)];
// }

// class Jogador {
//     constructor(nome = "npc") {
//         this.nome = nome;
//         this.vitorias = 0;
//         this._escolha = null;
//     }
//     get escolha() { return this._escolha };
//     set escolha(valor) { this._escolha = [PEDRA, PAPEL, TESOURA].includes(valor) ? valor : PEDRA };
// }

// const p1 = new Jogador("Jogador");
// const npc = new Jogador();

// npc.escolher = function () {
//     this.escolha = escolhaRandomica();
// };

// ((nome = "Jogador") => console.log(`Seja Bem vindo ${nome}. A partida vai começar`))(p1.nome);

// console.log('É sua Vez Digite:')
// console.log("P -> Pedra")
// console.log("T -> Tesoura")
// console.log("L -> Papel")

// function verificaEscolha(escolha) {
//     switch (escolha) {
//         case 'P':
//             return PEDRA;
//         case "T":
//             return TESOURA;
//         case "L":
//             return PAPEL;
//         default:
//             return false;
//     }
// }

// const deuEmpate = (escolhaJogador, escolhaNPC) => escolhaJogador == escolhaNPC;

// const venceu = function (escolhaJogador, escolhaNPC) {
//     if ((escolhaJogador == PEDRA && escolhaNPC == TESOURA) ||
//         (escolhaJogador == TESOURA && escolhaNPC == PAPEL) ||
//         (escolhaJogador == PAPEL && escolhaNPC == PEDRA)
//     ) {
//         return true;
//     }
//     return false
// }

// const imprimeResultado = (vitoriasJogador, vitoriasNPC) => {
//     if (vitoriasJogador > vitoriasNPC) {
//         console.log(`Parabens vc venceu a melhor de 3, jogador: ${vitoriasJogador} Npc: ${vitoriasNPC}`);
//     }
//     else {
//         console.log(`Infelizmente vc Perdeu a melhor de 3. jogador: ${vitoriasJogador} Npc: ${vitoriasNPC}`);
//     }
// }

// do {
//     p1.escolha = PEDRA;
//     npc.escolher();

//     if (deuEmpate(p1.escolha, npc.escolha)) {
//         console.log(`Empate. vc e o computador escolheram ${p1.escolha}`);
//     } else {
//         const venci = venceu(p1.escolha, npc._escolha);
//         const resultado = venci ? "venceu" : "perdeu";
//         venci ? p1.vitorias++ : npc.vitorias++;
//         console.log(`vc ${resultado}. vc escolheu ${p1.escolha} e o computador escolheu ${npc.escolha}`)
//     }
// }
// while (Math.max(p1.vitorias, npc.vitorias) < 3);

// imprimeResultado(p1.vitorias, npc.vitorias);
////////////////////////////////////////////////////////////////////////////////////
class Jogador {
    constructor(nome = "npc") {
        this.nome = nome;
        this.vitorias = 0;
        this._escolha = null;
    }
    get escolha() { return this._escolha };
    set escolha(valor) { this._escolha = [PEDRA, PAPEL, TESOURA].includes(valor) ? valor : PEDRA };
}

class Game {
    constructor() {
        this.P1Vitorias = 0;
        this.npcVitorias = 0;
        this.p1 = new Jogador("Jogado");
        this.npc = new Jogador();
    }

    iniciar() {

    }
    escolher(escolha) {
        this.p1.escolha = escolha;
    }

    npcEscolher() {
        this.npc.escolha = [PEDRA, TESOURA, PAPEL][Math.floor(math.random() * 3)];
    }

    deuEmpate() {
        return this.p1.escolha === this.npc.escolha;
    }

    venceu() {
        if ((this.P1.escolha == PEDRA && this.npc.escolha == TESOURA) ||
            (this.P1.escolha == TESOURA && this.npc.escolha == PAPEL) ||
            (this.P1.escolha == PAPEL && this.npc.escolha == PEDRA)
        ) {
            this.P1Vitorias++;
            return true;
        }
        this.npcVitorias++;
        return false
    }

    acabou() {
        return Math.max(this.P1Vitorias, this.npcVitorias) > 2;
    }

    reiniciar() {
        this.npcVitorias = 0;
        this.P1Vitorias = 0;
    }

    atualizarPlacar() {

    }
}

class UI {
    constructor(game) {
        this.divApresentacao = document.getElementById("apresentacao");
        this.btnComecar = document.getElementById("comecar");
        this.spanP1Score = document.getElementById("p1_score");
        this.spanNPCScore = document.getElementById("npc_score");
        this.divPlacar = document.getElementById("placar");
        this.imgP1 = document.getElementById("p1_escolha");
        this.imgNPC = document.getElementById("npc_escolha");
        this.divMensagem = document.getElementById("mensagem");
        this.btnPedra = document.getElementById("pedra");
        this.btnTesouro = document.getElementById("tesoura");
        this.btnPapel = document.getElementById("papel");
        this.game = game;

        this.btnComecar.addEventListener("click", () => this.btnComecar());

        this.btnPedra.addEventListener("click", () => this.escolher(PEDRA));
        this.btnTesoura.addEventListener("click", () => this.escolher(TESOURA));
        this.btnPapel.addEventListener("click", () => this.escolher(PAPEL));

        this.game.iniciar();
    }

    comecar() {
        this.divApresentacao.setAttribute("class", "invisible");
        this.reiniciarMensagem();
    }

    atualizarMensagem(mensagem, append = true) {
        if (append) {
            const novaLinha = document.createElement("br");
            this.divMensagem.appendChild(novaLinha);
            this.divMensagem.appendChild(document.createTextNode(mensagem));
        } else {
            this.divMensagem.textContent = mensagem;
        }
    }

    mostrarEscolha(opcao, player) {
        player.setAttribute("src", `img/${opcao}.png`);
        player.setAttribute("class", "visible");
    }

    esconderEscolhas() {
        this.imgNPC.setAttribute("class", "invisible");
        this.imgP1.setAttribute("class", "invisible");
    }

    atualizarPlacar() {
        if (this.game.deuEmpate()) {
            this.divPlacar.setAttribute("class", "alert-secondary");
            this.atualizarMensagem("que Azar, deu empate!", false);
        } else if (this.game.venceu) {
            this.divPlacar.setAttribute("class", "alert-success");
            let scoreAtual = parseInt(this.spanP1Score.textContent);
            scoreAtual++;
            this.spanP1Score.textContent = scoreAtual;
            this.atualizarMensagem("Parabens você ganhou!", false);
        } else {
            this.divPlacar.setAttribute("class", "alert-danger");
            let scoreAtual = parseInt(this.spanNPCScore.textContent);
            scoreAtual++;
            this.spanNPCScore.textContent = scoreAtual;
            this.atualizarMensagem("Infelizmente vc perdeu!", false);
        }
    }
}