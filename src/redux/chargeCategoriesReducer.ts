import { db } from './firebase/firebase';
import { icons } from './iconsReducer';

const FETCH_CATEGORIES = 'FETCH_CHARGE_CATEGORIES';
const SET_CATEGORY = 'SET_CHARGE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CHARGE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CHARGE_CATEGORY';

type chargeCategoryType = {
  docId: string;
  name: string;
  description: string;
  date: Date | number;
  icon: typeof icons[0];
};

type fetchCategoriesACType = {
  type: typeof FETCH_CATEGORIES;
  categories: Array<chargeCategoryType>;
};

type createChargeCategoryACType = {
  type: typeof SET_CATEGORY;
  category: chargeCategoryType;
};

type updateChargeCategoryACType = {
  type: typeof UPDATE_CATEGORY;
  category: chargeCategoryType;
  index: number;
};

type deleteChargeCategoryACType = {
  type: typeof DELETE_CATEGORY;
  index: number;
};

type actionType =
  | fetchCategoriesACType
  | createChargeCategoryACType
  | updateChargeCategoryACType
  | deleteChargeCategoryACType;

let initialState: Array<chargeCategoryType> = [
  {
    docId: '0',
    name: 'Pets',
    description: 'For smth else',
    date: Date.parse('2020-7-21'),
    icon: icons[14],
  },
];

const chargeCategoriesReducer = (
  state = initialState,
  action: actionType,
): Array<chargeCategoryType> => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...action.categories];
    case SET_CATEGORY:
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

// ACs

const fetchChargeCategoriesAC = (categories: Array<chargeCategoryType>): fetchCategoriesACType => ({
  type: FETCH_CATEGORIES,
  categories,
});

// export const createChargeCategoryAC = (
//   category: chargeCategoryType,
// ): createChargeCategoryACType => ({
//   type: SET_CATEGORY,
//   category,
// });

// export const updateChargeCategoryAC = (
//   index: number,
//   category: chargeCategoryType,
// ): updateChargeCategoryACType => ({
//   type: UPDATE_CATEGORY,
//   index,
//   category,
// });

// export const deleteChargeCategoryAC = (index: number): deleteChargeCategoryACType => ({
//   type: DELETE_CATEGORY,
//   index,
// });

export const setChargeCategoriesThunk = () => {
  return (dispatch: any) => {
    db.collection('charge-categories').onSnapshot((ss: any) => {
      dispatch(
        fetchChargeCategoriesAC(
          ss.docs.map((el: any) => {
            const category = el.data();
            return { ...category, icon: icons[category.icon], docId: el.id };
          }),
        ),
      );
    });
  };
};

export default chargeCategoriesReducer;
