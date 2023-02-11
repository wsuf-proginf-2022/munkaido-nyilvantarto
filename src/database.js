import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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
