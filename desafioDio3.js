class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = null;
    }

    definirAtaque() {
        if (this.tipo === "mago") {
            this.ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";
        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";
        } else {
            this.ataque = "shuriken";
        }
    }

    escrever() {
        this.definirAtaque();
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando ${this.ataque}.`);
    }
}

const nome_idade_tipo = new Heroi("Rick", "23", "mago");
const nome2_idade2_tipo2 = new Heroi("Joseph", "58", "guerreiro");

nome_idade_tipo.escrever();
nome2_idade2_tipo2.escrever();
