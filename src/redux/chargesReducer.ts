const SET_NEW_CHARGE = 'SET_NEW_CHARGE';

type chargeType = {
  category: number;
  description: string;
  date: Date | string;
  money: number;
};

type newChargeACType = {
  type: typeof SET_NEW_CHARGE;
  charge: chargeType;
};

let initialState: Array<chargeType> = [
  { category: 0, description: 'Diner with John', date: '22/08/20', money: 300 },
  { category: 1, description: 'For clothes', date: '23/08/20', money: 500 },
  { category: 2, description: '', date: '24/08/20', money: 470 },
  {
    category: 3,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: '25/08/20',
    money: 390,
  },
  { category: 4, description: '', date: '26/08/20', money: 150 },
];

const chargesReducer = (state = initialState, action: newChargeACType): Array<chargeType> => {
  switch (action.type) {
    case SET_NEW_CHARGE:
      return [...state, action.charge];
    default:
      return state;
  }
};

export const setNewChargeAC = (charge: chargeType): newChargeACType => ({
  type: SET_NEW_CHARGE,
  charge,
});

export default chargesReducer;
