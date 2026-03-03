// Criação da classe Heroi
class Heroi {
    // O construtor é executado quando um novo herói é criado
    // Ele recebe nome, idade e tipo como parâmetros
    constructor(nome, idade, tipo) {
        this.nome = nome;     // Define o nome do herói
        this.idade = idade;   // Define a idade do herói
        this.tipo = tipo;     // Define o tipo do herói (mago, guerreiro, monge ou ninja)
    }

    // Método atacar, responsável por mostrar a forma de ataque do herói
    atacar() {
        // Variável que vai armazenar o tipo de ataque
        let ataque = "";

        // Estrutura de decisão para definir o ataque de acordo com o tipo do herói
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        // Exibe a mensagem final no console
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando objetos (instâncias) da classe Heroi
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Arthur", 30, "guerreiro");
const heroi3 = new Heroi("Lee", 25, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();