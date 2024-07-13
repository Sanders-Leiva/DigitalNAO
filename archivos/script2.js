var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Producto = /** @class */ (function () {
    function Producto(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    return Producto;
}());
var Carrito = /** @class */ (function () {
    function Carrito() {
        this.productos = [];
    }
    Carrito.prototype.agregarProducto = function (producto) {
        if (producto.stock > 0) {
            this.productos.push(producto);
            producto.stock--;
        }
        else {
            console.error("No hay stock disponible para el producto seleccionado");
        }
    };
    Carrito.prototype.eliminarProducto = function (id) {
        var index = this.productos.findIndex(function (producto) { return producto.id === id; });
        if (index !== -1) {
            this.productos[index].stock++;
            this.productos.splice(index, 1);
        }
        else {
            console.error("No se encontró el producto en el carrito");
        }
    };
    Carrito.prototype.obtenerProductos = function () {
        return this.productos;
    };
    Carrito.prototype.calcularTotal = function () {
        return this.productos.reduce(function (total, producto) { return total + producto.precio; }, 0);
    };
    return Carrito;
}());
function obtenerProductos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.resolve([
                    new Producto(1, "Camiseta", 25, 12),
                    new Producto(2, "Pantalón", 35, 15),
                    new Producto(3, "Zapatos", 40, 8),
                ])];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var productos, carrito, totalCarrito;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, obtenerProductos()];
                case 1:
                    productos = _a.sent();
                    carrito = new Carrito();
                    // Agregar productos al carrito
                    carrito.agregarProducto(productos[0]);
                    carrito.agregarProducto(productos[1]);
                    carrito.agregarProducto(productos[2]);
                    // Mostrar productos en el carrito
                    console.log("Productos en el carrito:");
                    console.table(carrito.obtenerProductos());
                    totalCarrito = carrito.calcularTotal();
                    console.log("Total del carrito:", totalCarrito);
                    // Eliminar un producto del carrito
                    carrito.eliminarProducto(1);
                    // Mostrar productos actualizados en el carrito
                    console.log("Productos actualizados en el carrito:");
                    console.table(carrito.obtenerProductos());
                    return [2 /*return*/];
            }
        });
    });
}
main();
