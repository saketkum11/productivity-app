import { addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../server";
const addDate = async () => {
  try {
    const docRef = collection(db, "task");
    await addDoc(docRef, {
      title: "hello",
      description: "new online india is hacked",
    });
  } catch (error) {}
};

export { addDate };
