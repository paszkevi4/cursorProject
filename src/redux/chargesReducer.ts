const CREATE_CHARGE = 'CREATE_CHARGE';
const UPDATE_CHARGE = 'UPDATE_CHARGE';
const DELETE_CHARGE = 'DELETE_CHARGE';

type chargeType = {
  category: number;
  description: string;
  date: Date | string;
  money: number;
};

type createChargeACType = {
  type: typeof CREATE_CHARGE;
  charge: chargeType;
};

type updateChargeACType = {
  type: typeof UPDATE_CHARGE;
  charge: chargeType;
  index: number;
};

type deleteChargeACType = {
  type: typeof DELETE_CHARGE;
  index: number;
};

type actionType = createChargeACType | updateChargeACType | deleteChargeACType;

let initialState: Array<chargeType> = [
  { category: 0, description: 'Diner with John', date: new Date(2020, 8, 2), money: 300 },
  { category: 1, description: 'For clothes', date: new Date(2020, 7, 28), money: 500 },
  { category: 2, description: '', date: new Date(2020, 7, 26), money: 470 },
  {
    category: 3,
    description: 'Its a looooooooooooooooooooooooooooooong description',
    date: new Date(2020, 7, 24),
    money: 390,
  },
  { category: 4, description: '', date: new Date(2020, 7, 22), money: 150 },
];

const chargesReducer = (state = initialState, action: actionType): Array<chargeType> => {
  switch (action.type) {
    case CREATE_CHARGE:
      return [...state, action.charge];
    case UPDATE_CHARGE:
      state.splice(action.index, 1, action.charge);
      return [...state];
    case DELETE_CHARGE:
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
};

export const createChargeAC = (charge: chargeType): createChargeACType => ({
  type: CREATE_CHARGE,
  charge,
});

export const updateChargeAC = (index: number, charge: chargeType): updateChargeACType => ({
  type: UPDATE_CHARGE,
  charge,
  index,
});

export const deleteChargeAC = (index: number): deleteChargeACType => ({
  type: DELETE_CHARGE,
  index,
});

export default chargesReducer;