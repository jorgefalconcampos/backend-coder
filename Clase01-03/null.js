class Persona {

    #fullname
    
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#fullname = `${this.nombre} ${this.apellido}`;
    }

    getName() {
        return this.name;
    }

    getFullName() {
        return this.#fullname;
    }

    #metodoPrivado = () => "Solo accessible para la clase";

}

const persona = new Persona("Juan", "Perez");

console.log(persona.getFullName());


