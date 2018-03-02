import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// set default state
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

// remove expense
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

// do not remove expense if id is not found
test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// Add expense
test('should add expense', () => {
  const expense = {
    id: '3',
    description: 'Coffee',
    note: '',
    amount: 3200,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  // expect(state[3]).toEqual(expense); // my work, passes but instructor did differently
  expect(state).toEqual([...expenses, expense]);
});

// Edit expense
test('should edit an expense', () => {
  const description = 'Last month rent';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

// Edit expense with invalid id
test('should not edit an expense with invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -2,
    updates: {
      description: 'Last month rent'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
