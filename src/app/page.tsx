"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { IconLists } from "@/constant/IconList";
import Header from "./components/Header";

import MobileThreeD from "@/images/three-d-phone.png";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Or return a placeholder skeleton

  return (
    <div className="bg-[#010101] min-h-screen text-white font-figtree">
      <Header />

      <section className="pb-[116px] max-[767px]:pb-[80px]">
        <div className="container flex justify-between max-[1000px]:items-center max-[767px]:flex-col-reverse">
          <div className="max-w-[472px] pt-[87px] flex-1 max-[767px]:pt-0 max-[767px]:text-center">
            <h1 className="text-[35px] leading-[42px] font-bold max-[480px]:text-[25px] max-[480px]:leading-[30px]">
              Want to Turn Social Media Into a Profitable Career?
              <span className="text-with-shadow text-[#00E7F9]">
                Discover your way to success with Fametonic:
              </span>
            </h1>
            <div className="max-[767px]:text-left max-[767px]:space-y-[10px] space-y-[13px] mt-[16px]">
              <p className="font-semibold text-[16px] leading-[22px]">
                ✨ Start growing your influence right away—no waiting required!
              </p>
              <p className="font-semibold text-[16px] leading-[22px]">
                ✨ Create viral TikToks and Reels step by step with
                easy-to-follow lessons
              </p>
              <p className="font-semibold text-[16px] leading-[22px]">
                ✨ Use a Personal AI Worker to boost your content
              </p>
              <p className="font-semibold text-[16px] leading-[22px]">
                ✨ Learn from expert-led courses designed for aspiring
                influencers
              </p>
            </div>
            <div className="flex flex-col max-[767px]:flex-col-reverse">
              <div className="mt-8 max-w-[313px] w-full max-[767px]:mx-auto">
                <a
                  data-testid="home-start"
                  className="flex gap-2.5 justify-center items-center px-10 py-2 bg-[#F41D5E] rounded-xl w-full drop-shadow-[2px_2px_5px_rgba(0,231,249)]"
                  href="/"
                >
                  <p className="font-bold uppercase flex items-center gap-2">
                    get started <span>{IconLists.rightWhiteArrow}</span>
                  </p>
                </a>
                <p className="text-[12px] leading-[16px] text-white text-center mt-[10px]">
                  1-minute quiz for personalized Insights
                </p>
              </div>
              <div className="w-full space-y-3 mt-8 text-[#ABABAB] font-medium">
                <p className="text-[12px] leading-[14px]">
                  By clicking "Get Started", you agree with{" "}
                  <a
                    className="hover:text-[#F41D5E] transition-all duration-300"
                    href="//terms-of-service"
                  >
                    Terms and Conditions
                  </a>
                  ,{" "}
                  <a
                    className="hover:text-[#F41D5E] transition-all duration-300"
                    href="/"
                  >
                    Privacy policy
                  </a>
                  ,{" "}
                  <a
                    className="hover:text-[#F41D5E] transition-all duration-300"
                    href="/"
                  >
                    Subscription Terms
                  </a>
                </p>
                <p className="text-[10px] leading-[12px]">
                  Fametonic {new Date().getFullYear()} ©All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt="Fametonic"
              loading="lazy"
              width={600}
              height={679}
              src={MobileThreeD}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
