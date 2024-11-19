let carrito = JSON.parse(localStorage.getItem("cart"))

  function getCards() {
    const list = carrito.map(
      card => `
      <div class="card border shadow-none mb-2">
       <div class="card-body">
        <div class="d-flex align-items-start border-bottom pb-3">
         <div class="me-4">
          <img
           src="${card.img}"
           alt="${card.pc_model}"
           class="img-fluid rounded-start"
          />
         </div>
         <div class="flex-grow-1 overflow-hidden">
          <h5 class="text-truncate font-size-18">${card.pc_model}</h5>
          <div class="row">
           <div class="col-md-4">
            <div class="mt-3">
             <p class="text-muted mb-2">Precio</p>
             <h5 class="mb-0 mt-2">$${card.price}</h5>
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
             <h5>$${card.price * card.quantity}</h5>
            </div>
           </div>
           <div class="col-md-2">
            <div class="mt-3">
             <p class="text-muted mb-2" onclick="removeItem(${card.id})">Eliminar</p>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>`
     );
     document.querySelector(".purchases").innerHTML = list.join("");
    }                  

getCards();
