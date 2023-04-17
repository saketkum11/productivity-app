import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  HomeLayout,
  Login,
  NotFound,
  Setting,
  Signup,
  Task,
  Timer,
} from "../server";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Timer />} />
          <Route path="task" element={<Task />} />
          <Route path="setting" element={<Setting />} />
          <Route path="footer" element={<Footer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export { MyRoutes };
