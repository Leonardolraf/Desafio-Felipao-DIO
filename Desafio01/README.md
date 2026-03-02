# Desafio-Felipao-DIO

# Classificador de Nível de Herói

## Descrição

Este projeto é um sistema simples em **Node.js** para cadastro e gerenciamento de heróis, com base na quantidade de **XP (experiência)** de cada personagem.

O programa funciona no terminal e permite:

- cadastrar heróis;
- verificar os dados de um herói específico;
- listar todos os heróis cadastrados;
- atualizar o XP de um herói;
- classificar automaticamente o nível do herói com base no XP.

Este desafio foi desenvolvido com foco na prática dos conceitos básicos de programação, como:

- variáveis;
- operadores;
- laços de repetição;
- estruturas de decisão;
- funções;
- arrays e objetos.

---

## Funcionalidades

O sistema possui as seguintes opções no menu:

### 1. Cadastrar herói
Permite inserir um novo herói informando:

- **nome**
- **quantidade de XP**

O sistema verifica se o herói já está cadastrado e, caso não esteja, adiciona o personagem à lista.

### 2. Verificar herói
Busca um herói pelo nome e exibe:

- nome;
- XP;
- nível correspondente.

### 3. Listar heróis
Mostra todos os heróis cadastrados no sistema com:

- nome;
- XP;
- nível.

### 4. Atualizar XP de herói
Permite alterar o valor de XP de um herói já cadastrado, recalculando automaticamente seu nível.

### 5. Sair
Encerra a execução do programa.

---

## Regras de Classificação de Nível

O nível do herói é definido de acordo com o XP informado:

| Faixa de XP              | Nível      |
| ------------------------ | ---------- |
| XP menor ou igual a 1000 | Ferro      |
| 1001 a 2000              | Bronze     |
| 2001 a 5000              | Prata      |
| 5001 a 7000              | Ouro       |
| 7001 a 8000              | Platina    |
| 8001 a 9000              | Ascendente |
| 9001 a 10000             | Imortal    |
| acima de 10000           | Radiante   |

---

## Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **prompt-sync** para entrada de dados via terminal

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)

Também será necessário instalar a dependência:

- `prompt-sync`

---

## Instalação

Clone ou copie o arquivo do projeto para sua máquina.

Depois, abra o terminal na pasta do projeto e execute:

```bash
npm install prompt-sync
```

---

## Como Executar

No terminal, rode o seguinte comando:

```bash
node nome-do-arquivo.js
```

Substitua `nome-do-arquivo.js` pelo nome real do arquivo onde o código foi salvo.

Exemplo:

```bash
node index.js
```

---

## Exemplo de Uso

```text
======================================
      SISTEMA DE HERÓIS
======================================
1 - Cadastrar herói
2 - Verificar herói
3 - Listar heróis
4 - Atualizar XP de herói
5 - Sair
Escolha uma opção:
```

---

## Estrutura do Código

O código está dividido em partes principais:

### Lista de heróis
Armazena os heróis cadastrados em um array de objetos:

```javascript
let herois = [
    { nome: "Arthas", xp: 850 },
    { nome: "Luna", xp: 1800 },
    { nome: "Kael", xp: 3200 }
];
```

### Função `calcularNivel(xp)`
Responsável por determinar o nível do herói conforme o XP informado.

### Função `buscarHeroiPorNome(nome)`
Percorre o array de heróis para encontrar um personagem pelo nome, ignorando diferenças entre letras maiúsculas e minúsculas.

### Menu interativo com `while`
Mantém o sistema em execução até que o usuário escolha a opção de sair.

---

## Validações Implementadas

O sistema possui algumas verificações para evitar erros, como:

- impedir cadastro com nome vazio;
- impedir XP negativo;
- impedir valores de XP inválidos;
- evitar cadastro duplicado de heróis;
- informar quando um herói não for encontrado.

---

## Conceitos Trabalhados

Este projeto foi desenvolvido para praticar:

- declaração de variáveis com `let` e `const`;
- uso de arrays e objetos;
- funções;
- condicionais com `if`, `else if` e `else`;
- laço de repetição com `while` e `for`;
- entrada de dados pelo terminal;
- validação de dados;
- manipulação de strings e números.

---

## Possíveis Melhorias Futuras

Algumas melhorias que podem ser implementadas no projeto:

- remover heróis do sistema;
- salvar os dados em arquivo `.json`;
- permitir edição do nome do herói;
- ordenar heróis por XP;
- criar interface gráfica;
- transformar o projeto em API ou aplicação web.

---

## Autor

Projeto desenvolvido como exercício prático para treino de lógica de programação e fundamentos de JavaScript.
