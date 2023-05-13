import React, { createContext, useContext, useReducer } from "react";

import { reducer } from "../server";

const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const intitialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(reducer, intitialState);
  const value = { state, dispatch };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const useTask = () => useContext(TaskContext);
export { TaskProvider, useTask };
