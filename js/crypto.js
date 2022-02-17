const foodExpense = document.getElementById("food-expense");
const rentExpense = document.getElementById("rent-expense");
const clothesExpense = document.getElementById("cloth-expense");
const incomeInput = document.getElementById("input-income");

function calculateExpense() {
    const total = parseFloat(foodExpense.value) +
        parseFloat(rentExpense.value) +
        parseFloat(clothesExpense.value);
    return total;
}

const calculateExpenseBtn = document.getElementById("calculate-btn");
calculateExpenseBtn.addEventListener('click', function () {
    if (
        incomeInput.value < 0 ||
        incomeInput.value == "" ||

        foodExpense.value == "" ||
        foodExpense.value < 0 ||
        rentExpense.value == "" ||
        rentExpense.value < 0 ||

        clothesExpense.value < 0 ||
        clothesExpense.value == ""


    ) {

        alert("Please enter Positive Valid Number")
        return;
    }

    let btnFullExpense = calculateExpense(foodExpense, rentExpense, clothesExpense);

    const totalExpense = document.getElementById("total-expense")
    totalExpense.innerText = btnFullExpense;

    if (incomeInput.value > btnFullExpense) {

        const totalBalance = parseFloat(incomeInput.value) - btnFullExpense;

        const balance = document.getElementById("total-balance");
        balance.innerText = totalBalance;
    }
    else {
        alert("Please given More Input income ")
        return;
    }
})


function saveCalculateBtn() {
    const saveInput = document.getElementById("save-input");
    const savingAmount = document.getElementById("saving-amount");
    const remainingBalance = document.getElementById("remaining-balance");

    if (
        saveInput.value < 0 ||
        saveInput.value == ""
    ) {
        alert("Please enter Positive Valid Number")
        return;
    }

    const savePercent = parseFloat(incomeInput.value) * (parseFloat(saveInput.value) / 100);
    savingAmount.innerText = savePercent;

    let btnFullExpense = calculateExpense(foodExpense, rentExpense, clothesExpense);

    const totalBalance = parseFloat(incomeInput.value) - btnFullExpense;

    if (totalBalance > savePercent) {
        const totalBalance = parseFloat(incomeInput.value) - btnFullExpense;
        remainingBalance.innerText = totalBalance - savePercent;
    }
    else {

        alert("Not enough balance")
        return;
    }

}


