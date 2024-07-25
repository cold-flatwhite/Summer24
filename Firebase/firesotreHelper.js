import { doc, deleteDoc, addDoc, collectio, updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

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
    await updateDoc(doc(database, collectionName, key), {warning : true});
  } catch (err) {
    console.log(err);
  }
}