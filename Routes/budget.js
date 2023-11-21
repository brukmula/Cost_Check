
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const {
            userId,
            monthlyIncome,
            nonOptionalExpenses,
            savingsPercentage,
            optionalExpense,
            debt,
            financialGoals
        } = req.body;


        const chatGPTInput = {
            userId,
            monthlyIncome,
            nonOptionalExpenses,
            savingsPercentage,
            optionalExpense
        };

        //Make API call to ChatGPT
        const chatGPTResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: JSON.stringify(chatGPTInput),
            max_tokens: 200, //Adjust as needed
        },{
            headers: {
                'Authorize': 'Bearer YOUR_OPENAI_API_KEY',
                'Content-Type': 'application/json',
                },
            });

        //Parse ChatGPT response
        const chatGPTInsights = chatGPTResponse.data.choices[0].text;

        //Update user budget with ChatGPT insights
        //Logic goes here

    }catch (error){
        console.error('Error connecting with ChatGPT: ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = router;