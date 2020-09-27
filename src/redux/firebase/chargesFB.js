import { db } from './firebase';

export const createCharge = (category) => {
  db.collection('charges')
    .add(category)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const updateCharge = (docId, ctegory) => {
  db.collection('charges')
    .doc(docId)
    .set(ctegory)
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const deleteCharge = (docId) => {
  db.collection('charges')
    .doc(docId)
    .delete()
    .catch((error) => {
      console.error('Error: ', error);
    });
};
