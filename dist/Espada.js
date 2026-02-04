class Espada {
    nombre;
    daño;
    textura;
    constructor(nombre, daño, textura) {
        this.nombre = nombre;
        this.daño = daño;
        this.textura = textura;
    }
    atacar() {
        return `Atacando con ${this.nombre}, hiciste ${this.atacar} de daño!`;
    }
    reparar() {
        return `Reparando la ${this.nombre}`;
    }
}
export {};
//export {Espada}
//# sourceMappingURL=Espada.js.map