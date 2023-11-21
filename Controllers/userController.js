const User = require('../Models/User');

const userController = {
    createUser: async (req, res) => {
        try {
            const {
                monthlyIncome,
                taxIncluded,
                state,
                nonOptionalExpense,
                savingPercentages,
                optionalExpenses,
            } = req.body;

            //Calculate total non-optional expenses
            const totalNonOptionalExpenses = nonOptionalExpense.reduce(
                (total,expense) => total + expense.amount,0
            );

            //Calculate total savings based on percentage
            const totalSavings = (monthlyIncome * savingPercentages) / 100;

            //Calculate remaining budget after non-optional expenses and savings
            const remainingBudget = monthlyIncome - totalNonOptionalExpenses - totalSavings;

            //Check if remaining budget is negative
            if(remainingBudget < 0){
                return res.status(400).json({error: 'Your expenses exceed your income'});
            }

            const user = await User.create({
                monthlyIncome,
                taxIncluded,
                state,
                nonOptionalExpense,
                savingPercentages,
                optionalExpenses,
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true}
            );

            if (!updatedUser) {
                return res.status(404).json({error: 'User not found'});
            }

            res.json(updatedUser);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
};

module.exports = userController;

