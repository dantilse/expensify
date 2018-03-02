//
// Object Destructuring
//

// const person = {
//   name: 'John',
//   age: 47,
//   location: {
//     city: 'Bakersfield',
//     temp: 88
//   }
// };

// const name = person.name;
// const age = person.age;
// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is  ${age}`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }


// Test
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName); // default value self published



//
// Array Destructuring
//
const address = [
  '1299 S. Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'
];
const [, city, state = 'New York', zip] = address;
console.log(`You are in ${city}, ${state}`);


const item = [
  'Coffee (hot)', '$2.00', '$2.50', '$2.75'
];
const [itemName, smallPrice, mediumPrice, larePrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
