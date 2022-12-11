import React from "react";
import FirstSideNav from "./FirstSideNav";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div
          className=" w-full lg:w-2/5 bg-zinc-800 rounded-sm "
          data-aos="fade-up"
        >
          <FirstSideNav></FirstSideNav>
        </div>

        <div data-aos="fade-down" className=" lg:-ml-[300px]">
          <HomeBanner></HomeBanner>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
