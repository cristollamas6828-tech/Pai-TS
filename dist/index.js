import { Gato } from "./Gato.js";
import { Mascota } from "./Mascota.js";
const mascota1 = new Mascota("Lilo", 12);
const mascota2 = new Gato("Tommy", 10, "Azul Ruso");
console.log("--------------------Loro--------------------------------");
console.log(mascota1.saludar());
console.log(mascota1.cumplirAnios());
console.log(mascota1.mostrarEdad());
console.log("--------------------Gato--------------------------------");
console.log(mascota2.saludar1());
console.log(mascota2.mostrarEdad2());
console.log(mascota2.especies());
//# sourceMappingURL=index.js.map