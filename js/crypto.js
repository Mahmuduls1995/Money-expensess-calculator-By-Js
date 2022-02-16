const calculateExpenseBtn = document.getElementById("calculate-btn");
calculateExpenseBtn.addEventListener('click', function () {
    const foodExpense = document.getElementById("food-expense");
    const rentExpense = document.getElementById("rent-expense");
    const clothesExpense = document.getElementById("cloth-expense");

    if (
        foodExpense.value == "" ||
        foodExpense.value < 0 ||
        rentExpense.value == "" ||
        rentExpense.value < 0 ||

        clothesExpense.value < 0 ||
        clothesExpense.value == ""
    ) {
        console.log("sorry");
        return;
    }

    const btnFullExpense = parseFloat(foodExpense.value) +
        parseFloat(rentExpense.value) +
        parseFloat(clothesExpense.value);
    //console.log(totalExpense);

    const totalExpense = document.getElementById("total-expense")
    totalExpense.innerText = btnFullExpense;

})

