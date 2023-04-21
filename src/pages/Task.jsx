import React from "react";
import { useTask } from "../context/TaskContext";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const Task = () => {
  const { state, dispatch } = useTask();
  const { task } = state;
  const handleDelete = (item) => {
    dispatch({ type: "DELETE_TASK", payload: item });
  };
  return (
    <>
      <div className=" min-h-full">
        <h3 className="text-3xl font-bold">Task list</h3>
        <div className="flex justify-center items-center gap-5 p-5">
          {[...task]?.map((item) => {
            const { taskTitle, workDuration, lable } = item;
            return (
              <>
                <section className="border-2 border-cyan-800 border-solid my-3 p-4 rounded-md">
                  <div className="flex flex-col justify-center  gap-2 flex-wrap">
                    <div className="text-xl font-bold"> {taskTitle}</div>
                    <div>WordDuration: {workDuration} min</div>
                    <div>Lable: {lable}</div>
                  </div>
                  <div className="flex gap-4 mt-5">
                    <button
                      className="cursor-pointer hover:text-slate-500"
                      onClick={() => {}}
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="cursor-pointer hover:text-slate-500"
                      onClick={(item) => handleDelete(item)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </section>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Task };
