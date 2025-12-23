const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expensesEl = document.getElementById("expenses");

// Temporary numbers (mock data)
const income = 2500;
const expenses = 1200;
const balance = income - expenses;

incomeEl.textContent = `$${income.toFixed(2)}`;
expensesEl.textContent = `$${expenses.toFixed(2)}`;
balanceEl.textContent = `$${balance.toFixed(2)}`;
