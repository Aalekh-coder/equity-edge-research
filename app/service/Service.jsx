"use client";
import { ServiceCard } from "@/components/miniComponents/BlogCard";
import { faq, ourCoreService } from "@/data";
import {
  FileText,
  Briefcase,
  TrendingUp,
  Scale,
  ClipboardList,
  CheckCircle,
  ChevronDown,
  Check,
  MessageSquare, // Added for "Subscribers Queries Solved"
  Users, // Added for "Subscribers"
  Globe, // Added for "Subscribers located across states and countries"
} from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import React, { useState } from "react";

const Service = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F9F7F3]  py-16 md:py-24 px-5">
        <h1 className="font-serif text-center text-4xl md:text-6xl font-medium">
          Our Research Services
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
          In-depth, unbiased, and actionable equity research designed to give
          you a competitive edge.
        </p>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section className="text-gray-700 md:px-10 lg:px-32 py-16">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-4xl text-center font-serif font-medium lg:text-5xl">
            What We Offer
          </h2>
          <p className="md:text-lg mt-4">
            Discover research that goes beyond surface-level numbers. We deliver
            comprehensive, structured, and intuitive equity research reports —
            complete with industry context, business deep-dives, competitive
            analysis, forecasting models, and clear charts that make complex
            ideas easy to understand. Our goal is simple: to help you see
            businesses the way professionals do.
          </p>
        </div>

        <p className="text-center font-semibold text-2xl mt-16 font-serif">
          Our Core Services
        </p>
        <div className="px-5 py-8 grid grid-cols-1 mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* 3. WHAT'S INSIDE OUR REPORTS */}
      <section className="bg-[#F9F7F3] py-16 md:px-10 lg:px-20 overflow-hidden">
        <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
          What&apos;s Inside Every Report?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-7xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            {" "}
            <FileText
              size={32}
              className="text-[#068466] mt-1 flex-shrink-0"
            />{" "}
            <div>
              {" "}
              <h4 className="font-serif text-xl font-semibold mb-1">
                Industry Overview
              </h4>{" "}
              <p className="text-gray-600">
                Context on market size, growth drivers, and competitive
                landscape.
              </p>{" "}
            </div>{" "}
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            {" "}
            <Briefcase
              size={32}
              className="text-[#068466] mt-1 flex-shrink-0"
            />{" "}
            <div>
              {" "}
              <h4 className="font-serif text-xl font-semibold mb-1">
                Business Deep-Dive
              </h4>{" "}
              <p className="text-gray-600">
                Analysis of the company’s operations, products, and strategy.
              </p>{" "}
            </div>{" "}
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            {" "}
            <TrendingUp
              size={32}
              className="text-[#068466] mt-1 flex-shrink-0"
            />{" "}
            <div>
              {" "}
              <h4 className="font-serif text-xl font-semibold mb-1">
                Competitive Analysis
              </h4>{" "}
              <p className="text-gray-600">
                A close look at key competitors and the company’s moat.
              </p>{" "}
            </div>{" "}
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            {" "}
            <Scale
              size={32}
              className="text-[#068466] mt-1 flex-shrink-0"
            />{" "}
            <div>
              {" "}
              <h4 className="font-serif text-xl font-semibold mb-1">
                Valuation Models
              </h4>{" "}
              <p className="text-gray-600">
                Multiple valuation scenarios (DCF, Relative) to assess intrinsic
                value.
              </p>{" "}
            </div>{" "}
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            {" "}
            <ClipboardList
              size={32}
              className="text-[#068466] mt-1 flex-shrink-0"
            />{" "}
            <div>
              {" "}
              <h4 className="font-serif text-xl font-semibold mb-1">
                Concall Summaries
              </h4>{" "}
              <p className="text-gray-600">
                Key takeaways from management commentary and Q&A sessions.
              </p>{" "}
            </div>{" "}
          </div>
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            {" "}
            <CheckCircle
              size={32}
              className="text-[#068466] mt-1 flex-shrink-0"
            />{" "}
            <div>
              {" "}
              <h4 className="font-serif text-xl font-semibold mb-1">
                Actionable Insights
              </h4>{" "}
              <p className="text-gray-600">
                Clear thesis, key risks, and triggers to monitor.
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </section>

   

      {/* 5. PRICING */}
      <section className="py-16 bg-[#F9F7F3] md:py-4 lg:px-20">
        <h3 className="text-center font-semibold text-2xl capitalize mb-2">
          Services & pricing
        </h3>
        <p className="font-serif text-center text-4xl md:text-5xl">
          Own that Equity with an Edge Over Others
        </p>
        <p className="font-bold text-center text-xl py-2 italic">
          One Deeply Covered Equity Report on a Small/Micro Cap Every Month
        </p>
        <div className="grid grid-cols-1 gap-10 overflow-hidden mx-5 my-3 md:grid-cols-2 lg:grid-cols-3 md:pt-12 max-w-6xl xl:max-w-7xl lg:mx-auto pb-8">
          <div className="flex flex-col items-center justify-center border py-5 rounded-xl border-gray-300 bg-white shadow-lg">
            <p className="font-semibold uppercase border-b border-black lg:text-xl">
              i am just starting out!
            </p>
            <p className="text-3xl pt-2 font-semibold font-sans lg:text-4xl">
              <span>₹</span> 999<span className="font-light">/month</span>
            </p>
            <button className="py-2 px-8 text-sm mt-5 rounded-full uppercase bg-[#1C4044] hover:bg-[#20545a] text-white lg:text-lg">
              Monthly plan
            </button>
          </div>
          <div className="flex flex-col items-center justify-center border-2 py-5 rounded-xl border-[#068466] bg-white shadow-2xl relative scale-105">
            <p className="absolute -top-4 -rotate-6 left-4 font-pacifico text-[#00996b] md:text-xl lg:font-semibold lg:text-2xl">
              Budget Friendly
            </p>
            <p className="font-semibold uppercase border-b border-black lg:text-xl">
              I know what i am doing
            </p>
            <p className="font-bold text-4xl text-[#00583b] mt-2 lg:text-6xl">
              <span>₹</span>2,699
            </p>
            <p className="text-xl pt-2 font-semibold font-sans">
              <span>~ ₹</span>899<span className="font-light">/month</span>
            </p>
            <button className="py-3 px-10 text-lg mt-5 rounded-full uppercase bg-[#068466] hover:bg-[#056d54] text-white font-semibold">
              Quarterly plan
            </button>
          </div>
          <div className="flex flex-col items-center justify-center border py-5 rounded-xl border-gray-300 bg-white shadow-lg">
            <p className="font-semibold uppercase border-b border-black lg:text-xl">
              I want to create wealth
            </p>
            <p className="font-bold text-4xl text-[#00583b] mt-2 lg:text-5xl">
              <span>₹</span>11,999
            </p>
            <p className="text-xl pt-2 font-semibold font-sans">
              <span>~ ₹</span>999<span className="font-light">/month</span>
            </p>
            <button className="py-2 px-8 text-sm mt-5 rounded-full uppercase bg-[#1C4044] hover:bg-[#20545a] text-white lg:text-lg">
              Yearly plan
            </button>
          </div>
        </div>
      </section>

      {/* what will you  get  */}
      <section className="py-16 bg-white md:px-10 lg:px-32">
        <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
          What Will You Get?
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 items-start">
          {/* Free Plan */}
          <div className="border rounded-xl p-6 bg-gray-50 h-full">
            <h4 className="font-serif text-3xl font-semibold text-center text-gray-800">
              Free
            </h4>
            <p className="text-center text-gray-600 mb-4">
              (Through our Blogs)
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Key highlights.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> About the Company.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Latest Concall
                Analysis.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Income Statement
                Analysis.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Balance Sheet
                Analysis.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Cashflow Analysis.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Common Ratio
                Analysis.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Shareholder
                Analysis.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Growth Driver &
                Risks.
              </li>
              <li className="flex gap-3">
                <Check className="text-[#068466] shrink-0" /> Management
                Analysis.
              </li>
            </ul>
          </div>
          {/* Premium Plan */}
          <div className="border-2 border-[#068466] rounded-xl p-8 shadow-2xl bg-white relative md:scale-105">
            <p className="absolute -top-4 font-bold -rotate-6 left-4 font-pacifico lg:text-3xl text-[#09b883] text-2xl">
              Best Value
            </p>
            <h4 className="font-serif text-4xl font-bold text-center uppercase text-[#068466]">
              Premium <br />+ <p className="text-xl">Free</p>
            </h4>
            {/* <p className="text-center text-gray-600 mt-2 mb-6 font-medium">
              Everything in Free, plus:
            </p> */}
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> Segment-wise
                Breakdown.
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> Detailed Company
                Graphs(Future Plans, Historical Performance etc.)
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> Competitive Landscape and Analysis.
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" />
                Peer Comparison-Key Metrics (Capex, Margins etc.)
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> Global and Indian Industry Analysis.
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> Indian Analysis.
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> We keep Adding
                More!
              </li>
              <li className="flex gap-3 font-semibold">
                <Check className="text-[#068466] shrink-0" /> Company Valuation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 md:py-24 lg:px-32">
        <h3 className="text-center font-serif text-4xl md:text-5xl font-medium mb-12">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4 max-w-4xl mx-auto px-5">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              {" "}
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left py-2"
              >
                {" "}
                <span className="text-lg font-semibold text-gray-800">
                  {" "}
                  {item.question}{" "}
                </span>{" "}
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openFaq === index ? "rotate-180 text-[#068466]" : ""
                  }`}
                />{" "}
              </button>{" "}
              {openFaq === index && (
                <div className="mt-4 text-gray-700 md:text-lg pr-4">
                  {" "}
                  <p>{item.answer}</p>{" "}
                </div>
              )}{" "}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
