"use client";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import Text from "./About";
import Link from "next/link";
export default function Ticket() {
  const searchParams = useSearchParams();
  const name = decodeURIComponent(searchParams.get("name") || "");
  const email = decodeURIComponent(searchParams.get("email") || "");
  const avatar = decodeURIComponent(searchParams.get("avatar") || "");
  const ticketCount = decodeURIComponent(searchParams.get("ticketCount") || "");
  const ticketType = decodeURIComponent(searchParams.get("ticketType") || "");
  const request = decodeURIComponent(
    searchParams.get("request") ||
      "Nil ? Or the users sad story they write in there gets this whole space, Max of three rows"
  );
  return (
    <div className="w-full md:p-[1rem] mt-[2rem] md:px-[8.5rem]">
      <div className="bg-transparent rounded-3xl md:rounded-2xl border border-border w-full text-white py-3 px-[1.2rem] md:px-[2rem]">
        <div className="flex flex-col md:flex-row justify-between w-full font-jeju relative pb-2">
          <p className="text-2xl text-customGray">Ready</p>
          <p className="text-xs text-customGray font-bold">Step 3/3</p>
        </div>

        <div className="w-full h-[3px] bg-[#0E464F] rounded-b-xl overflow-hidden">
          <div className="h-full bg-underlineBorder w-full transition-all duration-300"></div>
        </div>

        <div className="space-y-5 my-6 text-left md:text-center">
          <h1 className="font-alatsi font-bold text-2xl md:text-3xl ">
            Your Ticket is Booked!
          </h1>
          <p className="font-roboto text-sm text-center md:text-md">
            Check your email for a copy or you can <b>download!</b>
          </p>
        </div>

        <div className="relative w-full ">

          <div className="flex justify-center items-center">
            <Image
              src="/Subtract.svg"
              alt="Subtract"
              className="w-full h-full absolute top-0 z-0 object-contain "
              width={1000}
              height={500}
            ></Image>
          </div>

          <div className="z-10 flex flex-col gap-[1.5rem] md:gap-[3rem] items-center top-[10px] mt-6 w-full ">
            <div>
              <div className="flex justify-center items-center z-10">
                <div className="bg-[#072b2f] border  border-underlineBorder px-5 max-w-[250px] md:max-w-[300px] z-10 max-h-[80%] rounded-xl flex flex-col items-center w-full justify-center py-6">
                  <h1 className="font-road-rage text-4xl md:text-5xl">
                    Techember Feat "25
                  </h1>
                  <div className="font-roboto my-2 text-sm text-nowrap md:text-md">
                    <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
                  </div>
                  <p className="md:text-md text-sm">
                    📆 March 15, 2025 | 7:00 PM
                  </p>

                  <div className="w-full flex justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-3  rounded-lg">
                    <img
                      src={decodeURIComponent(avatar)}
                      alt="Avatar"
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg border-underlineBorder border-[4px]"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-[#08343c] text-white p-3 sm:p-4 rounded-lg border-2 border-[#12464e]">
                    <div className="grid grid-cols-2 gap-0 text-xs sm:text-sm">
                      <div className="border-r-2 border-[#12464e] p-2 border-b-2">
                        <p className="font-semibold mb-1 sm:mb-2 text-gray-400 text-[10px] md:text-xs text-nowrap">
                          Enter your name
                        </p>
                        <p className="font-bold break-words truncate">{name}</p>
                      </div>
                      <div className="p-2 border-b-2 border-[#12464e]">
                        <p className="font-semibold mb-1 sm:mb-2 text-gray-400 text-[10px] text-nowrap md:text-xs">
                          Enter your email *
                        </p>
                        <p className="font-bold  truncate">
                          {email}
                        </p>
                      </div>
                      <div className="border-r-2 border-[#12464e] p-2">
                        <p className="font-semibold mb-1 sm:mb-2 text-gray-400">
                          Ticket Type:
                        </p>
                        <p className="font-bold uppercase">{ticketType}</p>
                      </div>
                      <div className="p-2">
                        <p className="font-semibold mb-1 sm:mb-2 text-gray-400">
                          Ticket for:
                        </p>
                        <p className="font-bold">{ticketCount}</p>
                      </div>
                      <div className="col-span-2 border-t-2 border-[#12464e] p-2">
                        <p className="text-gray-400">Special request?</p>
                        <p>{request}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="Bar Code.svg"
              alt=""
              className="md:w-2/5  mb-5 mt-3 mb:mt-0 md:mb-6 z-10 "
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-[1rem] rounded-3xl  text-center  w-full text-white mt-9  ">
          <Link href="/" className="bg-foreground border rounded-lg border-underlineBorder py-3 px-[4rem] w-full font-jeju text-nowrap">
            Book Another Ticket
          </Link>
          <button className="bg-underlineBorder py-3 px-[5rem] rounded-lg w-full font-jeju ">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
