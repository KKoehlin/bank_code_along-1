let form = document.getElementById("transaction-form")
let balanceAmount = document.getElementById("account-balance")

let balance = 0.00

form.onsubmit = (e) => {
   
    let type;
    if (e.target["transaction-type"].value === "1") type = "Deposit";
    else type = "Withdraw"; 

    let transaction = {
        type: type ,
        amount: Number(e.target.amount.value)
    }

    // console.log(transaction)
    handleTransaction(transaction)
    renderBalance()
    e.preventDefault()
}

function handleTransaction(transaction){
    console.log(transaction) 
    console.log(transaction.type) 
    if (transaction.type === "Deposit"){
        balance += transaction.amount
    } else {
        balance -= transaction.amount
    }
    console.log(balance) 
}

function renderBalance(){
    balanceAmount.innerText = `$ ${balance}`
}
