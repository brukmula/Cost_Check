//Component to ask user what they spend their money on

import React, {useState} from 'react';
import axios from "axios";
import './components.css';

const SpendingHabitsForm = ({userId, onNext}) => {
    const [spendingHabits, setSpendingHabits] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/users/${userId}`, {
                spendingHabits,
            });
            //If successful send data
            onNext(response.data);
            //Error handling
        } catch (error){
            console.log('Error updating expenses', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>SPENDING HABITS</h2>
            <label>
                How important are the following factors to your spending? <br></br>
            </label>
            <div style={boxGrid}>
            <button style={boxStyle} type = "button"  >Eating Out</button>

            <button style={boxStyle} type="button" >Entertainment</button>

            <button style={boxStyle} type = "button" >Travel</button>

            <button style={boxStyle} type = "button" >Hobbies</button>

            <button style={boxStyle} type = "button">Other</button>
                Write the name of Category. <input type = "text"/>
            </div>
            <button type = "submit">Next</button>
        </form>
    );
};

//style for boxes
const boxStyle ={
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '8px',
    margin:'10px',
    width: '200px',
    transition: 'background-color 0.3s ease-in-out',
    textAlign: 'center',
};

const boxGrid = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
};


export default SpendingHabitsForm;