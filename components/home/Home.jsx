"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import CountUp, { useCountUp } from "react-countup";
import Marquee from "react-fast-marquee";

import { MdArrowOutward } from "react-icons/md";

import Paladora from "@/assets/svg/Paladora";
import Weibo from "@/assets/svg/Weibo";
import Homne from "@/assets/svg/Homne";
import Huran from "@/assets/svg/Huran";
import Matsuri from "@/assets/svg/Matsuri";
import Radical from "@/assets/svg/Radical";

import VideoBg from "@/assets/png/hero-video-bg.png";
import AnimatedText from "@/assets/png/animated-text.png";
import AvatarGroup from "@/assets/png/avatar-group.png";
import Videographer from "@/assets/png/videographer.png";
import Video1 from "@/assets/png/portfolio-video.png";
import Video2 from "@/assets/png/portfolio-video-bottle.jpeg";
import Asterik from "@/assets/svg/Asterik";
import PlayIcon from "@/assets/svg/PlayIcon";

const Home = () => {
  const router = useRouter();

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  // Animation for the works section
  const worksRef = useRef(null);
  const worksControls = useAnimation();

  // Animation for the projects section
  const projectsRef = useRef(null);
  const projectsControls = useAnimation();

  // Animation for the contact section
  const contactRef = useRef(null);
  const contactControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if works section is in view
      if (
        worksRef.current &&
        window.scrollY + window.innerHeight >=
          worksRef.current.offsetTop + worksRef.current.offsetHeight * 0.4
      ) {
        // Trigger animations when the works section is 40% in view
        worksControls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        });
      }
      // Check if projects section is in view
      if (
        projectsRef.current &&
        window.scrollY + window.innerHeight >=
          projectsRef.current.offsetTop + projectsRef.current.offsetHeight * 0.4
      ) {
        // Trigger animations when the projects section is 40% in view
        projectsControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
      // Check if contact section is in view
      if (
        contactRef.current &&
        window.scrollY + window.innerHeight >=
          contactRef.current.offsetTop + contactRef.current.offsetHeight * 0.6
      ) {
        // Trigger animations when the contact section is 40% in view
        contactControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [worksControls, projectsControls, contactControls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black scroll-smooth"
    >
      {/* hero */}
      <section className="relative max-w-screen-xl mx-auto bg-black min-h-screen md:pt-28 pb-20 pt-20 md:pb-16 flex flex-col gap-16 ">
        <div className="relative z-10 w-full px-4 md:px-8 flex flex-col gap-5">
          {/* max-w-screen-xl mx-auto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-4 md:space-y-0 md:flex gap-8 justify-between"
          >
            <div>
              <h2 className="DM text-4xl md:text-[64px] md:text-5xl text-white">
                Creative & Corporate{" "}
                <span className="text-[#05B178]">Video Production</span>
              </h2>
            </div>
            <div className="max-w-[440px] flex flex-col gap-3">
              <p className="max-w-3xl mx-auto text-white text-base">
                Blackmeetworld-ent - a creative agency specializing in making
                videos for strategy, marketing and production.
              </p>
              <div className="flex gap-6">
                <Image src={AvatarGroup} alt="avatar" className="" />
                <p className="font-semibold text-base my-auto">
                  200+ Popular clients
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="py-10 relative"
          >
            <div className="absolute md:right-20 md:-top-10 md:block hidden">
              <div className="p-4 bg-[#FAD01D] rounded-full w-max relative">
                <Image
                  src={AnimatedText}
                  alt=""
                  className="w-[160px] h-[160px] animate-spin animated-text"
                />
                <Link
                  href="/contact"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.57188 20.4282L20.4281 1.57202M20.4281 1.57202L20.4281 15.7142M20.4281 1.57202L6.28592 1.57203"
                      stroke="#141718"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="block">
              <Image
                src={VideoBg}
                alt="video bg"
                className="w-full max-w-[1120px] mx-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="relative px-4"
        >
          <p className="text-center text-base text-white">
            More than 1 million people across 200+ companies choose
            Blackmeetsworld-ent
          </p>
          <div className="mt-6">
            <ul className="flex gap-x-8 gap-y-6 flex-wrap items-center justify-center md:gap-x-10">
              {/* overflow-x-scroll md:overflow-visible lg:flex-nowrap */}

              {/* LOGO 1 */}
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Paladora />
              </motion.li>

              {/* LOGO 2 */}
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Weibo />
              </motion.li>

              {/* LOGO 3 */}
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Homne />
              </motion.li>

              {/* LOGO 4 */}
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Huran />
              </motion.li>

              {/* LOGO 5 */}
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Matsuri />
              </motion.li>

              {/* LOGO 6 */}
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Radical />
              </motion.li>
            </ul>
          </div>
        </motion.div>
        {/* end of logo grid */}
      </section>
      {/* end of hero */}

      {/* works */}
      <div id="works" ref={worksRef} className="">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 pt-[5.5rem] md:pt-28 md:py-16 text-white grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8">
          <div className="flex flex-col gap-[32px] max-w-[596px]">
            <span className="max-w-[520px] flex flex-col gap-[32px]">
              <p className="text-base font-bold uppercase">Key Features</p>
              <h2 className="DM md:text-[52px] text-[32px]">
                Crafting <span className="text-[#7E2FD3]">Visual Stories </span>
                That Captivate
              </h2>
            </span>
            <span className="flex flex-col gap-4">
              <p>
                We are in the thick of the digital age, and video has become one
                of the most powerful storytelling and brand communication tools.
                But did you know that behind every captivating video lies a
                creative team skilled in the art of professional video
                production?
              </p>
              <p>
                At Blackmeetworld ent Studio, we&apos;re at the forefront of
                this art. We bring individuals&apos; and organizations&apos;
                visions to life through high-quality, professional video
                production that shakes things up.
              </p>
            </span>
            <Link
              href="/"
              className="py-[10px] px-[20px] flex gap-2 w-max rounded-[30px] font-medium text-base text-black text-center bg-white hover:text-[#7E2FD3] active:bg-[#F2F2F2] active:text-[#161513] transition duration-150"
            >
              Learn More
              <MdArrowOutward className="w-5 h-5 mt-0.5" />
            </Link>
          </div>

          {/* List of Works */}
          <motion.div
            animate={worksControls}
            initial={{ opacity: 0, scale: 0.5 }}
            className="flex flex-col gap-4 md:items-end items-center"
          >
            <div className="bg-[#02A8FF] px-[40px] py-[24px] rounded-[16px] flex flex-col gap-4 text-[#141718] text-base max-w-[455px]">
              <h2 className="text-[28px] DM max-w-[375px] leading-7">
                Make Your Product Stand out With A Custom Video
              </h2>
              <p>Make your Product launch stand out from the rest.</p>
            </div>
            <div className="bg-[#05B178] px-[40px] py-[24px] rounded-[16px] flex flex-col gap-4 text-[#141718] text-base max-w-[455px]">
              <h2 className="text-[28px] DM max-w-[375px] leading-7">
                Super-fast delivery <br />
                (Unlike most agencies)
              </h2>
              <p>
                No more slow agencies or freelancers. We send your video within
                7 to 10 days.
              </p>
            </div>
            <div className="bg-[#FAD01D] px-[40px] py-[24px] rounded-[16px] flex flex-col gap-4 text-[#141718] text-base max-w-[455px]">
              <h2 className="text-[28px] DM max-w-[375px] leading-7">
                Turn visitors into customers. Boost your conversion rate.
              </h2>
              <p>
                Showcase features of your SaaS to potential users within
                seconds.
              </p>
            </div>
            <div className="bg-[#F84616] px-[40px] py-[24px] rounded-[16px] flex flex-col gap-4 text-[#141718] text-base max-w-[455px]">
              <h2 className="text-[28px] DM max-w-[375px] leading-7">
                Script. Voiceover. Animation. Start to finish.
              </h2>
              <p>
                We handle everything: researching, writing the script, voiceover
                & animation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* end of works */}

      {/* count */}
      <div className="bg-[url(https://res.cloudinary.com/stephen1407/image/upload/v1711285063/wavy-bg_agg3vp.jpg)] md:p-12 p-6 bg-cover bg-no-repeat md:h-[320px] flex items-center justify-center">
        <div className="md:flex gap-16 justify-betwee max-w-[1120px] space-y-8 md:space-y-0 text-white">
          <span className="flex flex-col items-center">
            <span className="flex gap-">
              <CountUp
                end={10}
                duration={5}
                enableScrollSpy
                className=" md:text-[64px] text-[30px] DM"
              />
              <span className="md:text-[64px] text-[30px] DM">+</span>
            </span>
            <p className=" md:text-[20px] text-[14px] text-center">
              Years of experience
            </p>
          </span>
          <span className="flex flex-col items-center">
            <span className="flex gap-">
              <CountUp
                end={10}
                duration={5}
                enableScrollSpy
                className=" md:text-[64px] text-[30px] DM"
              />
              <span className="md:text-[64px] text-[30px] DM">K+</span>
            </span>
            <p className=" md:text-[20px] text-[14px] text-center">
              Satisfied Customers
            </p>
          </span>
          <span className="flex flex-col items-center">
            <span className="flex gap-">
              <CountUp
                end={5}
                duration={5}
                enableScrollSpy
                className=" md:text-[64px] text-[30px] DM"
              />
              <span className="md:text-[64px] text-[30px] DM">+</span>
            </span>
            <p className=" md:text-[20px] text-[14px] text-center">
              Awards Won
            </p>
          </span>
          <span className="flex flex-col items-center">
            <span className="flex gap-">
              <CountUp
                end={200}
                duration={5}
                enableScrollSpy
                className=" md:text-[64px] text-[30px] DM"
              />
              <span className="md:text-[64px] text-[30px] DM">+</span>
            </span>
            <p className=" md:text-[20px] text-[14px] text-center">
              Completed Projects
            </p>
          </span>
        </div>
      </div>
      {/* end of count */}

      {/* services */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-16 text-white md:space-y-16 space-y-8">
        <span className="max-w-[478px] mx-auto flex flex-col gap-[32px] text-center">
          <p className="text-base font-bold uppercase">Our Services</p>
          <h2 className="DM md:text-[52px] text-[32px] md:leading-tight">
            We provide amazing {""}
            <span className="text-[#02A8FF]">video solutions </span>
          </h2>
        </span>

        {/* services grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-[24px]">
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

        {/* image */}
        <Image
          src={Videographer}
          alt="videographer"
          className="w-full  rounded-[16px]"
          // h-[480px] mx-auto max-w-[1120px]
        />
      </div>
      {/* end of services */}

      {/* Portfolio */}
      <div
        ref={projectsRef}
        className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-16 text-white"
      >
        <span className="md:flex gap-8 justify-between space-y-2 md:space-y-0">
          <span className="max-w-xl">
            <p className="text-base font-bold uppercase">Portfolio</p>
            <h2 className="DM md:text-[54px] text-[32px] md:leading-tight">
              We create beautiful, {""}
              <span className="text-[#F84616]">practical works</span>
            </h2>
          </span>
          <span className="max-w-2xl flex flex-col justify-end">
            <Link
              href="/"
              className="py-[10px] px-[20px] flex gap-2 w-max rounded-[30px] font-medium text-base text-black text-center bg-white hover:text-[#F84616] active:bg-[#F2F2F2] active:text-[#161513] transition duration-150"
            >
              View All Works
              <MdArrowOutward className="w-5 h-5 mt-0.5" />
            </Link>
          </span>
        </span>

        {/* project grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsControls}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-9"
        >
          <div className="relative">
            <div className="block">
              <Image
                src={Video1}
                alt="video 1"
                className="w-full max-w-[1120px] mx-auto rounded-[16px]"
                //   max-w-[1120px] mx-auto
              />
            </div>
            <button
              type="button"
              // onClick={() => router.push("/portfolios/details")} // portfolio details
              className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
            >
              <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
                <PlayIcon />
              </div>
              <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
                <p className="font-semibold text-base">ADS</p>
                <p className="font-medium text-[#6C7275] text-base">
                  Case Study
                </p>
              </span>
            </button>
          </div>
          <div className="relative">
            <div className="block">
              <Image
                src={Video2}
                alt="video 2"
                className="w-full max-w-[1120px] mx-auto rounded-[16px]"
                //   max-w-[1120px] mx-auto
              />
            </div>
            <button
              type="button"
              // onClick={() => router.push("/portfolios/details")} // portfolio details
              className="absolute bottom-12 right-8 animate-bounce duration-200 bg-[#141718] md:pr-[32px] rounded-full md:max-w-[280px] flex items-center gap-6"
            >
              <div className="bg-[#232627] w-[80px] h-[80px] p-4 items-center flex justify-center rounded-full">
                <PlayIcon />
              </div>
              <span className="hidden md:flex flex-col gap-1.5 justify-center text-start text-[#FEFEFE]">
                <p className="font-semibold text-base">ADS</p>
                <p className="font-medium text-[#6C7275] text-base">
                  Case Study
                </p>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
      {/* end of Portfolio */}

      {/* marquee */}
      <div className="bg-[#05B178] p-[32px] h-[120px] w-full text-[#141718]">
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
      <div
        ref={contactRef}
        className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-16 text-white"
      >
        <div className="bg-[url(https://res.cloudinary.com/stephen1407/image/upload/v1709214138/background_qdkf46.png)] md:p-12 p-6 rounded-[16px] bg-cover bg-center bg-no-repeat">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactControls}
            // transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-2xl flex flex-col gap-6"
          >
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
          </motion.div>
        </div>
      </div>
      {/* end of contact section */}
    </motion.div>
  );
};

export default Home;
