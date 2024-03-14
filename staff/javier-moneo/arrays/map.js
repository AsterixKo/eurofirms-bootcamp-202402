var numbers = [10, 20, 30, 40, 50, 60];

// usando el map, crea un nuevo array, con cada uno de los numeros multiplicado por 2

var filteredNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(filteredNumbers);

//------------------------------------

// crea un nuevo array, con la longitud de cada uno de los strings
var strings = ['hola', 'mundo', 'a', 'todos'];

var findString = strings.map(function (x) {
  return x.length;
});
console.log(findString);
//-------------------------------

// crea un nuevo array, con el resto de dividir entre 2 de cada uno de los numeros

var numbers2 = [12, 40, 6, 7, 24];

var findNumbers2 = numbers2.map(function (x) {
  return x % 2;
});
console.log(findNumbers2);

//------------------------------
// crea un nuevo array , que contenga los emails de los ususarios como string

var users = [
  { name: 'pepito', email: 'pepito@grillo.com' },
  { name: 'wendy', email: 'wendy@darling.com' },
  { name: 'peter', email: 'peter@pan.com' },
  { name: 'pinocho', email: 'pino@ocho' },
];

var findUsers = users.map(function (user) {
  return user.email;
});

console.log(findUsers);
//-----------------------

// crea un nuevo array,
// que contenga la ciudad de los usuarios como string

var users2 = [
  { name: 'pepito', information: { city: 'Madrid', number: '65787959' } },
  { name: 'wendy', information: { city: 'Barcelona', number: '7869406' } },
  { name: 'peter', information: { city: 'Sevilla', number: '78795040' } },
  { name: 'pinocho', information: { city: 'Valencia', number: '57694068' } },
];

var findUsers2 = users2.map(function (user) {
  return user.information.city;
});

console.log(findUsers2);
