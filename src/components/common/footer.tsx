import Image from "next/image";
import Logo from "@/assets/LilyDaycare.svg";

export default function Footer() {
  return (
    <div>
      <div className="flex p-10 justify-between max-w-lg md:max-w-3xl mx-auto mt-20">
        <div>
          <h3 className="text-[#DA237F] text-xl md:text-2xl mb-4">
            Contact Us
          </h3>
          <table className="hidden md:table">
            <tbody className="text-[#227AAD]">
              <tr>
                <td className="p-2">Email</td>
                <td className="p-2">info@lilybudsdaycare.ca</td>
              </tr>
              <tr>
                <td className="p-2">Phone no.</td>
                <td className="p-2">778-838-4848 , 604-808-3231</td>
              </tr>
            </tbody>
          </table>
          <div className="text-[#227AAD] space-y-3 md:hidden">
            <p>info@lilybudsdaycare.ca</p>
            <p>604-808-3231</p>
          </div>
        </div>
        <div>
          <Image
            src={Logo}
            width={120}
            height={120}
            alt="LilybudsDaycare"
            className="mix-blend-darken"
          />
        </div>
      </div>
      <p className="text-center pb-8 text-[#227AAD]">
        {"© 2024 Lilly"} Buds Daycare. All rights reserved.
      </p>
    </div>
  );
}
