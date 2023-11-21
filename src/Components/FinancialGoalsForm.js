//Form for understanding Financial Goals

import React, {useState} from 'react';
import axios from "axios";
import './components.css'

const FinancialGoalsForm = ({userId,onNext}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [financialGoal,setFinancialGoal] = useState([]);

    const presentBudgetingOption = [{
        title: 'Present Focus Approach',
        description: 'Allocate the majority of your income to current activities and essential expenses, with minimal savings for the future.',
        saving: '10%',
        hobbies: '40%',
        debts: '30%',
        essentials: '15%',
        donations: '5%',
        },
    ];

    const balancedBudgetingOption = [{
        title: 'Balanced Approach',
        description:'Maintain a well-rounded financial plan by allocating funds to savings, activities, debt repayment, essential expenses, and charitable giving.',
        saving: '20%',
        hobbies: '30%',
        debts: '25%',
        essentials: '20%',
        donations: '10%',
        },
    ];

    const futureFocusOption = [{
        title: 'Future Focused Approach',
        description:'Prioritize saving for future goals, including retirement and large expenses, while maintaining a modest balance for current activities and necessities.',
        saving: '40%',
        hobbies: '20%',
        debts: '10%',
        essentials: '20%',
        donations: '10%',
        },
    ];

    const debtRepaymentOption = [{
        title: 'Debt Repayment Approach',
        description:'Concentrate on aggressively paying off high-interest debts, balancing essential expenses, and allocating a portion to activities and modest savings.',
        saving: '10%',
        hobbies: '20%',
        debts: '40%',
        essentials: '25%',
        donations: '5%',
        },
    ];

    const retirementRepaymentOption = [{
        title: 'Retirement Planning Approach',
        description:'Channel a significant portion of your income towards building a robust retirement fund, while allocating smaller percentages for current activities, debt repayment, essentials, and charitable contributions.',
        saving: '50%',
        hobbies: '15%',
        debts: '10%',
        essentials: '20%',
        donations: '5%',
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`/api/users/${userId}`, {
                financialGoal:selectedOption,
                });
            onNext(response.data);
    }catch (error){
        console.log('Error entering goals', error);
        }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <h2>FINANCE GOALS</h2>
            <h3>Choose the option that best fits with your financial goals.</h3>
            <div style = {boxGrid}>
                {balancedBudgetingOption.map((option,index) => (
                <button
                    onClick={() => setSelectedOption(option)}
                    key = {index}
                    style = {boxStyle}
                    className="box"
                >
                    <h3>{option.title}</h3>
                    <p> {option.description}</p>
                </button>
            ))}

                {debtRepaymentOption.map((option,index) => (
                    <button
                        onClick={() => setSelectedOption(option)}
                        key = {index}
                        style = {boxStyle}>
                        <h3>{option.title}</h3>
                        <p> {option.description}</p>
                    </button>
                ))}

                {presentBudgetingOption.map((option,index) => (
                <button
                    onClick={() => setSelectedOption(option)}
                    key = {index}
                    style = {boxStyle}>
                    <h3>{option.title}</h3>
                    <p> {option.description}</p>
                </button>
                ))}

                {futureFocusOption.map((option,index) => (
                <button
                    onClick={() => setSelectedOption(option)}
                    key = {index}
                    style = {boxStyle}>
                    <h3>{option.title}</h3>
                    <p> {option.description}</p>
                </button>
                ))}

                {retirementRepaymentOption.map((option,index) => (
                <button
                    onClick={() => setSelectedOption(option)}
                    key = {index}
                    style = {boxStyle}>

                    <h3>{option.title}</h3>
                    <p> {option.description}</p>
                </button>
                ))}
            </div>

            <br></br>
            <button type = "submit">
                Next
            </button>

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
}

const hoverStyle = {
    backgroundColor: '#f0f0f0',
}

export default FinancialGoalsForm;