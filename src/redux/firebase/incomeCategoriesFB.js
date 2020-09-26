import { db } from './firebase';

export const createIncomeCategory = (category) => {
  db.collection('income-categories')
    .add(category)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const updateIncomeCategory = (docId, ctegory) => {
  db.collection('income-categories')
    .doc(docId)
    .set(ctegory)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const deleteIncomeCategory = (docId) => {
  db.collection('income-categories')
    .doc(docId)
    .delete()
    .catch((error) => {
      console.error('Error: ', error);
    });
};
