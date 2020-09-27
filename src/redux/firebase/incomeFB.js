import { db } from './firebase';

export const createIncome = (category) => {
  db.collection('incomes')
    .add(category)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const updateIncome = (docId, ctegory) => {
  db.collection('incomes')
    .doc(docId)
    .set(ctegory)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const deleteIncome = (docId) => {
  db.collection('incomes')
    .doc(docId)
    .delete()
    .catch((error) => {
      console.error('Error: ', error);
    });
};
