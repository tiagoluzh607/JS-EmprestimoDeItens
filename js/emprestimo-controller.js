var dataSet = [
    ["Caderno de Magia", "30/11/2018", "Harry", "25/12/2018"],
    ["Nimbus 2000", "28/11/2018", "Tony Stark", "10/12/2018"]
];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Item" },
            { title: "Data de Emprestimo" },
            { title: "Nome" },
            { title: "Data de Devolucao" }

        ]
    } );
} );