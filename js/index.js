const container = document.getElementById("container");
products.forEach( i => {
   const container_item = document.createElement("div");
   container_item.classList.add("container_item");
   container_item.innerHTML=`
    <h2>${i.title}</h2>
    <p id =>${i.price}</p>
    <img src="${i.thumbnail}" alt="${i.title}">
   `
   container.appendChild(container_item);
});