const SET_CATEGORY = 'SET_CATEGORY';

let initialState = [
  { name: 'Food', description: 'For food', date: '22/08/20', icon: '' },
  { name: 'Clothes', description: 'For clothes', date: '23/08/20', icon: '' },
  { name: 'Restoraunts', description: '', date: '24/08/20', icon: '' },
  {
    name: 'Utility bills',
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    icon: '',
  },
  { name: 'Pets', description: 'For smth else', date: '26/08/20', icon: '' },
];

const chargeCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return [...state, action.category];
    default:
      return state;
  }
};

export const setChargeCategoryAC = (category) => ({ type: SET_CATEGORY, category });

export default chargeCategoriesReducer;
