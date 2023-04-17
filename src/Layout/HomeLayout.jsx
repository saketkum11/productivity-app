import React from "react";
import { SideBar } from "../server";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <aside className="col-span-1 p-5 pl-9 border-r-2 border-solid border-black min-h-full">
          <SideBar />
        </aside>
        <main className="col-span-5  p-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export { HomeLayout };
