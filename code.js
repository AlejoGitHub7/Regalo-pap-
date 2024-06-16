const cabecera = document.getElementById("cabecera")
const TituloIngresar = document.getElementById("Titulo2")
const Inputs = document.getElementById("Inputs")
const Obtener = document.getElementById("Obtener")
const error = document.getElementById("error")
const d1 = document.getElementById("Digito1")
const d2 = document.getElementById("Digito2")
const d3 = document.getElementById("Digito3")
const d4 = document.getElementById("Digito4")
const premio = document.getElementById("premio")
let d1value
let d2value
let d3value
let d4value

function Comienzo(){
    cabecera.classList.add("inactive")
    TituloIngresar.classList.toggle("inactive")
    Inputs.classList.toggle("inactive")
    Obtener.classList.toggle("inactive")

}

function comparar(){
    if(d1value == 8 && d2value == 5 && d3value == 2 && d4value == 1){
        premio.classList.toggle("inactive")
        TituloIngresar.classList.add("inactive")
        Inputs.classList.add("inactive")
        Obtener.classList.add("inactive")

    }else{
        error.classList.toggle("inactive")
    }
}

function obtenerValores(){
    d1value = d1.value
    d2value = d2.value
    d3value = d3.value
    d4value = d4.value
    comparar()
}