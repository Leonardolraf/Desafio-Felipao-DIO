# Desafio DIO - Classes de um Jogo

## Descrição

Este projeto foi desenvolvido como parte de um desafio da **DIO (Digital Innovation One)** com o objetivo de praticar conceitos fundamentais de **JavaScript**, especialmente o uso de:

- Variáveis
- Operadores
- Estruturas de decisão
- Funções
- Classes e Objetos

O programa cria uma classe genérica que representa um herói de uma aventura, contendo informações como **nome**, **idade** e **tipo**. Além disso, a classe possui um método chamado **atacar()**, que exibe uma mensagem de ataque de acordo com o tipo do herói.

---

## Objetivo do Desafio

Criar uma classe que represente um herói com as seguintes propriedades:

- `nome`
- `idade`
- `tipo`

E implementar um método:

- `atacar()`

Esse método deve exibir a mensagem no formato:

> o {tipo} atacou usando {ataque}

Sendo que o tipo de ataque depende da classe do herói:

- **mago** → usou **magia**
- **guerreiro** → usou **espada**
- **monge** → usou **artes marciais**
- **ninja** → usou **shuriken**

---

## Tecnologias Utilizadas

- **JavaScript**

---

## Estrutura do Projeto

O projeto é composto por:

- Uma **classe `Heroi`**
- Um **construtor** para definir os atributos do herói
- Um **método `atacar()`** para definir e exibir o ataque conforme o tipo
- Instâncias de heróis para demonstrar o funcionamento

---

## Código

```javascript
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
```

---

## Exemplo de Saída

```bash
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

---

## Conceitos Praticados

Durante o desenvolvimento deste desafio, foram aplicados os seguintes conceitos:

### Classes
A classe `Heroi` funciona como um molde para criar objetos com características semelhantes.

### Objetos
Cada herói criado com `new Heroi(...)` é uma instância da classe.

### Construtor
O método `constructor` inicializa os atributos do objeto no momento da criação.

### Estrutura Condicional
O `if / else if` foi utilizado para verificar o tipo do herói e definir o ataque correspondente.

### Método
O método `atacar()` define o comportamento do herói ao realizar um ataque.

---

## Como Executar

1. Copie o código para um arquivo chamado `index.js`
2. Abra o terminal na pasta do projeto
3. Execute o comando:

```bash
node index.js
```

---

## Aprendizados

Com este projeto, foi possível reforçar conhecimentos sobre:

- Programação orientada a objetos em JavaScript
- Criação de classes e métodos
- Instanciação de objetos
- Uso de condições para controlar comportamentos diferentes

---

## Autor

Projeto desenvolvido como exercício prático da **DIO**.
