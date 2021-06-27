console.group("Cuadrado")
function perimetroCuadrado(lado){ 
    return lado * 4;
}
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`)


function areaCuadrado(lado){
    return lado * lado;
}
// console.log(`El area del cuadrado es ${areaCuadrado}cm**2`);
console.groupEnd();


console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    primerLado =parseInt(lado1);
    segundoLado = parseInt(lado2);
    baseTriangulo = parseInt(base);
    return primerLado + segundoLado + baseTriangulo;
}
// console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);


function areaTriangulo(base, altura){
    return (base * altura)/2;
}
// console.log(`El area del triangulo es ${areaTriangulo}cm**2`);
console.groupEnd();


console.group("Circulo");

function perimetroCircunferencia(radio){ 
    return (2 * Math.PI) * radio;
}
// console.log(`El perimetro de la circunferencia es ${perimetroCircunferencia}cm`);


function areaCircunferencia(radio){
   return (radio ** 2) * Math.PI; 
}
// console.log(`El area de la circunferencia es ${areaCircunferencia}cm**2`);
console.groupEnd();



// interaccion con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input = document.getElementById('inputTriangulo');
    const value = input.value;
    const input2 = document.getElementById('inputTriangulo2');
    const value2 = input2.value;
    const input3 = document.getElementById('inputTriangulo3');
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input= document.getElementById('inputTriangulo3');
    const value = input.value;
    const input2 = document.getElementById('inputTriangulo4');
    const value2 = input2.value;
    const area = areaTriangulo(value, value2);
    alert(area);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;
    const perimetro = perimetroCircunferencia(value)
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;
    const area = areaCircunferencia(value)
    alert(area);
}