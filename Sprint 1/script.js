console.log("Hola Mundo, soy Sanders Leiva");
// 1. Varios tipos de datos diferentes
var nombre = "Juan";
var edad = 30;
var esEmpleado = true;
var fechaNacimiento = new Date('1990-01-01');
var habilidades = ["TypeScript", "JavaScript", "Node.js"];
var salario = null; // Puede ser un número o null
// 2. Enumeraciones para representar diferentes valores
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Soltero"] = 0] = "Soltero";
    EstadoCivil[EstadoCivil["Casado"] = 1] = "Casado";
    EstadoCivil[EstadoCivil["Divorciado"] = 2] = "Divorciado";
    EstadoCivil[EstadoCivil["Viudo"] = 3] = "Viudo";
})(EstadoCivil || (EstadoCivil = {}));
var estadoCivil = EstadoCivil.Soltero;
// 3. Uso de any y unknown en diferentes situaciones
var valorDesconocido = "Hola, mundo";
var valorIndefinido = 10;
if (typeof valorDesconocido === 'string') {
    console.log(valorDesconocido.toUpperCase()); // Seguro porque hemos comprobado el tipo
}
console.log(valorIndefinido.toFixed(2)); // No hay verificación de tipo
var respuesta = "Sí";
respuesta = 42;
var empleado = {
    nombre: "María",
    edad: 28,
    puesto: "Desarrolladora",
    salario: 50000
};
// 5. Tipos de colección en diferentes situaciones
var listaNumeros = [1, 2, 3, 4, 5];
var listaMixta = ["Uno", 2, "Tres", 4];
// 6. Función que utiliza diferentes tipos
function procesarDatos(dato) {
    if (typeof dato === 'string') {
        console.log("Dato es una cadena: ".concat(dato));
    }
    else if (typeof dato === 'number') {
        console.log("Dato es un n\u00FAmero: ".concat(dato));
    }
    else {
        console.log("Dato es un booleano: ".concat(dato));
    }
}
procesarDatos("Hola");
procesarDatos(123);
procesarDatos(true);
// 7. Función que usa colección y tipos genéricos
function imprimirElementos(elementos) {
    elementos.forEach(function (elemento) { return console.log(elemento); });
}
imprimirElementos(["Manzana", "Banana", "Cereza"]);
imprimirElementos([1, 2, 3, 4, 5]);
