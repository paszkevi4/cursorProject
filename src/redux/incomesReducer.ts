import { db } from './firebase/firebase';

const FETCH_INCOMES = 'FETCH_INCOMES';
const CREATE_INCOME = 'SET_INCOME';
const UPDATE_INCOME = 'UPDATE_INCOME';
const DELETE_INCOME = 'DELETE_INCOME';
const SORT_INCOMES = 'SORT_INCOMES';

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

type sortIncomesACType = {
  type: typeof SORT_INCOMES;
  sortingBy: string;
  wasSorted: boolean;
};

type actionType =
  | fetchIncomesACType
  | createIncomeACType
  | updateIncomeACType
  | deleteIncomeACType
  | sortIncomesACType;

let initialState: Array<incomeType> = [
  { category: 0, description: 'From mom', date: new Date(), money: 500.57 },
  // { category: 1, description: 'For selling a book', date: new Date(2020, 8, 2), money: 700 },
  // { category: 2, description: '', date: new Date(2020, 7, 29), money: 320 },
  // {
  //   category: 0,
  //   description: 'Its a looooooooooooooooooooooooooooooong description',
  //   date: new Date(2020, 7, 23),
  //   money: 740,
  // },
  // { category: 0, description: 'Mom again', date: new Date(2020, 7, 21), money: 430 },
  // { category: 0, description: 'From mom', date: new Date(2020, 8, 14), money: 500.57 },
  // { category: 1, description: 'For selling a book', date: new Date(2020, 8, 15), money: 700 },
  // { category: 2, description: '', date: new Date(2020, 8, 16), money: 320 },
  // {
  //   category: 0,
  //   description: 'Its a looooooooooooooooooooooooooooooong description',
  //   date: new Date(2020, 8, 18),
  //   money: 740,
  // },
  // { category: 0, description: 'Mom again', date: new Date(2020, 8, 19), money: 430 },
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
    case SORT_INCOMES:
      if (action.sortingBy === 'Category') {
        if (action.wasSorted) {
          console.log('alphabetic');
        } else {
          console.log('non alphabetic');
        }
      } else if (action.sortingBy === 'Description') {
        if (action.wasSorted) {
          return [
            ...state.sort((a: any, b: any) =>
              a.description?.toUpperCase() < b.description?.toUpperCase() ? -1 : 1,
            ),
          ];
        } else {
          return [
            ...state.sort((a: any, b: any) =>
              a.description?.toUpperCase() > b.description?.toUpperCase() ? -1 : 1,
            ),
          ];
        }
      } else if (action.sortingBy === 'Date') {
        if (action.wasSorted) {
          return [...state.sort((a: any, b: any) => (a.date.seconds < b.date.seconds ? -1 : 1))];
        } else {
          return [...state.sort((a: any, b: any) => (a.date.seconds > b.date.seconds ? -1 : 1))];
        }
      } else if (action.sortingBy === 'Money') {
        if (action.wasSorted) {
          return [...state.sort((a: any, b: any) => (a.money < b.money ? -1 : 1))];
        } else {
          return [...state.sort((a: any, b: any) => (a.money > b.money ? -1 : 1))];
        }
      }
    default:
      return state;
  }
};

export const fetchIncomesAC = (incomes: Array<incomeType>): fetchIncomesACType => ({
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

export const sortIncomesAC = (sortingBy: string, wasSorted: boolean): sortIncomesACType => ({
  type: SORT_INCOMES,
  sortingBy,
  wasSorted,
});

export const fetchIncomesThunk = () => {
  return (dispatch: any) => {
    db.collection('incomes1').onSnapshot((ss: any) => {
      dispatch(
        fetchIncomesAC(
          ss.docs.map((el: any) => {
            const income = el.data();
            return { ...income, docId: el.id };
          }),
        ),
      );
    });
  };
};

export default incomesReducer;
