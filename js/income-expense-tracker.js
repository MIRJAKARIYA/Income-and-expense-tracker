// auxiliary functions
function getById(id){
    return document.getElementById(id);
}
function nanConfirmed(name,id){
    alert(`${name} can only be numbers`);
    getById(`${id}`).value = '';
}
function negativeConfirmed(name,id){
    alert(`${name} cannot be negative`);
    getById(`${id}`).value = '';
}
//function for input validation
function validateInput(id,name){
    const amount = Number(getById(id).value);
    if(isNaN(amount) || amount<0){
        if(isNaN(amount)){
            nanConfirmed(name,id);
            return true;
        }
        else{
            negativeConfirmed(name,id);
            return true;
        }
    }
}
//function for calculating total expense
function calculateTotalExpenses(){
    const income = getById('income-field').value;
    const foodCost = getById('food-field').value;
    const rentCost = getById('rent-field').value;
    const clothesCost = getById('clothes-field').value;
    //validating income and expenses
    if(income == ''|| foodCost == '' || rentCost == '' || clothesCost == ''){
        alert('All input fields must have a value');
        return;
    }
    const incomeValid = validateInput('income-field','Income');
    if(incomeValid){
        return;
    }
    const foodValid = validateInput('food-field','Food cost');
    if(foodValid){
        return;
    }
    const rentValid = validateInput('rent-field','Rent');
    if(rentValid){
        return;
    }
    const clothesValid = validateInput('clothes-field','Clothes cost');
    if(clothesValid){
        return;
    }
    const totalExpenses = getById('total-expenses');
    const balance = getById('balance');
    const totalCost = parseFloat(foodCost)+parseFloat(rentCost)+parseFloat(clothesCost);
    if(totalCost<=income){
        totalExpenses.innerText = totalCost;
        balance.innerText = parseFloat(income) - totalCost;
    }
    else{
        alert('Your expenses cannot be greater than your income.');
    }
}
//function for calculation percentage saving
function calculateSaving(){
    const savingPercentage = getById('percent-save').value;
    const income = getById('income-field').value;
    const balance = getById('balance').innerText;
    const returnValue = validateInput('percent-save','Saving percentage'); //calling validation function
    if(returnValue!= true){
        const savingAmount = parseFloat(income)*(parseFloat(savingPercentage)/100);
        if(savingAmount>balance){
            alert('you dont have enough money to save.');
        }
        else if(isNaN(savingAmount) == false){
            getById('save-amount').innerText = savingAmount;
            getById('remaining-balance').innerText = parseFloat(balance)-savingAmount;
        }
    }
}

//calculate button event listener
getById('calculate-button').addEventListener('click',function(){
    calculateTotalExpenses();
});
//save button event listener
getById('save-button').addEventListener('click',function(){
    calculateSaving();
});