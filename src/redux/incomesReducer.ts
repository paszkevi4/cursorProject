const SET_NEW_INCOME = 'SET_NEW_INCOME';

type incomeType = {
  category: number;
  description: string;
  date: Date | string;
  money: number;
};

type newIncomeACType = {
  type: typeof SET_NEW_INCOME;
  income: incomeType;
};

let initialState: Array<incomeType> = [
  { category: 0, description: 'From mom', date: '22/08/20', money: 500 },
  { category: 1, description: 'For selling a book', date: '23/08/20', money: 700 },
  { category: 2, description: '', date: '24/08/20', money: 320 },
  {
    category: 0,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    money: 740,
  },
  { category: 0, description: 'Mom again', date: '26/08/20', money: 430 },
];

const incomesReducer = (state = initialState, action: newIncomeACType): Array<incomeType> => {
  switch (action.type) {
    case SET_NEW_INCOME:
      return [...state, action.income];
    default:
      return state;
  }
};

export const setNewIncomeAC = (income: incomeType): newIncomeACType => ({
  type: SET_NEW_INCOME,
  income,
});

export default incomesReducer;
