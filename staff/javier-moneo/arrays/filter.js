// usando el filter, crea un nuevo array,
// que contenga los numeros impares

var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21];

var filteredNumbers = numbers2.filter(function (x) {
  return x % 2 !== 0;
});

console.log(filteredNumbers);

// ---------------------------------------

// crea un nuevo array con los elementos que tienen 2 palabras

var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos'];

var filteredStrings = strings.filter(function (string) {
  return string.split(' ').length === 2;
});

console.log(filteredStrings);
// -------------------------

// crea un nuevo array que contenga los numeros con dos digitos

var numbers = [100, -20, 3, -200, 50, 8, -5];

var filteredNumbersTwoDigits = numbers.filter(function (x) {
  return (x > 9 && x < 100) || (x < -9 && x > -99);
});

console.log(filteredNumbersTwoDigits);

// --------------------------------------------

// crea un nuevo array, con los usuarios cuyo nombre empiece con p

var users = [
  { name: 'pepito', email: 'pepito@grillo.com' },
  { name: 'wendy', email: 'wendy@darling.com' },
  { name: 'topa', email: 'to@pa.com' },
  { name: 'pinocho', email: 'pin@ocho.com' },
];

var filterdUsersWithP = users.filter(function (user) {
  return user.name.startsWith('p');
});

console.log(filterdUsersWithP);
// --------------------------------------------

// crea un nuevo array, que contenga los usuarios
// que viven en Barcelona
console.log(
  'crea un nuevo array, que contenga los usuarios que viven en Barcelona'
);
var users2 = [
  {
    name: 'pepito',
    information: {
      address: { city: 'Madrid', street: 'Gran via' },
      number: 65787959,
    },
  },
  {
    name: 'wendy',
    information: {
      address: { city: 'Barcelona', street: 'Diagonal' },
      number: 6657846,
    },
  },
  {
    name: 'peter',
    information: {
      address: { city: 'Sevilla', street: 'bakeer street' },
      number: 78795040,
    },
  },
  {
    name: 'topa',
    information: {
      address: { city: 'Barcelona', street: 'Reina Amalia' },
      number: 565768564,
    },
  },
  {
    name: 'pinocho',
    information: {
      address: { city: 'Valencia', street: 'siempre viva' },
      number: 57694068,
    },
  },
];

var usersLivingInBarcelona = users2.filter(function (user) {
  return user.information.address.city === 'Barcelona';
});

console.log(usersLivingInBarcelona);
