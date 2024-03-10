function cadastrarFuncionario(event) {
  event.preventDefault(); // Impede o envio do formulário

  try {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;

    // Verificando se todos os campos obrigatórios estão preenchidos
    if (!nome || !idade || !cargo) {
      throw new Error("Por favor, preencha todos os campos obrigatórios.");
    }

    const funcionario = new Funcionario(nome, idade, cargo);
    const gerente = new Gerente(nome, idade, cargo, departamento);
    const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
          <p><strong>Funcionário:</strong></p>
          <p>${funcionario.seApresentar()}</p>
          <p>${funcionario.trabalhar()}</p>
          <br>
          <p><strong>Gerente:</strong></p>
          <p>${gerente.seApresentar()}</p>
          <p>${gerente.trabalhar()}</p>
          <p>${gerente.gerenciar()}</p>
          <br>
          <p><strong>Desenvolvedor:</strong></p>
          <p>${desenvolvedor.seApresentar()}</p>
          <p>${desenvolvedor.trabalhar()}</p>
          <p>${desenvolvedor.programar()}</p>
      `;

    limparFormulario();
  } catch (error) {
    exibirErro(error.message);
  }
}

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", cadastrarFuncionario);
