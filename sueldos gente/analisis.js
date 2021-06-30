
function esPar(numerito){
    return (numerito % 2 === 0);
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


const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);
const salariosColSorted = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([parseInt(personitaMitad1), parseInt(personitaMitad2)]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


// Mediana del top 10%
const spliceStart = (salariosColSorted.length * (100 - 10)) /100;
const spliceCount = (salariosColSorted.length * (100 - 1))/ 100;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log({
    medianaGeneralCol,
    medianaTop10Col
})