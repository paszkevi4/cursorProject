import { db } from './firebase/firebase';

const FETCH_INCOMES = 'FETCH_INCOMES';
const CREATE_INCOME = 'SET_INCOME';
const UPDATE_INCOME = 'UPDATE_INCOME';
const DELETE_INCOME = 'DELEE_INCOME';

type incomeType = {
  category: number;
  description: string;
  date: Date | string;
  money: number;
};

type fetchIncomesACType = {
  type: typeof FETCH_INCOMES;
  incomes: Array<incomeType>;
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

type actionType = fetchIncomesACType | createIncomeACType | updateIncomeACType | deleteIncomeACType;

let initialState: Array<incomeType> = [
  { category: 0, description: 'From mom', date: new Date(2020, 8, 3), money: 500.57 },
  { category: 1, description: 'For selling a book', date: new Date(2020, 8, 2), money: 700 },
  { category: 2, description: '', date: new Date(2020, 7, 29), money: 320 },
  {
    category: 0,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: new Date(2020, 7, 23),
    money: 740,
  },
  { category: 0, description: 'Mom again', date: new Date(2020, 7, 21), money: 430 },
  { category: 0, description: 'From mom', date: new Date(2020, 8, 14), money: 500.57 },
  { category: 1, description: 'For selling a book', date: new Date(2020, 8, 15), money: 700 },
  { category: 2, description: '', date: new Date(2020, 8, 16), money: 320 },
  {
    category: 0,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: new Date(2020, 8, 18),
    money: 740,
  },
  { category: 0, description: 'Mom again', date: new Date(2020, 8, 19), money: 430 },
];

const incomesReducer = (state = initialState, action: actionType): Array<incomeType> => {
  switch (action.type) {
    case FETCH_INCOMES:
      return [...action.incomes];
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

const fetchIncomesAC = (incomes: Array<incomeType>): fetchIncomesACType => ({
  type: FETCH_INCOMES,
  incomes,
});

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

export const fetchIncomesThunk = () => {
  return (dispatch: any) => {
    db.collection('incomes').onSnapshot((ss: any) => {
      dispatch(
        fetchIncomesAC(
          ss.docs.map((el: any) => {
            return el.data();
          }),
        ),
      );
    });
  };
};

export default incomesReducer;
