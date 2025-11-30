"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookText,
  Briefcase,
  ChartNoAxesGantt,
  Home,
  Mail,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import PopForm from "@/components/sections/PopForm";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-[#1C4044] flex items-center justify-between px-5 py-5 lg:px-10 fixed inset-x-0 z-40">
      {/* <div className="flex items-center "> */}
        {/* <Image
          src={"/logo2.png"}
          width={1000}
          height={1000}
          alt="logo"
          className="h-20 w-auto"
        /> */}
        <p className="font-bold text-2xl text-white font-serif">Equity Edge Research</p>
      {/* </div> */}
      <Sheet open={navOpen} onOpenChange={() => setNavOpen(!navOpen)}>
        <SheetTrigger asChild on>
          <ChartNoAxesGantt
            color="white"
            size={30}
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden"
          />
        </SheetTrigger>
        {/* <SheetContent side="left">
          <SheetHeader className={"hidden"}>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="px-5 py-10">
            <p className="font-serif font-bold text-2xl hover:underline">
              Equity Edge
            </p>

            <div className="flex flex-col text-xl gap-5  mt-5">
              <Link
                onClick={() => setNavOpen(!navOpen)}
                className="hover:font-bold  text-gray-700  font-semibold  hover:text-black"
                href={"/"}
              >
                Home
              </Link>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                className="hover:font-bold  text-gray-700  font-semibold  hover:text-black"
                href="/about"
              >
                About
              </Link>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                className="hover:font-bold  text-gray-700  font-semibold  hover:text-black"
                href={"/service"}
              >
                Services
              </Link>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                className="hover:font-bold  text-gray-700  font-semibold  hover:text-black"
                href={"/contact"}
              >
                Contact
              </Link>
              <Link
                onClick={() => setNavOpen(!navOpen)}
                className="hover:font-bold  text-gray-700  font-semibold  hover:text-black"
                href={"/blog"}
              >
                Blogs
              </Link>
            </div>
          </div>
        </SheetContent> */}

        <SheetContent
          side="left"
          className="p-0 bg-white w-[300px] sm:w-[350px] border-r border-green-700"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <p className="font-serif font-bold text-2xl">Equity Edge</p>
            </div>

            <div className="flex-grow p-6">
              <div className="flex flex-col text-lg gap-2">
                <Link
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 hover:text-black transition-colors"
                  href={"/"}
                >
                  <Home size={22} /> Home
                </Link>
                <Link
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 hover:text-black transition-colors"
                  href="/about"
                >
                  <Users size={22} /> About
                </Link>
                <Link
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 hover:text-black transition-colors"
                  href={"/service"}
                >
                  <Briefcase size={22} /> Offerings 
                </Link>
                <Link
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 hover:text-black transition-colors"
                  href={"/contact"}
                >
                  <Mail size={22} /> Contact
                </Link>
                <Link
                  onClick={() => setNavOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 hover:text-black transition-colors"
                  href={"/blog"}
                >
                  <BookText size={22} /> Blogs
                </Link>
              </div>
            </div>

            <div className="p-6 border-t">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="w-full py-3 capitalize bg-[#068466] rounded-lg text-white font-semibold hover:bg-[#0b9777]">
                    Get In Touch
                  </button>
                </Dialog.Trigger>
                <PopForm />
              </Dialog.Root>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex  md:text-white md:font-semibold  md:gap-3 text-lg lg:gap-8">
        <Link href={"/"} className="hover:font-bold  duration-300 ">
          Home
        </Link>
        <Link href={"/about"} className="hover:font-bold  duration-300 ">
          About
        </Link>
        <Link href={"/service"} className="hover:font-bold  duration-300 ">
          Offerings 
        </Link>
        <Link href={"/contact"} className="hover:font-bold  duration-300 ">
          Contact
        </Link>
        <Link href={"/blog"} className="hover:font-bold  duration-300 ">
          Blogs
        </Link>
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="hidden px-6 py-3 capitalize bg-[#068466] rounded-sm text-white font-semibold hover:bg-[#0b9777] md:inline-block">
            Get In Touch
          </button>
        </Dialog.Trigger>
        <PopForm />
      </Dialog.Root>
    </nav>
  );
};

export default Navbar;
