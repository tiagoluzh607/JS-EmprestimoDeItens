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
let inputItem = document.querySelector("#inputItem");
let inputDataDeEmprestimo = document.querySelector("#inputDataDeEmprestimo");
let inputNome = document.querySelector("#inputNome");
let inputDataDeDevolucao = document.querySelector("#inputDataDeDevolucao");

//Chamar a funcao adiciona com os campos da tela

function adicionaEmprestimo(){

    var emprestimo = {
        item: 'caderno',
        dataEmprestimo: '30/11/2018',
        nome: 'mateus',
        dataDevolucao: '28/05/2019'
    }
    
    adicionaRegistro( [ emprestimo.item, emprestimo.dataEmprestimo, emprestimo.nome, emprestimo.dataDevolucao ] );

}


