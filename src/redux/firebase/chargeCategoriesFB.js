import { db } from './firebase';

export const createChargeCategory = (category) => {
  db.collection('charge-categories')
    .add(category)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const updateChargeCategory = (docId, ctegory) => {
  db.collection('charge-categories')
    .doc(docId)
    .set(ctegory)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const deleteChargeCategory = (docId) => {
  db.collection('charge-categories')
    .doc(docId)
    .delete()
    .catch((error) => {
      console.error('Error: ', error);
    });
};
