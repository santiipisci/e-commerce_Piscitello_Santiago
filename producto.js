class Producto {
    constructor(titulo, detalle, disponibilidad, precio, imagen) {
        this.titulo = titulo
        this.detalle = detalle
        this.disponibilidad = disponibilidad
        this.precio = precio
        this.imagen = imagen
    }
}

let product = new Producto("Alfa Romeo 4C Coupe", "El placer de conducir el Alfa Romeo 4C era el de un superdeportivo. La tracción trasera, el motor central sobrealimentado de 1.75 litros (capaz de entregar hasta 240hp) y la perfecta relación potencia-peso fueron diseñados para garantizar la máxima agilidad y rendimiento de un superdeportivo.", 18, 80.000, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg")
let card2 = `
<div class="card d-flex flex-column align-items-center" style="width: 18rem">
<img src="${prod.imagen}"
alt="imagen ${product.titulo}"
style="object-fit: cover; width: 100%; height: 150px;"
    />
    <div class="card-body d-flex flex-column">

        <p class="card-text">
            | Producto ${product.titulo}
        </p>
        <p class="card-text">
            Producto ${product.detalle}
        </p>
        <p class="card-text">
            | Producto ${product.precio}
        </p>
        <p class="card-text">
            | Producto ${product.stock}
        </p>
    </div>
</div>`;