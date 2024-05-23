let producto = {
    name: 'camiseta', precio: 1043, stock: 3
};
console.log(`Nombre: ${producto.name} - Precio: ${producto.precio} - Stock: ${producto.stock}`);

producto.name = 'Zapatillas'

console.log(`Nombre: ${producto.name} - Precio: ${producto.precio} - Stock: ${producto.stock}`);

producto["Categoria"] = "Calzado"

console.log(`Nombre: ${producto.name} - Precio: ${producto.precio} - Stock: ${producto.stock} Categoria: ${producto.Categoria}`);
