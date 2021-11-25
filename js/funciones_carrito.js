class Carrito {
    constructor(id){
        this.id = id;
        this.listaProductos = [];
        this.totalCompra = 0.00;
    }

    saludoInicial(){
        alert("Bienvenido al carrito de la tienda");
    }

    mostrarSinStock(){
        if (this.listaProductos.length > 0){
            let sinStock = this.listaProductos.filter(prod => prod.stock === 0);
            for (const elem in sinStock){
                alert("El producto con id " + sinStock[elem].id + " se encuentra sin stock por el momento.");
            }
        }
    }

    calcularCuota(cantidadCuotas, totalCompra){
        if (parseInt(cantidadCuotas) > 0 && parseInt(totalCompra) > 0){
            precioCuota = parseFloat(totalCompra) / parseInt(cantidadCuotas);
            alert("El precio a pagar por cuota es de: " + precioCuota);
            return precioCuota;
        } else{
            alert("Los valores ingresados no son correctos.");
        }
    }

    calcularDescuento(codigoDescuento, total){
        if (codigoDescuento){
              let descuento = 0;
              let cod = "";
            switch(codigoDescuento){
                case "COD50OFF":
                    descuento = total / 0.50;
                    cod = "50% menos";
                    break;
                case "COD35OFF":
                    descuento = total / 0.35;
                    cod = "35% menos";
                    break;
                case "COD15OFF":
                    descuento = total / 0.15;
                    cod = "15% menos";
                    break;
            }
            total = total - descuento;
            alert("Se ha aplicado un descuento de " + cod + " al total de la compra");
        }
    
        return total;
    }
}


class Producto {

    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
    }

    calcularTotalPorProducto(cantidad, precio){
        let total = parseFloat(precio) * parseInt(cantidad);
        alert("El total es de: " + total);
        return total;
    }
}

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


const prod1 = new Producto(1, "Reloj", 125.50, 10);
const prod2 = new Producto(2, "Pulsera de Oro", 364.00, 0);

const carrito = new Carrito(1);
carrito.saludoInicial();

// Usuario agrega productos al carrito
carrito.listaProductos.push(prod1);
carrito.listaProductos.push(prod2);

// El sistema arroja alerta cuando un producto del listado no esta en stock
carrito.mostrarSinStock();

// Funcion para ordenar productos segun precio
ordenarProductos(carrito.listaProductos, "mayor");

// Calculo del total de compra
alert("El precio del reloj es de: " + prod1.precio);
let cantidadProducto = prompt("Indique cuantos productos de tipo reloj desea llevar: ");
let totalCompra = calcularTotalPorProducto(cantidadProducto, prod1.precio);

// Verifico si el usuario tiene un código de descuento
let codigo = prompt("¿Posee un código de descuento? En caso negativo apretar el botón Cancelar");
totalCompra = calcularDescuento(codigo, totalCompra);

// Corroboro en cuantas cuotas se desea abonar
let cantidadCuotas = prompt("Indique en cuantas cuotas quiere abonar:");
calcularCuota(cantidadCuotas, totalCompra);
