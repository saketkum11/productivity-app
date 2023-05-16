const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return { ...state, tasks: payload };

    default: {
      return state;
    }
  }
};
export { reducer };
