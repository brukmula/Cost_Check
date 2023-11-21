//Serves used for project 

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

const mongoose = require('mongoose');
const cors = require('cors'); 
const dotenv = require('dotenv');

const expenseRoutes = require('./Routes/expenses');
const userRoutes = require('./Routes/users');
const {body} = require("express/lib/request");

app.use(cors());
app.use(express.json);
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

dotenv.config(); //Load environment variables from .env file

app.post('/getBudgetRecommendation', async (req,res) => {
    const {
        name,
        income,
        savings,
        monthlySpending,
        debt,
        financeGoals,
        spendingPreferences,

    } = body;

    const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
            prompt:
                `My name is ${name} I `
                `earn ${income} a month in dollars` +
                `have ${savings} in savings` +
                `spend ${monthlySpending} a  month.` +
                `have ${debt} in debt`+
                `have ${financeGoals} finance goals` +
                `Below is are my spending preferences on a scale of 1 to 5 ${spendingPreferences}` +
                `Based on this, can you come up with a budget based on these preferences and information?`,
            max_tokens: 150,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_OPEN_API_KEY',
            },
        }
    );

    //Send the response back to the react app
    res.json({budgetRecommendation:response.data.choices[0].text});
});


//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI, {

    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', err =>{
    console.error('MongoDB connection error: ', err);
});

app.listen(port, () => {
    console.log('Server is running on port ${PORT}')
});