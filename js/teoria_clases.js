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




// function sumarProductos (precioUnitario , cantidadDeseada){
//     cantidadDeseada = prompt("ingrese la cantidad deseada...");
//     precioUnitario = 10;
//     Gasto = precioUnitario * cantidadDeseada;
//     return Gasto;
// }
// console.log(sumarProductos());





// let contador = 1
// while (contador <= 5){
//     console.log(contador)
//     contador = contador + 1
// }

// let suma = 0;
// let numero = 1;
// while (numero <= 10) {
//     suma += numero //suma = suma + numero
//     numero++ //numero = numero + 1
// }
// console.log("la suma de todos los 10 primero numero es : " + suma);
// parseFloat()
// parseInt()

// for (let num = 1 ; num <= 5 ; num++){
//     console.log();
// }





// let numero;
// do{
//     numero = parseInt(prompt("Ingrese un numero positivo"))
//     console.log(typeof numero);
// } while(numero <= 0 )

//     console.log("el numero que ingresaste es : " + numero);
// const encabezado = document.getElementById("encabezado");

// function createEti (){
//     const h1 = document.createElement("h1")
//     h1.innerText = "hola"
//     h1.className = "red"
//     encabezado.appendChild(h1)
// }
// createEti()



// const frutas = ["Manzana","pera","palta","ananá"]
// console.log(frutas.indexOf("palta"));
// console.log(frutas);
// frutas.push("papa");
// console.log(frutas);

// frutas.push("pera");

// frutas.pop(); // elimina el ultimo
// frutas.shift() //elimina el primero
// frutas.unshift() //agrega al principio de la array

// const nuevasFrutas = frutas.slice(1,3)
// console.log(nuevasFrutas);

// const eliminacion = frutas.splice(1,3);
// console.log(eliminacion);

// let numero = parseInt(prompt("ingrese un numero"))
// console.log(typeof numero);

// let pi = 3.141592
// let modificado = pi.toFixed(2)
// // console.log(modificado);
// let numero = parseInt(prompt("ingrese un numero"))
// if (isNaN(numero)) {
//     console.log(" no es un numero");
// }
// else{
//     console.log("es un numero");
// }

// let date = 2007
// console.log( typeof date);

// let dateModificacion = date.toString()

// console.log( typeof dateModificacion);

// let book = {
//     tittle: 'book',
//     anio: '1749',
//     autor: 'charles'
// }
// let person = {
//     nombre: 'personita',
//     apellido: 'curiosa',
//     age: '21'
// }

// let books = [
//     {
//         tittle: 'book',
//         anio: 1942,
//         autor: 'charles',
//     },
//     {
//         tittle: 'book 2',
//         anio: 1972,
//         autor: 'fabian',
//     },
//     {
//         tittle: 'book 3',
//         anio: 2012,
//         autor: 'esteban'
//     }
// ]

// let book = {
//     tittle: 'book',
//     anio: '1749',
//     autor: 'charles'
// }
// console.log(book);

// book.tittle = 'book 2'

// console.log(book);

// delete book.autor 

// console.log(book);


// let productos = ["refrigerador", "mesa", "sofa"];

// for (let index = 0; index < productos.length; index++) {
//     const element = productos[index];
//     console.log(element);
// }

// for (let index = 0; index < productos.length; index++) {
//     const element = productos[index];
//     console.log(element);
// }



// let products = [
//     {name:"heladera", precio:2323,stock: 10},
//     {name:"teclado", precio:2323,stock: 8},
//     {name:"laptop", precio:2323, stock: 5}
// ]

// //mostrandole al usuario los producto
// for (let index = 0; index < products.length; index++) {
//     console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);

// }
// console.log("----------------------------------------------");
// //simulando la compra
// for (let index = 0; index < products.length; index++) {
//     console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
// }


// let products = [
//      {name:"heladera", precio:2323,stock: 10},
//      {name:"teclado", precio:2323,stock: 8},
//      {name:"laptop", precio:2323, stock: 5}
// ]

// for (let index = 0; index < products.length; index++) {
//     console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
// }
// products.pop();

// for (let index = 0; index < products.length; index++) {
//     console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
// }

// let products = [
//     {name:"heladera", precio:2323,stock: 10},
//     {name:"teclado", precio:2323,stock: 8},
//     {name:"laptop", precio:2323, stock: 5}
// ]

// for (let index = 0; index < products.length; index++) {
//     const element = products[index];
//     let div = document.createElement("div");
//     div.classList.add('border')
//     div.innerHTML = `
//         <div class="ancho">
//             <p>NOMBRE : ${element.name}</p>
//             <p>PRECIO: ${element.precio}</p>
//             <p>STOCK: ${element.stock}</p>
//             <a href="">Comprar</a>
//         </div>
//     `
//     container_padre.appendChild(div)
// }
// 