import { addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../server";
export const addTask = async (data, uid) => {
  try {
    const docRef = collection(db, "pomodoro", uid, "task");
    await addDoc(docRef, data);
    console.log(data, uid);
  } catch (error) {
    console.error(error);
  }
};
