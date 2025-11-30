import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CheckCircle } from "lucide-react";


export const BlogCard = ({ image, title, desc, link }) => {
  return (
    <div className="bg-[#F9F7F3] px-5 py-8 rounded-xl hover:shadow-2xl duration-300">
      <a href={link} target="_blank">
        <Image
          width={500}
          height={500}
          alt="logo"
          src={image}
          className="h-14 w-auto "
        />
        <p className="font-light text-black my-3  font-serif  text-3xl">
          {title}
        </p>
        <p className="text-gray-700">{desc}</p>
      </a>
    </div>
  );
};

export const ServiceCard = ({
  image,
  title,
  subTitle,
  desc,
  btnText,
  link,
}) => {
  return (
    <div className="bg-[#F9F7F3] px-5 py-8 rounded-xl hover:shadow-2xl duration-300 flex flex-col h-full">
      <div className="text-center">
        <Image
          width={60}
          height={60}
          alt="logo"
          src={image}
          className="h-14 w-auto mx-auto"
        />
        <p className="font-light text-black my-3 font-serif text-2xl">
          {title}
        </p>
        <p className="font-semibold text-black my-3 text-lg">{subTitle}</p>
      </div>
      <ul className="space-y-2 text-gray-700 mt-4 mb-6 flex-grow">
        {desc.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={18} className="text-green-600 mt-1 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      
          <Link href="/contact"
            className={
              "my-3 w-full text-center px-6 py-3 capitalize bg-[#089675] rounded-sm text-white font-semibold hover:bg-[#12b891] inline-block"
            }
          >
            {btnText}
          </Link>
     
    </div>
  );
};
