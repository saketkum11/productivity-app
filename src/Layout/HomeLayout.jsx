import React from "react";
import { Footer, SideBar } from "../server";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <aside className="col-span-1 p-5 pl-9  border-solid border-black ">
          <SideBar />
        </aside>
        <main className=" col-span-5 min-h-screen border-x p-5">
          <div>
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export { HomeLayout };
