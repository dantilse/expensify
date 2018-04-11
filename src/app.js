// Global Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provide store to all components in app
// Router
import AppRouter from './routers/AppRouter';
// Store
import configureStore from './store/configureStore';
// Actions
import { startSetExpenses } from './actions/expenses';
import { removeExpense } from './actions/expenses';
import { editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { sortByAmount } from './actions/filters';
import { sortByDate } from './actions/filters';
import { setStartDate } from './actions/filters';
import { setEndDate } from './actions/filters';
// Selectors
import getVisibleExpenses from './selectors/expenses';
// Reducers
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
// Import styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// Firebase
import { firebase } from './firebase/firebase';

// value is returned value from function to access store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});

// Render app to html element
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
