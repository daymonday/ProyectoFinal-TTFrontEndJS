import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";
export const agregarAlCarrito=(producto)=>{
    const carrito=obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito➕");
}
export const eliminarProducto=(indice)=>{
    const carrito=obtenerCarrito();
    // remove one item at the given index
    carrito.splice(indice, 1,);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado del carrito ➖");
}
export const vaciarCarrito=()=>{
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito eliminado ✔️");
}