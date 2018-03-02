import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <li>
    {/* <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link> */}
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{amount} - {createdAt}</p>
  </li>
);

// wire up onClick - props?
// access to id needed to remove item

// higher order component - format follows api
export default ExpenseListItem;
