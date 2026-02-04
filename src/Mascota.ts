class Mascota{
    nombre: string
    edad: number

    constructor(nombre: string, edad: number){
    this.nombre = nombre
    this.edad = edad
    }
    
    saludar (): string{
        return (`Hola mi nombre es ${this.nombre}`)
    }

    cumplirAnios(): number{
        this.edad +=1
        return this.edad
    }
    
    mostrarEdad(): string{
        return (`Mi edad es ${this.edad}`)
    }

}
export {Mascota}