// auxiliary functions -->
function getById(id){ //function to get element by id.
    return document.getElementById(id);
}
function nanConfirmed(name,id){ //to give alert and clear input field if the value is NaN.
    alert(`${name} can only be numbers`);
    getById(`${id}`).value = '';
}
function negativeConfirmed(name,id){ //to give alert and clear input field if the value is negative.
    alert(`${name} cannot be negative`);
    getById(`${id}`).value = '';
}
//function for input validation -->
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
//function for calculating total expense -->
function calculateTotalExpenses(){
    const income = getById('income-field').value;
    const foodCost = getById('food-field').value;
    const rentCost = getById('rent-field').value;
    const clothesCost = getById('clothes-field').value;
    //validating income and expenses.
    if(income == ''|| foodCost == '' || rentCost == '' || clothesCost == ''){ //checking if any of the input fields has no value.
        alert('All input fields must have a value(if none put 0)');
        return;
    }
    const incomeNotValid = validateInput('income-field','Income');
    if(incomeNotValid){
        return;
    }
    const foodNotValid = validateInput('food-field','Food cost');
    if(foodNotValid){
        return;
    }
    const rentNotValid = validateInput('rent-field','Rent');
    if(rentNotValid){
        return;
    }
    const clothesNotValid = validateInput('clothes-field','Clothes cost');
    if(clothesNotValid){
        return;
    }
    //calculating total expenses.
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
//function for calculation percentage saving -->
function calculateSaving(){
    const savingPercentage = getById('percent-save').value;
    const income = getById('income-field').value;
    const balance = getById('balance').innerText;
    if(savingPercentage == ''){
        alert('Saving percentage must have a value(if none put 0)');
        return;
    }
    const returnValue = validateInput('percent-save','Saving percentage'); //calling validation function.
    if(returnValue != true){
        const savingAmount = parseFloat(income)*(parseFloat(savingPercentage)/100); //calculating saving amount.
        if(savingAmount>balance){
            alert('you dont have enough money to save.');
        }
        else if(isNaN(savingAmount) == false && parseFloat(income)>=0){
            getById('save-amount').innerText = savingAmount;
            getById('remaining-balance').innerText = parseFloat(balance)-savingAmount;
        }
    }
}
//calculate button event listener -->
getById('calculate-button').addEventListener('click',function(){
    calculateTotalExpenses();
});
//save button event listener -->
getById('save-button').addEventListener('click',function(){
    calculateSaving();
});