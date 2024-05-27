"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion, useAnimation } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";
import BG from "@/assets/png/contact-bg.png";

const Contact = () => {
  const router = useRouter();

  return (
    <section className="relative max-w-screen-xl mx-auto bg-black md:pt-28 pb-20 pt-20 md:pb-16 flex flex-col gap-16 ">
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col gap-8">
        <span className="flex flex-col gap-5 items-center">
          <p className="text-base uppercase font-bold">Contact us</p>
          <h2 className="DM md:text-[64px] text-[32px] max-w-2xl text-center md:leading-none pb-4">
            BlackWorldMeet-ENT! {""}
            <span className="text-[#05B178]">Let’s work together!</span>
          </h2>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] md:gap-[64px] gap-[32px] px-4 md:px-8 items-center">
        <Image
          src={BG}
          alt="video bg"
          className="w-full"
          //   max-w-[1120px] mx-auto
        />
        <div className="flex flex-col gap-[20px] md:gap-[40px] max-w-[317px]">
          <h2 className="DM text-[34px]">Information</h2>
          <span className="flex flex-col gap-[12px] md:gap-[24px]">
            <p className="text-[#6C7275] text-base">ADDRESS</p>
            <p className="text-[14px]">
              6455 East Johns Crossing Suite 175 Johns Creek, GA 30097 United
              States.
            </p>
          </span>
          <span className="flex flex-col gap-[12px] md:gap-[24px]">
            <p className="text-[#6C7275] text-base">CALL US</p>
            <p className="text-[14px]">
              +11 2345 657823 <br />
              +11 4523 234591
            </p>
          </span>
          <div className="flex flex-col gap-[12px] md:gap-[24px]">
            <p className="text-[#6C7275] text-base">CALL US</p>
            {/* socials */}
            <div className="border-gray-700 items-center justify-between sm:flex space-y-3 md:space-y-0">
              <div className="flex  gap-x-6 text-white">
                <a href="#">
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:text-gray-500 duration-150"
                  >
                    <g clipPath="url(#clip0_2134_971)">
                      <path
                        d="M23.9991 12.9068C23.9991 6.26618 18.6231 0.876709 11.9991 0.876709C5.37515 0.876709 -0.000854492 6.26618 -0.000854492 12.9068C-0.000854492 18.7293 4.12715 23.5775 9.59915 24.6963V16.5158H7.19915V12.9068H9.59915V9.89927C9.59915 7.57746 11.4831 5.68874 13.7991 5.68874H16.7991V9.29776H14.3991C13.7391 9.29776 13.1991 9.83911 13.1991 10.5008V12.9068H16.7991V16.5158H13.1991V24.8767C19.2591 24.2752 23.9991 19.1504 23.9991 12.9068Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2134_971">
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          transform="translate(-0.000854492 0.876709)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:text-gray-500 duration-150"
                  >
                    <g clipPath="url(#clip0_2134_972)">
                      <path
                        d="M11.9991 0.876709C18.6334 0.876709 23.9991 6.24242 23.9991 12.8767C23.9991 19.511 18.6334 24.8767 11.9991 24.8767C5.36486 24.8767 -0.000854492 19.511 -0.000854492 12.8767C-0.000854492 6.24242 5.36486 0.876709 11.9991 0.876709ZM9.80486 19.2024C15.1191 19.2024 18.0334 14.7967 18.0334 10.9739V10.5967C18.5991 10.1853 19.0963 9.67099 19.4734 9.08814C18.9591 9.311 18.3934 9.46528 17.8106 9.55099C18.4106 9.19099 18.8734 8.62528 19.0791 7.95671C18.5134 8.28242 17.8963 8.52242 17.2449 8.65957C16.7134 8.09385 15.9591 7.751 15.1363 7.751C13.542 7.751 12.2391 9.05385 12.2391 10.6481C12.2391 10.871 12.2563 11.0939 12.3249 11.2996C9.92486 11.1796 7.782 10.031 6.35915 8.28242C6.11915 8.711 5.96486 9.20814 5.96486 9.73957C5.96486 10.7339 6.47915 11.6253 7.25057 12.1396C6.77057 12.1396 6.32486 12.0024 5.94772 11.7796V11.8139C5.94772 13.2196 6.942 14.3853 8.262 14.6596C8.022 14.7281 7.76486 14.7624 7.50772 14.7624C7.31915 14.7624 7.14772 14.7453 6.95915 14.711C7.31915 15.8596 8.39915 16.6996 9.65057 16.7167C8.65629 17.4881 7.40486 17.951 6.05057 17.951C5.81057 17.951 5.58772 17.951 5.36486 17.9167C6.63343 18.7396 8.15915 19.2196 9.78772 19.2196"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2134_972">
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          transform="translate(-0.000854492 0.876709)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:text-gray-500 duration-150"
                  >
                    <g clipPath="url(#clip0_2134_973)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M-0.000854492 0.876709H23.9991V24.8767H-0.000854492V0.876709ZM18.9991 9.87671V15.9513C18.9992 16.4424 18.7945 16.915 18.427 17.2723C18.0596 17.6296 17.5571 17.8447 17.0223 17.8735L16.8991 17.8767H7.09915C6.5635 17.8767 6.04809 17.6891 5.65836 17.3522C5.26864 17.0153 5.03407 16.5545 5.00265 16.0643L4.99915 15.9513V9.87671L11.6106 13.9181L11.6918 13.9605C11.7875 14.0033 11.8926 14.0256 11.9991 14.0256C12.1057 14.0256 12.2108 14.0033 12.3064 13.9605L12.3876 13.9181L18.9991 9.87671ZM18.9991 8.7918C18.6123 8.24223 17.9186 7.87671 17.1273 7.87671H6.87094L6.72369 7.8812C6.37411 7.90163 6.03519 7.99494 5.7352 8.15334C5.4352 8.31175 5.18283 8.53066 4.99915 8.7918L11.9991 12.8767L18.9991 8.7918Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2134_973">
                        <rect
                          x="-0.000854492"
                          y="0.876709"
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:text-gray-500 duration-150"
                  >
                    <g clipPath="url(#clip0_2134_974)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.9991 0.876709H-0.000854492V24.8767H23.9991V0.876709ZM14.2321 12.8767L10.5991 15.0196V10.7339L14.2321 12.8767ZM18.8871 10.7839C18.8451 10.2124 18.7821 9.76242 18.6911 9.42671C18.5161 8.78385 18.1101 8.36957 17.4801 8.19099C16.7591 7.99099 14.9321 7.87671 11.9991 7.87671L10.8861 7.91957C10.1161 7.91957 9.28315 7.94099 8.37315 7.99099C7.44915 8.03385 6.84715 8.09814 6.51815 8.19099C5.88815 8.36957 5.48215 8.78385 5.30715 9.42671C5.11115 10.1624 4.99915 11.3124 4.99915 12.8767L5.04115 13.4767C5.04115 13.9053 5.06215 14.3981 5.11115 14.9696C5.15315 15.541 5.21615 15.991 5.30715 16.3267C5.48215 16.9696 5.88815 17.3839 6.51815 17.5624C7.23915 17.7624 9.06614 17.8767 11.9991 17.8767L13.1121 17.8339C13.8821 17.8339 14.7151 17.8124 15.6251 17.7624C16.5491 17.7196 17.1511 17.6553 17.4801 17.5624C18.1101 17.3839 18.5161 16.9696 18.6911 16.3267C18.8871 15.591 18.9991 14.441 18.9991 12.8767L18.9571 12.2767C18.9571 11.8481 18.9361 11.3553 18.8871 10.7839Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2134_974">
                        <rect
                          x="-0.000854492"
                          y="0.876709"
                          width="24"
                          height="24"
                          rx="12"
                          fill="currentColor"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="30"
                    height="29"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:text-gray-500 duration-150"
                  >
                    <g clipPath="url(#clip0_2134_975)">
                      <path
                        d="M11.9991 1.35669C5.63673 1.35669 0.479126 6.51429 0.479126 12.8767C0.479126 19.2391 5.63673 24.3967 11.9991 24.3967C18.3615 24.3967 23.5191 19.2391 23.5191 12.8767C23.5191 6.51429 18.3615 1.35669 11.9991 1.35669ZM17.2803 10.6567C16.6707 14.1559 13.2627 17.1211 12.2391 17.7979C11.2143 18.4723 10.2783 17.5255 9.93993 16.8091C9.55113 15.9907 8.38833 11.5615 8.08353 11.1931C7.77873 10.8259 6.86433 11.5615 6.86433 11.5615L6.42153 10.9687C6.42153 10.9687 8.27793 8.70909 9.69033 8.42829C11.1879 8.12829 11.1855 10.7695 11.5455 12.2371C11.8947 13.6567 12.1287 14.4679 12.4323 14.4679C12.7371 14.4679 13.3191 13.6783 13.9551 12.4639C14.5935 11.2495 13.9287 10.1767 12.6819 10.9399C13.1799 7.89189 17.8899 7.15749 17.2803 10.6567Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2134_975">
                        <rect
                          width="24"
                          height="24"
                          fill="currentColor"
                          transform="translate(-0.000854492 0.876709)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="pt-10">
        <h2 className="DM md:text-[54px] text-[32px] max-w-xl mx-auto text-center md:leading-none pb-4">
          Get In Touch
        </h2>

        <div className="mt-10 max-w-[747px] mx-auto px-4">
          <form className="flex flex-col gap-[20px] md:gap-[40px]">
            <label htmlFor="name" className="hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="bg-transparent rounded-full px-[24px] py-[12px] border border-[#343839] w-full"
            />

            <label htmlFor="email" className="hidden">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email address"
              className="bg-transparent rounded-full px-[24px] py-[12px] border border-[#343839] w-full"
            />

            <label htmlFor="service" className="hidden">
              What services are you looking for?
            </label>
            <div className="relative w-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.78981 8.00017L16.2098 8.00017C16.5422 7.99969 16.868 8.09336 17.1494 8.27033C17.4308 8.44731 17.6563 8.70035 17.7998 9.00017C17.9678 9.35592 18.0326 9.75171 17.9866 10.1424C17.9406 10.5332 17.7858 10.9031 17.5398 11.2102L13.3298 16.3102C13.1646 16.5008 12.9603 16.6537 12.7309 16.7585C12.5014 16.8633 12.2521 16.9175 11.9998 16.9175C11.7475 16.9175 11.4982 16.8633 11.2688 16.7585C11.0393 16.6537 10.835 16.5008 10.6698 16.3102L6.45981 11.2102C6.2138 10.9031 6.05899 10.5332 6.01302 10.1424C5.96706 9.7517 6.03178 9.35591 6.19981 9.00017C6.34335 8.70035 6.56887 8.4473 6.85026 8.27033C7.13164 8.09336 7.4574 7.99969 7.78981 8.00017Z"
                  fill="#FEFEFE"
                />
              </svg>

              <select
                id="service"
                required
                className="w-full px-[24px] py-[12px] bg-transparent border border-[#343839] rounded-full appearance-none"
              >
                <option value="" className="text-black">
                  What services are you looking for?
                </option>
                <option value="1" className="text-black">
                  Service1
                </option>
                <option value="2" className="text-black">
                  Service2
                </option>
                <option value="3" className="text-black">
                  Service3
                </option>
              </select>
            </div>

            <label htmlFor="description" className="hidden">
              Your project description
            </label>
            <textarea
              rows={4}
              id="name"
              required
              placeholder="Your project description"
              className="bg-transparent p-4 rounded-[24px] px-[24px] py-[12px] border border-[#343839] w-full"
            />

            <button
              type="submit"
              className="py-[10px] px-[20px] flex gap-2 w-full justify-center rounded-[30px] font-medium text-base text-black text-center bg-white active:bg-[#F2F2F2] active:text-[#161513] transition duration-150"
            >
              Send message
              <MdArrowOutward className="w-5 h-5 mt-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
