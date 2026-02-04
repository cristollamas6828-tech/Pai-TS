class Mascota {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return (`Hola mi nombre es ${this.nombre}`);
    }
    cumplirAnios() {
        this.edad += 1;
        return this.edad;
    }
    mostrarEdad() {
        return (`Mi edad es ${this.edad}`);
    }
}
export { Mascota };
//# sourceMappingURL=Mascota.js.map