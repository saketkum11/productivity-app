import React from "react";
import { Footer, Nav, SideBar } from "../server";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="block lg:grid lg:grid-cols-6">
        <Nav />
        <aside className="hidden  p-5 pl-9  border-solid border-black  lg:block lg:col-span-1">
          <SideBar />
        </aside>
        <main className=" mt-28 min-h-screen  p-5 lg:border-x lg:col-span-5">
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
