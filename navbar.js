let categorias = [
  {
    texto: "Home", href: "/index.html"
  },
  {
    texto: "Producto", href: "/producto.html"
  },
  {
    texto: "Contacto", href: "/contacto.html"
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
                          <ul class="dropdown-menu">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <li><a class="dropdown-item" href="#">Perifericos</a></li>
                            <li><a class="dropdown-item" href="#">Tarjetas Graficas</a></li>
                            <li><a class="dropdown-item" href="#">Procesadores</a></li>
                            <li><a class="dropdown-item" href="#">Memorias</a></li>
                            <li><a class="dropdown-item" href="#">Discos HDD/SSD</a></li>
                            <form class="d-flex mt-3" role="search">
                              <div class="container-fluid">
                                <form class="d-flex" role="search">
                                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                  <button class="btn btn-outline-success" type="submit">Search</button> 
                                  <button onclick="tuCarrito()">🛒 Carrito</button>
                                </form>
                              </div>
                              <hr class="dropdown-divider">
                          </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
              `;

for (let elemen of categorias) {
  arrayHTML.push(`<a class="nav-item" aria-current="page" href=${elemen.href}> ${elemen.texto} </a>`)
}

header.innerHTML = navbar;