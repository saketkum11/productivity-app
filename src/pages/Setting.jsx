import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addTask } from "../server";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../server";
const Setting = () => {
  const [taskData, setTaskData] = useState({
    taskTitle: "",
    workDuration: 0,
    description: "",
    lable: "" || "Game",
    completed: false,
  });
  const { storeLoginUser } = useAuth();
  const { uid } = storeLoginUser;
  const navigate = useNavigate();
  const { taskTitle, workDuration, lable, description } = taskData;

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };
  useTitle("Setting");
  const handleNewData = (uid, data) => {
    console.log(data);
    if (
      data.taskTitle !== " " ||
      data.lable !== " " ||
      data.description !== " " ||
      data.workDuration !== 0
    ) {
      addTask(uid, data);
      toast.success("created task", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTaskData({
        taskTitle: "",
        workDuration: "",
        lable: "",
        description: "",
        completed: false,
      });
      navigate("/");
    } else {
      toast.warning("please fill form correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center w-full max-w-lg gap-5 my-16 m-auto border-solid border-cyan-400 border-2 rounded-md p-9 text-lg md:text-sm">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleNewData(uid, taskData);
        }}
      >
        <div className="flex flex-col gap-4 ">
          <label htmlFor="taskTitle">Title</label>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="taskTitle"
            value={taskTitle}
            required
            className="border-2 p-4 rounded-md w-full"
          ></input>
        </div>
        <div className=" flex flex-col p-5 gap-4">
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
        <div className=" flex flex-col p-5 gap-4">
          <label htmlFor="Work-duration">Work-duration</label>
          <input
            onChange={(event) => handleChange(event)}
            value={workDuration}
            name="workDuration"
            type="range"
            min="0"
            max="60"
            required
            className="h-0.5 appearance-none bg-cyan-600  rounded-full"
          />
          {workDuration ?? 0} min
        </div>

        <button
          type="submit"
          className="bg-cyan-500 text-white p-3 w-full  mt-6 rounded-md"
        >
          Create Task
        </button>
      </form>
      <div className="sm:flex gap-4  block text-center">
        <lable htmlFor="break">Choose Lable :</lable>
        <select
          onChange={(event) => handleChange(event)}
          value={lable}
          name="lable"
          id="break"
          required
          className="border-solid border-cyan-600 border-2"
        >
          <option> --Select Option--</option>
          <option value="Study-hour">Study hour</option>
          <option value="Break-time">Break Time</option>
          <option value="Game-time">Game Time</option>
          <option value="Book-reading">Book reading</option>
          <option value="Watching-ipl">Watching Ipl time</option>
        </select>
      </div>
    </div>
  );
};

export { Setting };
