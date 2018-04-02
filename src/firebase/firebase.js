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

database.ref().set({
  name: 'Dan',
  age: 36,
  isSingle: false,
  location: {
    city: 'Austin',
    state: 'TX'
  },
});

database.ref('age').set(37);
database.ref('location/city').set('South Austin');

// add new data by call
database.ref('attributes').set({
  height: 115,
  weight: 180
});
