"use client";
import { BlogCard, ServiceCard } from "@/components/miniComponents/BlogCard";
import Button from "@/components/miniComponents/Button";
import * as Dialog from "@radix-ui/react-dialog";
import PopForm from "@/components/sections/PopForm";
import { blogs, ourCoreService, whatWeDo } from "@/data";
import { faq } from "@/data";
import {
  ChartSpline,
  ChevronRight,
  ChevronDown,
  GaugeCircle,
  LineChart,
  Users,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const HomePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="px-3 ">
      {/* hero */}
      <section className="bg-[#F9F7F3] pt-24 flex-col flex  items-center gap-8 mb-5 py-12 md:px-20 md:pt-32 md:gap-24 lg:flex-row-reverse lg:px-32 lg:pt-40">
        <div className="flex items-center justify-center lg:w-1/2">
          {/* <Image
            src="/home/heroImage1.png"
            width={1000}
            height={1000}
            alt="hero Image"
            priority
            className="h-55 w-auto md:h-80 lg:h-[45vh] lg:w-auto"
          /> */}
           <DotLottieReact
      src="/home/Revenue.lottie"
      loop
      autoplay
    />
        </div>

        {/* para  */}
        <div className="lg:w-1/2">
          <h1 className="font-medium font-serif text-4xl text-center md:text-5xl lg:text-left">
            Clarity, Conviction & Research You Can Trust.
          </h1>
          <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg">
            In-depth, evidence-led research crafted to provide clarity and
            actionable understanding of sectors and companies.
          </p>

          {/* <div  className="relative"> */}
          <div className="flex items-center justify-center gap-4 my-6 text-left border px-5 py-4 rounded-md lg:w-[20vw]">
            <div className="bg-[#068466] text-white p-3 rounded-full">
              <ChartSpline size={25} />
            </div>
            <div>
              <p className="font-semibold">A Financial Fact</p>
              <p className="text-sm text-gray-600">
                Global stock market capitalization reached $111 trillion in
                2023.
              </p>
            </div>
          </div>

          <div className="flex-col  flex items-center gap-5 mt-3 md:mt-8 md:flex-row justify-center lg:justify-start">
            <Link
              href={"/blog"}
              className="px-6 py-3 capitalize bg-[#068466] rounded-sm text-white font-semibold hover:bg-[#0b9777] md:inline-block"
            >
              Explore our research
            </Link>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="hidden px-6 py-3 capitalize bg-[#068466] rounded-sm text-white font-semibold hover:bg-[#0b9777] md:inline-block">
                  Get In Touch
                </button>
              </Dialog.Trigger>
              <PopForm />
            </Dialog.Root>
          </div>
        </div>
      </section>

      {/* blogs  */}
      <section className="mb-5 text-gray-700  md:px-10 lg:px-32 lg:py-20">
        <div className="md:flex md:gap-4 md:items-center md:mb-5 md:justify-center">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-serif font-medium lg:text-5xl">
              LATEST &apos;BLOGS&apos;
            </h2>
            <p className="md:text-lg">
              Stay updated with our latest thoughts, insights, and research. On
              our Substack, we publish deep-dive articles on markets, economics,
              business models, free small-cap studies, and industry research —
              all curated to help you understand the market better.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center text-white justify-center gap-2 bg-[#068466] my-2 px-5 py-2  rounded font-semibold mt-5 mx-auto"
          >
            More Blog <ChevronRight size={15} />
          </Link>
        </div>

        <div className="px-0.5 py-5 grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map(({ image, title, desc, link }, idx) => (
            <BlogCard
              key={idx}
              image={image}
              title={title}
              desc={desc}
              link={link}
            />
          ))}
        </div>
      </section>

      {/* about us  */}

      {/* <section className="text-gray-700  md:px-10 lg:px-32 lg:py-8 mb-5">
        <h3 className="font-medium font-serif text-4xl text-center md:text-5xl lg:text-left">
          Who We Are
        </h3>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg">
          We are a Team of Three Nerds who met co-incidentally and decided to
          start their Journey in the field of Research. It all started as an
          initiative in April 2024 where we wanted to learn and simultaneously
          wanted to share it with the world. We knew that Investing in Equity is
          still considered a Taboo by Many Indian Households, especially the
          Rural Region. Now, we want to break this Taboo by providing adequate
          and data backed Research so that each individual feels confident
          before taking the decision to BUY/ HOLD or SELL and still keep it
          affordable by charging almost 1/4th of what other well-known platforms
          charge.
        </p>

        <p className="text-center  font-serif text-3xl py-5">
          It doesn’t matter if you are a:
        </p>

        <div className="grid grid-cols-1 gap-10  md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col items-center  gap-4">
            <span className="bg-[#068466] p-2 h-20 w-20 flex items-center justify-center rounded-full border-8 border-gray-200 hover:scale-110 duration-300">
              <Users color="white" size={30} />
            </span>
            <p className="text-xl text-gray-600 text-center font-serif font-semibold">
              Level 1
            </p>
            <p className="text-center text-lg">
              Beginner who is starting by learning How Companies work?
            </p>
          </div>
          <Image
            src={"/home/arrow.png"}
            width={1000}
            height={1000}
            alt="image of  arrow"
            className="w-[10vw] h-auto hidden lg:block"
          />
          <div className="flex flex-col items-center  gap-4">
            <span className="bg-[#068466] p-2 h-20 w-20 flex items-center justify-center rounded-full border-8 border-gray-200 hover:rotate-360 duration-300 hover:scale-110">
              <GaugeCircle color="white" size={30} />
            </span>
            <p className="text-xl text-gray-600 text-center font-serif font-semibold">
              Level 2
            </p>
            <p className="text-center text-lg">
              An Intermediate Investor who wants to Explore And Expand His/Her
              Portfolio.
            </p>
          </div>
          <Image
            src={"/home/arrow.png"}
            width={1000}
            height={1000}
            alt="image of  arrow"
            className="w-[10vw] h-auto hidden lg:block"
          />
          <div className="flex flex-col items-center  gap-4">
            <span className="bg-[#068466] p-2 h-20 w-20 flex items-center justify-center rounded-full border-8 border-gray-200 hover:scale-110 duration-300">
              <LineChart color="white" size={30} />
            </span>
            <p className="text-xl text-gray-600 text-center font-serif font-semibold">
              Level 3
            </p>
            <p className="text-center text-lg">
              A Master in his craft who is thinking What Company Should I buy
              next?
            </p>
          </div>
        </div>
        <p className="text-center text-gray-700 my-8 bg-green-100/30  md:mt-12 animate-pulse px-5 py-2 rounded-xl md:text-lg">
          Or Maybe Someone who is here for KNOWLEDGE! Like us… You can Join our
          community where we discuss businesses, which stocks are trending and
          maybe some bad jokes!
        </p>

       
        <h3 className="font-medium font-serif text-4xl text-center md:text-5xl lg:text-left md:pt-10">
          What we do?
        </h3>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg">
          With time, we realized that there is too less covering the Small-Cap
          or Mirco-Cap companies and there are too many who want to invest.
        </p>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg">
          Well, if you want to understand the business better, you must know
          about the Industry as well.
        </p>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg  font-bold text-2xl">
          So, here we are. This is what we provide:
        </p>

        <div className="grid  grid-cols-1  gap-5">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-gray-100 px-5  py-5 rounded-lg text-lg font-serif hover:bg-white hover:scale-105 hover:shadow-2xl duration-300 md:text-xl ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm opacity-45"
                  : ""
              }`}
            >
              {index + 1}. {item}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg  font-semibold">
          We provide these reports on Periodic basis. If you did not find your
          answer here, reach out to us directly through our Email.
        </p>
      </section> */}

      {/* our  team  */}
      {/* <section className="bg-[#F9F7F3] w-full py-10 ">
        <p className="text-center text-3xl  lg:text-5xl font-semibold font-serif ">
          Our Team
        </p>

        <div className="my-10 grid  grid-cols-1  md:grid-cols-3 gap-5">
          <div className="flex items-center justify-center flex-col">
            <Image
              src={"/home/found1.jpg"}
              width={1000}
              height={1000}
              alt="founderImage"
              className="h-55 w-auto rounded-full"
            />
            <p className="font-bold font-serif  text-3xl">Narash</p>
            <p className="text-gray-600">ARSD college</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Image
              src={"/home/found1.jpg"}
              width={1000}
              height={1000}
              alt="founderImage"
              className="h-55 w-auto rounded-full"
            />
            <p className="font-bold font-serif  text-3xl">Narash</p>
            <p className="text-gray-600">ARSD college</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <Image
              src={"/home/found1.jpg"}
              width={1000}
              height={1000}
              alt="founderImage"
              className="h-55 w-auto rounded-full"
            />
            <p className="font-bold font-serif  text-3xl">Narash</p>
            <p className="text-gray-600">ARSD college</p>
          </div>
        </div>
      </section> */}

      {/* 4. MEET THE TEAM */}
      {/* <section className="py-16 md:px-10 lg:px-32">
        <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
          Meet the Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <Image
              src={"/home/found1.jpg"}
              width={150}
              height={150}
              alt="Team Member 1"
              className="rounded-full mb-4 shadow-md"
            />
            <h4 className="font-serif text-2xl font-semibold">Narash</h4>
            <p className="text-gray-600 mb-2">Co-Founder & Lead Analyst</p>
            <a
              href="#"
              className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/home/found1.jpg"}
              width={150}
              height={150}
              alt="Team Member 2"
              className="rounded-full mb-4 shadow-md"
            />
            <h4 className="font-serif text-2xl font-semibold">Aalekh</h4>
            <p className="text-gray-600 mb-2">Co-Founder & Sector Specialist</p>
            <a
              href="#"
              className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/home/found1.jpg"}
              width={150}
              height={150}
              alt="Team Member 3"
              className="rounded-full mb-4 shadow-md"
            />
            <h4 className="font-serif text-2xl font-semibold">Piyush</h4>
            <p className="text-gray-600 mb-2">Co-Founder & Data Scientist</p>
            <a
              href="#"
              className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section> */}

      {/* our service  */}
      {/* <section className="mb-5 text-gray-700  md:px-10 lg:px-32 lg:py-10">
        <div className="md:flex md:gap-4 md:items-center md:mb-5 md:justify-center">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-serif font-medium lg:text-5xl">
              What We Offer
            </h2>
            <p className="md:text-lg">
              Discover research that goes beyond surface-level numbers. We
              deliver comprehensive, structured, and intuitive equity research
              reports — complete with industry context, business deep-dives,
              competitive analysis, forecasting models, and clear charts that
              make complex ideas easy to understand. Our goal is simple: to help
              you see businesses the way professionals do.
            </p>
          </div>
          <Link
            href="/service"
            className="flex items-center text-white justify-center gap-2 bg-[#068466] my-2 px-5 py-2  rounded font-semibold mt-5 mx-auto"
          >
            Know More <ChevronRight size={15} />
          </Link>
        </div>

        <p className="text-center  font-semibold text-xl">Our Core Services</p>

        <div className="px-0.5 py-5 grid grid-cols-1 mx-auto gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ourCoreService.map(
            ({ image, title, subTitle, desc, btnText, link }, idx) => (
              <ServiceCard
                link={link}
                image={image}
                title={title}
                subTitle={subTitle}
                desc={desc}
                btnText={btnText}
                key={idx}
              />
            )
          )}
        </div>
        <p className="text-4xl  md:text-5xl font-serif font-medium lg:pt-10">
          Focus on Growth and Breadth
        </p>
        <p className="text-lg py-2">
          Financial success demands disciplined focus on growth metrics and
          broad systemic exposure, mitigating concentrated risk while maximizing
          long-term shareholder value creation.
        </p>
        <div className="lg:flex lg:items-center md:gap-5">
          <Image
            className="lg:w-1/2"
            src={"/home/design.webp"}
            width={1000}
            height={1000}
            alt="factofSubstacks"
          />
          <div className="lg:w-1/2">
            <div>
              <div className="border-l-5  text-2xl pl-5 my-3  border-[#1C4044] font-serif text-black font-medium lg:text-3xl hover:font-semibold duration-300">
                20+ Reports Published
              </div>
              <div className="border-l-5  text-2xl pl-5 my-3  border-[#1C4044] font-serif text-black font-medium lg:text-3xl hover:font-semibold duration-300">
                20+ Sectors Covered
              </div>
              <div className="border-l-5  text-2xl pl-5 my-3  border-[#1C4044] font-serif text-black font-medium lg:text-3xl hover:font-semibold duration-300">
                500+ Subscribers Queries Solved
              </div>
              <div className="border-l-5  text-2xl pl-5 my-3  border-[#1C4044] font-serif text-black font-medium lg:text-3xl hover:font-semibold duration-300">
                13k+ Subscriber
              </div>
              <div className="border-l-5  text-2xl pl-5 my-3  border-[#1C4044] font-serif text-black font-medium lg:text-3xl hover:font-semibold duration-300">
                Subscribers located across 37 states and 121 countries
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* our pricing   */}
      {/* <section className="py-10 md:py-4 lg:px-20">
        <h3 className="text-center font-semibold  text-2xl capitalize  mb-2">
          Services & pricing
        </h3>
        <p className="font-serif text-center  text-4xl md:text-5xl">
          Own that Equity with an Edge Over Other
        </p>
        <p className="font-bold text-center text-xl py-2 italic">
          One Deeply Covered Equity Report on a Small/Micro Cap Every
        </p>

        <div className="grid grid-cols-1 gap-10 overflow-hidden mx-5 my-3  md:grid-cols-2 lg:grid-cols-3 md:pt-12">
          <div className="flex flex-col items-center justify-center border py-3 rounded-xl border-black">
            <p className="font-semibold uppercase border-b border-black lg:text-xl">
              i am just starting out!
            </p>
            <p className="text-3xl pt-2 font-semibold font-sans lg:text-4xl">
              <span>₹</span> 999<span className="font-light">/month</span>
            </p>
            <button className="py-2 px-8 text-sm mt-5 rounded-full uppercase  bg-[#1C4044] hover:bg-[#20545a] text-white lg:text-lg">
              Monthly plan
            </button>
          </div>

          <div className="flex flex-col items-center justify-center border py-3 rounded-xl border-black relative">
            <p className="absolute -top-6  -rotate-6 left-0  font-pacifico text-[#00996b] md:text-xl md:-top-8 lg:font-semibold lg:text-2xl lg:-top-8">
              Budget friendly
            </p>
            <p className="font-semibold uppercase border-b border-black  lg:text-xl">
              I know what i am doing
            </p>
            <p className="font-bold  text-4xl text-[#00583b] mt-2 lg:text-6xl">
              <span>₹</span>2,699
            </p>
            <p className="text-xl  pt-2 font-semibold font-sans ">
              <span>~ ₹</span>899<span className="font-light">/month</span>
            </p>
            <button className="py-2 px-8 text-sm mt-5 rounded-full uppercase  bg-[#125f5f] hover:bg-[#20545a] text-white lg:text-lg">
              Quarterly plan
            </button>
          </div>

          <div className="flex flex-col items-center justify-center border py-3 rounded-xl border-black relative">
            <p className="font-semibold uppercase border-b border-black  lg:text-xl">
              I want to create wealth
            </p>
            <p className="font-bold text-4xl text-[#00583b] mt-2 lg:text-5xl">
              <span>₹</span>11,999
            </p>
            <p className="text-xl  pt-2 font-semibold font-sans ">
              <span>~ ₹</span>999<span className="font-light">/month</span>
            </p>
            <button className="py-2 px-8 text-sm mt-5 rounded-full uppercase  bg-[#1C4044] hover:bg-[#20545a] text-white lg:text-lg">
              Yearly plan
            </button>
          </div>
        </div>
      </section> */}

      {/* 5. REVIEWS / TESTIMONIALS */}
      <section className="py-10 md:py-16 lg:px-20 bg-[#F9F7F3] lg:my-5">
        <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-4">
          What Investors Say About Us
        </h3>
        <p className="text-center text-gray-700 md:text-lg mb-12 max-w-3xl mx-auto">
          We are proud to have earned the trust of a diverse community of
          investors. Here is what some of them have to say about our research
          and insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="italic text-gray-700 text-lg">
              “Great initiative loves your work about research.”
            </p>
            <p className="text-right mt-4 font-semibold text-gray-800">
              — Prasad Pralhad Tolawani.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="italic text-gray-700 text-lg">
              “I am reading your substack for last 1 month and really feel
              intrigued by them.”
            </p>
            <p className="text-right mt-4 font-semibold text-gray-800">
              — Tushar.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="italic text-gray-700 text-lg">
              “Thank you for giving that kind of deep analysis on the
              Hospitality Industry. I really like the research, it blows my mind
              with too much knowledge in simple posts.”
            </p>
            <p className="text-right mt-4 font-semibold text-gray-800">
              — Sandeep Shukla.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="italic text-gray-700 text-lg">
              “Wow, the new raw materials breakdown really stood out. It's like
              having the full tech stack details, super helpful for cost
              analysis. So thorough!”
            </p>
            <p className="text-right mt-4 font-semibold text-gray-800">
              — Rainbow Roxy.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-10 md:py-16 lg:px-32 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-4xl mx-auto px-5">
            {faq.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-2"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180 text-[#068466]" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-4 text-gray-700 md:text-lg pr-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
            Get in Touch with us{" "}
            <span className="text-[#047e5f]  font-semibold">Today</span>
          </h3>
          <form className="space-y-6 px-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="text-lg border w-full p-3 rounded-xl border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="text-lg border w-full p-3 rounded-xl border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                placeholder="Contact Number"
                className="text-lg border w-full p-3 rounded-xl border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="requirement" className="sr-only">
                Your Requirement
              </label>
              <textarea
                id="requirement"
                placeholder="Your Requirement"
                rows="2"
                className="text-lg border w-full p-3 rounded-xl border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#068466] transition-all duration-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-8 text-lg mt-2 rounded-lg uppercase bg-[#068466] hover:bg-[#056d54] text-white font-semibold transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="border-t-2 my-5 mx-10" />

          <div className="flex items-center  justify-center gap-2">
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
              href="https://www.linkedin.com/company/equityedge-research/"
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
      </section>
    </div>
  );
};

export default HomePage;
