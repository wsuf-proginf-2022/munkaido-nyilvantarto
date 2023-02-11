import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  deleteDoc,
  limit,
  orderBy,
  getDoc,
  getDocs,
  query,
  addDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';

import config from './db_config';

initializeApp(config);
export const db = getFirestore();

//  There are only two hard things in Computer Science: cache invalidation and
//  naming things. -- Phil Karlton

/**
 * Create a new document in the collection 'users' with the given data.
 *
 * @export
 * @param {object} user - The user data to be stored in the database.
 */
export async function createUserDataOnFirebase(user) {
  await setDoc(doc(db, 'users', user.email), user);
}

export async function getUserDataFromFirebase(email) {
  // database -> collection -> document
  const docRef = doc(db, 'users', email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  console.log('No such user data!');
  return null;
}

export async function toggleStateOnFirebase(email, newState) {
  // https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
  // database -> collection -> document
  console.log(email, ' is now ', newState);
  await updateDoc(doc(db, 'users', email), {
    currentState: newState,
  });
}

export async function saveHistoryOnFirebase(email, newState) {
  // database -> collection -> document -> collection
  await addDoc(collection(db, 'users', email, 'history'), {
    date: serverTimestamp(),
    state: newState,
  });
  console.log(`state of ${email} was saved in the database width: ${newState}`);
}

export async function getHistory(email) {
  // https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection
  const q = query(collection(db, 'users', email, 'history'), orderBy('date', 'desc'), limit(40));
  const querySnapshot = await getDocs(q);
  const result = [];
  querySnapshot.forEach(doc => {
    const data = {
      ...doc.data(),
      id: doc.id,
    };
    result.push(data);
  });
  return result;
}

export async function deleteHistoryById(email, id) {
  await deleteDoc(doc(db, 'users', email, 'history', id));
}
