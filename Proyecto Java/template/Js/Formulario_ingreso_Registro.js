//Programacion de transicion de ambos formularios
const signUpButton=document.getElementById("signUp"); //Boton de registro
const signInButton=document.getElementById("signIn"); //Boton de inicio de sesion
const container=document.getElementById("container"); //Contenedor de los formularios
const boost=document.getElementById("boost");
//Programar eventpo click, mostrar form de registro
signUpButton.addEventListener("click",() =>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
//Programar evento click, mostrar form de inicio de sesion
signInButton.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
});
//Mostrar Contraseña
function mostrarSeña(){
    var tipo = document.getElementById("seña");
    if(tipo.type=="password"){
        tipo.type="text";
    }else{
        tipo.type="password";
    }
}