import { icons } from './iconsReducer';

const SET_CATEGORY = 'SET_CHARGE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CHARGE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CHARGE_CATEGORY';

type chargeCategoryType = {
  name: string;
  description: string;
  date: Date | string;
  icon: typeof icons[0];
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
    icon: icons[12],
  },
  {
    name: 'Clothes',
    description: 'For clothes',
    date: new Date(2020, 7, 25),
    icon: icons[7],
  },
  { name: 'Restoraunts', description: '', date: new Date(2020, 7, 24), icon: icons[8] },
  {
    name: 'Utility bills',
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: new Date(2020, 7, 23),
    icon: icons[2],
  },
  { name: 'Pets', description: 'For smth else', date: new Date(2020, 7, 21), icon: icons[14] },
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
