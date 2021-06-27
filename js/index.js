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
    return lado1 + lado2 + base;
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