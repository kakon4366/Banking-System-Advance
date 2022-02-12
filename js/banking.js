//get input value
function inputValue(inputId){
    debugger;
    const inputTotal = document.getElementById(inputId);
    const inputTotalText = inputTotal.value;
    const inputTotalValue = parseFloat(inputTotalText);
    //clear input value
    inputTotal.value = '';
    return inputTotalValue;
}

//get add total amount
function addTotalAmount(previousInputId, newInputValue){
    const previousTotal = document.getElementById(previousInputId);
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

     // update deposit value 
     const newTotalAmount = previousTotalAmount + newInputValue;
     previousTotal.innerText = newTotalAmount;
}

//getCurrent Balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

//get update total balance
function totalBalance(newInputValue, isAdd){
    //update balance 
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalAmount = getCurrentBalance();

    if(balanceTotalAmount > 0 && isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + newInputValue;
    }else{
        balanceTotal.innerText = balanceTotalAmount - newInputValue;
    }
}


//deposit btn handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit input value 
    const depositTotalValue = inputValue('deposit-amount');

    // get deposit total amount 
    if(depositTotalValue > 0){
        addTotalAmount('deposit-total', depositTotalValue);
        totalBalance(depositTotalValue, true);
    }else{
        console.log('Please value more than 0');
    }   
});


//withdraw btn handler
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // get withdraw input value 
    const withdrawTotalValue = inputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    //get withdraw Total Amount
    if(withdrawTotalValue > 0 && currentBalance >= withdrawTotalValue){
        addTotalAmount('withdraw-total', withdrawTotalValue);
        totalBalance(withdrawTotalValue, false);
    }else{
        console.log('Please value more than 0');
    }
});
