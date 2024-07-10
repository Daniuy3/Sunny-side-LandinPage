/* Elementos del dom */
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
document.addEventListener("DOMContentLoaded", () =>{

/* Revisar si se da click en el menu pare desplegar */

menu.addEventListener("click", ocultaNav)


/* Funcion que oculta o muestra la nav */
function ocultaNav(){
    if(header.classList.contains("oculto")){
        header.classList.remove("oculto");
        nav.classList.add("oculto");
    } else{
        header.classList.add("oculto");
        nav.classList.remove("oculto");
    }
}

})