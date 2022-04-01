class Usuarios {
    constructor(pNombre, pApellido, pLibros, pMascotas) {
      this.nombre = pNombre;
      this.apellido = pApellido;
      this.libros = pLibros;
      this.mascotas = pMascotas;
    }

    getFullName() {
      console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido}`);
    }

    addMascota(nombre) {
      this.mascotas.push(nombre)
    }

    countMascotas() {
      console.log(this.mascotas.length);
    }

    addBook(pNombre, pAutor) {
      this.libros.push({nombre: pNombre, autor: pAutor})
    }

    getBookNames() {
      let nombres = this.libros.map( (n) => n.nombre )
      console.log(nombres);
    }

  }
  

  let usuario = new Usuarios('Juan', 'Perez', [{nombre: "Orgullo y prejuicio", autor: "Jane Austen"}, {nombre: "Cuentos de amor locura y muerte", autor: "Horacio Quiroga"}], ["Coco", "Channi"])

  usuario.getFullName()

  usuario.addMascota("Jacobo")

  console.log(usuario.mascotas);

  usuario.countMascotas()

  usuario.addBook("1984", "George Orwell")

  console.log(usuario.libros);

  usuario.getBookNames()
