class Usuario{
    constructor(id, nombre, apellido, direccion, medioPago){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.medioPago = medioPago;
    }

    comprarCarrito(){
        alert("Haz finalizado la compra de tu carrito");
    }
}