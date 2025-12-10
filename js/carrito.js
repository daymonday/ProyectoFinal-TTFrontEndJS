import {eliminarProducto,vaciarCarrito} from "./funcionesCarrito.js";
import {obtenerCarrito} from "./storage.js";
import {actualizarContador} from "./ui.js";

const renderizarCarrito=()=> {
    const carrito=obtenerCarrito();
    actualizarContador(carrito);

    const contenedor=document.getElementById("contenedor-carrito");
    const divAcciones=document.getElementById("acciones-carrito");
    const resumen=document.getElementById("resumen-carrito");

    contenedor.innerHTML="";
    divAcciones.innerHTML="";
    resumen.innerHTML = "";

    if(!carrito.length){
        const mensaje=document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent="Tu carrito está vacío";
        contenedor.appendChild(mensaje);
        return;
    }
    carrito.forEach((producto,indice)=>{

        const tarjeta=document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        const img=document.createElement("img");
        img.src= `../${producto.img}`;
        img.alt=producto.nombre;

        const titulo = document.createElement("h4");
        titulo.textContent=producto.nombre;

        const precio = document.createElement("p");
        precio.textContent=`$${producto.precio}`;
        
        const btnEliminar=document.createElement("button");
        btnEliminar.classList.add("boton");
        btnEliminar.classList.add("boton-eliminar-carrito");
        btnEliminar.textContent="Eliminar productos ";

        btnEliminar.addEventListener("click",()=>{
            eliminarProducto(indice);
            renderizarCarrito();
        });
    

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(img);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnEliminar);

    contenedor.appendChild(tarjeta);
    });
  
    if (carrito) {
        const total = carrito.reduce((acc, prod) => acc + (Number(prod.precio) || 0), 0);
        const cantidad = carrito.length;

       const tituloResumen = document.createElement('h3'); 
        tituloResumen.textContent = 'Resumen del carrito';

        const precioResumen = document.createElement('p');
        precioResumen.textContent = `Productos: ${cantidad} — Total: $${total}`;

        const btnComprar=document.createElement("button");
        btnComprar.classList.add("boton");
        btnComprar.classList.add("boton-comprar");
        btnComprar.textContent="Finalizar compra";

        const btnVaciar=document.createElement("button");
        btnVaciar.classList.add("boton");
        btnVaciar.classList.add("boton-vaciar-carrito");
        btnVaciar.textContent="Vaciar carrito 🧺";
        btnVaciar.addEventListener("click",()=>{
            vaciarCarrito();
            renderizarCarrito();
        });

        resumen.appendChild(tituloResumen);
        resumen.appendChild(precioResumen);
        resumen.appendChild(btnVaciar);
        resumen.appendChild(btnComprar);
        
    }
};

document.addEventListener("DOMContentLoaded",()=>{
    renderizarCarrito();
})