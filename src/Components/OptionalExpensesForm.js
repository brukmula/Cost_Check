//Form for optional expenses
import React, { useState } from 'react';
import axios from 'axios';

const OptionalExpensesForm = ({userId,onSubmit}) => {
    const [optionalExpenses, setOptionalExpenses] = useState([]);

    const handleFormSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await axios.put(`/api/users/${userId}`,{
                optionalExpenses,
            });

            //Handle success, e.g. show a success message or redirect
            onSubmit(response.data);
        }catch (error) {
            console.log('Error updating optional expenses', error);
            }
        };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                How Much Do You Spend On Said Expenses?
                {optionalExpenses.map((expense,index) => (
                <div key = {index}>
                    <input
                     type = "text"
                     value = {expense.category}
                     onChange={(e) =>
                        setOptionalExpenses((prevExpenses) =>
                            prevExpenses.map((prev,i) =>
                            i === index
                            ? {...prev, category: e.target.value}
                            :prev
                            )
                         )
                    }
                    />
                    <input
                        type = "number"
                        value = {expense.enjoymentLevel}
                        onChange={(e) =>
                            setOptionalExpenses((prevExpenses) =>
                                prevExpenses.map((prev,i) =>
                                i === index
                                ?{...prev,enjoymentLevel:e.target.value}
                                :prev
                                )
                            )
                         }
                    />
                </div>
                ))}
            </label>
            <button type = "submit">Next</button>
        </form>
    );
};

export default OptionalExpensesForm;