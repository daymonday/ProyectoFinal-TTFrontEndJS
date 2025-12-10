import {agregarAlCarrito} from "./funcionesCarrito.js";
import {obtenerCarrito} from "./storage.js";
import {actualizarContador} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    actualizarContador(obtenerCarrito()); // Actualiza el contador al cargar la página
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = fetch("./data/productos.json").then((res)=>{
        if(!res.ok){
            throw new Error(`Error HTTP Status:${res.status}`);
        }
    return res.json();
    }).then((data)=>{
        data.forEach(producto => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta-producto");

            const img = document.createElement("img");
            img.alt = producto.nombre;
            img.src = `./${producto.img}`;

            const titulo = document.createElement("p");
            titulo.textContent = producto.nombre;

            const precio = document.createElement("p");
            precio.textContent = `$${producto.precio}`;

            const boton = document.createElement("button");
            boton.classList.add("boton");
            boton.textContent = "Agregar al carrito";
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);
                });


                tarjeta.appendChild(img);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(boton);
                contenedor.appendChild(tarjeta);
            });
        })
        .catch((err) => console.error(err));
});