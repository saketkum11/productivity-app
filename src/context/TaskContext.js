import React, { createContext, useContext, useReducer } from "react";
const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const initialState = {
    task: [],
  };
  function reducer(state, { type, payload }) {
    switch (type) {
      case "CREATE_TASK":
        return {
          ...state,
          task: [...state.task, payload],
        };
      case "DELETE_TASK":
        return {
          ...state,
          task: [],
        };

      default:
        return { state };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  console.log(state);
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const useTask = () => useContext(TaskContext);
export { TaskProvider, useTask };
