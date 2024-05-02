// tipo de dato string
// let nombre = "mara"; 
// Tipo de dato Numeros
// let numero = 30;
// tipo de dato booleano
// let bool = true;
// let falso = false;
// tipo de dato undefined
// let indefinido;
// tipo de dato undefined
// let nulo = null;
// constantes "const" son valores predefinidos inreasignables
// console.log permite mostrar en la consola una variable escrita y definida
 
// let nombre = "onla";
// let apellido = "mamá";
// let fullname = `mi nombre es ${nombre} ${apellido}`;
// console.log(fullname);

// if, else, else if.

// let nombreProducto = "heladera";
// let precioUnitario = 10;
// let cantidadDeseada = prompt("Ingrese la Cantidad de heladeras que quiera");
// let costoFinal = precioUnitario * cantidadDeseada;
// alert(costoFinal);

// let lloviendo = true;
// let nublado = true;
// let pronostico = true;

// if(!lloviendo || nublado && pronostico){
//     console.log("Lleva un paraguas");
// }else{
//     console.log("no lleves paraguas");
// }
// let nombreProducto = prompt("ingrese el nombre del producto")
// let precioUnitario = 10
// let cantidadDeseada = prompt("ingrese la cantidad de productos")
// let costoFinal = cantidadDeseada * precioUnitario
// if( cantidadDeseada >= 5){
//     console.log(costoFinal * (10/100));
// }else{
//     console.log(costoFinal);
// }
// console.log(area(3, 5));
// function area (base, altura){
//     result = base * altura;
//     return result;
// }
// const areaDeunRectangulo = (base, altura) => {
//     result = base * altura
//     return result
// }
// console.log(areaDeunRectangulo(3,5));



// const totaldevocales = (vocales) => {
//     vocales = prompt("ingrese una palabra")
//     let result = vocales.match(/[aeiou]/gi).length
//     return result
// }
// console.log(totaldevocales());

// console.log(palabraReves());

// function palabraReves ( word ) {
//     word = prompt("Ingrese palabra")
//     let result = word.split("").reverse().join("")
//     return result
// }

function sumarProductos (precioUnitario , cantidadDeseada){
    cantidadDeseada = prompt("ingrese la cantidad deseada...");
    precioUnitario = 10;
    Gasto = precioUnitario * cantidadDeseada;
    return Gasto;
}
console.log(sumarProductos());