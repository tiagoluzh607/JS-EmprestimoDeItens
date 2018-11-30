var tabela;

//Inicia a Tabela 
$(document).ready(function() {
    tabela = $('#example').DataTable( {
        data: [],
        columns: [
            { title: "Item" },
            { title: "Data de Emprestimo" },
            { title: "Nome" },
            { title: "Data de Devolucao" }

        ]
    } );
} );

function adicionaRegistro(linha){
    tabela.row.add(linha).draw(false);
}

//Pegar Elementos Da Tela
//Chamar a funcao adiciona com os campos da tela