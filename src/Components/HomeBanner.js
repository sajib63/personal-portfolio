import React from "react";
import Countdown from "react-countdown";
import { FaMobile } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

import "./Banner.css";

const HomeBanner = () => {
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

      {/* my services  */}

      <section class="service my-10">
        <div class="text-center">
          <h1 class="text-3xl font-bold " style={{ color: "#fcb900" }}>My services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem{" "}
          </p>
        </div>
        <div class="service-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
              
        <div class="col-12 col-md-4 col-lg-4 mb-5">
                <div class="box1">
                  <span>
                    <center>
                      <i
                        class="bi bi-brush-fill"
                        style={{border:' 1px solid #f9ca24', padding:'15px', background:'#f9ca24',
                        borderRadius: '5px'}}></i>
                    </center>
                  </span>
                  <h4 class="mt-5 text-center">Graphic Design</h4>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, dolorum Minus,{" "}
                  </p>
                  <center>
                    <button class="btn btn-outline-warning mb-5 mt-2">
                      Visit Me
                    </button>
                  </center>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-5">
                <div class="box">
                  <span>
                    <center>
                      <i
                        class="bi bi-webcam"
                        style={{border:' 1px solid #f9ca24', padding:'15px', background:'#f9ca24',
                        borderRadius: '5px'}}           ></i>
                    </center>
                  </span>
                  <h4 class="mt-5 text-center">Web Design</h4>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, dolorum Minus,{" "}
                  </p>
                  <center>
                    <button class="btn btn-outline-warning mb-5 mt-2">
                      Visit Me
                    </button>
                  </center>
                </div>
              </div>
              <div class="shadow-2xl mb-5">
                <div class="box">
                  <span className="-mt-4">
                    <center>
                    <FaMobile className="text-6xl" style={{ color: "#fcb900" }}></FaMobile>
                    </center>
                  </span>
                  <h4 class="mt-5 text-center">Web Devolopment</h4>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, dolorum Minus,{" "}
                  </p>
                  <center>
                    <button class="btn btn-outline-warning mb-5 mt-2">
                      Visit Me
                    </button>
                  </center>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-4 mb-5">
                <div class="box">
                  <span>
                    <center>
                      <i
                        class="bi bi-film"
                        style={{border:' 1px solid #f9ca24', padding:'15px', background:'#f9ca24',
                        borderRadius: '5px'}}
                      ></i>
                    </center>
                  </span>
                  <h4 class="mt-5 text-center">Media Opereting</h4>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, dolorum Minus,{" "}
                  </p>
                  <center>
                    <button class="btn btn-outline-warning mb-5 mt-2">
                      Visit Me
                    </button>
                  </center>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-4 mb-5">
                <div class="box">
                  <span>
                    <center>
                      <i
                        class="bi bi-collection-play-fill"
                        style={{border:' 1px solid #f9ca24', padding:'15px', background:'#f9ca24',
                         borderRadius: '5px'}}
                      ></i>
                    </center>
                  </span>
                  <h4 class="mt-5 text-center">Video Editing</h4>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, dolorum Minus,{" "}
                  </p>
                  <center>
                    <button class="btn btn-outline-warning mb-5 mt-2">
                      Visit Me
                    </button>
                  </center>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 mb-5">
                <div class="box">
                  <span>
                    <center>
                      <i
                        class="bi bi-sim-fill"
                        style={{border:' 1px solid #f9ca24', padding:'15px', background:'#f9ca24',
                        borderRadius: '5px'}}
                      ></i>
                    </center>
                  </span>
                  <h4 class="mt-5 text-center">Data Entry</h4>
                  <p class="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, dolorum Minus,{" "}
                  </p>

                  <center>
                    <button class="btn btn-outline-warning mb-5 mt-2">
                      Visit Me
                    </button>
                  </center>
                </div>
              </div>

        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
