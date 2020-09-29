export const totalCounter = (incomes, charges) => {
  return totalIncomes(incomes) - totalCharges(charges);
};

export const totalIncomes = (incomes) => {
  return incomes.reduce((prev, curr) => {
    return prev + curr.money;
  }, 0);
};

const totalCharges = (charges) => {
  return charges.reduce((prev, curr) => {
    return prev + curr.money;
  }, 0);
};
