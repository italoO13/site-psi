// variaveis globais
const hamburguer = document.querySelector(".nav-hamburguer");
const menu = document.querySelector(".nav")
const acordeon = document.querySelectorAll(".titulo-acordeon")

// Funções

function showMenu () {

    if (menu.className.indexOf("show-menu")>-1) {
        menu.classList.remove("show-menu");
    } else {
        menu.classList.add("show-menu");
    }

}

function ShowAcordeon (event) {
    // const conteudoAcordeon = document.querySelectorAll(".texto-conteudo");
    // for (let index = 0; index<conteudoAcordeon.length;index+=1){
    //     if (conteudoAcordeon[index].classList.contains("selecionado")===true) {
    //         conteudoAcordeon[index].classList.remove("selecionado");
    //     }
    // }

    if (event.target.classList.contains("titulo-acordeon")==true) {
        if (event.target.nextElementSibling.classList.contains("selecionado")===true) {
            event.target.nextElementSibling.classList.remove("selecionado");
            event.target.lastElementChild.className="bx bx-chevron-down"
        }else {
            event.target.nextElementSibling.classList.add("selecionado");
            event.target.lastElementChild.className="bx bx-chevron-up"
        }
    }
}

// Eventos

hamburguer.addEventListener("click",showMenu)

for (let index = 0; index< acordeon.length;index+=1){
    acordeon[index].addEventListener("click",ShowAcordeon)

}

// for (let index = 0; index<acordeon[0].children.length;index+=1){
//     acordeon[index].children[0].addEventListener("click",ShowAcordeon)

// }

