"use client";

import { whatWeDoWithPointer } from "@/data";
import {
  GaugeCircle,
  LineChart,
  Users,
  Linkedin,
  ShieldCheck,
  Lightbulb,
  Scaling,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F9F7F3]  py-16 md:py-24 px-5">
        <h1 className="font-serif text-4xl text-center md:text-6xl font-medium">
          About EquityEdge
        </h1>
        <p className="text-lg md:text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
          Learn about our journey, our mission, and the dedicated team committed
          to bringing you world-class equity research.
        </p>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="text-gray-700 md:px-10 lg:px-32 py-16">
        <h3 className="font-medium font-serif text-4xl text-center md:text-5xl lg:text-left">
          Who We Are
        </h3>
        <p className="text-left text-lg px-5 text-gray-700 my-3 lg:text-left md:text-lg">
          We are a Team of Three Nerds who met co-incidentally and decided to
          start their Journey in the field of Research. It all started as an
          initiative in April 2024 where we wanted to learn and simultaneously
          wanted to share it with the world. We knew that Investing in Equity is
          still considered a Taboo by Many Indian Households, especially the
          Rural Region. Now, we want to break this Taboo by providing adequate
          and data backed Research so that each individual feels confident
          before taking the decision to Invest and still keep it affordable by
          charging almost 1/4th of what other well-known platforms charge.
        </p>

        <p className="text-center font-serif text-3xl pt-12 pb-8">
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
            <p className="text-center text-lg px-5">
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
            <p className="text-center text-lg px-5">
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
            <p className="text-center text-lg px-5">
              A Master in his craft who is thinking What Company Should I buy
              next?
            </p>
          </div>
        </div>
        <p className="text-center text-gray-700 my-8 bg-green-100/30 md:mt-16 px-5 py-3 rounded-xl md:text-lg">
          Or Maybe Someone who is here for KNOWLEDGE! Like us… You can Join our
          community where we discuss businesses, which stocks are trending and
          maybe some bad jokes!
        </p>
      </section>

      {/* 3. OUR MISSION */}
      <section className="bg-[#F9F7F3] py-16 md:px-10 lg:px-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="px-5">
            <h3 className="font-medium font-serif text-4xl md:text-5xl mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to democratize institutional-grade equity research.
              We aim to empower every investor—from beginners to seasoned
              professionals—with clear, data-driven, and actionable insights. We
              focus on uncovering value in under-covered small and micro-cap
              companies, helping you build a true informational edge.
            </p>
            <p className="text-lg text-gray-700">
              We believe that financial literacy is the key to wealth creation,
              and we are committed to making complex financial analysis
              accessible to all.
            </p>
          </div>
          <div className="px-5 lg:px-0">
            <Image
              src="/about/ourMission.webp"
              width={800}
              height={800}
              alt="Our Mission"
              className="rounded-lg "
            />
          </div>
        </div>
      </section>

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

      {/* 5. OUR CORE VALUES */}
      <section className="bg-[#F9F7F3] py-16 md:px-10 lg:px-32">
        <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-5">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            {" "}
            <ShieldCheck size={40} className="text-[#068466] mb-4" />{" "}
            <h4 className="font-serif text-2xl font-semibold mb-2">
              Integrity
            </h4>{" "}
            <p className="text-gray-600">
              Unbiased, independent research is the bedrock of our work.
            </p>{" "}
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            {" "}
            <BookOpen size={40} className="text-[#068466] mb-4" />{" "}
            <h4 className="font-serif text-2xl font-semibold mb-2">Clarity</h4>{" "}
            <p className="text-gray-600">
              We simplify complexity and present findings in an
              easy-to-understand format.
            </p>{" "}
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            {" "}
            <Lightbulb size={40} className="text-[#068466] mb-4" />{" "}
            <h4 className="font-serif text-2xl font-semibold mb-2">Insight</h4>{" "}
            <p className="text-gray-600">
              We go beyond the numbers to uncover the stories that drive value.
            </p>{" "}
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            {" "}
            <Scaling size={40} className="text-[#068466] mb-4" />{" "}
            <h4 className="font-serif text-2xl font-semibold mb-2">Rigor</h4>{" "}
            <p className="text-gray-600">
              Our analysis is thorough, data-backed, and meticulously vetted.
            </p>{" "}
          </div>
        </div>
      </section>

      {/* 6. WHAT WE DO */}
      <section className="px-5 py-16 md:px-10 lg:px-32">
        <h3 className="font-medium font-serif text-4xl text-center md:text-5xl lg:text-left">
          What we do?
        </h3>
        <p className="text-left text-gray-700 my-3 lg:text-left text-lg">
          With time, we realized that there is too less covering the Small-Cap
          or Mirco-Cap companies and there are too many who want to invest.
        </p>
        <p className="text-left  text-gray-700 my-3 lg:text-left text-lg">
          Well, if you want to understand the business better, you must know
          about the Industry as well.
        </p>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg  font-bold text-2xl">
          So, here we are. This is what we provide:
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-3  gap-5">
          {whatWeDoWithPointer.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-gray-100 p-6 rounded-lg  hover:bg-white hover:scale-105 hover:shadow-2xl duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm opacity-45"
                  : ""
              }`}
            >
              <div className="text-center font-bold text-2xl mb-5 font-serif">{item?.title}</div>
              <ul className="space-y-4">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <ChevronRight
                      className="text-green-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-lg md:text-xl">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-700 my-3 lg:text-left md:text-lg  font-semibold">
          We provide these reports on Periodic basis. If you did not find your
          answer here, reach out to us directly through our Email.
        </p>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-[#068466] text-white text-center py-16 px-5">
        <h3 className="font-serif text-3xl md:text-4xl font-medium">
          Ready to Invest with an Edge?
        </h3>
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-green-100">
          Explore our services and see how our in-depth research can transform
          your investment strategy.
        </p>
        <Link
          href="/service"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#068466] font-bold my-8 px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition-colors"
        >
          Explore Services <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default About;
