import {
  doc,
  deleteDoc,
  addDoc,
  collection,
  updateDoc,
  getDocs
} from "firebase/firestore";
import { database } from "./firebaseSetup";
import { onSnapshot } from "firebase/firestore";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(database, collectionName), data);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFormDb(key, collectionName) {
  try {
    await deleteDoc(doc(database, collectionName, key));
  } catch (err) {
    console.log(err);
  }
}

export async function updateGoalWarning(key, collectionName) {
  try {
    await updateDoc(doc(database, collectionName, key), { warning: true });
  } catch (err) {
    console.log(err);
  }
}

export async function readAllDocs(collectionName) {
  try {
    const querySnapShot = await getDocs(collection(database, collectionName));
    let newArray = [];
    if (!querySnapShot.empty) {
      querySnapShot.forEach((docSnapShot) => {
        newArray.push(docSnapShot.data());
      });
      return newArray;
    }
  } catch (err) {
    console.log(err);
  }
}
