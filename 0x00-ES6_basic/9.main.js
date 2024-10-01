import getFullBudgetObject from "./9-getFullBudget";

const fullBudget = getFullBudgetObject(200, 100, 50);

console.log(fullBudget.getIncomeInDollars(200));
console.log(fullBudget.getIncomeInEuros(200));
