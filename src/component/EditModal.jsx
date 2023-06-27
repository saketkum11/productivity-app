import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { updateTask } from "../server";
import { toast } from "react-toastify";

const EditModal = ({ task, setEditModalFlag }) => {
  const { storeLoginUser } = useAuth();
  const [editTask, setEditTask] = useState(task);
  const { taskTitle, lable, description, workDuration, id } = editTask;
  const { uid } = storeLoginUser;
  const handleChange = (event) => {
    setEditTask({ ...editTask, [event.target.name]: event.target.value });
  };
  const handleSubmit = (data, uid, id) => {
    updateTask(data, uid, id);
    toast.info("successfully updated task", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setEditModalFlag((flag) => !flag);
  };
  return (
    <div>
      <div className="fixed inset-0 opacity-40 bg-slate-400 "></div>
      <div className="fixed top-28 lg:top-20 inset-0   text-cyan-900 sm:max-w-md  m-auto rounded-lg text-xs">
        <div className="flex flex-col justify-center min-h-full  mx-6  sm:text-sm ">
          <div className="bg-white p-3 ">
            <div className="">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit(editTask, uid, id);
                }}
              >
                <div className="flex flex-col w-full gap-4 max-w-md">
                  <label htmlFor="taskTitle">Title</label>
                  <input
                    onChange={(event) => handleChange(event)}
                    type="text"
                    className="border-2 p-4 rounded-md"
                    name="taskTitle"
                    value={taskTitle}
                    required
                  ></input>
                </div>
                <div className="max-w-5xl flex flex-col p-5 gap-4">
                  <label htmlFor="description">Description</label>
                  <textarea
                    onChange={(event) => handleChange(event)}
                    value={description}
                    name="description"
                    cols="30"
                    rows="5"
                    required
                    className="border-2 border-black border-solid p-4"
                  />
                </div>
                <div className="max-w-5xl flex flex-col p-5 gap-4">
                  <label htmlFor="Work-duration">Work-duration</label>
                  <input
                    onChange={(event) => handleChange(event)}
                    value={workDuration}
                    name="workDuration"
                    type="range"
                    min="0"
                    max="60"
                    required
                    className="h-0.5 appearance-none bg-cyan-600 w-80 rounded-full"
                  />
                </div>
                {workDuration ?? 0} min
                <div className="flex gap-4">
                  <lable htmlFor="break">Choose Lable :</lable>
                  <select
                    onChange={(event) => handleChange(event)}
                    value={lable}
                    name="lable"
                    id="break"
                    required
                    className="border-solid border-cyan-600 border-2"
                  >
                    <option value="Study-hour">Study hour</option>
                    <option value="Break-time">Break Time</option>
                    <option value="Game-time">Game Time</option>
                    <option value="Book-reading">Book reading</option>
                    <option value="Watching-ipl">Watching Ipl time</option>
                  </select>
                  {lable}
                </div>
                <div className="flex justify-center  gap-3 items-center">
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white p-3 w-full mt-6 "
                  >
                    update Task
                  </button>
                  <button
                    onClick={() => {
                      setEditModalFlag((flag) => !flag);
                    }}
                    className="bg-cyan-500 text-white p-3 w-full mt-6 "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditModal };
