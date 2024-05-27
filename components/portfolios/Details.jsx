"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion, useAnimation } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";
import Video3 from "@/assets/png/portfolio-video-3.png";
import Item1 from "@/assets/png/item-1.png";
import Item2 from "@/assets/png/item-2.png";
import Item3 from "@/assets/png/item-3.png";
import PlayIcon from "@/assets/svg/PlayIcon";

const Details = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto bg-black md:pt-28 pb-20 pt-20 md:pb-16 flex flex-col gap-16 ">
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col gap-8">
        <div className="md:flex gap-8 space-y-8 md:space-y-0 justify-between">
          <span className="flex flex-col gap-5">
            <p className="text-base uppercase font-bold">Portfolio Single</p>
            <h2 className="DM md:text-[64px] text-[32px] max-w-lg md:leading-none pb-4">
              Pizza Company TV Commercial
            </h2>
          </span>
          <div className=" flex flex-col md:min-w-[420px]">
            <span className="text-[20px] border-b border-[#343839] flex gap-4 justify-between pb-3">
              <p className="DM ">Client:</p>
              <p>Pizza Company</p>
            </span>
            <span className="text-[20px] border-b border-[#343839] flex gap-4 justify-between py-3">
              <p className="DM ">Year:</p>
              <p>2023</p>
            </span>
            <span className="text-[20px] border-b border-[#343839] flex gap-4 justify-between py-3">
              <p className="DM ">Services:</p>
              <p>Commercials</p>
            </span>
          </div>
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
            className="absolute bottom-12 right-8 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
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
      </div>

      {/* overview */}
      <div className="md:flex gap-8 space-y-6 md:space-y-0 justify-between px-4 md:px-8">
        <h2 className="DM text-[52px] flex-1">Overview</h2>
        <span className="flex flex-col gap-3 flex-1 text-base">
          <p className="">
            Pizza Company is serving up delicious from scratch Pizza and Hot
            Wings in Dallas. Dine in or Order Online!
          </p>
          <p className="">
            The Pizza Company Video is a promotional short by Kaleidoscope . It
            was available on the Pizza Company website from 2023 to now.
          </p>
          <p className="">
            You can watch the new Pizza Company Commercial featuring Craig
            Robinson for Pizza Company Big Dinner Box. Craig Robinson introduces
            the Big Dinner Box.
          </p>
        </span>
      </div>

      <div className="md:flex gap-8 space-y-8 md:space-y-0 px-4 md:px-8">
        <Image
          src={Item1}
          alt="video bg"
          className="w-full"
          //   max-w-[1120px] mx-auto
        />
        <Image
          src={Item2}
          alt="video bg"
          className="w-full"
          //   max-w-[1120px] mx-auto
        />
      </div>

      <Image
        src={Item3}
        alt="video bg"
        className="w-full px-4 md:px-8"
        //   max-w-[1120px] mx-auto
      />

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

export default Details;
