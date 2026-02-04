class Gato{
    nombre: string
    edad: number
    especie: string

    constructor(nombre: string, edad: number,especie: string){
    this.nombre = nombre
    this.edad = edad
    this.especie = especie
    }
    
    saludar1 (): string{
        return (`Hola mi nombre es "${this.nombre}"`)
    }
  
    mostrarEdad2(): string{
        return (`Mi edad es ${this.edad}`)
    }
    
    especies (): string{
        return (`Soy de la especie: ${this.especie}`)
    }

}
export {Gato}