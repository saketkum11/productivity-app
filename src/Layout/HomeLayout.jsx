import React from "react";
import { Footer, SideBar } from "../server";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="grid grid-cols-6">
        <aside className="hidden col-span-1 p-5 pl-9  border-solid border-black  md:block">
          <SideBar />
        </aside>
        <main className=" col-span-6  min-h-screen  p-5 md:border-x md:col-span-5">
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
