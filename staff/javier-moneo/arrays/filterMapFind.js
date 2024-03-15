var users = [
  {
    name: 'wendy',
    email: 'wendy@darling.com',
    messages: [
      { from: 'wendy', to: 'pepito', text: 'Hola' },
      { from: 'wendy', to: 'pepito', text: 'Bien y tu?' },
      { from: 'wendy', to: 'pepito', text: 'Me alegro!' },
    ],
  },
  {
    name: 'pepito',
    email: 'pepito@grillo.com',
    messages: [
      { from: 'pepito', to: 'wendy', text: 'Hola' },
      { from: 'pepito', to: 'wendy', text: 'Como estas ?' },
      { from: 'pepito', to: 'wendy', text: 'Bien tambien' },
      { from: 'pepito', to: 'peter', text: 'Hola' },
      { from: 'pepito', to: 'peter', text: 'Todo bien!' },
    ],
  },
  {
    name: 'peter',
    email: 'peter@pan.com',
    messages: [
      { from: 'peter', to: 'pepito', text: 'Hola' },
      { from: 'peter', to: 'pepito', text: 'Que tal!' },
    ],
  },
];

// usando lo aprendido hasta ahora (map, filter y find)
// busca dentro del array de usuarios, al user con el
// email pepito@grillo.com (find)
// una vez tengas el usuario, en un nuevo array guarda
// los mensajes que le ha enviado a wendy (filter)
// con esta informacion, crea un nuevo array que contenga
// solo el text de los mensajes, como string (map)

var userFound = users.find(function (user) {
  return user.email === 'pepito@grillo.com';
});
console.log(userFound);

console.log('-------------------');
var filteredMessages = userFound.messages.filter(function (message) {
  return message.to === 'wendy';
});

console.log(filteredMessages);

console.log('-------------------');
var filteredMessages2 = filteredMessages.map(function (message) {
  return message.text;
});

console.log(filteredMessages2);

console.log('----------------SIMPLE----------------');
var filteredSimple = users
  .find((user) => user.email === 'pepito@grillo.com')
  .messages.filter((message) => message.to === 'wendy')
  .map((message) => message.text);

console.log(filteredSimple);
