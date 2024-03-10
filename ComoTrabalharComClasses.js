class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`
    );
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(
      `${this.nome} está gerenciando o departamento de ${this.departamento}.`
    );
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

const funcionario = new Funcionario("Ana", 25, "Assistente Administrativo");
const gerente = new Gerente("Carlos", 40, "Gerente de Projetos", "TI");
const desenvolvedor = new Desenvolvedor(
  "Juliana",
  30,
  "Desenvolvedora",
  "Python"
);

funcionario.seApresentar();
funcionario.trabalhar();

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
