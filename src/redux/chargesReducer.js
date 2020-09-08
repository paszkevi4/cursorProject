const SET_NEW_CHARGE = 'SET_NEW_CHARGE';

let initialState = [
  { category: 0, description: 'Diner with John', date: '22/08/20', money: '' },
  { category: 1, description: 'For clothes', date: '23/08/20', icon: '' },
  { category: 2, description: '', date: '24/08/20', icon: '' },
  {
    category: 3,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    icon: '',
  },
  { category: 4, description: '', date: '26/08/20', icon: '' },
];

const chargesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_CHARGE:
      return [...state, action.charge];
    default:
      return state;
  }
};

export const setNewChargeAC = (charge) => ({ type: SET_NEW_CHARGE, charge });

export default chargesReducer;
