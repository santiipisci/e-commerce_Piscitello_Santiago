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

let navbar = `
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">SP Componentes</a>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li>
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <div class="container-fluid">
            <div>
              <input class="input" type="search" placeholder="Search" aria-label="Search">
              <button class="search" type="submit">Search</button> 
              <button class="reset" type="submit">X</button> 
              <button onclick="tuCarrito()">🛒 Carrito</button>
            </div>
          </div>
          <hr class="dropdown-divider">
          <ul class="dropdown-menu categorias-lista">
          </ul>
        </ul>
      </div>
    </div>
  </div>
</nav>
`;

header.innerHTML = navbar

for (let elemen of categorias) {
  arrayHTML.push(`<li><button class="btncategorias"><a href="${elemen.href}" class="nav-link active">${elemen.texto}</a></button></li>`)
}

document.querySelector(".categorias-lista").innerHTML=arrayHTML.join("")


