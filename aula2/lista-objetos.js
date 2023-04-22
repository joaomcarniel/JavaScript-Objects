const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1155555550"],
};

cliente.enderecos = [
    {
        rua: "R. Josh Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
    }
];
// Método push para inserir algo dependendo do array, nesse caso estamos inserindo um endereço
cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false
});
// link em JS
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(cliente.enderecos);
console.log(listaApenasApartamentos);
