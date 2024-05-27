"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion, useAnimation } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";
import Video1 from "@/assets/png/portfolio-video-1.png";
import Video2 from "@/assets/png/portfolio-video-2.png";
import Video3 from "@/assets/png/portfolio-video-3.png";
import Video4 from "@/assets/png/portfolio-video-4.png";
import Video5 from "@/assets/png/portfolio-video-5.png";
import PlayIcon from "@/assets/svg/PlayIcon";

const Portfolios = () => {
  const router = useRouter();

  return (
    <section className="relative max-w-screen-xl mx-auto bg-black md:pt-28 pb-20 pt-20 md:pb-16 flex flex-col gap-16 ">
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col gap-8">
        <span className="flex flex-col gap-5 items-center">
          <p className="text-base uppercase font-bold">Portfolios</p>
          <h2 className="DM md:text-[64px] text-[32px] max-w-xl text-center md:leading-none pb-4">
            We create beautiful, {""}
            <span className="text-[#F84616]">practical works</span>
          </h2>
        </span>

        <div className="relative">
          <div className="block">
            <Image
              src={Video1}
              alt="video bg"
              className="w-full"
              //   max-w-[1120px] mx-auto
            />
          </div>
          <button
            type="button"
            onClick={() => router.push("/portfolios/details")} // portfolio details
            className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
          >
            <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
              <PlayIcon />
            </div>
            <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
              <p className="font-semibold text-base">Logistics Promo</p>
              <p className="font-medium text-[#6C7275] text-base">Play Video</p>
            </span>
          </button>
        </div>
        <div className="relative">
          <div className="block">
            <Image
              src={Video2}
              alt="video bg"
              className="w-full"
              //   max-w-[1120px] mx-auto
            />
          </div>
          <button
            type="button"
            onClick={() => router.push("/portfolios/details")} // portfolio details
            className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
          >
            <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
              <PlayIcon />
            </div>
            <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
              <p className="font-semibold text-base"> Chanel Promotion</p>
              <p className="font-medium text-[#6C7275] text-base">Play Video</p>
            </span>
          </button>
        </div>
        <div className="relative">
          <div className="block">
            <Image
              src={Video3}
              alt="video bg"
              className="w-full"
              //   max-w-[1120px] mx-auto
            />
          </div>
          <button
            type="button"
            onClick={() => router.push("/portfolios/details")} // portfolio details
            className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
          >
            <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
              <PlayIcon />
            </div>
            <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
              <p className="font-semibold text-base">Pizza Company</p>
              <p className="font-medium text-[#6C7275] text-base">Play Video</p>
            </span>
          </button>
        </div>
        <div className="relative">
          <div className="block">
            <Image
              src={Video4}
              alt="video bg"
              className="w-full"
              //   max-w-[1120px] mx-auto
            />
          </div>
          <button
            type="button"
            onClick={() => router.push("/portfolios/details")} // portfolio details
            className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
          >
            <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
              <PlayIcon />
            </div>
            <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
              <p className="font-semibold text-base">Nutella Recipe</p>
              <p className="font-medium text-[#6C7275] text-base">Play Video</p>
            </span>
          </button>
        </div>
        <div className="relative">
          <div className="block">
            <Image
              src={Video5}
              alt="video bg"
              className="w-full"
              //   max-w-[1120px] mx-auto
            />
          </div>
          <button
            type="button"
            onClick={() => router.push("/portfolios/details")} // portfolio details
            className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
          >
            <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
              <PlayIcon />
            </div>
            <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
              <p className="font-semibold text-base">Hublot Watch</p>
              <p className="font-medium text-[#6C7275] text-base">Play Video</p>
            </span>
          </button>
        </div>

        <button
          className="border border-[#343839] py-[16px] px-[32px] rounded-full"
          type="button"
        >
          Load more Works
        </button>
      </div>

      {/* contact section */}
      <div className="w-full px-4 md:px-8  text-white">
        {/* py-8 md:py-16 */}
        <div className="bg-[url(https://res.cloudinary.com/stephen1407/image/upload/v1709214138/background_qdkf46.png)] md:p-12 p-6 rounded-[16px] bg-cover bg-center bg-no-repeat">
          <div className="max-w-2xl flex flex-col gap-6">
            <h2 className="DM max-w-md md:text-[64px] text-[32px] md:leading-tight">
              Have an idea? {""}
              <span className="text-[#05B178]">Let’s Talk.</span>
            </h2>
            <p className="text-[18px] md:text-[20px] max-w-xl font-semibold">
              We create experiences that fuel connections between brands and the
              people vital to their success.
            </p>
            <Link
              href="/contact"
              className="py-[10px] px-[20px] flex gap-2 w-max rounded-[30px] font-medium text-[17px] text-black text-center bg-white active:bg-[#F2F2F2] active:text-[#161513] transition duration-150"
            >
              Contact Us
              <MdArrowOutward className="w-5 h-5 mt-0.5" />
            </Link>
          </div>
        </div>
      </div>
      {/* end of contact section */}
    </section>
  );
};

export default Portfolios;
