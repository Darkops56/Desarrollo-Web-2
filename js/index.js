const container_movies = document.getElementById("container_movies");
const container_cart = document.getElementById("container_cart");
const clear_cart = document.getElementById('clear_cart')
const counter_cart = document.getElementById('counter_cart')
const Cart = [];

clear_cart.addEventListener('click',ClearCart)

getProducts();
function getProducts() {
   products.forEach(item => {
      let productos = document.createElement("div");
      productos.classList.add('card');
      productos.innerHTML = `
         <h1 class = "title">${item.title}</h1>
         <img src="${item.thumbnail}">
         <p class = "precio">${item.price}</p>
         <button class = "carts" value = "${item.id}">Añadir al carrito</button>
      `

      container_movies.appendChild(productos);
   });
}

const productsID = document.querySelectorAll(".carts");
   productsID.forEach(item => {
      item.addEventListener("click", AddToCart);
   });
function AddToCart(event) {
   const IdProduct = event.target.value;
   const product = products.find(item => item.id == IdProduct);
   if (product) {
      Cart.push(product);
      counter_cart.innerText = Cart.length;
      console.log(Cart);
      mostarCart(product);
   }
}
function mostarCart(product) {
   const cart_product = document.createElement("div");
   cart_product.classList.add("cart_product");
   cart_product.innerHTML = `
      <h2 class = "title">${product.title}</h2>
      <img src="${product.thumbnail}">
      <p>${product.price}</p>
      <button class = "item_cart" value = "${product.id}">Eliminar</button>
   `
   const Eliminar = cart_product.querySelector(".item_cart");
   Eliminar.addEventListener ('click', removeItemCart)

   container_cart.appendChild(cart_product);
}
function ClearCart() {
   cart.length = 0;
   counter_cart.innerText = cart.length;
   container_cart.innerHTML = '';
}
function removeItemCart(event) {
   const IdProduct = event.target.value;
   const indice = Cart.findIndex(item => item.id == parseInt(IdProduct));
   if (indice !==1) {
      Cart.splice (indice, 1);
      counter_cart.innerText = cart.length;
      container_cart.innerHTML = '';
      Cart.forEach (item => {
         mostarCart(item);
      })
   }
}



const modal = document.getElementById('modal');

const closeBtn = document.querySelector('.close');

counter_cart.addEventListener('mouseover', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});