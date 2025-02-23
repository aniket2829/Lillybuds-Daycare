import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/hero_section.png"
        alt="Hero Section"
        layout="fill"
        className="object-cover"
      />
      <div className=" flex flex-col justify-center p-6 absolute bg-blue-950 top-24 left-4 text-white font-semibold  rounded-lg w-64 h-64 md:w-72 md:h-72 md:p-12 md:top-48 md:left-48">
        <h1 className="text-2xl pb-3 md:text-3xl md:pb-5">Lily Buds</h1>
        <h6 className="text-base pb-3 md:text-lg md:pb-5">
          A Safe and Nurturing Environment for Your Little Ones
        </h6>
        <a
          href="#contact-us"
          className="bg-yellow-300  text-black font-medium rounded-lg px-3 py-2 text-center"
        >
          Enroll now
        </a>
      </div>
    </div>
  );
}
