"use client";

import Image from "next/image";
import contactUsSectionImg from "@/assets/contact-us-section-img.png";
import { adlamDisplay } from "@/config/globals";
import { FormEvent, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";

type FormStateType = {
  name: string ;
  phone: string | number;
  email: string;
  body: string;
};

export default function ContactUs() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<FormStateType>({
    name: "",
    phone: "",
    email: "",
    body: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toastClassNames = useMemo(
    () => "border-2 border-[#227AAD] bg-[#E0F4FF] text-[#227AAD]",
    [],
  );

  const toastErrorClassNames = useMemo(
    () => "bg-[#FFF0F8] border-2 border-[#DA237F] text-[#DE0070]",
    [],
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name) {
      toast({
        title: "Name cannot be empty",
        className: toastErrorClassNames,
      });
      return;
    }
    if (form.phone == 0) {
      toast({
        title: "Phone number cannot be empty",
        className: toastErrorClassNames,
      });
      return;
    }
    if (form.email.length == 0) {
      toast({
        title: "Email cannot be empty",
        className: toastErrorClassNames,
      });
      return;
    }
    if (form.body.length == 0) {
      toast({
        title: "Message cannot be empty",
        className: toastErrorClassNames,
      });
      return;
    }
    if (!validateEmail(form.email)) {
      toast({
        title: "Please enter a valid email",
        className: toastErrorClassNames,
      });
      return;
    }

    setIsSubmitting(true);

    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/contact-messages/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      },
    );

    toast({
      title: "Your message was sent",
      description: "Please! be patient, while we get back to you",
      className: toastClassNames,
    });

    setIsSubmitting(false);
  };

  return (
    <div
      id="contact-us"
      className="flex flex-col lg:flex-row justify-center items-center mt-40 gap-10 lg:gap-20 px-16"
    >
      <div className="p-8">
        <Image
          src={contactUsSectionImg}
          height={0}
          width={0}
          sizes="100%"
          alt="Kids"
        />
      </div>
      <div className="w-full max-w-md">
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <p
            className={`text-[#1992D8] ${adlamDisplay.className} text-3xl md:text-4xl`}
          >
            For More Queries
          </p>
          <input
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            className="block border-2 border-[#227AAD] rounded-xl p-2 w-full placeholder:text-center placeholder:text-[#227AAD]"
            type="text"
            placeholder="Enter Name"
          />
          <input
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="block border-2 border-[#227AAD] rounded-xl p-2 w-full placeholder:text-center placeholder:text-[#227AAD]"
            type="text"
            placeholder="Enter Phone number"
          />
          <input
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            className="block border-2 border-[#227AAD] rounded-xl p-2 w-full placeholder:text-center placeholder:text-[#227AAD]"
            type="email"
            placeholder="Enter Email"
          />
          <textarea
            value={form.body}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, body: e.target.value }))
            }
            rows={5}
            placeholder="Write Your Message"
            className="block border-2 border-[#227AAD] rounded-xl p-2 w-full placeholder:text-center placeholder:text-[#227AAD]"
          ></textarea>
          <button
            disabled={isSubmitting}
            className={`block w-full border-2 border-amber-600 p-2 bg-amber-200 text-amber-600 rounded-xl ${
              isSubmitting ? "opacity-50" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
