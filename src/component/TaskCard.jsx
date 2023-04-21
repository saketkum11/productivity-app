import React from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const TaskCard = ({ task }) => {
  const { title } = task;
  return (
    <section className=" p-5 border-b-2 border-b-cyan-400 border-solid my-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <span className="text-md font-bold hover:text-cyan-400 focus:text-cyan-600 cursor-pointer">
            {title}
          </span>
        </div>
        <div className="text-2xl ">
          <button className=" hover:text-cyan-500 px-3">
            <MdEdit />
          </button>
          <button className=" hover:text-cyan-500">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </section>
  );
};

export { TaskCard };
