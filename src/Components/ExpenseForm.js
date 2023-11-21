//Form for entering non optional expenses
import React, {useState} from 'react';
import axios from "axios";

const ExpenseForm = ({userId, onNext}) => {
    const [nonOptionalExpenses, setNonOptionalExpenses] = useState([{category:'', amount: ''}]);

    const handleAddExpense = () => {
        setNonOptionalExpenses((prevExpenses) => [...prevExpenses, {category:'',amount:''}]);
    };

    const handleRemoveExpense = (index) => {
        setNonOptionalExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses];
            updatedExpenses.splice(index,1);
            return updatedExpenses;
        });
    };

    const handleInputChange = (index,field,value) => {
        setNonOptionalExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses];
            updatedExpenses[index][field] = value;
            return updatedExpenses;
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/users/${userId}`, {
                nonOptionalExpenses,
            });
            //If successful send data
            onNext(response.data);
            //Error Handling
        }catch (error){
            console.log('Error updating expenses', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <h2>BILLS</h2>
                {nonOptionalExpenses.map((expense,index) => (
                    <div key = {index}>
                        Enter Your Essential Expenses One By One<br></br>
                        <label>
                            Expense Name:
                            <input
                                type = "text"
                                value={expense.category}
                                onChange={(e) => handleInputChange(index,'category', e.target.value)}
                            />
                        </label>
                        <label>
                            Expense Amount:
                            <input
                                type={"number"}
                                value = {expense.amount}
                                onChange={(e) => handleInputChange(index,'amount', e.target.value)}
                                />
                        </label>
                        <button
                            type = "button"
                            onClick={() => handleRemoveExpense()}
                            >
                            Remove
                        </button>
                    </div>
                    ))}
            </label>
            <button type = "submit" onClick = {handleAddExpense}>
                Add Expense
            </button>

            <br></br>
            <button type = "submit">
                Next
            </button>
        </form>
    );
};

export default ExpenseForm;