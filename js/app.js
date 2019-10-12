//Selecciono el boton
const btnOptions = document.querySelector('.options');
var allTags = document.getElementsByTagName('i');
var bars = allTags[0]
var times = allTags[1]

console.log('Barras: ' + bars + "/times: " + allTags[1])

btnOptions.addEventListener('click', function (){
    document.getElementById('menu').classList.toggle('hide-mobile') //toggle agrega una clase si no existe o quita una clase si esta existe.
    bars.classList.toggle('hide-mobile')
    times.classList.toggle('hide-mobile')
})

