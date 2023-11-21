//The main page where users go through the onboarding process

import React, {useState} from 'react';
import IncomeForm from '../Components/IncomeForm';
import ExpenseForm from "../Components/ExpenseForm";
import SavingsForm from "../Components/SavingsForm";
import OptionalExpensesForm from "../Components/OptionalExpensesForm";
import SpendingHabitsForm from "../Components/SpendingHabitsForm";
import DebtRepaymentForm from "../Components/DebtRepayment";
import FinancialGoalsForm from "../Components/FinancialGoalsForm";


const OnboardingPage = () => {
    const[user,setUser] = useState(null);
    const[chatGPTInsights, setChatGPTInsights] = useState(null);

    const handleIncomeSubmit = (data) => {
        setUser(data);
        //Redirect to the next form or page
    };

    const handleExpenseSubmit = (data) => {
        setUser(data);
        //Redirect to the next form or page
    };

    const handleSavingsSubmit = (data) =>{
        setUser(data);
        //Redirect to the next form or page
    }

    const handleOptionalExpensesSubmit = (data) =>{
        setUser(data);
        //Redirect to the next form or page
    };

    const handleSpendingHabitsSubmit = (data) =>{
        setUser(data);
        //Redirect to the next form or page
    }

    const handleDebtRepaymentSubmit = (data) =>{
        setUser(data);
        //Redirect to the next form or page
    }

    const handleFinancialGoalsSubmit = (data) =>{
        setUser(data);
        //Redirect to the next form or page
    }


    return (
        <div>
            <h1>
                Onboarding
            </h1>
            {!user && <IncomeForm onSubmit={handleIncomeSubmit} /> }
            {!user && <ExpenseForm onSubmit={handleExpenseSubmit} /> }
            {!user && <SavingsForm onSubmit={handleSavingsSubmit} /> }
            {!user && <OptionalExpensesForm onSubmit={handleOptionalExpensesSubmit} /> }
            {!user && <SpendingHabitsForm onSubmit={handleSpendingHabitsSubmit} /> }
            {!user && <DebtRepaymentForm onSubmit={handleDebtRepaymentSubmit} /> }
            {!user && <FinancialGoalsForm onSubmit={handleFinancialGoalsSubmit} /> }

            {/* Render other forms bases on the user's current progress*/}
        </div>
    );
};

export default OnboardingPage;