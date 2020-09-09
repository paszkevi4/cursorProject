import React from 'react';
import {
  AccountBalance,
  AccountBalanceWallet,
  AllInbox,
  ChildFriendly,
  Cake,
  DirectionsBike,
  DriveEta,
  EmojiSymbols,
  Fastfood,
  Favorite,
  FitnessCenter,
  Kitchen,
  LocalDining,
  MenuBook,
  Pets,
  PlayForWork,
  School,
  ShoppingCart,
  Waves,
  WorkOutline,
} from '@material-ui/icons';

const initialState = {
  AccountBalance: <AccountBalance />,
  AccountBalanceWallet: <AccountBalanceWallet />,
  AllInbox: <AllInbox />,
  ChildFriendly: <ChildFriendly />,
  Cake: <Cake />,
  DirectionsBike: <DirectionsBike />,
  DriveEta: <DriveEta />,
  EmojiSymbols: <EmojiSymbols />,
  Fastfood: <Fastfood />,
  Favorite: <Favorite />,
  FitnessCenter: <FitnessCenter />,
  Kitchen: <Kitchen />,
  LocalDining: <LocalDining />,
  MenuBook: <MenuBook />,
  Pets: <Pets />,
  PlayForWork: <PlayForWork />,
  School: <School />,
  ShoppingCart: <ShoppingCart />,
  Waves: <Waves />,
  WorkOutline: <WorkOutline />,
};

const iconsReducer = (state = initialState, _) => {
  return state;
};

export default iconsReducer;
