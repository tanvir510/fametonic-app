import Image from "next/image";

import Logo from "@/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="w-full bg-gradient-to-r from-[#FC004E] to-[#10CBE0] text-white text-center px-5 py-3 font-figtree max-[767px]:py-5">
        <h3 className="text-[22px] font-semibold max-[767px]:text-[16px] leading-[19px]">
          <span className="">
            🚀{" "}
            <span className="text-[#00E7F9] font-black">
              FRESH BEGINNINGS SALE:
            </span>
          </span>
          <span> Extra 25% OFF, Limited Spots - start your journey today!</span>
        </h3>
      </div>
      <div className="text-[#A9A9A9] font-figtree pt-[35px] max-[767px]:pt-[16px]">
        <div className="container">
          <div className="flex justify-between items-start">
            {/* Logo Section */}
            <div className="hidden w-[42px] h-[40px] max-[767px]:block"></div>
            <a href="/">
              <Image
                alt="Logo"
                src={Logo}
                width={173}
                height={74}
                className="w-[173px] h-[74px] max-[767px]:w-[107px] max-[767px]:h-[46px]"
                loading="lazy"
                decoding="async"
              />
            </a>

            {/* Navigation Section */}
            <nav className="max-[767px]:hidden">
              <ul className="flex gap-10">
                <li className="text-[18px] leading-[22px] font-semibold hover:text-white">
                  <a href="/">About us</a>
                </li>
                <li className="text-[18px] leading-[22px] font-semibold hover:text-white">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>

            {/* Hamburger Button Section for Mobile */}
            <div className={`hidden max-[767px]:flex`}>
              <button
                className={` ${
                  isOpen
                    ? " hamburger hamburger--squeeze hidden max-[767px]:block  is-active"
                    : "hamburger hamburger--squeeze hidden max-[767px]:block "
                }`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-50 transition-all duration-300 w-full h-[calc(100svh-110px)] max-[650px]:h-[calc(100svh-100px)] left-0 top-[128px] max-[680px]:top-[154px] max-[373px]:top-[180px] bg-[#010101] ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
        }`}
      >
        <div className="container min-h-full">
          <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex flex-col text-center gap-y-[34px]">
              <li>
                <a
                  className="text-[18px] leading-[22px] font-semibold text-[#A9A9A9] transition-all duration-300"
                  href="//about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-[18px] leading-[22px] font-semibold text-[#A9A9A9] transition-all duration-300"
                  href="//contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
