import React from "react";
import CTA from "../components/CTA";

const Contact = () => {
  return (
    <div className="container">
      {/* CONTACT HEADER */}
      <div className="w-full flex flex-col gap-8 mt-12 lg:mt-24 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-semibold text-[#242424] text-center">
          Contact Us
        </h1>
        <p className="text-center text-base lg:text-lg text-[#242424] max-w-2xl mx-auto">
          Have a question or need assistance? Fill out the form below or reach
          us directly. We’ll respond as soon as possible.
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="mt-8 lg:mt-16 px-4 lg:px-0">
        <div className="bg-white shadow-md rounded-md p-6 lg:p-10 flex flex-col gap-6 max-w-3xl mx-auto">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-3 text-base"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-3 text-base"
              required
            />
            <input
              type="text"
              name="carModel"
              placeholder="Car Model"
              className="border border-gray-300 rounded-md p-3 text-base"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 rounded-md p-3 text-base"
              required
            />
            <button type="submit" className="nav-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* INFO + MAP SECTION */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 lg:mt-20 px-4 lg:px-0">
        {/* LEFT: Contact Info */}
        <div className="flex-1 flex flex-col gap-3 text-base lg:text-lg text-[#333] justify-center">
          <p>
            <span className="font-semibold">Phone:</span> +1 234 567 8901
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@rentcars.com
          </p>
          <p>
            <span className="font-semibold">Address:</span> 26556 16th St,
            Glendale, Alaska, 99508, USA
          </p>
        </div>

        {/* RIGHT: Map */}
        <div className="flex-1 h-[350px] lg:h-[500px] shadow-md rounded-md overflow-hidden">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23112.77654368646!2d13.364811843273452!3d52.48943069380564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2srs!4v1741359856046!5m2!1sen!2srs"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[300px] border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-12 lg:mt-20">
        <CTA />
      </div>
    </div>
  );
};

export default Contact;
