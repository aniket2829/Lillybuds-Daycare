"use client";

import HeroImage from "@/assets/hero-section-img.png";
import { adlamDisplay } from "@/config/globals";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const getImageSize = (w: Window) => {
    if (w.innerWidth > 1536) {
      return 1000;
    } else if (w.innerWidth > 1280) {
      return 700;
    } else if (w.innerWidth > 1024) {
      return 600;
    } else if (w.innerWidth > 768) {
      return 500;
    } else if (w.innerWidth > 640) {
      return 400;
    }
    return 400;
  };

  const [imageDims, setImageDims] = useState<number>();

  useLayoutEffect(() => {
    const handleDims = () => {
      setImageDims(getImageSize(window));
    };

    window.addEventListener("resize", handleDims);

    return () => {
      window.removeEventListener("resize", handleDims);
    };
  }, []);

  return (
    <>
      <div id="home" className="flex flex-col items-center gap-8 md:hidden">
        <div className={`text-center text-[#DE0070] ${adlamDisplay.className}`}>
          <h1 className="text-4xl font-black">Lily Buds Daycare</h1>
          <p className="text-xl mt-4">
            A Safe And Nurturing Environment
            <br />
            For Your Little Ones
          </p>
        </div>
        <div>
          <Image
            src={HeroImage}
            height={400}
            width={400}
            alt="Lily Buds Daycare"
          />
        </div>
        <a
          className="py-2 px-4 bg-[#FFF0F8] border-2 border-b-4 border-r-4 border-[#DA237F] text-[#DE0070] font-semibold"
          href="#contact-us"
        >
          Enroll Now
        </a>
      </div>
      <div className="mx-auto xl:max-w-[1280px] 2xl:max-w-[1490px] p-16 hidden md:flex justify-between">
        <div className={`${adlamDisplay.className} text-[#DE0070]`}>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-nowrap text-[#1992d8]">
            Lily Buds <span className="text-[#DE0070]">Daycare</span>
          </h1>
          <p className="mt-8 text-xl xl:text-2xl text-nowrap">
            A Safe And Nurturing Environment
            <br />
            For Your Little Ones
          </p>
          <a
            className="py-2 px-4 bg-[#FFF0F8] border-2 border-b-4 border-r-4 border-[#DA237F] text-[#DE0070] font-semibold mt-8 inline-block"
            href="#contact-us"
          >
            Know more
          </a>
        </div>
        <Image
          src={HeroImage}
          height={imageDims}
          width={imageDims}
          alt="Lily Buds Daycare"
          className="relative right-20"
        />
      </div>
    </>
  );
}
