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

let getBalance = function(account){
    let balance = account.income - account.expenses
    console.log(`The Account Balance is: ${balance}`)
}

addExpense(myAccount,2.5)
addIncome(myAccount,2000)
getBalance(myAccount)

