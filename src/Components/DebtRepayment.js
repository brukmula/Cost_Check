//Form for calculating and determining Debt remaining

import React, {useState} from 'react';
import axios from "axios";

const DebtRepaymentForm = ({userId,onNext}) => {
    const [debtIncluded,setDebtIncluded] = useState(false);
    const [debt, setDebt] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`/api/users/${userId}`, {
                debtIncluded,
            });
            onNext(response.data);
        }catch (error){
            console.log('Error entering debt', error);
        }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <h2>DEBT</h2>
            <label>
                Are you actively paying off any outstanding debts (excluding mortgages)?
                <input
                    type="checkbox"
                    onChange={() => setDebtIncluded(!debtIncluded)}>

                </input>
                <br></br>

                If so, how much money do you owe?
                <input
                    type="number"
                    onChange={() => setDebt(debt)}>

                </input>

                <br></br>
                <button type = "submit">
                    Next
                </button>

            </label>
        </form>
    );
};

export default DebtRepaymentForm;