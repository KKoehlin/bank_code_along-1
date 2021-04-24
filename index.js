// Grabbing DOM elements
let form = document.getElementById("transaction-form")
let balanceAmount = document.getElementById("account-balance")
let transactionLog = document.getElementById("transaction-log")
// Setting a starting balance
let balance = 0.00
let transactionNumber = 0
let transactionArr = []
// Changing the forms behavior
form.onsubmit = (e) => {
    // Cleaning up form data to be in string format not number
    let type;
    if (e.target["transaction-type"].value === "1") type = "Deposit";
    else type = "Withdraw"; 

    // Bundling data in a better way to be passed to a function
    let transaction = {
        type: type ,
        amount: Number(e.target.amount.value)
    }

    // Using helper functions to handle the heavy lifting
    // Updates the balance
    handleTransaction(transaction)
    // Updates the display amount with the new balance
    renderBalance()
    renderTransactionTable()
    // Stops redirect which is the default behaviour of a form
    e.preventDefault()
}

function handleTransaction(transaction){
    let currentTransaction = {}

    transactionNumber += 1
    currentTransaction.tID = transactionNumber
    currentTransaction.amount = transaction.amount
    currentTransaction.type = transaction.type
    currentTransaction.preBalance = balance

    console.log(transaction) 
    // Add or subtract from balance based on t.type
    if (transaction.type === "Deposit"){
        balance += transaction.amount
    } else {
        balance -= transaction.amount
    }

    currentTransaction.postBalance = balance
    console.log(currentTransaction)
    console.log(balance) 
}

function renderBalance(){
    // Changes the text of the element using reassignment
    balanceAmount.innerText = `$ ${balance}`
    balanceAmount.style.color = balance >= 0 ? `#9AB278` : `#FE4C58`
}

function renderTransactionTable(){
    let demoObj = {
        id: 0,
        amount: 500,
        preBalance: 0,
        postBalance: 500
    }

    let tableRow = document.createElement('tr')
    let tID = document.createElement('th')
    let tAmount = document.createElement('td')
    let preBalance = document.createElement('td')
    let postBalance = document.createElement('td')

    tID.innerText = demoObj.id
    tAmount.innerText = demoObj.amount
    preBalance.innerText = demoObj.preBalance
    postBalance.innerText = demoObj.postBalance

    tableRow.appendChild(tID)
    tableRow.appendChild(tAmount)
    tableRow.appendChild(preBalance)
    tableRow.appendChild(postBalance)

    transactionLog.appendChild(tableRow)
}