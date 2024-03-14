var numbers = [10, 20, 30, 40, 50, 60];

// usando el find, encuentra el primer numero mayor a 20
var filteredNumbers = numbers.find(function (x) {
  return x > 20;
});

console.log(filteredNumbers);

//------------------------------------

// encuentra el primer string que contenga una 'u'
var strings = ['hola', 'mundo', 'a', 'todos'];

var findString = strings.find(function (x) {
  return x.includes('u');
});
console.log(findString);
//-------------------------------

// encuentra el primer numero impar

var numbers2 = [12, 40, 6, 7, 24];

var findNumbers2 = numbers2.find(function (x) {
  return x % 2 !== 0;
});
console.log(findNumbers2);

//------------------------------
// encuentra el primero con email 'wendy@darling.com'

var users = [
  { name: 'pepito', email: 'pepito@grillo.com' },
  { name: 'wendy', email: 'wendy@darling.com' },
  { name: 'peter', email: 'peter@pan.com' },
  { name: 'pinocho', email: 'pino@ocho' },
];

var findUsers = users.find(function (user) {
  return user.email === 'wendy@darling.com';
});

console.log(findUsers);
//-----------------------

// encuentra el usuario con la ciudad 'Barcelona'

var users2 = [
  { name: 'pepito', information: { city: 'Madrid', number: '65787959' } },
  { name: 'wendy', information: { city: 'Barcelona', number: '7869406' } },
  { name: 'peter', information: { city: 'Sevilla', number: '78795040' } },
  { name: 'pinocho', information: { city: 'Valencia', number: '57694068' } },
];

var findUsers2 = users2.find(function (user) {
  return user.information.city === 'Barcelona';
});

console.log(findUsers2);
