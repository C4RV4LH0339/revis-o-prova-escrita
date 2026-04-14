function alterarNome() {
    let trocarNome = document.getElementById("inputNome").value; 
    if (trocarNome === "") {
        alert("Digite um nome")
    } else {
        document.getElementById("nomeUsuario").innerHTML = trocarNome;
    }
}
function alterarCurso() {
    let trocarCurso = document.getElementById("inputNome").value; 
    if (trocarCurso === "") {
        alert("Digite um nome")
    } else {
        document.getElementById("nomeUsuario").innerHTML = trocarCurso;
    }
}
function alterarStatus() {
    let trocarStatus = document.getElementById("inputNome").value; 
    if (trocarStatus === "") {
        alert("Digite um nome")
    } else {
        document.getElementById("nomeUsuario").innerHTML = trocarStatus;
    }
}