import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  HomeLayout,
  Login,
  NotFound,
  RequireAuth,
  Setting,
  Signup,
  Task,
  Timer,
} from "../server";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Timer />
              </RequireAuth>
            }
          />
          <Route
            path="task"
            element={
              <RequireAuth>
                <Task />
              </RequireAuth>
            }
          />
          <Route
            path="setting"
            element={
              <RequireAuth>
                <Setting />
              </RequireAuth>
            }
          />
          <Route
            path="footer"
            element={
              <RequireAuth>
                <Footer />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export { MyRoutes };
