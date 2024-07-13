interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

class Producto implements IProducto {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public stock: number
    ) { }
}

class Carrito {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        if (producto.stock > 0) {
            this.productos.push(producto);
            producto.stock--;
        } else {
            console.error("No hay stock disponible para el producto seleccionado");
        }
    }

    eliminarProducto(id: number): void {
        const index = this.productos.findIndex((producto) => producto.id === id);
        if (index !== -1) {
            this.productos[index].stock++;
            this.productos.splice(index, 1);
        } else {
            console.error("No se encontró el producto en el carrito");
        }
    }

    obtenerProductos(): Producto[] {
        return this.productos;
    }

    calcularTotal(): number {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}

async function obtenerProductos(): Promise<Producto[]> {
    return Promise.resolve([
        new Producto(1, "Camiseta", 25, 12),
        new Producto(2, "Pantalón", 35, 15),
        new Producto(3, "Zapatos", 40, 8),
    ]);
}

async function main() {
    const productos = await obtenerProductos();
    const carrito = new Carrito();

    // Agregar productos al carrito
    carrito.agregarProducto(productos[0]);
    carrito.agregarProducto(productos[1]);
    carrito.agregarProducto(productos[2]);

    // Mostrar productos en el carrito
    console.log("Productos en el carrito:");
    console.table(carrito.obtenerProductos());

    // Calcular total del carrito
    const totalCarrito = carrito.calcularTotal();
    console.log("Total del carrito:", totalCarrito);

    // Eliminar un producto del carrito
    carrito.eliminarProducto(1);

    // Mostrar productos actualizados en el carrito
    console.log("Productos actualizados en el carrito:");
    console.table(carrito.obtenerProductos());
}

main();
