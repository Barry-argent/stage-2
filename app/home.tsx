"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [selectedTicket, setSelectedTicket] = useState("free");
  const [ticketCount, setTicketCount] = useState(1);

  const tickets = [
    { id: "free", label: "Free", price: 0, access: "REGULAR ACCESS" },
    { id: "vip", label: "$150", price: 150, access: "VIP ACCESS" },
    { id: "vip2", label: "$150", price: 150, access: "VIP ACCESS" },
  ];

  return (
    <div className="w-full md:p-[1rem] mt-[2rem] md:px-[8.5rem]">
      <div className="bg-transparent rounded-3xl md:rounded-2xl border border-border w-full text-white py-3 px-[1.2rem] md:px-[2rem]">
        <div className="flex flex-col md:flex-row justify-between w-full font-jeju relative pb-2">
          <p className="text-2xl text-customGray">Ticket Selection</p>
          <p className="text-xs text-customGray font-bold">Step 1/3</p>
        </div>

        <div className="w-full h-[3px] bg-[#0E464F] rounded-b-xl overflow-hidden">
          <div className="h-full bg-underlineBorder w-1/3 transition-all duration-300"></div>
        </div>

        <div className=" bg-foreground mt-6 rounded-3xl md:rounded-2xl text-center border border-border w-full text-white py-3 px-[1rem] md:px-[2rem]">
          <h1 className="font-road-rage text-4xl md:text-8xl">
            Techember Feat "25
          </h1>
          <div className="font-roboto my-5 text-md">
            <p>Join us for an unforgettable experience at</p>
            <p>[Event name!] Secure your spot now.</p>
          </div>
          <p className="text-md">
            📍[Event Location] <br className="md:hidden block" /> || March 15,
            2025 | 7:00 PM
          </p>
        </div>

        <div className="w-full h-[3px] bg-[#0E464F] rounded-b-xl overflow-hidden my-8"></div>

        <p className="text-customGray font-roboto text-left">
          Select Ticket Type:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-foreground  rounded-3xl md:rounded-2xl text-center border border-border w-full text-white py-3 px-[1rem] md:px-[1rem]">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`border hover:bg-[#2C545B] hover:border-tertiary border-underlineBorder rounded-xl p-4 flex flex-col text-left cursor-pointer transition-all duration-300 ${
                selectedTicket === ticket.id ? "bg-[#0E464F]" : "bg-transparent"
              }`}
              onClick={() => setSelectedTicket(ticket.id)}
            >
              <div className="text-white text-xl mb-1 font-bold font-roboto">
                {ticket.label}
              </div>
              <div className="mt-1">
                <div className="text-sm text-gray-300">{ticket.access}</div>
                <div className="text-xs text-teal-100 mt-1">20/52</div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-9">
          <p className="text-customGray font-roboto text-left">
            Number of Tickets
          </p>
          <select
            name="ticket"
            value={ticketCount}
            onChange={(e) => setTicketCount(Number(e.target.value))}
            className="w-full bg-foreground border border-border rounded-lg p-3 outline-none"
          >
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[1rem] text-center w-full text-white">
          <button className="bg-foreground border rounded-lg border-underlineBorder py-3 px-[4rem] md:w-1/2 w-full">
            Cancel
          </button>
          <Link
            href={{
              pathname: "/Form",
              query: { ticketType: selectedTicket, ticketCount },
            }}
            className="bg-underlineBorder py-3 px-[5rem] rounded-lg md:w-1/2 w-full"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
