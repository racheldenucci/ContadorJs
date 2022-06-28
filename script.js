let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let reset = document.getElementById('reset');

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
})