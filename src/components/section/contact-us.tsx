"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState<string>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const isValidate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !formData.body) {
      setErrors("Input Field Required!");
      return true;
    }

    if (!regex.test(formData.email)) {
      setErrors("Please Enter a Valid Email!");
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = await fetch(
      (process.env.NEXT_PUBLIC_BACKEND_URL || "") + "/api/contacts/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          body: formData.body,
        }),
      },
    );

    if (data.status == 201) {
      toast.success("Thanks for Contacting us", {
        autoClose: 5000,
        theme: "colored",
        className: "custom-toast custom-toast-success",
      });
      setFormData({ email: "", body: "" });
    }

    if (isValidate()) {
      toast.error(errors, {
        autoClose: 5000,
        theme: "colored",
        className: "custom-toast custom-toast-error",
      });
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-16 px-8 max-w-4xl mx-auto space-y-12 rounded-lg"
    >
      <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-gray-700">
            <FaPhoneAlt className="w-6 h-6 text-blue-950" />
            <p className="text-lg font-semibold">(123) 456 - 7890</p>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <CiMail className="w-6 h-6 text-blue-950" />
            <p className="text-lg font-semibold">info@lilybuds.ca</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <CiMail className="w-6 h-6 text-blue-950" />
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-4 rounded-lg w-80"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/mail_second.svg"
              alt="Mail icon"
              width={24}
              height={24}
            />
            <textarea
              name="body"
              placeholder="Enter Your Message"
              className="border border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-4 rounded-lg w-full h-32 resize-none"
              value={formData.body}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="py-3 px-12 text-lg font-semibold rounded-lg bg-blue-950 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 transition-all duration-300 shadow-md hover:shadow-lg"
          type="submit"
        >
          Send
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="custom-toast-container"
      />
    </form>
  );
}
