const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const reset = document.getElementById('reset');

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

if(cont = '2'){
    alert("2");
}
