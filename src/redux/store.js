import { createStore, combineReducers } from 'redux';

import iconsReducer from './iconsReducer';
import incomeCategoriesReducer from './incomeCategoriesReducer';
import chargeCategoriesReducer from './chargeCategoriesReducer';
import chargesReducer from './chargesReducer';
import incomesReducer from './incomesReducer';

let reducers = combineReducers({
  icons: iconsReducer,
  incomes: incomesReducer,
  charges: chargesReducer,
  incomeCategories: incomeCategoriesReducer,
  chargeCategories: chargeCategoriesReducer,
});

let store = createStore(reducers);

export default store;
