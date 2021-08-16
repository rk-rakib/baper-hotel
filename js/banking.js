document.getElementById('deposit-submit').addEventListener('click', function () {
    //get the deposit
    const depositField = document.getElementById('user-deposit');
    const userDeposit = depositField.value;
    const currentDeposit = document.getElementById('current-deposit');
    const previusDeposit = currentDeposit.innerText;
    const newDeposit = parseFloat(previusDeposit) + parseFloat(userDeposit);
    currentDeposit.innerText = newDeposit;
    //update balance
    const totalBalance = document.getElementById('total-balance');
    const previusBalance = totalBalance.innerText;
    const currentBalance = parseFloat(previusBalance) + parseFloat(userDeposit);
    totalBalance.innerText = currentBalance;
    //clear the deposit input field
    depositField.value = '';
})


document.getElementById('withdraw-submit').addEventListener('click', function () {
    //get the withdraw
    const withdrawField = document.getElementById('user-withdraw');
    const userWithdraw = withdrawField.value;
    const currentWithdraw = document.getElementById('current-withdraw');
    const previusWithdraw = currentWithdraw.innerText;
    const newWithdraw = parseFloat(previusWithdraw) + parseFloat(userWithdraw);
    currentWithdraw.innerText = newWithdraw;
    //update balance
    const totalBalance = document.getElementById('total-balance');
    const previusBalance = totalBalance.innerText;
    const currentBalance = parseFloat(previusBalance) - parseFloat(userWithdraw);
    totalBalance.innerText = currentBalance;
    //clear the deposit input field
    withdrawField.value = '';
})