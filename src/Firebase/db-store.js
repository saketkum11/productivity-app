import {
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../server";
import { useEffect, useState } from "react";

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
export const formatingTime = (remaingTime) => {
  const minute = Math.floor(remaingTime / 60);
  const sec = remaingTime % 60;
  const time = `${minute < 10 ? "0" + minute : minute} m : ${
    sec < 10 ? "0" + sec : sec
  } s`;
  return time;
};
export const useTitle = (doc_title) => {
  const [_title, setTitle] = useState(doc_title);
  useEffect(() => {
    document.title = _title;
  }, [_title]);
  return { setTitle };
};
