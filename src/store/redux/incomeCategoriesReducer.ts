import { db } from '../firebase/firebase';
import { icons } from './iconsReducer';

const FETCH_CATEGORIES = 'FETCH_INCOME_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_INCOME_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_INCOME_CATEGORY';
const DELETE_CATEGORY = 'DELETE_INCOME_CATEGORY';

type incomeCategoryType = {
  docId: string;
  name: string;
  description: string;
  date: Date | number;
  icon: typeof icons[0];
};

type fetchCategoriesACType = {
  type: typeof FETCH_CATEGORIES;
  categories: Array<incomeCategoryType>;
};

type createIncomeCategoryACType = {
  type: typeof CREATE_CATEGORY;
  category: incomeCategoryType;
};

type updateIncomeCategoryACType = {
  type: typeof UPDATE_CATEGORY;
  category: incomeCategoryType;
  index: number;
};

type deleteIncomeCategoryACType = {
  type: typeof DELETE_CATEGORY;
  index: number;
};

type actionType =
  | fetchCategoriesACType
  | createIncomeCategoryACType
  | updateIncomeCategoryACType
  | deleteIncomeCategoryACType;

let initialState: Array<incomeCategoryType> = [];

const incomeCategoriesReducer = (
  state = initialState,
  action: actionType,
): Array<incomeCategoryType> => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...action.categories];
    case CREATE_CATEGORY:
      return [...state, action.category];
    case UPDATE_CATEGORY:
      state.splice(action.index, 1, action.category);
      return [...state];
    case DELETE_CATEGORY:
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
};

export const fetchIncomeCategoriesAC = (
  categories: Array<incomeCategoryType>,
): fetchCategoriesACType => ({
  type: FETCH_CATEGORIES,
  categories,
});

// export const createIncomeCategoryAC = (
//   category: incomeCategoryType,
// ): createIncomeCategoryACType => ({
//   type: CREATE_CATEGORY,
//   category,
// });

// export const updateIncomeCategoryAC = (
//   index: number,
//   category: incomeCategoryType,
// ): updateIncomeCategoryACType => ({
//   type: UPDATE_CATEGORY,
//   category,
//   index,
// });

// export const deleteIncomeCategoryAC = (index: number): deleteIncomeCategoryACType => ({
//   type: DELETE_CATEGORY,
//   index,
// });

export const setIncomeCategoriesThunk = () => {
  return (dispatch: any) => {
    db.collection('income-categories').onSnapshot((ss: any) => {
      dispatch(
        fetchIncomeCategoriesAC(
          ss.docs.map((el: any) => {
            const category = el.data();
            return { ...category, icon: icons[category.icon], docId: el.id };
          }),
        ),
      );
    });
  };
};

export default incomeCategoriesReducer;
