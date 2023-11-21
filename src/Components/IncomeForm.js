//Form for entering monthly income

import React, { useState } from 'react';
import axios from 'axios';

const IncomeForm = ({onSubmit, userId}) => {
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const [taxIncluded, setTaxIncluded] = useState(false);
    const [savingsAmount, setSavingsAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        const response = await axios.post(`/api/users/${userId}`, {
            monthlyIncome,
            taxIncluded,
        });

        //Handle success, e.g. show a success message or redirect
        onSubmit(response.data);

    } catch (error) {
        console.error('Error creating user:', error);
     }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>INCOME</h2>
            <label>
                How stable is your monthly income?
                <select name="stability" id = "stability">
                    <option value="extremely_unstable">Extremely Unstable</option>
                    <option value="somewhat_stable">Somewhat Unstable</option>
                    <option value="neutral">Neutral</option>
                    <option value="somewhat_stable">Somewhat Stable</option>
                    <option value="extremely_stable">Extremely Stable</option>
                </select>
                <br></br>
            </label>
        <label>
            What is Your Monthly Income?
            <input
                type = "number"
                value = {monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
            />
        </label>
            <label>
                Is Tax Included?
            <input
                type = "checkbox"
                checked={taxIncluded}
                onChange={() => setTaxIncluded(!taxIncluded)}
            />
                <br></br>
            </label>
            <label>
                How much do you have in emergency savings? <br></br>
                <input
                    type = "number"
                    value = {savingsAmount}
                    onChange={(e)=> setSavingsAmount(e.target.value)}
                />
            </label>

            <br></br>
            <button type = "submit">Next</button>
        </form>
    );
};

export default IncomeForm;