import { blogPage, blogPageFriday, blogPageInduries } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="pt-24 bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F9F7F3] text-center py-16 md:py-24 px-5">
        <h1 className="font-serif text-4xl md:text-6xl font-medium">
          Our Blog & Research
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Stay updated with our latest thoughts, insights, and research on
          markets, economics, and business models.
        </p>
      </section>

      {/* 2. BLOG LISTING */}
      <section className="py-16 md:py-24 lg:px-20">
        <p className="text-3xl text-center md:text-4xl font-serif mb-5">Small Cap Stocks Research</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-7xl mx-auto">
          {blogPage.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base flex-grow">{post.desc}</p>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[#068466] font-semibold inline-flex items-center group-hover:text-[#056d54]"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24 lg:px-20">
        <p className="text-3xl text-center md:text-4xl font-serif mb-5">Industry Report Articles  </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-7xl mx-auto">
          {blogPageInduries.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base flex-grow">{post.desc}</p>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[#068466] font-semibold inline-flex items-center group-hover:text-[#056d54]"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 lg:px-20">
        <p className="text-3xl text-center md:text-4xl font-serif mb-5">Fun Friday Articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 max-w-7xl mx-auto">
          {blogPageFriday.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-base flex-grow">{post.desc}</p>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[#068466] font-semibold inline-flex items-center group-hover:text-[#056d54]"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
