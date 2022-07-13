const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const reset = document.getElementById('reset');

let container = document.getElementById('container');
let int = document.getElementById('num');
let cont = 0;

mais.addEventListener('click', function(){
    cont++;
    int.innerHTML = cont;
    checkNum(cont)
})

menos.addEventListener('click', function(){
    cont--;
    int.innerHTML = cont;
    checkNum(cont)
})

reset.addEventListener('click', function(){
    cont = 0;
    int.innerHTML = cont;
    container.style.backgroundColor = "gray";
})

function checkNum(cont){
    if(cont < 0){
        cont = 0;
        int.innerHTML = cont;
        alert('Limite atingido');
    }

    if(cont > 10){
        cont = 10;
        int.innerHTML = cont;
        alert('Limite atingido');
    }

    if(cont % 2 != 0){
        container.style.backgroundColor = "teal";
    }
    else if(cont == 0){
        container.style.backgroundColor = "gray";
    }
    else{
        container.style.backgroundColor = "maroon";
    }
}