class Carrito {
    constructor(id, usuario){
        this.id = id;
        this.listaProductos = [];
        this.totalCompra = 0.00;
        this.usuario = usuario;
    }

    saludoInicial(){
        alert("Bienvenido al carrito de la tienda");
    }

    calcularTotal(){
        let total = 0;
        if (this.listaProductos.length > 0){
            for (const elem in this.listaProductos){
                let totalProducto = this.listaProductos[elem].precio * parseInt(this.listaProductos[elem].cantCarrito);
                total += totalProducto;
            }
            alert("El total es de: " + total);
            
        }
        return total
    }

    añadirCarrito(producto){
        this.listaProductos.push(producto);
        console.log("El producto fue añadido al carrito");
    }

    removerCarrito(producto){
        let prodIndex = this.listaProductos.indexOf(producto);
        this.listaProductos.splice(prodIndex, 1);
        console.log("El producto fue removido del carrito");
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
            let precioCuota = parseFloat(totalCompra) / parseInt(cantidadCuotas);
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
    
        return total
    }
}