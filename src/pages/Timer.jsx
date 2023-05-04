import React from "react";
import { GrPlayFill } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";

const Timer = () => {
  const { taskID } = useParams();
  const { state } = useTask();
  const { tasks } = state;
  const task = [...tasks].find((taskItem) => taskItem.id === taskID);
  const { description, lable, taskTitle, workDuration } = task;
  return (
    <section className="grid justify-center items-center">
      <section className="p-4 flex flex-col items-center my-10 justify-center ">
        <div className="  flex w-full justify-center flex-wrap items-center ">
          <span className=" p-3 bg-gray-900 text-white rounded-2xl my-3">
            {lable}
          </span>
        </div>
        <div className="h-96 w-96  rounded-full border-8 flex flex-col justify-center border-cyan-600 ">
          <div className="flex justify-center items-center  text-7xl ">
            <span className=" font-bold ">05 </span>
            <span className=" font-bold ">:</span>
            <span className=" font-bold ">00 </span>
          </div>
          <div className="mt-3">
            <p className="  text-center">Out of 00 min</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-5 justify-center mt-7">
          <button className="flex-1 flex justify-center items-center rounded-full border-2  text-center w-16 h-16 hover:bg-slate-200 text-xl">
            <GrPlayFill />
          </button>
          <button className="flex-1 flex justify-center items-center text-bold  rounded-full border-2 w-16 h-16 hover:bg-slate-200 text-xl">
            <BiReset />
          </button>
        </div>
      </section>
      <section className="flex justify-start items-start border-4 flex-col  p-7 my-10 max-w-lg">
        <span className="text-2xl font-bold ">{taskTitle}</span>
        <p className="text-justify my-5">{description}</p>
      </section>
    </section>
  );
};

export { Timer };
