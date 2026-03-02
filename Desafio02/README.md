# Calculadora de Partidas Rankeadas

Projeto desenvolvido para o desafio **Calculadora de Partidas Rankeadas**, com foco na aplicação prática dos fundamentos iniciais de lógica de programação e JavaScript.

## Objetivo

Criar uma função capaz de receber a quantidade de **vitórias** e **derrotas** de um jogador, calcular o **saldo de partidas ranqueadas** e determinar o **nível do herói** com base na quantidade de vitórias.

Ao final, o programa deve exibir a seguinte mensagem:

> **O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}**

---

## Conceitos aplicados

Este projeto foi construído utilizando os principais conceitos solicitados no desafio:

- **Variáveis**
- **Operadores**
- **Laços de repetição**
- **Estruturas de decisão**
- **Funções**

### Destaque principal: Funções

O projeto foi organizado com ênfase em **funções**, tornando o código mais limpo, reutilizável e fácil de manter. Cada parte da lógica foi separada em responsabilidades específicas, como:

- leitura e validação de dados;
- cálculo do saldo de vitórias;
- definição do nível do herói;
- exibição do resultado final.

---

## Regras de classificação

O nível do herói é definido de acordo com o número de vitórias:

| Vitórias    | Nível    |
| ----------- | -------- |
| até 10      | Ferro    |
| 11 a 20     | Bronze   |
| 21 a 50     | Prata    |
| 51 a 80     | Ouro     |
| 81 a 90     | Diamante |
| 91 a 100    | Lendário |
| 101 ou mais | Imortal  |

> **Observação:** para evitar que o valor **10** fique sem classificação, foi adotada a regra **até 10 = Ferro**.

---

## Lógica do projeto

O programa segue o fluxo abaixo:

1. solicita o nome do herói;
2. solicita a quantidade de vitórias;
3. solicita a quantidade de derrotas;
4. calcula o saldo com a fórmula:

```text
saldo = vitorias - derrotas
```

5. identifica o nível do herói com base na quantidade de vitórias;
6. exibe a mensagem final na tela;
7. permite repetir a execução para novos heróis.

---

## Estrutura das funções

### `lerNumero(mensagem)`
Responsável por ler e validar números inteiros maiores ou iguais a zero.

### `calcularSaldo(vitorias, derrotas)`
Recebe vitórias e derrotas, retornando o saldo ranqueado.

### `definirNivel(vitorias)`
Recebe a quantidade de vitórias e retorna o nível correspondente.

### `calcularRankeadas(vitorias, derrotas)`
Centraliza a lógica principal do desafio, retornando saldo e nível.

### `exibirResultado(nomeHeroi, saldoVitorias, nivel)`
Exibe a mensagem final formatada ao usuário.

### `iniciarPrograma()`
Controla o fluxo principal do programa e o laço de repetição para novas consultas.

---

## Código-fonte

```javascript
const prompt = require("prompt-sync")();

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

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

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

function calcularRankeadas(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = definirNivel(vitorias);

    return {
        saldoVitorias,
        nivel
    };
}

function exibirResultado(nomeHeroi, saldoVitorias, nivel) {
    console.log(`\nO Herói ${nomeHeroi} tem de saldo de ${saldoVitorias} está no nível de ${nivel}\n`);
}

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

        exibirResultado(nomeHeroi, resultado.saldoVitorias, resultado.nivel);

        continuar = prompt("Deseja calcular outro herói? (s/n): ");
        console.log();
    }

    console.log("Programa encerrado. Até a próxima!");
}

iniciarPrograma();
```

---

## Como executar o projeto

### 1. Clone ou baixe o projeto
Salve o arquivo principal como `index.js`.

### 2. Inicialize o Node.js no projeto

```bash
npm init -y
```

### 3. Instale a dependência necessária

```bash
npm install prompt-sync
```

### 4. Execute o programa

```bash
node index.js
```

---

## Exemplo de execução

```text
======================================
   CALCULADORA DE PARTIDAS RANKEADAS
======================================

Digite o nome do herói: Arthas
Digite a quantidade de vitórias: 75
Digite a quantidade de derrotas: 20

O Herói Arthas tem de saldo de 55 está no nível de Ouro
```

---

## Aprendizados demonstrados

Com este desafio, foi possível praticar:

- organização de código em funções;
- validação de entrada de dados;
- uso de operadores aritméticos e lógicos;
- aplicação de estruturas condicionais para classificação;
- uso de laços de repetição para controle do fluxo;
- construção de uma solução simples, funcional e bem estruturada.

---

## Melhorias futuras

Como evolução do projeto, podem ser adicionadas funcionalidades como:

- cadastro de múltiplos heróis em lista;
- ranking automático entre jogadores;
- versão com interface web em HTML, CSS e JavaScript;
- armazenamento dos dados em arquivo JSON;
- exibição de estatísticas adicionais.

---

## Autor

Desenvolvido para fins educacionais no contexto do **bootcamp de lógica de programação**.

