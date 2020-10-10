const account = {
    name: 'Anil',
    expense: [],
    income: [],
    addExpense: function (Desc, Amount) {
        this.expense.push({
            description: Desc,
            amount: Amount
        })
    },
    addIncome: function (Desc, Amount) {
        this.income.push({
            description: Desc,
            amount: Amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expense.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${accountBalance} with 
        the income of $${totalIncome} and the expenses of $${totalExpenses}.`
    }
}
account.addExpense('Rent', 850)
account.addExpense('Groceries', 120)
account.addExpense('Coffee', 2)
account.addExpense('Gas', 35)
account.addIncome('Salary', 4500)
// console.log(account)
console.log(account.getAccountSummary())