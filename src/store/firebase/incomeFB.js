import { db } from './firebase';

export const createIncome = (category) => {
  db.collection('incomes1')
    .add(category)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const updateIncome = (docId, ctegory) => {
  db.collection('incomes1')
    .doc(docId)
    .set(ctegory)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const deleteIncome = (docId) => {
  db.collection('incomes1')
    .doc(docId)
    .delete()
    .catch((error) => {
      console.error('Error: ', error);
    });
};
