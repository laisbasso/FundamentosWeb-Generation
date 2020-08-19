let nome = window.document.getElementById("nome")
let email = window.document.querySelector("#email")
let assunto = window.document.getElementById("assunto")
let msg = window.document.getElementById("msg")

function validaNome(){
    let txtNome = document.getElementById("txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
    }
}

function validaEmail(){
    let txtEmail = document.getElementById("txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = "green"
    }
}
