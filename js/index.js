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
let nombreProducto = prompt("ingrese el nombre del producto")
let precioUnitario = 10
let cantidadDeseada = prompt("ingrese la cantidad de productos")
let costoFinal = cantidadDeseada * precioUnitario
console.log(costoFinal);

if( cantidadDeseada >= 5){
    console.log(costoFinal * (10/100));
}else{
    console.log(costoFinal);
}