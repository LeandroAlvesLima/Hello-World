let nomeUsuario = prompt("Qual é o seu nome?");
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuario == ""){
 nomeUsuario = prompt("Qual é o seu nome?")
}
if(nomeUsuario == null){
    elemento.textContent = "Seja muito bem vindo.";
}else{
    elemento.textContent = nomeUsuario;
}

