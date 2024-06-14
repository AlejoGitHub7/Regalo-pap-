const cabecera = document.getElementById("cabecera")
const TituloIngresar = document.getElementById("Titulo2")
const Inputs = document.getElementById("Inputs")
const Obtener = document.getElementById("Obtener")

function Comienzo(){
    cabecera.classList.add("inactive")
    TituloIngresar.classList.toggle("inactive")
    Inputs.classList.toggle("inactive")
    Obtener.classList.toggle("inactive")

}