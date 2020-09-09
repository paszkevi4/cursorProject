import { icons } from './iconsReducer';

const SET_CATEGORY = 'SET_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

type chargeCategoryType = {
  name: string;
  description: string;
  date: Date | string;
  icon: typeof icons.Waves;
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
  | createChargeCategoryACType
  | updateChargeCategoryACType
  | deleteChargeCategoryACType;

let initialState: Array<chargeCategoryType> = [
  {
    name: 'Food',
    description: 'For food',
    date: new Date(2020, 7, 26),
    icon: icons.LocalDining,
  },
  {
    name: 'Clothes',
    description: 'For clothes',
    date: new Date(2020, 7, 25),
    icon: icons.EmojiSymbols,
  },
  { name: 'Restoraunts', description: '', date: new Date(2020, 7, 24), icon: icons.Fastfood },
  {
    name: 'Utility bills',
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: new Date(2020, 7, 23),
    icon: icons.AllInbox,
  },
  { name: 'Pets', description: 'For smth else', date: new Date(2020, 7, 21), icon: icons.Pets },
];

const chargeCategoriesReducer = (
  state = initialState,
  action: actionType,
): Array<chargeCategoryType> => {
  switch (action.type) {
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

export const createChargeCategoryAC = (
  category: chargeCategoryType,
): createChargeCategoryACType => ({
  type: SET_CATEGORY,
  category,
});

export const updateChargeCategoryAC = (
  index: number,
  category: chargeCategoryType,
): updateChargeCategoryACType => ({
  type: UPDATE_CATEGORY,
  index,
  category,
});

export const deleteChargeCategoryAC = (index: number): deleteChargeCategoryACType => ({
  type: DELETE_CATEGORY,
  index,
});

export default chargeCategoriesReducer;
