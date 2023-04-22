const clientes = require("./cliente.json");

function FiltrarApartamentoSemComplemento(lista){
    return  lista.filter((cliente) => {
        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = FiltrarApartamentoSemComplemento(clientes);

console.log(filtrados);