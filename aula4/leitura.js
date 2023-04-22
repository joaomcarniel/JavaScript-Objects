const dados = require("./cliente.json");

console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(typeof clienteEmString);
console.log(clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);