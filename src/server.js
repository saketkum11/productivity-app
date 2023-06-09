import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Timer } from "./pages/Timer";
import { Task } from "./pages/Task";
import { Setting } from "./pages/Setting";
import { MyRoutes } from "./MyRoutes/MyRoutes";
import { HomeLayout } from "./Layout/HomeLayout";
import { SideBar } from "./component/SideBar";
import { Footer } from "./component/Footer";
import { NotFound } from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { RequireAuth } from "./MyRoutes/RequireAuth";
import { TaskProvider } from "./context/TaskContext";
import { db, firebaseApp, auth } from "./Firebase/firebase";
import { reducer } from "./Firebase/reducer";
import { TaskCard } from "./component/TaskCard";
import { addTask } from "./Firebase/db-store";
import { EditModal } from "./component/EditModal";
import { updateTask } from "./Firebase/db-store";
import { deleteTask } from "./Firebase/db-store";
import { formatingTime } from "./Firebase/db-store";
import { useTitle } from "./Firebase/db-store";
import { Nav } from "./component/Nav";
export {
  Nav,
  useTitle,
  formatingTime,
  deleteTask,
  updateTask,
  EditModal,
  Signup,
  Login,
  Timer,
  Task,
  Setting,
  MyRoutes,
  HomeLayout,
  SideBar,
  Footer,
  NotFound,
  AuthProvider,
  RequireAuth,
  TaskProvider,
  db,
  auth,
  firebaseApp,
  reducer,
  TaskCard,
  addTask,
};
