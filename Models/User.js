const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    monthlyIncome: { type: Number, required:true},
    taxIncluded: { type:Boolean, default: false},
    state:{type:String},
    nonOptionalExpenses: [{category: String, amount: Number}],
    savingPercentages: {type: Number, default: 0},
    optionalExpenses: [{category: String, enjoymentLevel: Number}],
});

const User = mongoose.model('User', userSchema);

module.exports = User;