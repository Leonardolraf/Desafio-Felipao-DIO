const prompt = require("prompt-sync")();

// Função para ler um número inteiro válido
function lerNumero(mensagem) {
    let numero;

    while (true) {
        numero = Number(prompt(mensagem));

        if (!isNaN(numero) && numero >= 0 && Number.isInteger(numero)) {
            return numero;
        }

        console.log("Valor inválido. Digite um número inteiro maior ou igual a 0.");
    }
}

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para definir o nível do herói com base nas vitórias
function definirNivel(vitorias) {
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// Função principal para processar os dados do jogador
function calcularRankeadas(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = definirNivel(vitorias);

    return {
        saldoVitorias,
        nivel
    };
}

// Função para exibir o resultado final
function exibirResultado(saldoVitorias, nivel) {
    console.log(`\nO Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}\n`);
}

// Programa principal com laço de repetição
function iniciarPrograma() {
    console.log("======================================");
    console.log("   CALCULADORA DE PARTIDAS RANKEADAS  ");
    console.log("======================================\n");

    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        const nomeHeroi = prompt("Digite o nome do herói: ");
        const vitorias = lerNumero("Digite a quantidade de vitórias: ");
        const derrotas = lerNumero("Digite a quantidade de derrotas: ");

        const resultado = calcularRankeadas(vitorias, derrotas);

        exibirResultado(resultado.saldoVitorias, resultado.nivel);

        continuar = prompt("Deseja calcular outro herói? (s/n): ");
        console.log();
    }

    console.log("Programa encerrado. Até a próxima!");
}

// Chamada da função principal
iniciarPrograma();