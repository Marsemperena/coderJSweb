// La finalidad de esta funcion es ordenar productos segun precio, si son destacados, si estan en stock
// en base a lo que seleccione el usuario en la pagina de productos
function ordenarProductos(lista, criterio){
    let listaOrd = "";

    switch(criterio){
        case "menor":
            listaOrd = lista.sort((a, b) => {return a.precio - b.precio});
            break;
        case "mayor":
            listaOrd = lista.sort((a, b) => {return b.precio - a.precio});
            break;
        /*
        case "destacado":
        case "stock":
        */

    }
    console.log(listaOrd);
    return listaOrd
}


const prod1 = new Producto(1, "Reloj", 125.50, 10, "");
const prod2 = new Producto(2, "Pulsera de Oro", 364.00, 1, "");

const usuario = new Usuario(1, "Marisol", "Semperena", "calle 123", "tarjeta");

const carrito = new Carrito(1, 1);
carrito.saludoInicial();

// El sistema arroja alerta inical cuando algun producto esta SIN STOCK
carrito.mostrarSinStock();

// El usuario agrega productos al carrito
// Se valida si el producto tiene el stock necesario para llenar el carrito 
let cantidadReloj = prompt("Indique cuantos productos de tipo reloj desea llevar: ");
let cantidadPulsera = prompt("Indique cuantos productos de tipo pulsera desea llevar: ");

if (parseInt(cantidadReloj) > prod1.stock){
    alert("No hay stock suficiente para la cantidad ingresada. El stock actual es de: " + prod1.stock);
} else {
    prod1.cantCarrito = parseInt(cantidadReloj);
    carrito.listaProductos.push(prod1);
}

if (parseInt(cantidadPulsera) > prod2.stock){
    alert("No hay stock suficiente para la cantidad ingresada. El stock actual es de: " + prod2.stock);
} else {
    prod2.cantCarrito = parseInt(cantidadPulsera);
    carrito.listaProductos.push(prod2);
}

// Calculo el total de la compra sin descuentos
let totalCompra = carrito.calcularTotal();

// Funcion para ordenar productos segun precio
ordenarProductos(carrito.listaProductos, "mayor");

// Verifico si el usuario tiene un código de descuento
let codigo = prompt("¿Posee un código de descuento? En caso negativo apretar el botón Cancelar");
totalCompra = carrito.calcularDescuento(codigo, totalCompra);

// Corroboro en cuantas cuotas se desea abonar
let cantidadCuotas = prompt("Indique en cuantas cuotas quiere abonar:");
carrito.calcularCuota(cantidadCuotas, totalCompra);

usuario.comprarCarrito();

