// - La fecha de hoy
const today = new Date();

// - La fecha de tu nacimiento
const birthDate = new Date(1980, 06, 26);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const bigger = today > birthDate;

// - Una variable que contenga el día de tu nacimiento
const getDay = birthDate.getDate();

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const getMonth = birthDate.getMonth() + 1;

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const getYear = birthDate.getFullYear();
