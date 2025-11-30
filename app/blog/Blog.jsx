"use client";
import { BlogCard } from "@/components/miniComponents/BlogCard";
import { blogs } from "@/data";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F9F7F3] text-center py-16 md:py-24 px-5">
        <h1 className="font-serif text-4xl md:text-6xl font-medium">
          Our Insights & Research
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Deep dives into markets, economics, business models, and
          under-the-radar companies.
        </p>
      </section>

      {/* 2. FEATURED POST */}
      <section className="py-16 md:px-10 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 px-5 lg:px-0">
          Featured Post
        </h2>
        <Link href={featuredBlog.link} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-5 lg:px-0 group">
          <Image
            src={featuredBlog.image}
            width={800}
            height={450}
            alt={featuredBlog.title}
            className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
          />
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3 group-hover:text-[#068466] transition-colors">
              {featuredBlog.title}
            </h3>
            <p className="text-gray-700 md:text-lg mb-6">{featuredBlog.desc}</p>
            <span className="font-bold text-[#068466] group-hover:underline">
              Read More &rarr;
            </span>
          </div>
        </Link>
      </section>

      {/* 3. ALL POSTS */}
      <section className="bg-[#F9F7F3] py-16 md:px-10 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 px-5 lg:px-0">All Posts</h2>
        <div className="px-5 py-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => ( <BlogCard key={idx} {...blog} /> ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

