"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion, useAnimation } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";
import BG from "@/assets/png/services-bg.png";

const Services = () => {
  const router = useRouter();

  return (
    <section className="relative max-w-screen-xl mx-auto bg-black md:pt-28 pb-20 pt-20 md:pb-16 flex flex-col gap-16 ">
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col gap-8">
        <span className="flex flex-col gap-5 items-center">
          <p className="text-base uppercase font-bold">Services</p>
          <h2 className="DM md:text-[64px] text-[32px] max-w-xl text-center md:leading-none pb-4">
            We provide amazing {""}
            <span className="text-[#02A8FF]">video solutions</span>
          </h2>
        </span>

        <Image
          src={BG}
          alt="video bg"
          className="w-full"
          //   max-w-[1120px] mx-auto
        />
      </div>

      <div className="md:flex gap-8 space-y-6 md:space-y-0 justify-between px-4 md:px-8">
        <h2 className="DM text-[52px] flex-1 leading-none">
          We help companies find their way to greatness.
        </h2>
        <span className="flex flex-col gap-3 flex-1 text-base">
          <p className="">
            We are in the thick of the digital age, and video has become one of
            the most powerful storytelling and brand communication tools. But
            did you know that behind every captivating video lies a creative
            team skilled in the art of professional video production?
          </p>
          <p className="">
            At Blackworldmeet-ENT Studio, we&apos;re at the forefront of this
            art. We bring individuals&apos; and organizations&apos; visions to
            life through high-quality, professional video production that shakes
            things up.
          </p>
          <Link
            href="/portfolios"
            className="py-[10px] px-[20px] mt-5 flex gap-2 w-max rounded-[30px] font-medium text-[17px] text-black text-center bg-white active:bg-[#F2F2F2] active:text-[#161513] transition duration-150"
          >
            View Porfolios
            <MdArrowOutward className="w-5 h-5 mt-0.5" />
          </Link>
        </span>
      </div>

      <div>
        <h2 className="DM md:text-[54px] text-[32px] max-w-xl mx-auto text-center md:leading-none pb-4">
          We provide a wide range of services
        </h2>

        <div className="mt-10 grid grid-cols-1 px-4 md:px-8 md:gap-6 gap-[24px]">
          <div className="border-b border-[#343839] pb-2">
            <Link
              href="/"
              className="DM hover:text-[#02A8FF] text-[28px] flex gap-6 justify-between"
            >
              Commercials
              <div className="rounded-full w-[40px] h-[40px] hover:bg-[#02A8FF] bg-transparent border border-[#343839] hover:border-transparent my-auto flex justify-center items-center">
                <MdArrowOutward className="text-[#6C7275] hover:text-black w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="border-b border-[#343839] pb-2">
            <Link
              href="/"
              className="DM hover:text-[#02A8FF] text-[28px] flex gap-6 justify-between"
            >
              Multi Camera Broadcast
              <div className="rounded-full w-[40px] h-[40px] hover:bg-[#02A8FF] bg-transparent border border-[#343839] hover:border-transparent my-auto flex justify-center items-center">
                <MdArrowOutward className="text-[#6C7275] hover:text-black w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="border-b border-[#343839] pb-2">
            <Link
              href="/"
              className="DM hover:text-[#02A8FF] text-[28px] flex gap-6 justify-between"
            >
              Music Videos
              <div className="rounded-full w-[40px] h-[40px] hover:bg-[#02A8FF] bg-transparent border border-[#343839] hover:border-transparent my-auto flex justify-center items-center">
                <MdArrowOutward className="text-[#6C7275] hover:text-black w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="border-b border-[#343839] pb-2">
            <Link
              href="/"
              className="DM hover:text-[#02A8FF] text-[28px] flex gap-6 justify-between"
            >
              Coporate / Product Videos
              <div className="rounded-full w-[40px] h-[40px] hover:bg-[#02A8FF] bg-transparent border border-[#343839] hover:border-transparent my-auto flex justify-center items-center">
                <MdArrowOutward className="text-[#6C7275] hover:text-black w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="border-b border-[#343839] pb-2">
            <Link
              href="/"
              className="DM hover:text-[#02A8FF] text-[28px] flex gap-6 justify-between"
            >
              Marketing Videos
              <div className="rounded-full w-[40px] h-[40px] hover:bg-[#02A8FF] bg-transparent border border-[#343839] hover:border-transparent my-auto flex justify-center items-center">
                <MdArrowOutward className="text-[#6C7275] hover:text-black w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="border-b border-[#343839] pb-2">
            <Link
              href="/"
              className="DM hover:text-[#02A8FF] text-[28px] flex gap-6 justify-between"
            >
              Event / Wedding Videos
              <div className="rounded-full w-[40px] h-[40px] hover:bg-[#02A8FF] bg-transparent border border-[#343839] hover:border-transparent my-auto flex justify-center items-center">
                <MdArrowOutward className="text-[#6C7275] hover:text-black w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
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

export default Services;
