import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { setTextFilter, setStartDate, setEndDate } from '../../actions/filters';

// default values
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// Sort By amount
test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

// Sort By Date
test('should set sort by to date', () => {
  // set current state to amount, different than default value
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action );
  expect(state.sortBy).toBe('date');
});

// Set Text Filter
test('should set text filter', () => {
  const text = 'filter';
  // const action = setTextFilter(text);
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// Set Start Date Filter
test('should set start date filter', () => {
  const startDate = moment();
  // const action = setStartDate(startDate);
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

// Set End Date Filter
test('should set end date filter', () => {
  const endDate = moment();
  // const action = setEndDate(endDate);
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
