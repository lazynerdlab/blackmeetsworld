"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CountUp, { useCountUp } from "react-countup";
import Marquee from "react-fast-marquee";

import { motion, useAnimation } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";
import BG from "@/assets/png/about-bg.png";
import Grid from "@/assets/png/about-grid.png";
import Woman from "@/assets/png/woman.png";
import Man from "@/assets/png/man.png";
import QuotesIcon from "@/assets/svg/QuotesIcon";
import Paladora from "@/assets/svg/Paladora";
import Asterik from "@/assets/svg/Asterik";

const About = () => {
  const router = useRouter();

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <section className="relative bg-black md:pt-28 pb-20 pt-20 md:pb-16 flex flex-col gap-16 ">
      {/* max-w-screen-xl mx-auto */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col gap-8">
        <span className="flex flex-col gap-5 items-center">
          <p className="text-base uppercase font-bold">ABOUT US</p>
          <h2 className="DM md:text-[64px] text-[32px] max-w-[935px] text-center md:leading-none pb-4">
            We invent, craft, and fuel content driven experiences that {""}
            <span className="text-[#FAD01D]">
              achieve more for global brands.
            </span>
          </h2>
        </span>

        <Image
          src={BG}
          alt="video bg"
          className="w-full"
          //   max-w-[1120px] mx-auto
        />
      </div>

      <div className="max-w-screen-xl mx-auto md:flex gap-8 space-y-6 md:space-y-0 justify-between px-4 md:px-8">
        <span className="flex-1">
          <Image
            src={Grid}
            alt="video bg"
            className="w-full"
            //   max-w-[1120px] mx-auto
          />
        </span>
        <div className="flex flex-col gap-5 flex-1 text-[14px]">
          <h2 className="DM text-[28px] md:text-[34px] leading-none">
            BlackWorldMeet-ENT
          </h2>
          <p className="">
            We invent, craft, and fuel content driven experiences that achieve
            more for global brands. Blackworldmeet-ENT provides the highest
            quality of live sound reinforcement equipment and rentals,
            audio-video, staging, and lighting. Our production and event staff
            have over 5+ years of combined experience in the field.
          </p>
          <p className="">
            We believe in building relationships with our clients. Anyone can
            provide the cool gadgets of the event industry, but people and
            expertise will never be a commodity. Blackworldmeet-ENT maintains an
            inventory of professional gear to make every show look and sound its
            very best.
          </p>

          {/* count */}
          <div className="grid grid-cols-2 gap-[12px] md:gap-[24px]">
            <span className="flex flex-col gap-[8px]">
              <span className="flex gap-">
                <CountUp
                  end={10}
                  duration={5}
                  enableScrollSpy
                  className=" md:text-[28px] text-[24px] DM"
                />
                <span className="md:text-[28px] text-[24px] DM">+</span>
              </span>
              <p className=" md:text-base text-[14px] text-[#FEFEFE]">
                Years of experience
              </p>
              <p className=" md:text-[14px] text-[13px] text-[#6C7275]">
                We believe in building relationships with our clients.
              </p>
            </span>

            <span className="flex flex-col gap-[8px]">
              <span className="flex gap-">
                <CountUp
                  end={5}
                  duration={5}
                  enableScrollSpy
                  className=" md:text-[28px] text-[24px] DM"
                />
                <span className="md:text-[28px] text-[24px] DM">+</span>
              </span>
              <p className=" md:text-base text-[14px] text-[#FEFEFE]">
                Awards Won
              </p>
              <p className=" md:text-[14px] text-[13px] text-[#6C7275]">
                We believe in building relationships with our clients.
              </p>
            </span>

            <span className="flex flex-col gap-[8px]">
              <span className="flex gap-">
                <CountUp
                  end={10}
                  duration={5}
                  enableScrollSpy
                  className=" md:text-[28px] text-[24px] DM"
                />
                <span className="md:text-[28px] text-[24px] DM">K+</span>
              </span>
              <p className=" md:text-base text-[14px] text-[#FEFEFE]">
                Satisfied Customers
              </p>
              <p className=" md:text-[14px] text-[13px] text-[#6C7275]">
                We believe in building relationships with our clients.
              </p>
            </span>

            <span className="flex flex-col gap-[8px]">
              <span className="flex gap-">
                <CountUp
                  end={200}
                  duration={5}
                  enableScrollSpy
                  className=" md:text-[28px] text-[24px] DM"
                />
                <span className="md:text-[28px] text-[24px] DM">+</span>
              </span>
              <p className=" md:text-base text-[14px] text-[#FEFEFE]">
                Completed Projects
              </p>
              <p className=" md:text-[14px] text-[13px] text-[#6C7275]">
                We believe in building relationships with our clients.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <span className="flex flex-col gap-3 items-center">
          <QuotesIcon />
          <h2 className="DM md:text-[34px] text-[28px] max-w-xl mx-auto text-center md:leading-none pb-4">
            What clients say about us
          </h2>
        </span>
        <div className="mt-10 md:flex space-y-6 md:space-y-0 gap-8 px-4 md:px-8">
          {/* max-w-[1120px] mx-auto */}
          <div className="flex-1 flex flex-col gap-[20px] md:gap-[40px] p-[32px] bg-[#141718] rounded-[16px]">
            {/* max-w-[548px] */}
            <p className="font-semibold">
              “ I really enjoy my work and it makes me more productive, happier
              and more successful. The cowering place builds confidence and
              inspires greater performance and greater success for both
              employees and employers.”
            </p>
            <div className="md:flex space-y-3 md:space-y-0 gap-4 justify-between">
              <span className="flex gap-3">
                <Image
                  src={Woman}
                  alt="Avatar"
                  className="w-[56px] h-[56px]"
                  //   max-w-[1120px] mx-auto
                />
                <span>
                  <p className="font-medium lg:text-[24px] text-[16px]">
                    Rosiena Sanberg{" "}
                  </p>
                  <p className="text-[#6C7275] text-[14px] font-semibold">
                    Project Manager at Paladora
                  </p>
                </span>
              </span>
              <Paladora />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[20px] md:gap-[40px] p-[32px] bg-[#141718] rounded-[16px]">
            {/* max-w-[548px] */}
            <p className="font-semibold">
              “ I really enjoy my work and it makes me more productive, happier
              and more successful. The cowering place builds confidence and
              inspires greater performance and greater success for both
              employees and employers.”
            </p>
            <div className="md:flex space-y-3 md:space-y-0 gap-4 justify-between">
              <span className="flex gap-3">
                <Image
                  src={Man}
                  alt="Avatar"
                  className="w-[56px] h-[56px]"
                  //   max-w-[1120px] mx-auto
                />
                <span>
                  <p className="font-medium lg:text-[24px] text-[16px]">
                    Rosiena Sanberg{" "}
                  </p>
                  <p className="text-[#6C7275] text-[14px] font-semibold">
                    Project Manager at Paladora
                  </p>
                </span>
              </span>
              <Paladora />
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="bg-[#02A8FF] p-[32px] h-[120px] w-full text-[#141718]">
        <Marquee pauseOnHover speed={60}>
          <div className="flex justify-around gap-20">
            <span className="flex gap-4">
              <Asterik />
              <h2 className="text-[34px] DM">Let’s Work Together!</h2>
            </span>
            <span className="flex gap-4">
              <Asterik />
              <h2 className="text-[34px] DM">Let’s Work Together!</h2>
            </span>
            <span className="flex gap-4">
              <Asterik />
              <h2 className="text-[34px] DM">Let’s Work Together!</h2>
            </span>
          </div>
        </Marquee>
      </div>

      {/* end of marquee */}

      {/* contact section */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8  text-white">
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

export default About;
