//The main dashboard where users can view their budget and make adjustments

import React, { useEffect, useState} from 'react';
import axios from 'axios';

const Dashboard = ({userId}) => {
    const [user,setUser] = useState(null);

    useEffect(() =>{
        const fetchUserData = async()=> {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setUser(response.data);

            }catch(error){
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
        }, [userId]);

    const handleAdjustments = async () => {
        //Implement adjustments logic, e.g., redirect to adjustment forms
    };
return(
    <div>
        <h1>Dashboard</h1>
        {user && (
            <div>
                <h2>User Information</h2>
                <p>Monthly Income: ${user.monthlyIncome}%</p>
                <p>Savings Percentage: ${user.savingsPercentage}%</p>
                <h2>Non-Optional Expenses</h2>
                <u1>
                    {user.nonOptionalExpense.map((expense,index) => (
                        <li key = {index}>
                            {expense.category}: ${expense.amount}
                        </li>
                        ))}
                </u1>
                <h2>Optional Expenses</h2>
                <u1>
                    {user.optionalExpenses.map((expense,index) => (
                        <li key = {index}>
                            {expense.category}: Enjoyment Level ${expense.enjoymentLevel}
                        </li>
                        ))}
                </u1>
                <button onClick={handleAdjustments}>Make Adjustments</button>
    </div>
)}
    </div>
    );
};

export default Dashboard;
