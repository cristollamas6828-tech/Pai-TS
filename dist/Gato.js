class Gato {
    nombre;
    edad;
    especie;
    constructor(nombre, edad, especie) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }
    saludar1() {
        return (`Hola mi nombre es "${this.nombre}"`);
    }
    mostrarEdad2() {
        return (`Mi edad es ${this.edad}`);
    }
    especies() {
        return (`Soy de la especie: ${this.especie}`);
    }
}
export { Gato };
//# sourceMappingURL=Gato.js.map