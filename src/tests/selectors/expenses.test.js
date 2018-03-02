import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

// Text filter
test('should filter by text value', () => {
  // set a text filter 'e', use defaults for other values
  // expect array of two items, rent & credit card
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

// Start date filter
test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

// End Date filter
test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

// Sort by Date
test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

// Sort by amount
test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
