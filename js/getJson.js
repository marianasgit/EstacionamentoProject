fetch("../js/dados.json")
.then(function(response){
    return response.json();
})
.then(function(json){
    const clientes = json.estacionamento[0].clientes;

    let placeholder = document.querySelector(".trConteudo");
    let out = "";
    for(let cliente of clientes){
        out +=`

                    <td class="TblConteudo">${cliente.nome}</td>
                    <td class="TblConteudo">${cliente.veiculo}</td>
                    <td class="TblConteudo">${cliente.placa}</td>
                    <td class="TblConteudo">${cliente.dataEntrada}</td>
                    <td class="TblConteudo">${cliente.horaSaida}</td>
                    <td class="TblConteudo">
                        <button id="editar">Editar</button>
                    </td>
                    <td class="TblConteudo">
                        <button id="deletar">Deletar</button>
                    </td>       
        `;
    }
    placeholder.innerHTML = out;
}
)