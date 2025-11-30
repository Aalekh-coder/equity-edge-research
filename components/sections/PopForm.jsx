"use client";
import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Mail, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const PopForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_lmkxw3e";
    const templateId = "template_kyz89fd";
    const publicKey = "aAZPa8zRkvspV1J9l";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Equity Edge Research",
      message: message,
      phone: phone,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        setEmail("");
        setName("");
        setMessage("");
        setPhone("");
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("error send email", error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 md:p-8 shadow-2xl z-50 focus:outline-none">
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#068466] text-white p-4 rounded-full mb-4">
              <CheckCircle size={32} />
            </div>
            <Dialog.Title className="font-serif text-2xl md:text-3xl font-medium text-gray-900">
              Thank You!
            </Dialog.Title>
            <Dialog.Description className="mt-2 mb-6 text-base text-gray-600 max-w-sm">
              Your message has been sent successfully. We will get back to you
              shortly.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button className="w-full py-3 px-8 text-lg rounded-lg uppercase bg-[#068466] hover:bg-[#056d54] text-white font-semibold transition-colors duration-300">
                Close
              </button>
            </Dialog.Close>
          </div>
        ) : (
          <div className="">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#068466] text-white p-4 rounded-full mb-4">
                <Mail size={32} />
              </div>
              <Dialog.Title className="font-serif text-2xl md:text-3xl font-medium text-gray-900">
                Get in Touch
              </Dialog.Title>
              <Dialog.Description className="mt-2 mb-6 text-base text-gray-600 max-w-sm">
                Have a question, a custom request, or just want to say hello? We
                would love to hear from you.
              </Dialog.Description>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="text-lg border w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  required
                  placeholder="Your Email Address"
                  className="text-lg border w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="phone"
                  maxLength={10}
                  minLength={10}
                  required
                  pattern="[0-9]{10}"
                  placeholder="Your Phone No."
                  className="text-lg border w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  type="tel"
                  rows={"2"}
                  id="message"
                  pattern="[0-9]{10}"
                  placeholder="How Equity Edge helps you"
                  className="text-lg border w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                value={"send"}
                disabled={isLoading}
                className="w-full py-3 px-8 text-lg rounded-lg uppercase bg-[#068466] hover:bg-[#056d54] text-white font-semibold transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        )}
        <Dialog.Close asChild>
          <button
            className="absolute top-3 right-3 inline-flex h-8 w-8 appearance-none items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default PopForm;
