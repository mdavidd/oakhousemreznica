"use client";
import React, { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineMenu } from "react-icons/ai";

// components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="pb-4 xl:pb-[50px] fixed top-0 left-0 right-0 z-50 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}
      <div className="bg-secondary-100 mb-2 xl:mb-[50px] xl:h-[50px] py-2 xl:py-0">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* phone & email */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
            >
              {/* phone */}
              <div className="flex items-center gap-2 text-white text-xs xl:text-base">
                <FaPhoneAlt />
                <span>+385(0) 99 287 6145</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-white text-xs xl:text-base">
                <IoMdMail />
                <span>dodati@dodatimail.com</span>
              </div>
            </motion.div>
            {/* socials */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block"
            >
              <Socials containerStyles="flex gap-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-4 xl:px-5">
        {/* logo */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="w-12 h-12 xl:w-32 xl:h-32"
        >
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              width={140}
              height={64}
              priority
              alt="Oak House Mreznica"
              className="w-full h-full object-contain"
            />
          </Link>
        </motion.div>
        {/* mobile nav trigger */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-2xl text-primary" />
        </div>
        {/* mobile nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        {/* desktop nav */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
