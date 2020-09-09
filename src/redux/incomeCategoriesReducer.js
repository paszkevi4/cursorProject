const SET_CATEGORY = 'SET_CATEGORY';

let initialState = [
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

const incomeCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return [...state, action.category];
    default:
      return state;
  }
};

export const setIncomeCategoryAC = (category) => ({ type: SET_CATEGORY, category });

export default incomeCategoriesReducer;
