// auxiliary functions
function getById(id){
    return document.getElementById(id);
}
function calculateTotalExpenses(){
    const foodCost = getById('food-field').value;
    const rentCost = getById('rent-field').value;
    const clothesCost = getById('clothes-field').value;
    const income = getById('income-field').value;
    const returnValue =  validateInput(income,foodCost,rentCost,clothesCost,'expenses');
    if(returnValue != 0){
        const totalCost = parseInt(foodCost)+parseInt(rentCost)+parseInt(clothesCost);
        if(totalCost>income){
            alert('Total Expenses cannot be greater than Income');
            return;
        }
        else if(isNaN(totalCost) == false){
            getById('total-expenses').innerText = totalCost;
            getById('balance').innerText = income-totalCost;
        }
    }
}
function calculateSaving(){
    const savingPercentage = getById('percent-save').value;
    const returnValue = validateInput(savingPercentage);
    if(returnValue!= 0){
        
    }
}
function validateInput(){
    if(arguments[arguments.length-1] == 'expenses'){
        if(isNaN(arguments[0]) || arguments[0]<0){
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
        if(isNaN(arguments[0]) || arguments[0]<0){
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
function nanConfirmed(name,id){
    alert(`${name} can only be numbers`);
    getById(`${id}`).value = '';
}
function negativeConfirmed(name,id){
    alert(`${name} cannot be negative`);
    getById(`${id}`).value = '';
}
//calculate button event listener
getById('calculate-button').addEventListener('click',function(){
    calculateTotalExpenses();
});
//save button event listener
getById('save-button').addEventListener('click',function(){
    calculateSaving();
})