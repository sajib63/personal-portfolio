import React from "react";

const ContactForm = () => {
  const submitButton = (event) => {
    event.preventDefault();
  };

  return (
    <div className="my-16">
      <h1 className="text-4xl text-white my-10 text-center">Let's talk!</h1>

      <div
        className=""
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <form className="flex-shrink-0 w-full  shadow-2xl bg-base-100 p-10">
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text text-xl">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type Your Name"
              className="input w-full border-warning bg-zinc-600"
              required
            />
          </div>

          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text text-xl">What is your Email?</span>
            </label>
            <input
              type="email"
              placeholder="Type Your Email"
              className="input w-full border-warning bg-zinc-600"
              required
            />
          </div>

          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text text-xl">Type Your Message</span>
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded border-warning bg-zinc-600"
              required
            ></textarea>
          </div>

          <div className="justify-center items-center text-center mt-8">
            <input
              type="submit"
              className=" btn  rounded-0 "
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
