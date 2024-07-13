console.log("Hola Mundo, soy Sanders Leiva")

// 1. Varios tipos de datos diferentes
let nombre: string = "Juan";
let edad: number = 30;
let esEmpleado: boolean = true;
let fechaNacimiento: Date = new Date('1990-01-01');
let habilidades: string[] = ["TypeScript", "JavaScript", "Node.js"];
let salario: number | null = null; // Puede ser un número o null

// 2. Enumeraciones para representar diferentes valores
enum EstadoCivil {
    Soltero,
    Casado,
    Divorciado,
    Viudo
}

let estadoCivil: EstadoCivil = EstadoCivil.Soltero;

// 3. Uso de any y unknown en diferentes situaciones
let valorDesconocido: unknown = "Hola, mundo";
let valorIndefinido: any = 10;

if (typeof valorDesconocido === 'string') {
    console.log(valorDesconocido.toUpperCase()); // Seguro porque hemos comprobado el tipo
}

console.log(valorIndefinido.toFixed(2)); // No hay verificación de tipo

// 4. Tipos de unión e intersección en diferentes situaciones
type Respuesta = string | number;
type Usuario = {
    nombre: string;
    edad: number;
}
type Empleado = Usuario & {
    puesto: string;
    salario: number;
}

let respuesta: Respuesta = "Sí";
respuesta = 42;

let empleado: Empleado = {
    nombre: "María",
    edad: 28,
    puesto: "Desarrolladora",
    salario: 50000
}

// 5. Tipos de colección en diferentes situaciones
let listaNumeros: number[] = [1, 2, 3, 4, 5];
let listaMixta: (string | number)[] = ["Uno", 2, "Tres", 4];

// 6. Función que utiliza diferentes tipos
function procesarDatos(dato: string | number | boolean): void {
    if (typeof dato === 'string') {
        console.log(`Dato es una cadena: ${dato}`);
    } else if (typeof dato === 'number') {
        console.log(`Dato es un número: ${dato}`);
    } else {
        console.log(`Dato es un booleano: ${dato}`);
    }
}

procesarDatos("Hola");
procesarDatos(123);
procesarDatos(true);

// 7. Función que usa colección y tipos genéricos
function imprimirElementos<T>(elementos: T[]): void {
    elementos.forEach((elemento) => console.log(elemento));
}

imprimirElementos<string>(["Manzana", "Banana", "Cereza"]);
imprimirElementos<number>([1, 2, 3, 4, 5]);

