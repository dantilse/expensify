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

firebase.database().ref().set({
  name: 'Dan'
});
