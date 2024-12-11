// PRODUCTOS
const productos = [
    // computador
    {
        id: "computador-01",
        titulo: "computador 01",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121618383_01/w=1500,h=1500,fit=pad",
        categoria: {
            nombre: "computador",
            id: "computador"
        },
        precio: 1500000
    },
    {
        id: "computador-02",
        titulo: "computador 02",
        imagen: "https://pcmatplus.com/wp-content/uploads/2021/04/20W55AAABA-1.png",
        categoria: {
            nombre: "computador",
            id: "computador"
        },
        precio: 1800000
    },
    {
        id: "computador-03",
        titulo: "computador 03",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaf4IV2RrD4cOd4P8Um1SGNtashzUGsd-eyQ&s",
        categoria: {
            nombre: "computador",
            id: "computador"
        },
        precio: 2500000
    },
    // celular
    {
        id: "celular-01",
        titulo: "celular 01",
        imagen: "https://compucentro.co/wp-content/uploads/PORTATIL-HP-14-CF2514LA-INTEL-CORE-I3-10110U-RAM-4GB-SSD-256GB.webp",
        categoria: {
            nombre: "celular",
            id: "celular"
        },
        precio: 8500000
    },
    {
        id: "celular-02",
        titulo: "celular 02",
        imagen: "https://co-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/5/153H6LT-1_T1679058838.png",
        categoria: {
            nombre: "celular",
            id: "celular"
        },
        precio: 4000000
    },
    {
        id: "celular-03",
        titulo: "celular 03",
        imagen: "https://co-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/K/6K2C7LA-1_T1696951339.png",
        categoria: {
            nombre: "celular",
            id: "celular"
        },
        precio: 19000000
    },
    // accesorios
    {
        id: "accesorios-01",
        titulo: "accesorios 01",
        imagen: "https://co-media.hptiendaenlinea.com/catalog/product/cache/314dec89b3219941707ad62ccc90e585/7/M/7MD68A-1_T1702914342.png",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 6000000
    },
    {
        id: "accesorios-02",
        titulo: "accesorios 02",
        imagen: "https://impresoras.com.co/wp-content/uploads/2023/10/Impresora-HP-LaserJet-Pro-MFP-M3103fdw-Inicio-I-impresoras.com_.co_.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 7500000
    },
    {
        id: "accesorios-03",
        titulo: "accesorios 03",
        imagen: "https://megacomputer.com.co/wp-content/uploads/2023/12/impresora-multifuncional-4103-toner-original-151A.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 3500000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}