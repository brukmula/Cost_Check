import React from 'react';
import IncomeForm from './Components/IncomeForm';
import ExpenseForm from './Components/ExpenseForm';
import SavingsForm from './Components/SavingsForm';
import OptionalExpensesForm from './Components/OptionalExpensesForm';
import SpendingHabitsForm from "./Components/SpendingHabitsForm";
import FinancialGoalsForm from "./Components/FinancialGoalsForm";
import DebtRepayment from "./Components/DebtRepayment";

const App = () => {
  return (
      <div>
        <h1>Budget App</h1>
          <FinancialGoalsForm/>
          <IncomeForm />
          <ExpenseForm/>
          <DebtRepayment/>
          <SavingsForm/>
          <SpendingHabitsForm/>
          <OptionalExpensesForm/>
      </div>
  );
};

export default App;
