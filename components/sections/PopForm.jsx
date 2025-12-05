"use client";
import { useState } from "react";
import {
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  Dialog,
} from "@/components/ui/dialog";
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

    const serviceId = "service_tegcndj";
    const templateId = "template_qkpjvrp";
    const publicKey = "IhgM9-nEe1XWmf6Th";

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
      });
  }

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogContent className="sm:max-w-[500px]">
        {isSubmitted ? (
          <Dialog className="flex flex-col items-center text-center">
            
            <DialogTitle className="font-serif text-2xl md:text-3xl font-medium text-gray-900">
              Thank You!
            </DialogTitle>
            <DialogDescription className="mt-2 mb-6 text-base text-gray-600 max-w-sm">
              Your message has been sent successfully. We will get back to you
              shortly.
            </DialogDescription>
            <DialogClose asChild>
              <button className="w-full py-3 px-8 text-lg rounded-lg uppercase bg-[#068466] hover:bg-[#056d54] text-white font-semibold transition-colors duration-300">
                Close
              </button>
            </DialogClose>
          </Dialog>
        ) : (
          <div className="">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#068466] text-white p-4 rounded-full mb-4">
                <Mail size={32} />
              </div>
              <DialogTitle className="font-serif text-2xl md:text-3xl font-medium text-gray-900">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="mt-2 mb-6 text-base text-gray-600 max-w-sm">
                Have a question, a custom request, or just want to say hello? We
                would love to hear from you.
              </DialogDescription>
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
      </DialogContent>
    </DialogPortal>
  );
};

export default PopForm;
