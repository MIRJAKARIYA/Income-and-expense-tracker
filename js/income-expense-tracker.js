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
//function for calculating total expense
function calculateTotalExpenses(){
    const foodCost = getById('food-field').value;
    const rentCost = getById('rent-field').value;
    const clothesCost = getById('clothes-field').value;
    const income = getById('income-field').value;
    const returnValue =  validateInput(income,foodCost,rentCost,clothesCost,'expenses');
    if(returnValue != 0){
        const totalCost = parseFloat(foodCost)+parseFloat(rentCost)+parseFloat(clothesCost);
        if(totalCost>income){
            alert('Total Expenses cannot be greater than Income');
            return;
        }
        else if(isNaN(totalCost) == false){
            getById('total-expenses').innerText = totalCost;
            getById('balance').innerText = parseFloat(income)-totalCost;
        }
    }
}
//function for calculation percentage saving
function calculateSaving(){
    const savingPercentage = getById('percent-save').value;
    const income = getById('income-field').value;
    const balance = getById('balance').innerText;
    const returnValue = validateInput(savingPercentage);
    if(returnValue!= 0){
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
//function for input validation
function validateInput(){
    if(arguments[arguments.length-1] == 'expenses'){
        if(arguments[0] == '' || arguments[1] == '' || arguments[2] == '' || arguments[3] == ''){
            alert('all input fields must have a value');
            return 0;
        }
        else if(isNaN(arguments[0]) || arguments[0]<0){
            if(isNaN(arguments[0])){
                nanConfirmed('Income','income-field');
                return 0;
            }
            else{
                negativeConfirmed('Income','income-field');
                return 0;
            }
        }
        else if(isNaN(arguments[1]) || arguments[1]<0){
            if(isNaN(arguments[1])){
                nanConfirmed('Food cost','food-field');
                return 0;
            }
            else{
                negativeConfirmed('Food cost','food-field');
                return 0;
            }
        }
        else if(isNaN(arguments[2]) || arguments[2]<0){
            if(isNaN(arguments[2])){
                nanConfirmed('Rent','rent-field');
                return 0;
            }
            else{
                negativeConfirmed('Rent','rent-field');
                return 0;
            }
        }
        else if(isNaN(arguments[3]) || arguments[3]<0){
            if(isNaN(arguments[3])){
                nanConfirmed('Clothes cost','clothes-field');
                return 0;
            }
            else{
                negativeConfirmed('Clothes cost','clothes-field');
                return 0;
            }
        }
    }
    else{
        if(arguments[0] == ''){
            alert('percentage field must have a value');
            return 0;
        }
        else if(isNaN(arguments[0]) || arguments[0]<0){
            if(isNaN(arguments[0])){
                nanConfirmed('Percentage','percent-save');
                return 0;
            }
            else{
                negativeConfirmed('Percentage','percent-save');
                return 0;
            }
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