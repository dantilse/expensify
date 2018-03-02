import { createStore } from 'redux';

// Action generators - functions that return Action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// Reset
const resetCount = () => ({
  type: 'RESET'
});

// Set
const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions
//    - output determined only by input
// 2. Never change state or action
//    - return new object instead

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

      return {
        count: state.count - action.decrementBy
      };

    case 'RESET':
      return {
        count: 0
      };

    case 'SET':
      return {
        count: action.count
      };

    default: return state;
  }

  console.log('running');
  return state;
};

const store = createStore(countReducer);



// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//
//       return {
//         count: state.count + action.incrementBy
//       };
//
//     case 'DECREMENT':
//       // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//
//       return {
//         count: state.count - action.decrementBy
//       };
//
//     case 'RESET':
//       return {
//         count: 0
//       };
//
//     case 'SET':
//       return {
//         count: action.count
//       };
//
//     default: return state;
//   }
//
//   console.log('running');
//   return state;
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions: type names are capitalized and underscore
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 50}));
