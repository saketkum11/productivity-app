import React, { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { formatingTime, updateTask, useTitle } from "../server";
import { AiOutlinePause } from "react-icons/ai";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
const Timer = () => {
  const { taskID } = useParams();
  const { storeLoginUser } = useAuth();
  const { state } = useTask();
  const { tasks } = state;
  const task = [...tasks].find((taskItem) => taskItem.id === taskID);
  const { description, lable, taskTitle, workDuration, id } = task;
  const [change, setChange] = useState({ key: 0, playing: false, time: "" });
  useTitle(`pomodoro | ${taskTitle}`);
  return (
    <section className=" items-center place-content-center my-14 lg:grid lg:grid-cols-6">
      <div className="col-span-3 flex flex-col justify-center items-center">
        <CountdownCircleTimer
          isPlaying={change.playing}
          key={change.key}
          duration={workDuration * 60}
          colors={["#004777", "#F7B801", "#A30000"]}
          colorsTime={[1, 2, 3]}
          size={300}
          strokeWidth={40}
          onComplete={() => {
            toast.success("completed task", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            updateTask({ ...task, completed: true }, storeLoginUser?.uid, id);
          }}
        >
          {({ remainingTime }) => (
            <div className="flex flex-col items-center justify-center ">
              <span className="mb-5">{lable ?? "game"}</span>
              <span className="font-bold text-2xl">
                {formatingTime(remainingTime)}
              </span>
              <p>{` out of ${workDuration} min `}</p>
            </div>
          )}
        </CountdownCircleTimer>
        <div className=" p-4 flex flex-col  items-start my-10  ">
          <div className="flex flex-row-reverse items-center gap-5 justify-center mt-7">
            {change.playing ? (
              <button
                onClick={() =>
                  setChange((currentValue) => {
                    return {
                      ...currentValue,
                      playing: !currentValue.playing,
                    };
                  })
                }
                className="flex-1 flex justify-center items-center rounded-full border-2  text-center w-16 h-16 hover:bg-slate-200 text-xl"
              >
                <AiOutlinePause />
              </button>
            ) : (
              <button
                onClick={() =>
                  setChange((currentValue) => {
                    return {
                      ...currentValue,
                      playing: !currentValue.playing,
                    };
                  })
                }
                className="flex-1 flex justify-center items-center rounded-full border-2  text-center w-16 h-16 hover:bg-slate-200 text-xl"
              >
                <GrPlayFill />
              </button>
            )}

            <button
              onClick={() =>
                setChange((currentValue) => {
                  return {
                    ...currentValue,
                    key: currentValue.key + 1,
                  };
                })
              }
              className="flex-1 flex justify-center items-center text-bold  rounded-full border-2 w-16 h-16 hover:bg-slate-200 text-xl"
            >
              <BiReset />
            </button>
          </div>
        </div>
      </div>

      <div className="  flex justify-start items-start border-2 flex-col  p-4 my-14 lg:col-span-3">
        <span className="text-2xl font-bold ">{taskTitle}</span>
        <p className="text-justify my-5">{description}</p>
      </div>
    </section>
  );
};

export { Timer };
