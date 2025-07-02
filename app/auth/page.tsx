"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
const AuthPage: React.FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const iranPhoneRegex = /^09\d{9}$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setIsValid(iranPhoneRegex.test(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 👈 Prevent default form submission

    if (isValid) {
      alert(`Phone number ${phone} is valid and submitted.`);

      try {
        const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
        const data = await res.json();

        // Save user to localStorage
        localStorage.setItem("randomUser", JSON.stringify(data.results[0]));
        router.push("/dashboard");
      } catch (error) {
        console.error("Failed to fetch random user:", error);
      }
    } else {
      alert("Phone number is not valid.");
    }
  };

  return (
    <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
      <div className="bg-white h-2/5 w-1/4 rounded-xl shadow-[0px_0px_10px_black]">
        <form
          className="flex flex-col px-4 py-2 gap-y-3"
          onSubmit={handleSubmit}
        >
          <div className=" justify-center items-center flex text-3xl font-bold text-blue-400 py-6 font-serif">
            Login Page
          </div>

          <label className="text-2xl px-1 py-1 flex flex-col">
            <span className="font-serif font-bold mb-2 text-blue-400">
              Number:{" "}
            </span>
            <div className="flex justify-start px-2 items-center border rounded-lg gap-x-2 py-2">
              <span className="text-gray-600 border-r-2 px-2">+98</span>
              <input
                type="text"
                placeholder="09XX XXX XXXX"
                value={phone}
                onChange={handleChange}
                className=" focus:outline-0 overflow-hidden w-full"
              ></input>
            </div>
            {!isValid && (
              <span className="text-red-400 text-lg font-light px-2">
                Number is not valid
              </span>
            )}
            {isValid && (
              <span className="text-green-400 text-lg font-light px-2">
                Number is valid
              </span>
            )}
          </label>

          <button
            className={`flex flex-col justify-center items-center py-2 w-full rounded-xl  my-10
                ${
                  isValid
                    ? "bg-amber-200  hover:bg-amber-300 hover:cursor-pointer"
                    : "bg-amber-100 text-gray-400 "
                }
                `}
            type="submit"
          >
            <div className=" font-bold text-2xl font-serif">Login</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
