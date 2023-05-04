import {
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../server";

export const addTask = async (uid, data) => {
  try {
    const docRef = collection(db, "pomodoro", uid, "task");
    await addDoc(docRef, data);
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (data, uid, id) => {
  try {
    const docRef = doc(db, "pomodoro", uid, "task", id);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (uid, id) => {
  try {
    const docRef = doc(db, "pomodoro", uid, "task", id);
    deleteDoc(docRef);
  } catch (error) {
    console.error(error);
  }
};
