// Global Imports
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Glogal Components
import Header from '../components/Header';

// Pages
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage}  />
        <Route path="/edit/:id" component={EditExpensePage}  />
        <Route path="/help" component={HelpPage}  />
        <Route component={NotFoundPage}  />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
