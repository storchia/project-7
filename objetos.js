// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const info = {
  name: 'Sergio Andres',
  lastName: 'Torchia',
  age: 41,
  height: 180,
  eresDesarrollador: true
};

// - Una variable que obtenga tu edad a partir del objeto anterior
const age = info.age;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const newList = [
  info,
  {
    name: 'Carlos',
    lastName: 'Perez',
    age: 36,
    height: 175,
    eresDesarrollador: false
  },
  {
    name: 'Martin',
    lastName: 'Gutierrez',
    age: 50,
    height: 180,
    eresDesarrollador: false
  }
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
newList.sort((a, b) => b.age - a.age);
console.log(newList);
