import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
export default function Header() {
  return (
    <div>
      <div className="bg-transparent rounded-xl md:rounded-2xl border border-border w-full text-white py-3 flex justify-between items-center px-5">
        {}
        <div className="flex items-end justify-end gap-2">
          <div className="p-2 bg-customBg rounded-xl border border-customBorder">
            <Image src="/Vector.svg" alt="Logo" width={20} height={20} />
          </div>
          <Image src="/ticz.svg" alt="Logo" width={45} height={45} />
        </div>
        {}
        <div className="hidden md:flex justify-between gap-10 text-customGray">
          <Link href="/" className="cursor-pointer font-jeju">Events</Link>
          <p className="cursor-pointer font-jeju">My Tickets</p>
          <Link href="/About" className="cursor-pointer font-jeju">About Project</Link>
        </div>
        {}
        <div className="flex items-center gap-4">
          <div className="flex bg-white justify-center items-center gap-2 p-2 rounded-md md:rounded-xl px-6 cursor-pointer">
            <span className="text-customBlack font-jeju">MY TICKETS</span>
            <FaArrowRightLong className="text-customBlack" />
          </div>
          {}
          {}
        </div>
      </div>
    </div>
  );
}
