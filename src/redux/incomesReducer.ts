const CREATE_INCOME = 'SET_INCOME';
const UPDATE_INCOME = 'UPDATE_INCOME';
const DELETE_INCOME = 'DELEE_INCOME';

type incomeType = {
  category: number;
  description: string;
  date: Date | string;
  money: number;
};

type createIncomeACType = {
  type: typeof CREATE_INCOME;
  income: incomeType;
};

type updateIncomeACType = {
  type: typeof UPDATE_INCOME;
  income: incomeType;
  index: number;
};

type deleteIncomeACType = {
  type: typeof DELETE_INCOME;
  index: number;
};

type actionType = createIncomeACType | updateIncomeACType | deleteIncomeACType;

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

const incomesReducer = (state = initialState, action: actionType): Array<incomeType> => {
  switch (action.type) {
    case CREATE_INCOME:
      return [...state, action.income];
    case UPDATE_INCOME:
      state.splice(action.index, 1, action.income);
      return [...state];
    case DELETE_INCOME:
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
};

export const createIncomeAC = (income: incomeType): createIncomeACType => ({
  type: CREATE_INCOME,
  income,
});

export const updateIncomeAC = (index: number, income: incomeType): updateIncomeACType => ({
  type: UPDATE_INCOME,
  income,
  index,
});

export const deleteIncomeAC = (index: number): deleteIncomeACType => ({
  type: DELETE_INCOME,
  index,
});

export default incomesReducer;
