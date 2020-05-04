let myAccount = {
    name: 'Anil',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount //this will reflect the original object
otherAccount.income = 1000  //this change to the new object property will reflect the change in the property value of actual object

otherAccount = {}       //this will not change the original account

let addExpense = function(account,amount){
    //account = {}     //creates an empty object
    account.expenses =account.expenses + amount
    // console.log(`expense of ${amount} added`)
    console.log(account)
}

addExpense(myAccount,2.5)
console.log(myAccount)
