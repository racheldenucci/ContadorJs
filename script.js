const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const reset = document.getElementById('reset');
const change = document.getElementById('changeColor');
let container = document.getElementById('container');

let int = document.getElementById('num');
let cont = 0;

mais.addEventListener('click', function(){
    cont++;
    int.innerHTML = cont;
})

menos.addEventListener('click', function(){
    cont--;
    int.innerHTML = cont;
})

reset.addEventListener('click', function(){
    cont = 0;
    int.innerHTML = cont;
    container.style.backgroundColor = "cornflowerblue";
})

change.addEventListener('click', function(){
    container.style.backgroundColor = "red"; 
})

