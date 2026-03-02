// ===============================
// Desafio: Classificador de Nível de Herói
// Conceitos usados:
// - Variáveis
// - Operadores
// - Laço de repetição
// - Estruturas de decisão
// ===============================

const prompt = require("prompt-sync")();

// Lista de heróis cadastrados no sistema
let herois = [
    { nome: "Arthas", xp: 850 },
    { nome: "Luna", xp: 1800 },
    { nome: "Kael", xp: 3200 }
];

// Função para calcular o nível do herói com base no XP
function calcularNivel(xp) {
    let nivel = "";

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return nivel;
}

// Função para procurar herói pelo nome
function buscarHeroiPorNome(nome) {
    for (let i = 0; i < herois.length; i++) {
        if (herois[i].nome.toLowerCase() === nome.toLowerCase()) {
            return i; // retorna a posição do herói no vetor
        }
    }
    return -1; // não encontrado
}

let opcao = "";

while (opcao !== "5") {
    console.log("\n======================================");
    console.log("      SISTEMA DE HERÓIS");
    console.log("======================================");
    console.log("1 - Cadastrar herói");
    console.log("2 - Verificar herói");
    console.log("3 - Listar heróis");
    console.log("4 - Atualizar XP de herói");
    console.log("5 - Sair");

    opcao = prompt("Escolha uma opção: ").trim();

    if (opcao === "1") {
        let nome = prompt("Digite o nome do herói: ").trim();
        let xp = Number(prompt("Digite a quantidade de XP do herói: ").trim());

        if (nome === "" || isNaN(xp) || xp < 0) {
            console.log("Dados inválidos. Tente novamente.");
        } else {
            let indice = buscarHeroiPorNome(nome);

            if (indice !== -1) {
                console.log(`O herói "${nome}" já está cadastrado no sistema.`);
            } else {
                herois.push({ nome: nome, xp: xp });
                let nivel = calcularNivel(xp);
                console.log(`O Herói de nome ${nome} foi cadastrado com sucesso.`);
                console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
            }
        }

    } else if (opcao === "2") {
        let nomeBusca = prompt("Digite o nome do herói que deseja verificar: ").trim();
        let indice = buscarHeroiPorNome(nomeBusca);

        if (indice !== -1) {
            let heroi = herois[indice];
            let nivel = calcularNivel(heroi.xp);

            console.log("\nHerói encontrado no sistema:");
            console.log(`Nome: ${heroi.nome}`);
            console.log(`XP: ${heroi.xp}`);
            console.log(`Nível: ${nivel}`);
            console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}.`);
        } else {
            console.log(`O herói "${nomeBusca}" não foi encontrado no sistema.`);
        }

    } else if (opcao === "3") {
        if (herois.length === 0) {
            console.log("Nenhum herói cadastrado no sistema.");
        } else {
            console.log("\nLista de heróis cadastrados:");
            for (let i = 0; i < herois.length; i++) {
                let nivel = calcularNivel(herois[i].xp);
                console.log(`${i + 1} - Nome: ${herois[i].nome} | XP: ${herois[i].xp} | Nível: ${nivel}`);
            }
        }

    } else if (opcao === "4") {
        let nomeAtualizar = prompt("Digite o nome do herói que deseja atualizar: ").trim();
        let indice = buscarHeroiPorNome(nomeAtualizar);

        if (indice !== -1) {
            let novoXp = Number(prompt("Digite o novo valor de XP: ").trim());

            if (isNaN(novoXp) || novoXp < 0) {
                console.log("XP inválido.");
            } else {
                herois[indice].xp = novoXp;
                let novoNivel = calcularNivel(novoXp);

                console.log(`XP do herói "${herois[indice].nome}" atualizado com sucesso.`);
                console.log(`O Herói de nome ${herois[indice].nome} está no nível de ${novoNivel}.`);
            }
        } else {
            console.log(`O herói "${nomeAtualizar}" não foi encontrado no sistema.`);
        }

    } else if (opcao === "5") {
        console.log("Encerrando o sistema...");

    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}