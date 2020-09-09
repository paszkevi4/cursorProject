const CREATE_CATEGORY = 'CREATE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

type incomeCategoryType = {
  name: string;
  description: string;
  date: Date | string;
  icon: number;
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
  { name: 'My mom', description: 'Money from my mom', date: '22/08/20', icon: 15 },
  { name: 'Sale book', description: 'Sold a book', date: '23/08/20', icon: 13 },
  { name: 'Work', description: '', date: '24/08/20', icon: 19 },
  {
    name: 'Donations',
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    icon: 15,
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
