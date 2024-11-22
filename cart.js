let carrito = JSON.parse(localStorage.getItem("cart"));

function getCards() {
  const list = carrito.map(card => `
      <div class="card border shadow-none mb-2">
       <div class="card-body">
        <div class="d-flex align-items-start border-bottom pb-3">
         <div class="me-4">
          <img src="${card.prod.img}" alt="${card.prod.pc_model}" class="img-fluid rounded-start" />
         </div>
         <div class="flex-grow-1 overflow-hidden">
          <h5 class="text-truncate font-size-18">${card.prod.pc_model}</h5>
          <div class="row">
           <div class="col-md-4">
            <div class="mt-3">
             <p class="text-muted mb-2">Precio</p>
             <h5 class="mb-0 mt-2">$${card.prod.price}</h5>
            </div>
           </div>
           <div class="col-md-5">
            <div class="mt-3">
             <p class="text-muted mb-2">Cantidad</p>
             <h5 class="mb-0 mt-2">${card.quantity}</h5>
            </div>
           </div>
           <div class="col-md-3">
            <div class="mt-3">
             <p class="text-muted mb-2">Total</p>
             <h5>$${Math.round(card.prod.price * card.quantity)}</h5>
            </div>
           </div>
           <div class="col-md-2">
            <div class="mt-3">
             <button class="text-muted mb-2 remove-btn" data-id="${card.prod.id}">Eliminar</button>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>`);

  document.querySelector(".purchases").innerHTML = list.join("");

  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
      const id = (button.attributes[1].value);
      console.log(id)
      const existingItemIndex = carrito.findIndex(item => item.prod.id == id);
      console.log(existingItemIndex)
      if (existingItemIndex === -1) return "error"
      carrito.splice(existingItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(carrito))
      location.pathname = location.pathname
      getCards();
    });
  });
}

getCards();

console.log(carrito)