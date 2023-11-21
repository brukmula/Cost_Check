//Form for entering savings

import React, { useState } from 'react';
import axios from 'axios';

const SavingsForm = ({userId, onNext}) => {
    const [savingsPercentage, setSavingsPercentage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`/api/users/${userId}`,{
                savingsPercentage,
        });

        //Handle success, e.g. show a success message or redirect
        onNext(response.data);
    } catch (error) {
        console.error('Error updating user savings: ', error);
    }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>SAVINGS</h2>
            <label>
                How Would You Like To Spend Any Remaining Funds?
                <input
                    type = "text"
                    value = {savingsPercentage}
                    onChange={(e) => setSavingsPercentage(e.target.value)}
                    />
            </label>
            <br></br>
            <button type = "submit">
                Next
            </button>
        </form>
    );
};

export default SavingsForm;