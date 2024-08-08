import {
  doc,
  deleteDoc,
  addDoc,
  collection,
  updateDoc,
  getDocs,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(database, collectionName), data);
  } catch (err) {
    console.log(err);
  }
}

export async function writeWithIdToDB(data, collectionName, id) {
  try {
    await setDoc(doc(database, collectionName, id), data);
  } catch (err) {
    console.log(err);
  }
}

export async function getADoc(collectionName, id) {
  try {
    const docSnap = await getDoc(doc(database, collectionName, id));
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (err) {
    console.log("write to db ", err);
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
