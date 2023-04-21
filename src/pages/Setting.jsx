import React, { useState } from "react";
import { addDate, auth, db, firebaseApp } from "../server";

const Setting = () => {
  const [taskData, setTaskData] = useState({
    taskTitle: "" || "Get start",
    workDuration: 15,
    description: "" || "Get this done by today or max to sunday.",
    lable: "Game-time",
  });

  const { taskTitle, workDuration, lable, description } = taskData;

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleNewData = () => {
    console.log(addDate());
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 my-16 min-h-full">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex flex-col w-full gap-4 max-w-md">
          <h5>Timer Title</h5>
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            className="border-2 p-4 rounded-md"
            name="taskTitle"
            value={taskTitle}
          ></input>
          {taskTitle}
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
            className="h-0.5 appearance-none bg-cyan-600 w-80 rounded-full"
          />
          {workDuration ?? 0} min
        </div>

        <div className="flex gap-4">
          <lable htmlFor="break">Choose Lable :</lable>
          <select
            onChange={(event) => handleChange(event)}
            value={lable}
            name="lable"
            id="break"
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
        <button
          type="submit"
          className="bg-cyan-500 text-white p-3 w-full mt-6 rounded-md"
        >
          Submit
        </button>
      </form>
      <button onClick={handleNewData}>get data base</button>
    </div>
  );
};

export { Setting };
