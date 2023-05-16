import "./App.css";
import { MyRoutes } from "./server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <MyRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
