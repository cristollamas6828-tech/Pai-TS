class Espada {
    nombre: string;
    daño: number;
    textura: string;

    constructor(nombre: string,daño: number,textura: string){
        this.nombre = nombre;
        this.daño = daño;
        this.textura = textura;
    }

    atacar(): string {
        return `Atacando con ${this.nombre}, hiciste ${this.atacar} de daño!`;
    }

    reparar(): string{
        return `Reparando la ${this.nombre}`;
    }
    

}
//export {Espada}