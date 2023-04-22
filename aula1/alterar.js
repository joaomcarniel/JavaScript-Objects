const pessoa = {
    nome: "Suzana",
    profissao: "Engenheira"
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = "3322110022"

console.log(pessoa.telefone);

pessoa.nome = "Suzana Silva";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro"
};

pessoa = novaPessoa