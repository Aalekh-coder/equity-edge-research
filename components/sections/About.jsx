"use client";

import {
  Users,
  Target,
  LineChart,
  GaugeCircle,
  FileSearch,
} from "lucide-react";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}{" "}
      <h2 className="text-4xl font-semibold mb-6 text-gray-900">Who We Are </h2>
      {/* Introduction Paragraph */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        We are a team of three research-driven individuals who met by chance and
        began our journey in April 2024. Our mission is to simplify equity
        investing for every household in India — especially in regions where
        investing is still seen as a taboo.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        We provide data-backed, deeply researched insights at a fraction of what
        other platforms charge, helping investors of every level — beginners,
        intermediates, or experts — make confident decisions whether to buy,
        hold, or sell.
      </p>
      {/* Audience Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Beginners</h4>
          </div>
          <p className="text-gray-700">
            Learn how companies function, markets operate, and investment works
            — all explained simply.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <GaugeCircle className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Intermediate Investors</h4>
          </div>
          <p className="text-gray-700">
            Improve and expand your portfolio with insightful data-backed
            analysis.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <LineChart className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Market Experts</h4>
          </div>
          <p className="text-gray-700">
            Get deeper business and industry insights to guide the next
            investment move.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Knowledge Seekers</h4>
          </div>
          <p className="text-gray-700">
            Join us to learn, discuss businesses, trends, and maybe share some
            bad jokes too!
          </p>
        </div>
      </div>
      {/* What We Do */}
      <h3 className="text-3xl font-semibold mb-6 text-gray-900">What We Do</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        We realized there is too little deep analysis of Small-Cap and Micro-Cap
        companies, while many investors are looking for reliable insights. So,
        we decided to provide that — backed by research, industry understanding,
        and hard data.
      </p>
      {/* Services / Research Offerings */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FileSearch className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Equity Research Reports</h4>
          </div>
          <p className="text-gray-700">
            From “how the company operates” to management scrutiny — fully
            detailed and explained reports.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <LineChart className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Industry Reports</h4>
          </div>
          <p className="text-gray-700">
            We analyze global and Indian industries, market size, trends,
            segmentation, drivers, competition, and more.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-lg">Custom Reports</h4>
          </div>
          <p className="text-gray-700">
            Request customized Equity or Industry reports tailored to your needs
            and interests.
          </p>
        </div>
      </div>
    </section>
  );
}
