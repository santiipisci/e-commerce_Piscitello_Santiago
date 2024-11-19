let categorias = [
  {
    texto: "Home", href: "/index.html"
  },
  {
    texto: "Perifericos", href: "#"
  },
  {
    texto: "Tarjetas Graficas", href: "#"
  },
  {
    texto: "Procesadores", href: "#"
  },
  {
    texto: "Memorias", href: "#"
  },
  {
    texto: "Discos HDD/SSD", href: "#"
  },
  
]
let header = document.querySelector("header");
let arrayHTML = [];

const email = localStorage.getItem("userEmail");
const quantity = localStorage.getItem("quantity");

let navbar = `
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">SP Componentes</a>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="margin-top: 20px;>
      <div class="offcanvas-body">
          <div class="categorias-lista">
          </div>
          <div class="container-fluid-search">
            <div>
              <input class="input" type="search" placeholder="Buscar" aria-label="Search">
              <button class="search" type="submit">Search</button> 
              <button class="reset" type="submit">X</button> 
            </div>
          </div>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <p class="username" style="color: white;">Te damos la bienvenida ${localStorage.getItem("session")}</p>
    </div>      
    <a href="cart.html"><img height="25" src="cart.png" alt="Comprar"/></a>
        <div>
        ${localStorage.getItem("session")?`<button class="login-des" onclick = "closeSession()">Cerrar sesión</button>`: `<a href="./login.html"><button class="login-des"> Iniciar sesión</button></a>`}
        </div>
    </div>
</nav>
`;

header.innerHTML = navbar

for (let elemen of categorias) {
  arrayHTML.push(`<button class="btncategorias"><a href="${elemen.href}" class="nav-link active">${elemen.texto}</a></button>`)
}

document.querySelector(".categorias-lista").innerHTML=arrayHTML.join("")


function closeSession() {
  localStorage.clear();
  location.href="./index.html";
}


