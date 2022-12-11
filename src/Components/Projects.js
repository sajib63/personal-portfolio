import React, { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";
import FirstSideNav from "./FirstSideNav";
import ProjectModal from "./ProjectModal";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [modalData, setModalData]=useState([]);
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div
          className=" w-full lg:w-2/5 bg-zinc-800 rounded-sm "
          data-aos="fade-up"
        >
          <FirstSideNav></FirstSideNav>
        </div>

        <div data-aos="fade-down" className=" lg:-ml-[250px]">
          <ProjectsCard setModalData={setModalData}></ProjectsCard>
        </div>
      </div>

      <div>
        <ProjectModal modalData={modalData}></ProjectModal>
      </div>
    </div>
  );
};

export default Projects;
