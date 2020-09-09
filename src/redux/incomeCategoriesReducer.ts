import { icons } from './iconsReducer';

const CREATE_CATEGORY = 'CREATE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

type incomeCategoryType = {
  name: string;
  description: string;
  date: Date | string;
  icon: typeof icons.Waves;
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
  | createIncomeCategoryACType
  | updateIncomeCategoryACType
  | deleteIncomeCategoryACType;

let initialState: Array<incomeCategoryType> = [
  {
    name: 'My mom',
    description: 'Money from my mom',
    date: new Date(2020, 7, 25),
    icon: icons.PlayForWork,
  },
  {
    name: 'Sale book',
    description: 'Sold a book',
    date: new Date(2020, 7, 24),
    icon: icons.MenuBook,
  },
  { name: 'Work', description: '', date: new Date(2020, 7, 23), icon: icons.WorkOutline },
  {
    name: 'Donations',
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: new Date(2020, 7, 22),
    icon: icons.PlayForWork,
  },
];

const incomeCategoriesReducer = (
  state = initialState,
  action: actionType,
): Array<incomeCategoryType> => {
  switch (action.type) {
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
