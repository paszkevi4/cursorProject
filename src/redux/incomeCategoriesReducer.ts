import { icons } from './iconsReducer';

const FETCH_CATEGORIES = 'FETCH_INCOME_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_INCOME_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_INCOME_CATEGORY';
const DELETE_CATEGORY = 'DELETE_INCOME_CATEGORY';

type incomeCategoryType = {
  name: string;
  description: string;
  date: Date | number;
  icon: typeof icons[0];
};

type fetchCategoriesACType = {
  type: typeof FETCH_CATEGORIES;
  category: incomeCategoryType;
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

let initialState: Array<incomeCategoryType> = [
  {
    name: 'My mom',
    description: 'Money from my mom',
    date: Date.parse('2020-7-25'),
    icon: icons[15],
  },
  {
    name: 'Sale book',
    description: 'Sold a book',
    date: Date.parse('2020-7-24'),
    icon: icons[13],
  },
  { name: 'Work', description: '', date: Date.parse('2020-7-23'), icon: icons[19] },
];

const incomeCategoriesReducer = (
  state = initialState,
  action: actionType,
): Array<incomeCategoryType> => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      //@ts-ignore
      return [...state, { ...action.category, icon: icons[action.category.icon] }];
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

export const fetchIncomeCategoriesAC = (category: incomeCategoryType): fetchCategoriesACType => ({
  type: FETCH_CATEGORIES,
  category,
});

export const createIncomeCategoryAC = (
  category: incomeCategoryType,
): createIncomeCategoryACType => ({
  type: CREATE_CATEGORY,
  category,
});

export const updateIncomeCategoryAC = (
  index: number,
  category: incomeCategoryType,
): updateIncomeCategoryACType => ({
  type: UPDATE_CATEGORY,
  category,
  index,
});

export const deleteIncomeCategoryAC = (index: number): deleteIncomeCategoryACType => ({
  type: DELETE_CATEGORY,
  index,
});

export default incomeCategoriesReducer;
