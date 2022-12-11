import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import ContactForm from "./ContactForm";

const ContactBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Quiz-Mart",
      "Car-Reseller",
      "Doctors Portal",
      "Skill Platform",
      "Wild-Photograph",
    ],
    loop: Infinity,
  });
  return (
    <div>
      <div
       data-aos="zoom-in-up"
       data-aos-duration="1000"
        className="hero mt-12 "
        style={{
          backgroundImage: `url("https://i.ibb.co/ts2vPp3/pexels-myburgh-roux-1102797.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content grid grid-cols-1 md:grid-cols-2">
          <div className="max-w-md">
            <h1 className="mb-5 text-sm  md:text-4xl font-bold text-white">
              Discover my Amazing <br /> Art Space!
            </h1>
            <p className="mb-5 text-white text-sm md:text-3xl">
              I Have Created: <span>{text}</span>
            </p>
            <button className="btn btn-warning rounded-0">Explore Now</button>
          </div>

          <img
            className="lg:h-[450px] md:-mt-16 -mb-4"
            src="https://i.ibb.co/4Nv3xrD/20221208-135343-1-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div
        data-aos="fade-down-right"
        className="grid grid-cols-1 md:grid-cols-4 my-4"
      >
        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#fcb900" }}>
            1+{" "}
          </p>
          <p>Year's Experience</p>
        </div>

        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#fcb900" }}>
            5+{" "}
          </p>
          <p>Completed Projects</p>
        </div>

        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#fcb900" }}>
            104+{" "}
          </p>
          <p>Happy Customers</p>
        </div>

        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#fcb900" }}>
            4+{" "}
          </p>
          <p>Honors and Awards</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
