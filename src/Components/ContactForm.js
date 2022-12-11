import React from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

const ContactForm = () => {
  const submitButton = (event) => {
    event.preventDefault();
  };

  return (
    <div className="my-16">
      {/* three card start  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="bg-zinc-700 shadow-xl p-12 w-full">
          <div className="flex justify-between">
            <p className='mt-3'>Country:</p>
            <p className='mt-3'>Bangladesh</p>
          </div>
          <div className="flex justify-between">
            <p className='mt-3'>City:</p>
            <p className='mt-3'>Brahmanbaria</p>
          </div>
          <div className="flex justify-between">
            <p className='mt-3'>Street:</p>
            <p className='mt-3'>Sherpur Mazar Road.</p>
          </div>
        </div>

        <div className="bg-zinc-700 shadow-xl p-12 w-full">
          <div className="flex justify-between">
            <p className='mt-3'>Email:</p>
            <p className='mt-3'>sajib7315@gmail.com</p>
          </div>
          <div className="flex justify-between">
            <p className='mt-3'>LinkedIn:</p>
            <p className='mt-3'>Sajib Ahmed</p>
          </div>
          <div className="flex justify-between">
            <p className='mt-3'>Street:</p>
            <p className='mt-3'>Sajib Ahmed</p>
          </div>
        </div>

        <div className="bg-zinc-700 shadow-xl p-12 w-full">
          <div className="flex justify-between">
            <p className='mt-3'>Personal Number:</p>
            <p className='mt-3'>01893516526</p>
          </div>
          <div className="flex justify-between">
            <p className='mt-3'>Whats'App:</p>
            <p className='mt-3'>01893516526</p>
          </div>
          <div className="flex justify-between">
            <p className='mt-3'>Skype:</p>
            <p className='mt-3'>Sajib ahmed</p>
          </div>
        </div>
      </div>

      {/* three card end  */}

      <h1 className="text-3xl text-white p-4 font-bold mt-5 ">Get in touch</h1>

      <div
        className=""
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <form className="flex-shrink-0 w-full  shadow-2xl bg-zinc-700 p-4 md:p-16 py-10">
          <div class="flex my-12">
            <span class="inline-flex items-center  text-sm bg-zinc-900 border border-r-0 border-zinc-800 rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
              <FaUser></FaUser>
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg focus:ring-0 focus:border-hidden text-white  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-zinc-800 border-0 placeholder-gray-300"
              placeholder="Username"
            />
          </div>

          <div class="flex my-12">
            <span class="inline-flex items-center  text-sm bg-zinc-900 border border-r-0 border-zinc-800 rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
              @
            </span>
            <input
              type="email"
              id="website-admin"
              class="rounded-none rounded-r-lg focus:ring-0 focus:border-hidden  text-white  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-zinc-800 border-0 placeholder-gray-300"
              placeholder="Email"
            />
          </div>

          <div class="flex">
            <span class="inline-flex items-center  text-sm bg-zinc-900 border border-r-0 border-zinc-800 rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
              <FaEnvelope></FaEnvelope>
            </span>

            <textarea
              className="textarea  focus:ring-0 focus:border-hidden  rounded-none rounded-r-lg  text-white  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-zinc-800  placeholder-gray-300"
              placeholder="Message"
            ></textarea>
          </div>

          <div className=" mt-12 text-center md:text-start">
            <input
              type="submit"
              className="btn rounded-none px-6 hover:-translate-y-1 duration-500"
              style={{ backgroundColor: "#fcb900", color: "#20202a" }}
              value="Send Message"
            />
          </div>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
