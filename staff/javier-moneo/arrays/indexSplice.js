// usando el indexOf, encuenta el numero 30
// ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60];

var indexOfNumber = numbers.indexOf(30);

numbers.splice(indexOfNumber, 1);

console.log(numbers);

console.log('--------------------------------------------------');

// usando el findIndex encuenta al usuario con el id 'g48ge5g' y borralo

var users = [
  {
    id: 'fdg5t5t',
    name: 'pepito',
    email: 'pepito@grillo.com',
    saved: ['5hg75', '4huehet', 'ghueghu5e'],
  },
  {
    id: 'g48ge5g',
    name: 'wendy',
    email: 'wendy@darling.com',
    saved: ['gjk5g54', 'engljeg'],
  },
  {
    id: '5t45e5i',
    name: 'peter',
    email: 'peter@pan.com',
    saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'],
  },
  { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
];

var indexOfUser = users.findIndex((user) => user.id === 'g48ge5g');
users.splice(indexOfUser, 1);
console.log(users);

console.log('--------------------------------------------------');

// borra todos los numeros impares
console.log('borra todos los numeros impares');
var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5];

var numbersClone = [...numbers2];

for (var i = 0; i < numbersClone.length; i++) {
  if (numbersClone[i] % 2 !== 0) {
    numbers2.splice(numbers2.indexOf(numbersClone[i]), 1);
  }
}
console.log(numbers2);

// Otra forma de hacerlo
// numbers.forEach((value, index) => {
//   if (value % 2 !== 0) {
//     numbers.splice(index, 1);
//   }
// });

console.log('--------------------------------------------------');

// borra todos los usuarios cuyo nombre empiece con 'pe'
console.log("borra todos los usuarios cuyo nombre empiece con 'pe'");
var users = [
  {
    id: 'fdg5t5t',
    name: 'pepito',
    email: 'pepito@grillo.com',
    saved: ['5hg75', '4huehet', 'ghueghu5e'],
  },
  {
    id: 'g48ge5g',
    name: 'wendy',
    email: 'wendy@darling.com',
    saved: ['gjk5g54', 'engljeg'],
  },
  {
    id: '5t45e5i',
    name: 'peter',
    email: 'peter@pan.com',
    saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'],
  },
  { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
];

for (var i = 0; i < users.length; i++) {
  if (users[i].name.indexOf('pe') >= 0) {
    users.splice(i, 1);
  }
}

console.log(users);
// Otra forma de hacelo
// for (var i = 0; i < users.length; i++) {
//   if (users[i].name.startsWith('pe')) {
//     users.splice(i, 1);
//   }
// }

// Otra forma de hacelo
// users.forEach((user, index) => {
//   if (user.name.startsWith('pe')) {
//     users.splice(index, 1);
//   }
// });
