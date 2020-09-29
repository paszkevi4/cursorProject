import { db } from '../firebase/firebase';

const FETCH_CHARGES = 'FETCH_CHARGES';
const CREATE_CHARGE = 'CREATE_CHARGE';
const UPDATE_CHARGE = 'UPDATE_CHARGE';
const DELETE_CHARGE = 'DELETE_CHARGE';
const SORT_CHARGES = 'SORT_CHARGES';

type chargeType = {
  category: number;
  description: string;
  date: Date | string;
  money: number;
};

type fetchChargeACType = {
  type: typeof FETCH_CHARGES;
  charges: Array<chargeType>;
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

type sortChargesACType = {
  type: typeof SORT_CHARGES;
  sortingBy: string;
  wasSorted: boolean;
};

type actionType =
  | fetchChargeACType
  | createChargeACType
  | updateChargeACType
  | deleteChargeACType
  | sortChargesACType;

let initialState: Array<chargeType> = [];

const chargesReducer = (state = initialState, action: actionType): Array<chargeType> => {
  switch (action.type) {
    case FETCH_CHARGES:
      return [...action.charges];
    case CREATE_CHARGE:
      return [...state, action.charge];
    case UPDATE_CHARGE:
      state.splice(action.index, 1, action.charge);
      return [...state];
    case DELETE_CHARGE:
      state.splice(action.index, 1);
      return [...state];
    case SORT_CHARGES:
      if(action.sortingBy === 'Category'){
        if(action.wasSorted){
          return [...state.sort((a: any,b: any) => (a.category.toUpperCase() < b.category.toUpperCase())? -1 : 1)]
        } 
        else{
          return [...state.sort((a: any,b: any) => (a.category.toUpperCase() > b.category.toUpperCase())? -1 : 1)]
        }  
      }
      else if(action.sortingBy === 'Description'){
        if(action.wasSorted){
          return [...state.sort((a: any,b: any) => (a.description?.toUpperCase() < b.description?.toUpperCase())? -1 : 1)]
        } 
        else{
          return [...state.sort((a: any,b: any) => (a.description?.toUpperCase() > b.description?.toUpperCase())? -1 : 1)]
        }  
      }
      else if(action.sortingBy === 'Date'){
        if(action.wasSorted){
        return [...state.sort((a: any,b: any) => (a.date.seconds < b.date.seconds)? -1 : 1)]
        } 
        else{
          return [...state.sort((a: any,b: any) => (a.date.seconds > b.date.seconds)? -1 : 1)]
        }       
      }
      else if(action.sortingBy === 'Money'){
        if(action.wasSorted){
            return [...state.sort((a: any,b: any) => (a.money < b.money)? -1 : 1)]
        } 
        else{
          return [...state.sort((a: any,b: any) => (a.money > b.money)? -1 : 1)]
        }       
      }
    default:
      return state;
  }
};

export const fetchChargesAC = (charges: Array<chargeType>): fetchChargeACType => ({
  type: FETCH_CHARGES,
  charges,
});

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

export const sortChargesAC = (sortingBy: string, wasSorted: boolean): sortChargesACType => ({
  type: SORT_CHARGES,
  sortingBy,
  wasSorted,
});

// THUNK

export const setChargesThunk = () => {
  return (dispatch: any) => {
    db.collection('charges1').onSnapshot((ss: any) => {
      dispatch(
        fetchChargesAC(
          ss.docs.map((el: any) => {
            const charge = el.data();
            return { ...charge, docId: el.id };
          }),
        ),
      );
    });
  };
};

export default chargesReducer;
