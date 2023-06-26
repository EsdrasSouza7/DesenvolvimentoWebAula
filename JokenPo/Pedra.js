const Pedra = "pedra";
const Papel = "papel";
const Tesoura = "tesoura";

function escolhaRandomica() {
    return [Pedra, Tesoura, Papel][Math.floor(Math.random() * 3)];
}

class Jogador {
    constructor(nome = "npc") {
        this.nome = nome;
        this.vitorias = 0;
        this._escolha = null;
    }
    get escolha() { return this._escolha };
    set escolha(valor) { this._escolha = [Pedra, Papel, Tesoura].includes(valor) ? valor : Pedra };
}

const p1 = new Jogador("Jogador");
const npc = new Jogador();

npc.escolher = function () {
    this.escolha = escolhaRandomica();
};

((nome = "Jogador") => console.log(`Seja Bem vindo ${nome}. A partida vai começar`))(p1.nome);

console.log('É sua Vez Digite:')
console.log("P -> Pedra")
console.log("T -> Tesoura")
console.log("L -> Papel")

function verificaEscolha(escolha) {
    switch (escolha) {
        case 'P':
            return Pedra;
        case "T":
            return Tesoura;
        case "L":
            return Papel;
        default:
            return false;
    }
}

const deuEmpate = (escolhaJogador, escolhaNPC) => escolhaJogador == escolhaNPC;

const venceu = function (escolhaJogador, escolhaNPC) {
    if ((escolhaJogador == Pedra && escolhaNPC == Tesoura) ||
        (escolhaJogador == Tesoura && escolhaNPC == Papel) ||
        (escolhaJogador == Papel && escolhaNPC == Pedra)
    ) {
        return true;
    }
    return false
}

const imprimeResultado = (vitoriasJogador, vitoriasNPC) => {
    if (vitoriasJogador > vitoriasNPC) {
        console.log(`Parabens vc venceu a melhor de 3, jogador: ${vitoriasJogador} Npc: ${vitoriasNPC}`);
    }
    else {
        console.log(`Infelizmente vc Perdeu a melhor de 3. jogador: ${vitoriasJogador} Npc: ${vitoriasNPC}`);
    }
}

do {
    p1.escolha = Pedra;
    npc.escolher();

    if (deuEmpate(p1.escolha, npc.escolha)) {
        console.log(`Empate. vc e o computador escolheram ${p1.escolha}`);
    } else {
        const venci = venceu(p1.escolha, npc._escolha);
        const resultado = venci ? "venceu" : "perdeu";
        venci ? p1.vitorias++ : npc.vitorias++;
        console.log(`vc ${resultado}. vc escolheu ${p1.escolha} e o computador escolheu ${npc.escolha}`)
    }
}
while (Math.max(p1.vitorias, npc.vitorias) < 3);

imprimeResultado(p1.vitorias, npc.vitorias);