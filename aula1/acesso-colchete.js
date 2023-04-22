const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1111222233",
    email: "andre@dominiio.com"
}

console.log(cliente["nome"])

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
