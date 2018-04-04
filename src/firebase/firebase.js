import * as firebase from 'firebase'; // grabs all default exports from Firebase and puts them in a variable

const config = {
  apiKey: "AIzaSyDsUoZv_dUsTXKcAYG6Bd7eGJpYIcwUIq8",
  authDomain: "dan-s-expensify.firebaseapp.com",
  databaseURL: "https://dan-s-expensify.firebaseio.com",
  projectId: "dan-s-expensify",
  storageBucket: "dan-s-expensify.appspot.com",
  messagingSenderId: "328427910673"
};

firebase.initializeApp(config);

const database = firebase.database();

// Challenge
// ------------------------------------------------------------
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   // console.log(val.name + ' is a ' + val.job.title + ' at ' + val.job.company);
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('something went wrong');
// });

// setTimeout(() => {
//   database.ref('job/company').set('Google');
// }, 3500);

// Subscribe to database changes
// ------------------------------------------------------------
// const onValueChange = database.ref().on('value',(snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(37);
// }, 3500);

// Unsubscribe to database changes
// ------------------------------------------------------------
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(38);
// }, 10500);


// Get data from database once
// ------------------------------------------------------------
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);
//   });

// Initial set/update tutorial
// ------------------------------------------------------------
// database.ref().set({
//   name: 'Dan',
//   age: 36,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Austin',
//     state: 'TX'
//   },
//   stressLevel: 6
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('something went wrong ', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('data has been updated');
// }).catch((e) => {
//   console.log('something is wrong', e);
// });


// database.ref('isSingle').remove().then(() => {
//   console.log('isSingle has been removed');
// }).catch((e) => {
//   console.log('Something did not work correclty', e);
// });

// Expenses Challenge
// 1.
database.ref('expenses').push({
  description: 'rent',
  note: 'July rent',
  amount: 1250,
  createdAt: 0
});
// 2.
database.ref('expenses').push({
  description: 'dinner',
  note: 'Dinner at Uchi',
  amount: 125,
  createdAt: 0
});
// 3.
database.ref('expenses').push({
  description: 'drinks',
  note: 'Drinks at Eberly',
  amount: 50,
  createdAt: 0
});


// Notes example
// database.ref('notes').push({
//   title: 'First note',
//   body: 'This is a note'
// });

// const firebaseNotes = {
//   notes: {
//     apoijasdf: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     afjaodsie: {
//       title: 'Second note note',
//       body: 'This is another note'
//     }
//   }
// };
//
// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// },
// {
//   id: '761ase',
//   title: 'Second note',
//   body: 'This is another note'
// }];
//
// database.ref('notes').set(notes);
