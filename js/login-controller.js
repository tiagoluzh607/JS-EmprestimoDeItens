let inputNome = document.querySelector("#inputNome");
let inputSenha = document.querySelector("#inputSenha");

function logar(){

    let usuario = inputNome.value;
    let senha = inputSenha.value;


    if(usuario == 'admin' && senha == 'admin'){
        console.log('Logado com sucesso');
        window.location.href = "emprestimo.html";
    }else{
        console.log('usuario ou senha invalidos');
    }
}
