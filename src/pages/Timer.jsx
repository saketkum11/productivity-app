import React from "react";
import { GrPlayFill } from "react-icons/gr";
import { BiReset } from "react-icons/bi";
const Timer = () => {
  return (
    <div>
      <section className="grid  justify-center  items-center">
        <section className="p-4 flex flex-col items-center my-10 justify-center ">
          <div className="h-72 w-72  rounded-full border-8 flex flex-col justify-center border-cyan-400">
            <div className="flex justify-center items-center  text-7xl ">
              <span className=" font-bold ">05 </span>
              <span className=" font-bold ">:</span>
              <span className=" font-bold ">00 </span>
            </div>
            <div className="mt-3">
              <p className="  text-center">Out of 00 min</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-5 justify-center mt-7">
            <button className="flex-1 flex justify-center items-center rounded-full border-2  text-center w-16 h-16 hover:bg-slate-200 text-xl">
              <GrPlayFill />
            </button>
            <button className="flex-1 flex justify-center items-center text-bold  rounded-full border-2 w-16 h-16 hover:bg-slate-200 text-xl">
              <BiReset />
            </button>
          </div>
        </section>
        <section className="flex justify-start items-start border-4 flex-col  p-7 my-10 max-w-lg">
          <span className="text-2xl font-bold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ab eligendi consequuntur molestiae, eius dolore quibusdam aliquid
            perferendis commodi laborum!
          </span>
          <p className="text-justify my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ad!
          </p>
          <span className="text-lg font-bold">Tag:</span>
          <div className="  flex w-full justify-start flex-wrap items-center ">
            <span className=" p-3 bg-gray-900 text-white rounded-2xl my-3">
              My name is khan and i am not terrorits"
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export { Timer };
