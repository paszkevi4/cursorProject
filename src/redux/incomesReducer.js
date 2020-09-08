const SET_NEW_INCOME = 'SET_NEW_INCOME';

let initialState = [
  { category: 0, description: 'From mom', date: '22/08/20', money: '' },
  { category: 1, description: 'For selling a book', date: '23/08/20', icon: '' },
  { category: 2, description: '', date: '24/08/20', icon: '' },
  {
    category: 0,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    icon: '',
  },
  { category: 0, description: 'Mom again', date: '26/08/20', icon: '' },
];

const incomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_INCOME:
      return [...state, action.income];
    default:
      return state;
  }
};

export const setNewIncomeAC = (income) => ({ type: SET_NEW_INCOME, income });

export default incomesReducer;
