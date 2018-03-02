import React from 'react';
import { connect } from 'react-redux'; // needed for connect()
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      (props.expenses.length > 0) ? (
        <ol>
          {
            props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)
          }
        </ol>
      ) : (
        <p>There are no Expenses to display.</p>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

// higher order component - format follows api
export default connect(mapStateToProps)(ExpenseList);
