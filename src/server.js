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
import { addDate } from "./Firebase/db-store";
import { reducer } from "./Firebase/reducer";
import { TaskCard } from "./component/TaskCard";
export {
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
  addDate,
  reducer,
  TaskCard,
};
