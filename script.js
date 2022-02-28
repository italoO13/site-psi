// variaveis globais
const hamburguer = document.querySelector(".nav-hamburguer");
const menu = document.querySelector(".nav")

// Funções

function showMenu () {

    if (menu.className.indexOf("show-menu")>-1) {
        menu.classList.remove("show-menu");
    } else {
        menu.classList.add("show-menu");
    }

}


// Eventos

hamburguer.addEventListener("click",showMenu)


