const Expense = require('../Models/Expense');

const expenseController = {
    createExpense: async(req,res) => {
    try{
        const { description, amount, recurring, userId} = req.body;
        const expense = await Expense.create({
            description, 
            amount, 
            recurring, 
            user: userId,
        });
        res.json(expense);
    } catch(error){
        res.status(500).json({error:error.message});
    }
    },

    getAllExpenses: async (req,res) => {
        try{
            const expenses = await Expense.find()
            res.json(expenses);
        } catch (error){
            res.status(500).json({error : error.message});
        }
    },


    getExpenseById: async (req,res) => {
        try{
            const expense = await Expense.findById(req.params.id);

            if(!expense){
                return res.status(404).json({error: 'Expense not found'});
            }

            res.json(expense); 

        } catch (error){
            res.status(500).json({error : error.message});
        }
    },

    updateExpense: async (req,res)=>{
        try{
            const {description, amount,recurring} = req.body;

            const expense = await Expense.findByIdAndUpdate (
                req.params.id,
                { description, amount, recurring}, 
                {new: true}
            );

            if(!expense){
                return res.status(404).json({error: 'Expense not found' });
            }
            res.json(expense); 

        }catch (error){
            res.status(500).json({error : error.message});
        }
    },
    
    deleteExpense: async (req,res) => {
        try{
            const expense = await Expense.findByIdAndRemove(req.params.id);
            if(!expense){
                return res.status(404).json({ error: 'Expense not found'}); 
            }

            res.json({message: 'Expense deleted successfully'});

        }catch (error){
            res.status(500).json({error : error.message});
        }
    },
};

module.exports = expenseController;

