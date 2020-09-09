const SET_CATEGORY = 'SET_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

type chargeCategoryType = {
  name: string;
  description: string;
  date: Date | string;
  icon: number;
};

type setChargeCategoryACType = {
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

let initialState: Array<chargeCategoryType> = [
  { name: 'Food', description: 'For food', date: '22/08/20', icon: 12 },
  { name: 'Clothes', description: 'For clothes', date: '23/08/20', icon: 7 },
  { name: 'Restoraunts', description: '', date: '24/08/20', icon: 8 },
  {
    name: 'Utility bills',
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    icon: 2,
  },
  { name: 'Pets', description: 'For smth else', date: '26/08/20', icon: 14 },
];

const chargeCategoriesReducer = (state = initialState, action: any): Array<chargeCategoryType> => {
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

export const createChargeCategoryAC = (category: chargeCategoryType): setChargeCategoryACType => ({
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
