let categoria = "Productos"
document.querySelector("h1").innerText = categoria

let array = [];

for (let i = 1; i < 6; i++) {
  const prod = `
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="imagen ${i}"
     style="object-fit: cover; width: 100%; height: 150px;"
     >
      <div class="card-body d-flex flex-column">
        <p class="card-text">
          Producto ${i}
        </p>
        <button class="btn btn-primary" type="button">
              <a href="producto.html" style="color: rgb(49, 43, 43); text-decoration: none;">Ver más</a>
          </button>
      </div>    
    </div>`;
  array.push(prod);
}

document.querySelector(".container").innerHTML = array.join('');