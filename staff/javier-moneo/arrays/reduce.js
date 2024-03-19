// usando el reduce, suma todos los numeros del array
console.log('usando el reduce, suma todos los numeros del array');
var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21];

var total1 = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(total1);
console.log('------------------------------------------------');

// multiplica todos los numeros del array
console.log('multiplica todos los numeros del array');

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21];

var total2 = numbers2.reduce(
  (previousValue, currentValue) => previousValue * currentValue
);
console.log(total2);

console.log('------------------------------------------------');

//  suma todos los numeros del array, dando un valor inicial de 10
console.log('suma todos los numeros del array, dando un valor inicial de 10');
var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21];

var total3 = numbers3.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  10
);
console.log(total3);

console.log('------------------------------------------------');

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'
console.log(
  "junta todos los strings del array, en uno solo (con el reduce)dando un valor inicial de 'Hola'"
);
var strings = ['mundo', 'pepito', 'como', 'va todo'];

var totalStrings = strings.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  'Hola'
);

console.log(totalStrings);

console.log('------------------------------------------------');

// haz un array con todos los usuarios cuyo nombre empiezan con pe
console.log('haz un array con todos los usuarios cuyo nombre empiezan con pe');
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

var usersPe = users.reduce((previousUser, currentUser) => {
  if (currentUser.name.startsWith('pe')) {
    previousUser.push(currentUser);
  }
  return previousUser;
}, []);

console.log(usersPe);
console.log('------------------------------------------------');

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email
console.log(
  'haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email'
);

var users2 = [
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

var usersEmailName = users2.reduce((previousUser, currentUser) => {
  delete currentUser.id;
  delete currentUser.saved;

  previousUser.push(currentUser);
  return previousUser;
}, []);

console.log(usersEmailName);
console.log('------------------------------------------------');

// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades
console.log(
  'en users3 esta el name como primer valor y surname como segundo del usuario, crea un objecto que contenga estas propiedades'
);
var users3 = ['peter', 'pan'];

var users3Object = users3.reduce((previous, current, currentIndex) => {
  if (currentIndex === 0) {
    previous.name = current;
  } else {
    previous.surname = current;
  }
  return previous;
}, {});

console.log(users3Object);

console.log('------------------------------------------------');

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [
  ['pepito', 'grillo'],
  ['wendy', 'darling'],
  ['peter', 'pan'],
];

var users4Objects = users4.reduce((previous, current) => {
  var myObject = {};
  myObject.name = current[0];
  myObject.surname = current[1];

  previous.push(myObject);
  return previous;
}, []);

console.log(users4Objects);
