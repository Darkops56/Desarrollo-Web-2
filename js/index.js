let products = [
     {name:"heladera", precio:2323,stock: 10},
     {name:"teclado", precio:2323,stock: 8},
     {name:"laptop", precio:2323, stock: 5}
]

for (let index = 0; index < products.length; index++) {
    console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
}
products.pop();

for (let index = 0; index < products.length; index++) {
    console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
}