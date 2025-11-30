import Button from "@/components/miniComponents/Button";
import {
  Instagram,
  Linkedin,
  Mail,
  MessageSquareQuote,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1C4044]   py-10  flex flex-col gap-5 lg:gap-10 lg:pt-10 lg:pb-14">
      <div className="border flex items-center  justify-center flex-col py-18  rounded-lg px-5 gap-5 md:py-10 lg:w-[50vw] mx-auto">
        <p className="text-4xl  font-light  font-serif text-center text-white ">
          Unlock a New Chapter Make Your Financial Make Sense
        </p>
        <Link
          className="px-6 py-3 capitalize bg-[#068466] rounded-sm text-white font-semibold hover:bg-[#0b9777]"
          href={"/contact"}
        >
          Contact Us
        </Link>
      </div>

      <div className="my-8 px-5 md:my-3">
        <p className="text-center  text-white md:text-lg">
          The content provided by EquityEdge Research is intended solely for
          educational and informational purposes. While our articles and reports
          are prepared using publicly available data and sources considered
          reliable, we do not guarantee the accuracy, completeness, or
          timeliness of the information presented. Nothing on this website
          constitutes financial advice, investment recommendations, or an offer
          to buy, sell, or hold any securities. Any decisions made based on our
          research or insights are entirely at the reader’s own discretion and
          risk. We assume no responsibility or liability for any direct or
          indirect loss arising from the use of our content. Readers are
          strongly advised to consult a qualified financial advisor before
          making any investment decisions. Past performance is not indicative of
          future results, and all investments are subject to market risks,
          including the possible loss of principal. All research reports,
          documents, and content on this website are the intellectual property
          of EquityEdge Research and may not be reproduced, distributed, or used
          for commercial purposes without prior written consent. By accessing
          this website, you acknowledge and agree to the terms of this
          disclaimer.
        </p>
        <div className="flex items-center justify-center gap-3 my-5">
          <a
            href="mailto:equityedgeresearch@gmail.com?subject=I%20am%20interested%20in%20your%20report"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 inline-block rounded-full  hover:scale-110  duration-300 hover:rotate-6"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://equityedgeresearch.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 inline-block rounded-full  hover:scale-110  duration-300 hover:rotate-6"
          >
            <Image
              src={"/home/substack.webp"}
              width={25}
              height={25}
              // className="h-10  w-auto "
              alt="substacks"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/equityedge-research"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 inline-block rounded-full  hover:scale-110  duration-300 hover:rotate-6"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="px-5 grid grid-cols-1 gap-5 md:grid-cols-2 md:text-center md:text-lg">
        <div className="text-white ">
          <p className="font-serif text-2xl mb-5">Link</p>
          <div className="flex  flex-col gap-2">
            <Link
              href={"/"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              About
            </Link>
            <Link
              href={"/service"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              Service
            </Link>
            <Link
              href={"/contact"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              Contact
            </Link>
            <Link
              href={"/blogs"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="text-white ">
          <p className="font-serif text-2xl mb-5">Information</p>
          <div className="flex  flex-col gap-2">
            <Link
              href={"/"}
              className=" hover:font-bold"
            >
              Our Terms & Conditions
            </Link>
          
          </div>
        </div>
        {/* <div className="text-white ">
          <p className="font-serif text-2xl mb-5">Need Help</p>
          <div className="flex  flex-col gap-2">
            <Link
              href={"/"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              locatio hrere 20d ffdf
            </Link>
            <Link
              href={"/"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              info@eqityedge.com
            </Link>
            <Link
              href={"/"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              +91 88534 43434
            </Link>
            <Link
              href={"/"}
              className="hover:scale-105 duration-300 hover:font-bold"
            >
              +91 88534 43434
            </Link>
          </div>
        </div> */}
      </div>

      {/* <p className="text-center text-white mt-8">
        © {new Date().getFullYear()} Equity Edge
      </p> */}
    </footer>
  );
};

export default Footer;
