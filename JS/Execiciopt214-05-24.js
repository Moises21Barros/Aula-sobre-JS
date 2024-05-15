let clientes = [];

const adicionarCliente = (nome) => {
    clientes.push(nome);
};

const exibirClientes = () => {
    if (clientes.length === 0) {
        console.log("Nenhum cliente foi inserido ainda.");
    } else {
        console.log("Lista de clientes:");
        clientes.forEach((cliente, indice) => {
            console.log(`${indice + 1}. ${cliente}`);
        });
    }
};

let continuar = true;
while (continuar) {
    let nomeCliente = prompt("Digite o nome do cliente:");

    if (nomeCliente.trim() !== '') {
        adicionarCliente(nomeCliente);

        let listaClientes = "Clientes inseridos até agora: \n";
        clientes.forEach((cliente, indice) => {
            listaClientes += `${indice + 1}. ${cliente}\n`;
        });

        let resposta = prompt(listaClientes + "Deseja inserir mais um cliente? (sim/não)").toLowerCase();

        if (resposta !== "sim" && resposta !== "s") {
            continuar = false;
        }
    } else {
        console.log("Por favor, insira um nome válido.");
    }
}

exibirClientes(); 