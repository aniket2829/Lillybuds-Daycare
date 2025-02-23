import Image from "next/image";
import hoursSectionImg from "@/assets/hours-section-img.png";

export default function HoursSection() {
  return (
    <>
      <p className="text-center text-2xl lg:text-3xl text-[#DE0070] bg-[#FFE4F2] py-5 lg:py-14 mt-56">
        Working Hours <br />{" "}
        <span className="font-bold">06:30 am to 05:00 pm</span>
      </p>
      <div>
        <Image
          src={hoursSectionImg}
          height={0}
          width={0}
          alt="Kids"
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </div>
      <p className="text-center text-2xl lg:text-3xl text-[#DE0070] bg-[#FFE4F2] py-5 lg:py-14 mb-24">
        For more queries
        <br /> <span className="font-bold">(604)-808-3231</span>
      </p>
    </>
  );
}
