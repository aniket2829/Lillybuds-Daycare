"use client";

import Image from "next/image";
import Logo from "@/assets/LilyDaycare.svg";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { label: "About Us", path: "#about-us" },
  { label: "Daily Schedule", path: "#daily-schedule" },
  { label: "Contact Us", path: "#contact-us" },
];

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center py-4 px-4 mx-auto xl:max-w-[1280px] 2xl:max-w-[1490px]">
      <div className="flex items-center bg-customColor">
        <Image src={Logo} width={120} height={120} alt="LilybudsDaycare" className="mix-blend-darken" />
        <hr className="w-[2px] h-[6rem] bg-[#1992D8] hidden md:block" />
        <a className="ml-4 text-[#227AAD] hidden md:block" href="#home">
          Home
        </a>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((item) => (
          <a className="text-[#227AAD]" key={item.label} href={item.path}>
            {item.label}
          </a>
        ))}
        <a
          className="py-2 px-4 bg-[#FFF0F8] border-2 border-b-4 border-r-4 border-[#DA237F] text-[#DE0070] font-semibold"
          href="#contact-us"
        >
          Enroll Now
        </a>
      </div>
      <div className="p-4 hover:bg-gray-300 rounded-lg transition-all md:hidden">
        <Sheet
          open={sheetOpen}
          onOpenChange={() => setSheetOpen((prev) => !prev)}
        >
          <SheetTrigger>
            <Menu className="text-[#227AAD]" />
          </SheetTrigger>
          <SheetContent onCloseAutoFocus={(e) => e.preventDefault()}>
            <SheetHeader>
              <SheetTitle>Lily Buds Daycare</SheetTitle>
              <SheetDescription asChild>
                <div className="flex flex-col gap-6 pt-10">
                  <a onClick={() => setSheetOpen(false)} href="#home">
                    Home
                  </a>
                  {navLinks.map((item) => (
                    <a
                      onClick={() => setSheetOpen(false)}
                      href={item.path}
                      key={item.label}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
