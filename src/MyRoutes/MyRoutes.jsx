import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLayout, Login, Setting, Signup, Task, Timer } from "../server";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Timer />}></Route>
          <Route path="task" element={<Task />}></Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export { MyRoutes };
