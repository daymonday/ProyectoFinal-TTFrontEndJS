import { obtenerCarrito } from "./storage";
import { actualizarContador } from "./ui";
document.addEventListener("DOMContentLoaded",()=> {
    const carrito=obtenerCarrito();
    actualizarContador(carrito);
});