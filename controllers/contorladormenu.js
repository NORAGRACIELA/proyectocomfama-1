//1. TRAIGA LA ETIQUETA QUE QUIERE CONTROLAR
// CREAR UAN VARIABLE QUE ALMACENE LA ETIQUETA)
let menu=document.getElementById("menu")

//DETECTO EL SCROLL O MOVIEMIENTO DE LA VENTANA
window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop==0){

        //menu es transparente
        menu.classList.add("menu")
        menu.classList.remove("menu2")

    }

    else {
        //menu es de color
        menu.classList.add("menu2")
        menu.classList.remove("menu")

    }
})