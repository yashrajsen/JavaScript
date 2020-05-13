let myAccount = {
    name: 'Anil',
    expenses: 0,
    income: 0
}

let addExpense = function(account,amount){
    account.expenses =account.expenses + amount
    console.log(`expense of ${amount} added`)
    console.log(account)
}

let addIncome = function(account,amount){
    account.income =account.income + amount
    console.log(`income of ${amount} added`)
    console.log(account)
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
    console.log('Your account has been reset')
}

let getSummary = function(account){
    let balance = account.income - account.expenses
    console.log(`The Account Balance for ${account.name} is: ${balance} with the income of ${myAccount.income} and expenses of ${account.expenses}`)
}

addExpense(myAccount,42.75)
addIncome(myAccount,2000)
addExpense(myAccount,57.5)
getSummary(myAccount)
resetAccount(myAccount)
getSummary(myAccount)
