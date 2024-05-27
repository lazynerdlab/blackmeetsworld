"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "@/assets/svg/ArrowDown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // New state variable
  const navRef = useRef(null);
  const placeholderRef = useRef(null);

  const navigation = [
    { title: "Home", path: "/" },
    {
      // title: "The Studio",
      title: (
        <span className="flex gap-2 items-center justify-between w-[90vw] xs:w-max">
          {/* justify-between w-[90vw] md:w-max */}
          The Studio <ArrowDown />
        </span>
      ),
      path: "#",
      dropdownItems: [
        { title: "About", path: "/about" },
        { title: "Services and Amenities", path: "/services" },
        { title: "Studio Lots Maps", path: "#" },
        { title: "Contact Us", path: "/contact" },
        { title: "History", path: "#" },
        { title: "Forms & Other Info", path: "#" },
      ],
    },
    {
      // title: "Stages & Blackout",
      title: (
        <span className="flex gap-2 items-center justify-between w-[90vw] xs:w-max">
          Stages & Blackout <ArrowDown />
        </span>
      ),
      path: "#",
      dropdownItems: [
        { title: "Stages", path: "#" },
        { title: "The Alley", path: "#" },
        { title: "Blue Sky Tank", path: "#" },
        { title: "Other Lot Location", path: "#" },
      ],
    },
    {
      // title: "Studio Services",
      title: (
        <span className="flex gap-2 items-center justify-between w-[90vw] xs:w-max">
          Studio Services <ArrowDown />
        </span>
      ),
      path: "#",
      dropdownItems: [
        { title: "Production Services", path: "#" },
        { title: "Lighting Services", path: "#" },
        { title: "Gap Services", path: "#" },
        { title: "Transportation", path: "#" },
      ],
    },
    {
      // title: "Post Production",
      title: (
        <span className="flex gap-2 items-center justify-between w-[90vw] xs:w-max">
          Post Production <ArrowDown />
        </span>
      ),
      path: "#",
      dropdownItems: [
        { title: "Post- Production Services", path: "#" },
        { title: "Screening Rooms", path: "#" },
      ],
    },
    { title: "Portfolios", path: "/portfolios" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ item }) => (
    <li className="relative group">
      <Link
        href={item.path}
        className="text-white hover:text-[#05B178] text-base inline-flex items-center"
      >
        {item.title}
      </Link>
      {item.dropdownItems && (
        <ul className="md:absolute min-w-[250px] hidden group-hover:block bg-black shadow-lg shadow-[#02A8FF4D] text-white -mt-0.5 rounded-lg z-[1000]">
          {item.dropdownItems.map((dropdownItem, index) => (
            <li key={index} className="px-4 py-2 hover:text-[#05B178]">
              <Link href={dropdownItem.path}>{dropdownItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <div
        ref={placeholderRef}
        style={{ height: isScrolled ? navRef.current.offsetHeight : 0 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`border-b-2 border-white/10 z-50 ${
          isScrolled ? "fixed top-0 left-0 right-0 bg-[#161513]" : ""
        }`}
      >
        <nav
          ref={navRef}
          className="relative z-50 items-center border-b border-[#161513] pt-5 pb-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-16"
        >
          <div className="flex justify-between items-center">
            <Link href="/" className="text-[24px] font-bold text-white">
              <span className="text-[#05B178]">Black</span>meetsworld
            </Link>
            {/* Mobile toggle button */}
            <button
              className="text-gray-500 outline-none md:hidden"
              onClick={toggleMobileNav}
            >
              {isMobileNavOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Always visible navigation links */}
          <ul className="hidden md:flex items-center py-6 md:py-0 space-y-10 md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <NavLink key={idx} item={item} />
            ))}
          </ul>
          {/* Mobile navigation menu */}
          {isMobileNavOpen && (
            <ul className="items-center py-6 md:py-0 space-y-10 md:flex md:space-x-6 md:space-y-0 md:ml-12">
              {navigation.map((item, idx) => (
                <NavLink key={idx} item={item} />
              ))}
            </ul>
          )}
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;

// OLD

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [state, setState] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navRef = useRef(null);
//   const placeholderRef = useRef(null); // Ref for the placeholder element

//   const navigation = [
//     { title: "Home", path: "/" },
//     { title: "The Studio", path: "/about" },
//     { title: "Stages & Blackout", path: "/#" },
//     { title: "Studio Services", path: "/services" },
//     { title: "Post Production", path: "/#" },
//     { title: "Portfolios", path: "/portfolios" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setState(false);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // const handleLinkClick = () => {
//   //   setState(false); // Close the navigation when a link is clicked
//   //   const worksSection = document.getElementById("works");
//   //   if (worksSection) {
//   //     worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
//   //   }
//   // };

//   const handleLinkClick = (path) => {
//     setState(false); // Close the navigation when a link is clicked
//     if (path !== "/") {
//       const worksSection = document.getElementById("works");
//       if (worksSection) {
//         worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   };

//   return (
//     <>
//       {/* Placeholder element to mimic the height of the navbar */}
//       <div
//         ref={placeholderRef}
//         style={{ height: isScrolled ? navRef.current.offsetHeight : 0 }}
//       />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className={`border-b-2 border-white/10 z-50 ${
//           isScrolled ? "fixed top-0 left-0 right-0 bg-[#161513]" : ""
//         }`}
//         // className="border-b-2 border-white/10 z-50 fixed top-0 left-0 right-0 bg-[#161513]"
//       >
//         <nav
//           ref={navRef}
//           className="relative z-50 items-center border-b border-[#161513] pt-5 pb-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-16"
//         >
//           <div className="flex justify-between">
//             <Link href="/" className="text-[24px] font-bold text-white">
//               <span className="text-[#05B178]">Black</span>meetsworld
//             </Link>
//             <button
//               className="text-gray-500 outline-none md:hidden"
//               onClick={() => setState(!state)}
//             >
//               {state ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           <ul
//             className={`flex-1 justify-between mt-2 md:border-none border-b border-white/20  md:text-sm md:font-medium md:flex md:mt-0 ${
//               state
//                 ? "absolute inset-x-0 px-4 backdrop-blur-lg z-50 md:border-non md:static"
//                 : "hidden"
//             }`}
//           >
//             <div className="items-center py-6 md:py-0 space-y-10 md:flex md:space-x-6 md:space-y-0 md:ml-12">
//               {navigation.map((item, idx) => (
//                 <li
//                   // active link should be green  text-[#05B178]
//                   className="text-white hover:text-[#05B178] text-base"
//                   key={idx}
//                   // onClick={handleLinkClick}
//                   onClick={() => handleLinkClick(item.path)}
//                 >
//                   <Link href={item.path}>{item.title}</Link>
//                 </li>
//               ))}
//             </div>
//           </ul>
//         </nav>
//       </motion.div>
//     </>
//   );
// };

// export default Navbar;
