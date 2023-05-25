// let global = 100;

// function externa() {
//     let ext = 10;
//     global++;
//     function Interna() {
//         let inter = 20;
//         console.log(inter, ext, global);
//         ext++;
//         global++;
//     }
//     return Interna;
// }
// let X = externa();
// let Y = externa();
// console.log(X())
// console.log(X())
// console.log(X())
// console.log(Y())

// let pikachu = {
//     nome: "pikachu",
//     especie: "Pikachu",
//     nivel: 1,
//     falar: function () {
//         return `${this.nome} = ${this.nome}`;
//     }
// }

// let charmander = new Object();
// charmander.nome = "Chamander";
// charmander.falar = () => "chaarr";

// console.log(pikachu.nome)
// console.log(pikachu.falar())
// console.log(pikachu.especie)
// console.log(charmander.nome)
// console.log(charmander.falar())

// let pikachu = {
//     nome: "pikachu",
//     nivel: 1,
// }

// for (let attr in pikachu) {
//     console.log(attr + '=' + pikachu[attr]);
// }
// for (let [attr, value] of Object.entries(pikachu)) {
//     console.log(`${attr} = ${value}`);
// }

// function Pokemon(nome, especie, nivel = 1) {
//     this.nome = nome;
//     this.especie = especie;
//     this.nivel = nivel;
//     this.falar = () => `${this.nome} ${this.nome}`;
// }
// let pikachu = new Pokemon("Pikachu", "pikachu")
// let charmander = new Pokemon("Charmander", "charmander", 10)

// console.log(pikachu.nome, `fala: ${pikachu.falar()}`)
// console.log(charmander.nome, charmander.falar())

// class Pokemon {
//     constructor(nome, especie, nivel = 1) {
//         this.nome = nome;
//         this.especie = especie;
//         this._nivel = nivel;
//     }
//     falar = () => `${this.nome} ${this.nome}`;

//     get nivel() { return this._nivel }
//     set nivel(valor) { this._nivel = valor > 0 ? valor : 1 }
// }
// let pikachu = new Pokemon("Pikachu", "pikachu", 0);

// console.log(pikachu.nome, "Falar:", pikachu.falar(), pikachu.nivel)
let one = 3555;

if (one === 3555) {
    let one = 33;
    console.log(one)
}

console.log(one)