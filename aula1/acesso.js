const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1111222233",
    email: "andre@dominiio.com"
}

console.log(cliente.nome)
console.log(`Os três primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)