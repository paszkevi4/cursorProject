import { db } from './firebase';

export const createCharge = (category) => {
  db.collection('charges1')
    .add(category)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const updateCharge = (docId, ctegory) => {
  db.collection('charges1')
    .doc(docId)
    .set(ctegory)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const deleteCharge = (docId) => {
  db.collection('charges1')
    .doc(docId)
    .delete()
    .catch((error) => {
      console.error('Error: ', error);
    });
};
