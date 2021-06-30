function menu(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active')
}
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
const listaMediana =[
    100,
    200004,
    2000,
    800, 
    43434,
    23,
    234,
    234,
    1235,
    23456,
    234,
    35,
    434534,
    34
]
function calcularMediana (listaMediana){
listaMediana.sort(function(a,b){return a - b;})
const mitadLista = parseInt(listaMediana.length / 2);
let mediana;
function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
if(esPar(listaMediana.length)){
    const elemento1 = listaMediana[mitadLista];
    const elemento2 = listaMediana[mitadLista - 1];

    medianaPar = (elemento1 + elemento2) /2;
    console.log(medianaPar);
}else{
    mediana = listaMediana[mitadLista];
    console.log(mediana);
}
}



// Calculando la moda
function calcularModa(lista1){
    const lista1Count = {};

    lista1.map(
        function (elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    const listaLength = lista1Array.length - 1;
    const moda = lista1Array[listaLength];
    const perro = moda[0];
    const gato = moda [1];
    console.log(`La moda es ${perro} y está ${gato} veces`);
}