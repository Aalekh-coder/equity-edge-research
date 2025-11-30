"use client";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F9F7F3] text-center py-16 md:py-24 px-5">
        <h1 className="font-serif text-4xl md:text-6xl font-medium">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Have a question, a custom request, or just want to say hello? We would
          love to hear from you.
        </p>
      </section>

      {/* 2. CONTACT FORM & DETAILS */}
      <section className="py-16 md:py-24 lg:px-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start px-5">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl md:text-4xl font-medium">
              Contact Information
            </h3>
            <p className="text-lg text-gray-600">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-[#068466]" />
                <a
                  href="mailto:equityedgeresearch@gmail.com"
                  className="text-lg text-gray-800 hover:text-[#068466] transition-colors"
                >
                  Equityedgeresearch@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center gap-4">
                <Phone size={24} className="text-[#068466]" />
                <a
                  href="tel:+1234567890"
                  className="text-lg text-gray-800 hover:text-[#068466] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-[#068466]" />
                <p className="text-lg text-gray-800">
                  123 Equity Lane, Financial District, New Delhi
                </p>
              </div> */}
            </div>

            <div className="border-t pt-8">
              <h4 className="font-serif text-2xl font-semibold mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://equityedgeresearch.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-orange-300  p-2 block h-14 w-14 rounded-full duration-300 hover:scale-105"
                >
                  <Image
                    src={"/home/substack.webp"}
                    width={100}
                    height={100}
                    className="h-10  w-auto "
                    alt="substacks"
                  />
                </a>
                {/* <a className="hover:bg-green-300 p-2 block h-14 w-14 rounded-full duration-300 hover:scale-105">
                  <Image
                    src={"/home/whatsapp.png"}
                    width={100}
                    height={100}
                    className="h-10  w-auto "
                    alt="substacks"
                  />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/equityedge-research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-400  p-2 flex items-center justify-center h-14 w-14 rounded-full duration-300 hover:scale-105"
                >
                  <Linkedin size={35} />
                </a>
                <a
                  href="mailto:equityedgeresearch@gmail.com?subject=I%20am%20interested%20in%20your%20report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-red-400  p-2 flex items-center justify-center h-14 w-14 rounded-full duration-300 hover:scale-105"
                >
                  <Mail size={35} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="text-lg border w-full p-3 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="text-lg border w-full p-3 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  rows="5"
                  className="text-lg border w-full p-3 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-8 text-lg rounded-xl uppercase bg-[#068466] hover:bg-[#056d54] text-white font-semibold transition-colors duration-300"
                >
                  {" "}
                  Send Message{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
