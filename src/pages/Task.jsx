import React, { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { collection, onSnapshot } from "firebase/firestore";
import { TaskCard, db } from "../server";
import { useAuth } from "../context/AuthContext";

const Task = () => {
  const { user } = useAuth();
  const { state, dispatch } = useTask();
  const { tasks } = state;

  useEffect(() => {
    let unsub = null;
    const id = user?.uid;
    if (id) {
      const col = collection(db, "pomodoro", id, "task");
      unsub = onSnapshot(col, (colSearch) => {
        let list = [];
        colSearch?.docs?.forEach((doc) => {
          const _task = {
            id: doc?.id,
            ...doc.data(),
          };
          list.push(_task);
        });
        dispatch({ type: "ADD_TASK", payload: list });
      });
    }
    return () => {
      unsub && unsub();
    };
  }, [user]);

  return (
    <>
      <div>
        {[...tasks]?.map((task) => {
          return (
            <>
              <TaskCard task={task} key={task.id} />
            </>
          );
        })}
      </div>
    </>
  );
};

export { Task };
