import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { EditModal } from "./EditModal";
import { useAuth } from "../context/AuthContext";
import { deleteTask } from "../server";
const TaskCard = ({ task }) => {
  const [editModalFlag, setEditModalFlag] = useState(false);
  const { taskTitle, id } = task;
  const { user } = useAuth();
  const handleEditForm = () => {
    setEditModalFlag((flag) => !flag);
  };
  const handleDeleteTask = (uid, id) => {
    deleteTask(uid, id);
  };
  return (
    <section className=" p-5 border-b-2 border-b-cyan-400 border-solid my-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <span className="text-md font-bold hover:text-cyan-400 focus:text-cyan-600 cursor-pointer">
            {taskTitle}
          </span>
        </div>
        <div className="text-2xl ">
          <button
            onClick={handleEditForm}
            className=" hover:text-cyan-500 px-3"
          >
            <MdEdit />
          </button>
          <button
            onClick={() => handleDeleteTask(user?.uid, task.id)}
            className=" hover:text-cyan-500"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      {editModalFlag && (
        <EditModal task={task} setEditModalFlag={setEditModalFlag} />
      )}
    </section>
  );
};

export { TaskCard };
